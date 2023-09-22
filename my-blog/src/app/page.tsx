import Image from 'next/image'
import { Open_Sans } from 'next/font/google'

import Hero from '@/components/Hero'

const sans = Open_Sans({ subsets: ['latin']})

export default function Home() {
  return (
    <section className="bg-gray-500">
      <Hero />
    </section>
  )
}
