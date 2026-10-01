// 블로그 글(마크다운)의 위치와 frontmatter 형식을 정의합니다.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // 미래 시간을 적으면 예약 발행: 그 시간이 지난 뒤 자동 배포 때 공개됩니다.
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // '개발/Astro' 처럼 '/'로 나누면 대/중/소 카테고리가 됩니다.
    category: z.string().default('일반'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // 공유할 때 미리보기로 쓰일 이미지 (public 폴더 기준 경로, 예: '/images/cover.png')
    image: z.string().optional(),
  }),
});

export const collections = { blog };
