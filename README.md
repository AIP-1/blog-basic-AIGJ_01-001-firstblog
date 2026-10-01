# 개발 일지 블로그

[Astro](https://astro.build)로 만든 정적 블로그입니다. `main`에 푸시하면 GitHub Actions가 GitHub Pages로 자동 배포합니다.

## 실행

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 에 결과물 생성
npm run preview  # 빌드 결과 미리보기
```

## 새 글 쓰기

`src/content/blog/` 에 마크다운 파일을 추가합니다.

```md
---
title: '글 제목'
description: '한 줄 요약'
pubDate: '2026-10-01'
tags: ['태그1', '태그2']
draft: false   # true면 목록에서 숨김
---

본문...
```

## 폴더 구조

| 경로 | 역할 |
| --- | --- |
| `src/content/blog/` | 블로그 글 (마크다운) |
| `src/pages/` | 페이지. 파일 경로가 곧 주소 |
| `src/layouts/` | 공통 레이아웃 |
| `src/components/` | 헤더·푸터 등 컴포넌트 |
| `src/styles/global.css` | 전체 스타일 |
| `.github/workflows/deploy.yml` | GitHub Pages 자동 배포 |

## 배포 설정 (처음 한 번)

저장소 **Settings → Pages → Build and deployment → Source** 를 **GitHub Actions** 로 바꿔 주세요.
