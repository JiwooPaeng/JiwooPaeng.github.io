import Image from 'next/image'
import Link from 'next/link'
import profileImage from '../../public/images/profile.jpg'

export default function Hero() {
  return (
    <section className="text-center">
      <Image 
        src={profileImage} 
        alt='Picture of the author' 
        width={250} 
        height={250}
        className="mx-auto rounded-full"
        priority
        />
      <h2 className="text-3xl font-bold mt-2">{"Hi, I'm Jiwoo"}</h2>
      <h3 className="text-xl font-semibold">Front-end Engineer</h3>
      <p>사용자에게 더 가까이 다가가고 싶은 개발자</p>
      <Link href="/contact">
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">contact me</button>
      </Link>
    </section>
  )
}