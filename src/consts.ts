// 사이트 전체에서 쓰는 기본 정보
export const SITE_TITLE = '개발 일지';
export const SITE_DESCRIPTION = '배우고 만든 것들을 기록하는 블로그';
export const AUTHOR = 'ksc';

// base 경로(예: /blog/)를 붙여서 링크를 만들어 주는 함수
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
