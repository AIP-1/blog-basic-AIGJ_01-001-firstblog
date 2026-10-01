---
title: '자주 쓰는 Git 명령어 정리'
description: '블로그를 올리면서 쓴 git 명령어들'
pubDate: '2026-10-01T12:00:00+09:00'
tags: ['git', '정리']
---

블로그를 GitHub에 올리면서 쓴 명령어들을 정리해 둡니다.

## 처음 한 번

```bash
git init                      # 현재 폴더를 git 저장소로
git add .                     # 변경된 파일 전부 스테이징
git commit -m "첫 커밋"         # 커밋
git branch -M main            # 브랜치 이름을 main으로
git remote add origin https://github.com/아이디/저장소.git
git push -u origin main       # 원격 저장소에 올리기
```

## 그 다음부터

```bash
git status                    # 뭐가 바뀌었는지 확인
git add .
git commit -m "새 글: 제목"
git push
```

## 헷갈렸던 것

- `add`는 "이번 커밋에 넣을 파일 고르기", `commit`은 "기록 남기기", `push`는 "GitHub에 올리기"
- 커밋 메시지는 무엇을 바꿨는지 한 줄로 쓰면 나중에 찾기 편해요
