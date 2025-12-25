---
title: "마크다운 작성 가이드"
description: "이 블로그에서 마크다운을 사용하여 포스트를 작성하는 방법을 안내합니다."
pubDate: 2024-01-20
tags: ["마크다운", "가이드", "문서"]
category: "가이드"
---

# 마크다운 작성 가이드

이 블로그에서는 마크다운 형식으로 포스트를 작성합니다.

## 기본 문법

### 제목

```markdown
# H1 제목
## H2 제목
### H3 제목
```

### 강조

- **굵게**: `**텍스트**`
- *기울임*: `*텍스트*`
- ~~취소선~~: `~~텍스트~~`

### 목록

순서 없는 목록:
- 항목 1
- 항목 2
- 항목 3

순서 있는 목록:
1. 첫 번째
2. 두 번째
3. 세 번째

### 링크와 이미지

[링크 텍스트](https://example.com)

![이미지 설명](https://example.com/image.jpg)

### 코드

인라인 코드: `const example = "code"`

코드 블록:

```javascript
function hello() {
  console.log("Hello, World!");
}
```

### 인용문

> 이것은 인용문입니다.
> 여러 줄로 작성할 수 있습니다.

## Frontmatter

각 마크다운 파일 상단에 frontmatter를 추가해야 합니다:

```yaml
---
title: "포스트 제목"
description: "포스트 설명"
pubDate: 2024-01-20
tags: ["태그1", "태그2"]
category: "카테고리"
---
```

이제 마크다운으로 멋진 포스트를 작성해보세요!


