import { fa } from '@/i18n/fa';
import { en } from '@/i18n/en';
import BlogArticleClient from './client';

export function generateStaticParams() {
  const seen = new Set<string>();
  const slugs: { slug: string }[] = [];
  for (const a of fa.blog.articles) {
    if (!seen.has(a.slug)) { seen.add(a.slug); slugs.push({ slug: a.slug }); }
  }
  for (const a of en.blog.articles) {
    if (!seen.has(a.slug)) { seen.add(a.slug); slugs.push({ slug: a.slug }); }
  }
  return slugs;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogArticleClient slug={slug} />;
}
