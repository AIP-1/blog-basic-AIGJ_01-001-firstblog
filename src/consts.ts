// 사이트 전체에서 쓰는 기본 정보
export const SITE_TITLE = '개발 일지';
export const SITE_DESCRIPTION = '배우고 만든 것들을 기록하는 블로그';
export const AUTHOR = 'ksc';

// 프로필 사진 (public 폴더 기준). public/profiles/1~6.webp 중에서 고를 수 있어요.
// 비우면('') 코드로 그린 마스코트가 나옵니다.
export const PROFILE_IMAGE = '/profiles/2.webp';

// 화면 곳곳의 손글씨 문구 (줄바꿈은 \n)
export const GREETING = '안녕!\n오늘도 반가워요';
export const HERO = {
  // public 폴더 기준 배너 그림 경로. 비우면('') 코드로 그린 기본 일러스트와 아래 문구가 나옵니다.
  image: '/mainbanner.webp',
  left: '오늘도\n조금은 서툴지만\n그래도 괜찮아 :)',
  right: '좋은 건\n더 많이\n행복하자',
};
export const NOTES = {
  left: '조금 느려도 괜찮아.\n지금도 충분히\n잘하고 있어',
  right: '좋은 날도\n지나가지만\n좋은 날은\n다시 온다',
};

// 댓글·공감(giscus) 설정
// https://giscus.app 에서 저장소를 입력하면 아래 값들을 알려줍니다.
// repoId, categoryId가 비어 있으면 댓글 영역은 표시되지 않습니다.
export const GISCUS = {
  repo: 'AIP-1/blog-basic-AIGJ_01-001-firstblog',
  repoId: '',
  category: 'Comments',
  categoryId: '',
};

// base 경로(예: /blog/)를 붙여서 링크를 만들어 주는 함수
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
