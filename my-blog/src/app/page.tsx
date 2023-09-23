import FeaturedPosts from '@/components/FeaturedPosts'
import CarouselPosts from '@/components/CarouselPosts'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <section>
      <Hero />
      <FeaturedPosts />
      <CarouselPosts />
    </section>
  )
}
