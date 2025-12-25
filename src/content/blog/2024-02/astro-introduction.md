---
title: "Astro 소개"
description: "Astro는 현대적인 정적 사이트 생성기입니다. 빠르고 효율적인 웹사이트를 만들 수 있습니다."
pubDate: 2024-02-10
tags: ["Astro", "웹개발", "정적사이트"]
category: "개발"
---

# Astro 소개

**Astro**는 현대적인 정적 사이트 생성기(SSG)입니다. 최소한의 JavaScript로 빠르고 효율적인 웹사이트를 만들 수 있습니다.

## Astro의 특징

### 1. 빠른 성능

Astro는 기본적으로 JavaScript를 전송하지 않습니다. 필요한 경우에만 JavaScript를 추가할 수 있어 매우 빠른 로딩 속도를 제공합니다.

### 2. 프레임워크 통합

React, Vue, Svelte 등 다양한 프레임워크를 함께 사용할 수 있습니다.

### 3. 마크다운 지원

내장된 마크다운 지원으로 콘텐츠를 쉽게 작성할 수 있습니다.

### 4. 타입스크립트 지원

기본적으로 TypeScript를 지원하여 타입 안정성을 제공합니다.

## 사용 예시

```astro
---
// 컴포넌트 로직
const title = "Hello, Astro!";
---

<html>
  <head>
    <title>{title}</title>
  </head>
  <body>
    <h1>{title}</h1>
  </body>
</html>
```

## 결론

Astro는 정적 사이트를 만들기에 최적화된 도구입니다. 특히 블로그나 문서 사이트를 만들 때 매우 유용합니다.

더 많은 정보는 [Astro 공식 문서](https://docs.astro.build)를 참고하세요.


