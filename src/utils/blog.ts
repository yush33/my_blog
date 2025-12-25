import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  pubDate: Date;
  tags: string[];
  category?: string;
  body: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog');
  return posts
    .map((post) => ({
      id: post.id,
      slug: post.slug,
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      tags: post.data.tags || [],
      category: post.data.category,
      body: post.body,
    }))
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
}

export function getAllTags(posts: BlogPost[]): string[] {
  const tagSet = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

export function getAllCategories(posts: BlogPost[]): string[] {
  const categorySet = new Set<string>();
  posts.forEach((post) => {
    if (post.category) {
      categorySet.add(post.category);
    }
  });
  return Array.from(categorySet).sort();
}

export function filterPostsByTag(posts: BlogPost[], tag: string): BlogPost[] {
  return posts.filter((post) => post.tags.includes(tag));
}

export function filterPostsByCategory(posts: BlogPost[], category: string): BlogPost[] {
  return posts.filter((post) => post.category === category);
}


