# 개발 일지 블로그

[Astro](https://astro.build)로 만든 정적 블로그입니다. `main`에 푸시하면 GitHub Actions가 GitHub Pages로 자동 배포합니다.

## 기능

- 마크다운 글쓰기, 코드 하이라이트(라이트/다크) + 복사 버튼
- 자동 목차, 읽는 시간, 이전 글 / 다음 글
- 초안(`draft`)과 예약 발행(미래 `pubDate`)
- 대/중/소 계층 카테고리, 태그
- 검색 (서버 없이 브라우저에서 동작)
- 댓글·공감 (giscus, 설정 필요)
- SEO: sitemap, RSS, Open Graph

## 실행

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 에 결과물 생성
npm run preview  # 빌드 결과 미리보기
```

## 새 글 쓰기

`src/content/blog/` 에 마크다운 파일을 추가합니다. 파일 이름이 주소가 됩니다. (`my-post.md` → `/blog/my-post/`)

```md
---
title: '글 제목'
description: '한 줄 요약'
pubDate: '2026-10-01T09:00:00+09:00'
category: '개발/Astro'  # '/'로 나누면 하위 카테고리. 생략하면 '일반'
tags: ['태그1', '태그2']
draft: false            # true면 초안: 블로그에 올라가지 않음
# updatedDate: '2026-10-02'   # 수정한 날짜 (선택)
# image: '/images/cover.png'  # 공유 미리보기 이미지, public 폴더 기준 (선택)
---

본문...
```

- **예약 발행**: `pubDate`를 미래 시간으로 적고 푸시하면, 그 시간 이후 매시 정각 자동 배포 때 공개됩니다. 시간은 `+09:00`(한국 시간)까지 적어 주세요.
- **초안·예약 글 미리보기**: `npm run dev`에서는 `초안`, `예약` 표시와 함께 보입니다.
- **이미지**: `public/images/`에 넣고 본문에서 `![설명](/blog-basic-AIGJ_01-001-firstblog/images/파일.png)` 처럼 쓰거나, 글과 같은 폴더에 두고 `![설명](./파일.png)`로 씁니다.

## 댓글·공감 켜기 (giscus)

1. 저장소 **Settings → General → Features**에서 **Discussions**를 켭니다.
2. https://github.com/apps/giscus 에서 앱을 이 저장소에 설치합니다.
3. https://giscus.app 에서 저장소 이름을 입력하고, Discussion 카테고리를 고르면 아래쪽 코드에 `data-repo-id`, `data-category-id`가 나옵니다.
4. 그 값을 `src/consts.ts`의 `GISCUS`에 채우고 푸시합니다.

## 폴더 구조

| 경로 | 역할 |
| --- | --- |
| `src/content/blog/` | 블로그 글 (마크다운) |
| `src/pages/` | 페이지. 파일 경로가 곧 주소 |
| `src/layouts/` | 공통 레이아웃 (SEO 태그 포함) |
| `src/components/` | 헤더·사이드바·댓글 등 컴포넌트 |
| `src/lib/posts.ts` | 글 목록·카테고리·태그 계산 |
| `src/consts.ts` | 블로그 이름, 작성자, 댓글 설정 |
| `src/styles/global.css` | 전체 스타일 |
| `.github/workflows/deploy.yml` | GitHub Pages 자동 배포 (푸시 + 매시 정각) |

## 배포 설정 (처음 한 번)

저장소 **Settings → Pages → Build and deployment → Source** 를 **GitHub Actions** 로 바꿔 주세요.
