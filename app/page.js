import Image from 'next/image'
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <div className="flex flex-col px-20 py-20">
        <h1 className="text-3xl font-bold mb-4">
          CPRG 306: Web Development 2 - Assignments
        </h1>
        <Link href="/week-2">Week 2 Assignment</Link>
        <Link href="/week-3">Week 3 Assignment</Link>
        <Link href="/week-4">Week 4 Assignment</Link>
        <Link href="/week-5">Week 5 Assignment</Link>
        <Link href="/week-6">Week 6 Assignment</Link>
        <Link href="/week-7">Week 7 Assignment</Link>
        <Link href="/week-8">Week 8 Assignment</Link>
        <Link href="/week-10">Week 10 Assignment</Link>
      </div>
    </main>
  );
}
