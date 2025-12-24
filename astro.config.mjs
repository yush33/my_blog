import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // GitHub Pages 배포 시 수정 필요:
  // - site: GitHub Pages URL (예: 'https://yourusername.github.io')
  // - base: 저장소 이름과 동일하게 설정 (루트 도메인 사용 시 '/'로 변경)
  // 개발 환경에서는 base를 사용하지 않음 (빈 문자열)
  // 프로덕션 빌드 시 환경 변수 BASE_PATH를 설정하거나 여기서 직접 설정
  site: 'https://yush33.github.io',
  base: '/my_blog',
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});

