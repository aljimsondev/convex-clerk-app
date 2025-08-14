'use client';

import Content from '@/app/_component/content';
import Navbar from '@/app/_component/navbar';

export default function Home() {
  return (
    <section className="container mx-auto px-4 md:px-0">
      <Navbar />
      <Content />
    </section>
  );
}
