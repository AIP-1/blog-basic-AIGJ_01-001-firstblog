// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// GitHub Actions가 배포할 때 SITE / BASE_PATH 환경변수를 넣어줍니다.
// (로컬에서 npm run dev 할 때는 기본값을 씁니다)
const site = process.env.SITE ?? 'http://localhost:4321';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  integrations: [mdx(), sitemap()],
});
