import { GitHubContributionData, GitHubContributionDay } from "@/types";

const DEFAULT_USERNAME = process.env.GITHUB_USERNAME || "JanLloydCagoco";

interface PublicApiDay {
  date: string;
  count: number;
  level: number;
}

interface PublicApiResponse {
  total?: {
    [key: string]: number | undefined;
    lastYear?: number;
  };
  contributions?: PublicApiDay[];
}

export async function fetchGitHubContributions(
  username: string = DEFAULT_USERNAME,
  year: number = new Date().getFullYear()
): Promise<GitHubContributionData> {
  const token = process.env.GITHUB_TOKEN;

  if (token) {
    try {
      const graphQLData = await fetchFromGraphQL(username, token, year);
      if (graphQLData) return graphQLData;
    } catch (err) {
      console.warn("GitHub GraphQL fetch failed, falling back to public API:", err);
    }
  }

  try {
    const publicData = await fetchFromPublicApi(username, year);
    if (publicData) return publicData;
  } catch (err) {
    console.warn("GitHub public contributions API fetch failed:", err);
  }

  return getEmptyContributions(username, year);
}

async function fetchFromGraphQL(
  username: string,
  token: string,
  year: number
): Promise<GitHubContributionData | null> {
  const from = `${year}-01-01T00:00:00Z`;
  const to = `${year}-12-31T23:59:59Z`;

  const query = `
    query($login: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $login) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                contributionLevel
                date
                weekday
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "Portfolio-App",
    },
    body: JSON.stringify({ query, variables: { login: username, from, to } }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`GitHub GraphQL API responded with status ${res.status}`);
  }

  const json = await res.json();
  const calendar = json?.data?.user?.contributionsCollection?.contributionCalendar;
  if (!calendar) return null;

  const levelMap: Record<string, 0 | 1 | 2 | 3 | 4> = {
    NONE: 0,
    FIRST_QUARTILE: 1,
    SECOND_QUARTILE: 2,
    THIRD_QUARTILE: 3,
    FOURTH_QUARTILE: 4,
  };

  interface GraphQLDay {
    contributionCount: number;
    contributionLevel: string;
    date: string;
    weekday?: number;
  }

  const weeks: GitHubContributionDay[][] = calendar.weeks.map(
    (w: { contributionDays: GraphQLDay[] }) => {
      const dayMap = new Map<number, GraphQLDay>();
      for (const d of w.contributionDays) {
        const dayOfWeek =
          typeof d.weekday === "number"
            ? d.weekday
            : new Date(d.date + "T00:00:00Z").getUTCDay();
        dayMap.set(dayOfWeek, d);
      }

      const fullWeek: GitHubContributionDay[] = [];
      for (let i = 0; i < 7; i++) {
        const existing = dayMap.get(i);
        if (existing) {
          fullWeek.push({
            date: existing.date,
            count: existing.contributionCount,
            level: levelMap[existing.contributionLevel] ?? 0,
          });
        } else {
          fullWeek.push({
            date: "",
            count: 0,
            level: -1,
          });
        }
      }
      return fullWeek;
    }
  );

  return {
    username,
    year,
    totalContributions: calendar.totalContributions ?? 0,
    weeks,
    updatedAt: new Date().toISOString(),
  };
}

async function fetchFromPublicApi(
  username: string,
  year: number
): Promise<GitHubContributionData | null> {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=${year}`,
    {
      headers: {
        "User-Agent": "Portfolio-App",
      },
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error(`Public GitHub contributions API returned ${res.status}`);
  }

  const json: PublicApiResponse = await res.json();
  const rawDays = json.contributions || [];

  if (rawDays.length === 0) return null;

  let totalContributions = 0;
  const yearKey = String(year);
  if (json.total && typeof json.total[yearKey] === "number") {
    totalContributions = json.total[yearKey]!;
  } else if (json.total && typeof json.total.lastYear === "number") {
    totalContributions = json.total.lastYear;
  } else {
    totalContributions = rawDays.reduce((acc, curr) => acc + (curr.count || 0), 0);
  }

  const weeks: GitHubContributionDay[][] = [];
  const firstDate = new Date(rawDays[0].date + "T00:00:00Z");
  const firstDayOfWeek = firstDate.getUTCDay();

  let currentWeek: GitHubContributionDay[] = [];

  // Align starting week (Sunday = 0)
  for (let i = 0; i < firstDayOfWeek; i++) {
    currentWeek.push({
      date: "",
      count: 0,
      level: -1,
    });
  }

  for (const day of rawDays) {
    currentWeek.push({
      date: day.date,
      count: day.count,
      level: (Math.min(Math.max(day.level, 0), 4) as 0 | 1 | 2 | 3 | 4),
    });

    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  // Pad the tail of the final week
  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push({
        date: "",
        count: 0,
        level: -1,
      });
    }
    weeks.push(currentWeek);
  }

  return {
    username,
    year,
    totalContributions,
    weeks,
    updatedAt: new Date().toISOString(),
  };
}

function getEmptyContributions(username: string, year: number): GitHubContributionData {
  const weeks: GitHubContributionDay[][] = [];
  for (let w = 0; w < 53; w++) {
    const days: GitHubContributionDay[] = [];
    for (let d = 0; d < 7; d++) {
      days.push({
        date: "",
        count: 0,
        level: 0,
      });
    }
    weeks.push(days);
  }

  return {
    username,
    year,
    totalContributions: 0,
    weeks,
    updatedAt: new Date().toISOString(),
  };
}
