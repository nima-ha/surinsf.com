import { fa } from '@/i18n/fa';
import { en } from '@/i18n/en';
import ProductClient from './client';

export function generateStaticParams() {
  const slugs: { slug: string }[] = [];
  for (const p of fa.products.items) {
    if (!slugs.find(s => s.slug === p.slug)) slugs.push({ slug: p.slug });
  }
  return slugs;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProductClient slug={slug} />;
}
