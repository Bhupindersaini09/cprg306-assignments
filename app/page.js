import Image from 'next/image'
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main>
      <div className="flex flex-col px-20 py-20">
        <h1 className="text-3xl font-bold mb-4">
          CPRG 306: Web Development 2 - Assignments
        </h1>
        <Navigation></Navigation>
      </div>
    </main>
  );
}
