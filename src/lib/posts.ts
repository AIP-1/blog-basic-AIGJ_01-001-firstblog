import { getCollection } from 'astro:content';

// 초안(draft: true)을 빼고 최신순으로 정렬한 글 목록
export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

// 카테고리 이름과 글 개수 목록 (많은 순)
export async function getCategories() {
  const posts = await getPosts();
  const counts = new Map<string, number>();
  for (const post of posts) {
    const c = post.data.category;
    counts.set(c, (counts.get(c) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}
