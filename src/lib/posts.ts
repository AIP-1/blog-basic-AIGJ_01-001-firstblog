import { getCollection } from 'astro:content';

// 초안(draft: true)을 빼고 최신순으로 정렬한 글 목록
export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
