type Props = {
  image?: string | null
}

export default function Avatar({ image }: Props) {
  return (
    <div className='w-9 h-9 rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300'>
      <img 
        className='rounded-full p-[0.1rem]' 
        alt='user profile' 
        src={image ?? undefined} 
        referrerPolicy='no-referrer'/>
        {/* referrerPolicy을 통해서 img x박스 뜨는것 방지 */}
    </div>
  ) 
}