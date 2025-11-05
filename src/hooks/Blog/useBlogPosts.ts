"use client";

import { useTranslation } from "react-i18next";

export interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
}

export const useBlogPosts = () => {
  const { t } = useTranslation("blog");

  const blogPosts = t("posts", { returnObjects: true }) as BlogPost[];

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return {
    t,
    blogPosts,
    featuredPost,
    regularPosts,
  };
};
