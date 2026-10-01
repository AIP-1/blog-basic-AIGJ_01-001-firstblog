---
title: '블로그를 시작합니다'
description: 'Astro로 블로그를 만들고 GitHub Pages에 배포하기까지'
pubDate: '2026-10-01'
tags: ['회고', 'astro']
---

첫 글입니다. 오늘 미션으로 블로그를 직접 만들어서 GitHub에 올려 봤어요.

## 왜 Astro?

- 글은 **마크다운**으로 쓰면 되고
- 빌드하면 순수한 HTML 파일이 나와서 가볍고 빠르고
- GitHub Pages 같은 무료 호스팅에 바로 올릴 수 있어요

## 구조

```
blog/
├── src/
│   ├── content/blog/   ← 글(마크다운)이 여기에
│   ├── pages/          ← 주소 = 파일 경로
│   ├── layouts/        ← 공통 뼈대
│   └── components/     ← 헤더, 푸터 같은 조각
└── .github/workflows/  ← 자동 배포 설정
```

`src/pages/about.astro` 파일을 만들면 `/about/` 주소가 생기는 식이라 이해하기 쉬웠어요.

## 새 글 쓰는 법

`src/content/blog/` 에 마크다운 파일을 하나 추가하고 푸시하면 끝입니다.

> 푸시하면 GitHub Actions가 빌드해서 알아서 배포해 줍니다.
