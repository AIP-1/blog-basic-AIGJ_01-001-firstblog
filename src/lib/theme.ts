// 카테고리별 색상과 아이콘. 처음 보는 카테고리는 이름으로 색을 골라 줍니다.
import { categoryParts, type Post } from './posts';

const PALETTE = ['#f4c152', '#6aa7e8', '#a99bd8', '#f0937a', '#8cc28a', '#e98fb4'];

const KNOWN: Record<string, { color: string; icon: string }> = {
  일상: { color: '#f4c152', icon: 'smile' },
  여행: { color: '#6aa7e8', icon: 'plane' },
  공부: { color: '#a99bd8', icon: 'book' },
  개발: { color: '#6aa7e8', icon: 'code' },
  기타: { color: '#f0937a', icon: 'star' },
};

export function categoryStyle(name: string) {
  if (KNOWN[name]) return KNOWN[name];
  const hash = [...name].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
  return { color: PALETTE[hash % PALETTE.length], icon: 'folder' };
}

// 글의 최상위 카테고리 이름 ('개발/Astro' → '개발')
export function topCategory(post: Post) {
  return categoryParts(post.data.category)[0] ?? '일반';
}
