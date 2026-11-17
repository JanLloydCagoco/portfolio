import React from "react";
import { TechCategory, TechStack } from "@/types";
import {
  ReactIcon,
  NextjsIcon,
  TypeScriptIcon,
  PhpIcon,
  LaravelIcon,
  FlutterIcon,
  NodejsIcon,
  TailwindIcon,
  Html5Icon,
  Css3Icon,
  GitIcon,
  GitHubIcon,
  MySqlIcon,
  VercelIcon,
  ChatGptIcon,
  ClaudeCodeIcon,
  AntigravityIcon,
} from "@/frontend/components/icons/TechIcons";

export const techCategories: TechCategory[] = [
  {
    name: "Languages & Frameworks",
    stacks: [
      { name: "React", icon: <ReactIcon /> },
      { name: "Next.js", icon: <NextjsIcon /> },
      { name: "TypeScript", icon: <TypeScriptIcon /> },
      { name: "PHP", icon: <PhpIcon /> },
      { name: "Laravel", icon: <LaravelIcon /> },
      { name: "Flutter", icon: <FlutterIcon /> },
      { name: "Node.js", icon: <NodejsIcon /> },
    ],
  },
  {
    name: "Design & Styling",
    stacks: [
      { name: "Tailwind CSS", icon: <TailwindIcon /> },
      { name: "HTML5", icon: <Html5Icon /> },
      { name: "CSS3", icon: <Css3Icon /> },
    ],
  },
  {
    name: "Tools & Cloud",
    stacks: [
      { name: "Git", icon: <GitIcon /> },
      { name: "GitHub", icon: <GitHubIcon /> },
      { name: "MySQL", icon: <MySqlIcon /> },
      { name: "Vercel", icon: <VercelIcon /> },
    ],
  },
  {
    name: "AI & Developer Tools",
    stacks: [
      { name: "ChatGPT", icon: <ChatGptIcon /> },
      { name: "Claude Code", icon: <ClaudeCodeIcon /> },
      { name: "Antigravity", icon: <AntigravityIcon /> },
    ],
  },
];

export const allTechStacks: TechStack[] = techCategories.flatMap(
  (c) => c.stacks
);
