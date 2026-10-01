import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

// 아직 발행 시간이 안 된 글(예약 발행)인지
export function isScheduled(post: Post) {
  return post.data.pubDate.valueOf() > Date.now();
}

// 발행된 글만 최신순으로 정렬한 목록
// - draft: true 인 글과 예약 발행 글은 빠집니다.
// - 단, 로컬(npm run dev)에서는 미리 볼 수 있도록 모두 보여줍니다.
export async function getPosts() {
  const posts = await getCollection(
    'blog',
    (post) => import.meta.env.DEV || (!post.data.draft && !isScheduled(post)),
  );
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

// 카테고리 트리의 한 칸. path는 '개발/Astro' 처럼 상위부터 이어 붙인 전체 경로입니다.
export interface CategoryNode {
  name: string;
  path: string;
  count: number; // 하위 카테고리 글까지 포함한 개수
  children: CategoryNode[];
}

// category: '개발/Astro/기초' 처럼 '/'로 나눠 적으면 대/중/소 계층이 됩니다.
export function categoryParts(category: string) {
  return category.split('/').map((s) => s.trim()).filter(Boolean);
}

// 글이 해당 카테고리(또는 그 하위 카테고리)에 속하는지
export function inCategory(post: Post, path: string) {
  const c = categoryParts(post.data.category).join('/');
  return c === path || c.startsWith(path + '/');
}

// 모든 글의 카테고리를 모아 트리로 만듭니다. (글 많은 순)
export async function getCategoryTree() {
  const posts = await getPosts();
  const root: CategoryNode[] = [];
  for (const post of posts) {
    let level = root;
    let path = '';
    for (const name of categoryParts(post.data.category)) {
      path = path ? `${path}/${name}` : name;
      let node = level.find((n) => n.name === name);
      if (!node) {
        node = { name, path, count: 0, children: [] };
        level.push(node);
      }
      node.count++;
      level = node.children;
    }
  }
  const sort = (nodes: CategoryNode[]) => {
    nodes.sort((a, b) => b.count - a.count);
    nodes.forEach((n) => sort(n.children));
  };
  sort(root);
  return root;
}

// 트리를 펼쳐서 모든 카테고리 경로 목록으로
export function flattenTree(nodes: CategoryNode[]): CategoryNode[] {
  return nodes.flatMap((n) => [n, ...flattenTree(n.children)]);
}

// 태그 이름과 글 개수 (많은 순)
export async function getTags() {
  const posts = await getPosts();
  const counts = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.data.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

// 마크다운 기호를 걷어낸 본문 텍스트 (검색, 읽는 시간 계산용)
export function plainText(markdown = '') {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`~|-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// 대략적인 읽는 시간(분). 한글 기준 1분에 500자 정도로 계산합니다.
export function readingTime(markdown = '') {
  const chars = plainText(markdown).replace(/\s/g, '').length;
  return Math.max(1, Math.round(chars / 500));
}
