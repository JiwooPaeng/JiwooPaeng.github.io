import Avatar from '@/components/Avatar'

import { User } from '@/model/user';

type Props = {
  user: User 
}

export default function SideBar({user: {name, username, image}}: Props) {
  return (
    <>
      <div className="flex items-center">
        {image && <Avatar image={image} />}
        <div className="ml-4">
          <p className="font-bold">{username}</p>
          <p className="text-lg text-neutral-500 leading-4">{name}</p>
        </div>
      </div>

      <p className="text-sm text-neutral-500 mt-8">
        About ㆍ Help ㆍ Press ㆍ API ㆍ Jobs ㆍ Privacy ㆍ Location ㆍ Language
      </p>
      <p className="font-bold text-sm mt-8 text-neutral-500">
        @Copyright INSTANGRAM from METAL
      </p>
    </>
  )
}