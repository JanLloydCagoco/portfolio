import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

const routes = ["", "/projects", "/experiences", "/stack", "/certifications", "/inquiry"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${siteUrl}${route}` }));
}
