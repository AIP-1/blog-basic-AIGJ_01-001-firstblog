// 검색용 데이터 (/search.json). 빌드할 때 모든 글의 제목·요약·본문을 모아 둡니다.
import { getPosts, plainText } from '../lib/posts';
import { url } from '../consts';

export async function GET() {
  const posts = await getPosts();
  const data = posts.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    category: post.data.category,
    tags: post.data.tags,
    date: post.data.pubDate.toISOString(),
    url: url(`blog/${post.id}/`),
    body: plainText(post.body),
  }));
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
