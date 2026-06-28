const fs = require('fs');
const path = require('path');
const siteUrl = 'https://surinsf-site.task-malt-juvenile.workers.dev';

const faArticles = [
  { slug: 'plc-selection-guide', title: 'راهنمای جامع انتخاب PLC صنعتی', excerpt: 'بررسی انواع PLCهای موجود در بازار و نکات مهم در انتخاب مناسب‌ترین گزینه برای خط تولید شما', date: '2025-06-05', cat: 'اتوماسیون', img: '/images/blog/plc.jpg' },
  { slug: 'industrial-iot', title: 'اتوماسیون صنعتی و اینترنت اشیاء', excerpt: 'تحول دیجیتال در صنعت با ترکیب اتوماسیون سنتی و فناوری‌های نوین IIoT', date: '2025-05-20', cat: 'فناوری', img: '/images/blog/iot.jpg' },
  { slug: 'electrical-standards', title: 'استانداردهای بین‌المللی تجهیزات برق', excerpt: 'آشنایی با مهم‌ترین استانداردهای IEC، NEMA و ISO در حوزه تجهیزات برق صنعتی', date: '2025-04-10', cat: 'استانداردها', img: '/images/blog/standards.jpg' },
];

const enArticles = [
  { slug: 'plc-selection-guide', title: 'Complete Guide to Industrial PLC Selection', excerpt: 'Review of available PLCs and key selection criteria for your production line', date: '2025-06-05', cat: 'Automation', img: '/images/blog/plc.jpg' },
  { slug: 'industrial-iot', title: 'Industrial IoT and Smart Manufacturing', excerpt: 'Digital transformation combining traditional automation with IIoT technologies', date: '2025-05-20', cat: 'Technology', img: '/images/blog/iot.jpg' },
  { slug: 'electrical-standards-en', title: 'International Electrical Equipment Standards', excerpt: 'Overview of IEC, NEMA and ISO standards for industrial electrical equipment', date: '2025-04-10', cat: 'Standards', img: '/images/blog/standards.jpg' },
];

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function itemXml(a, lang) {
  const link = `${siteUrl}/${lang === 'fa' ? '' : lang}/blog/${a.slug}`;
  return `
    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${escapeXml(a.excerpt)}</description>
      <category>${escapeXml(a.cat)}</category>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
      <enclosure url="${siteUrl}${a.img}" type="image/jpeg" length="0"/>
      <media:content url="${siteUrl}${a.img}" medium="image">
        <media:description type="plain">${escapeXml(a.title)}</media:description>
      </media:content>
    </item>`;
}

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>سورین صنعت فرزان | وبلاگ</title>
    <link>${siteUrl}</link>
    <description>مطالب تخصصی در حوزه برق صنعتی، اتوماسیون و ابزار دقیق</description>
    <language>fa</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${faArticles.map(a => itemXml(a, 'fa')).join('')}
    ${enArticles.map(a => itemXml(a, 'en')).join('')}
  </channel>
</rss>`;

fs.writeFileSync(path.join(__dirname, '..', 'public', 'rss.xml'), rss, 'utf-8');
console.log('RSS generated:', path.join(__dirname, '..', 'public', 'rss.xml'));
