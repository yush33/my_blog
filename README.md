# My Blog

Astro로 구축된 정적 블로그 사이트입니다.

## 주요 기능

- ✅ 마크다운으로 글 작성
- ✅ 태그 및 카테고리 분류
- ✅ 월별 파일 관리 (`content/blog/YYYY-MM/`)
- ✅ 반응형 디자인
- ✅ 다크모드 지원
- ✅ 정적 사이트 생성 (GitHub Pages 호스팅)

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:4321`로 접속하세요.

### 빌드

```bash
npm run build
```

빌드 결과물은 `dist/` 폴더에 생성됩니다.

### 미리보기

```bash
npm run preview
```

빌드된 사이트를 로컬에서 미리볼 수 있습니다.

## 블로그 포스트 작성

1. `src/content/blog/YYYY-MM/` 폴더에 마크다운 파일을 생성하세요
2. 파일 상단에 frontmatter를 추가하세요:

```yaml
---
title: "포스트 제목"
description: "포스트 설명"
pubDate: 2024-01-20
tags: ["태그1", "태그2"]
category: "카테고리"
---
```

3. 마크다운으로 본문을 작성하세요

## GitHub Pages 배포

### 설정

1. `astro.config.mjs` 파일을 열어서 다음을 수정하세요:
   - `site`: GitHub Pages URL (예: `'https://yourusername.github.io'`)
   - `base`: 저장소 이름과 동일하게 설정 (루트 도메인 사용 시 `'/'`로 변경)

2. GitHub 저장소 Settings > Pages에서:
   - Source: GitHub Actions 선택

### 자동 배포

`main` 브랜치에 푸시하면 GitHub Actions가 자동으로 빌드하고 배포합니다.

워크플로우 파일: `.github/workflows/deploy.yml`

## 프로젝트 구조

```
my_blog/
├── src/
│   ├── components/     # 재사용 가능한 컴포넌트
│   ├── content/        # 마크다운 콘텐츠
│   │   └── blog/      # 블로그 포스트 (YYYY-MM 형식)
│   ├── layouts/        # 페이지 레이아웃
│   ├── pages/          # 페이지 라우트
│   └── utils/          # 유틸리티 함수
├── public/             # 정적 파일
└── dist/               # 빌드 결과물
```

## 기술 스택

- [Astro](https://astro.build) - 정적 사이트 생성기
- [Tailwind CSS](https://tailwindcss.com) - 스타일링
- [TypeScript](https://www.typescriptlang.org) - 타입 안정성

## 라이선스

MIT

