import { Icons } from '@/app/components/icons'
import { authOptions } from '@/app/lib/auth'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FC, ReactNode } from 'react'

interface layoutProps {
    children: ReactNode
}

const layout = async ({ children }: layoutProps) => {
    const session = await getServerSession(authOptions)
    if (!session) notFound()
    return <div className='w-full flex h-screen'>
        <div className='flex h-full w-full max-w-xs grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6'>
            <Link href='/dashboard' className='flex h-20 shrink-0 items-center mt-10'>
                <Image src='/logo.svg' alt='logo' height={180} width={180}/>
            </Link>
            <div className='text-xs font-semibold leading-6 text-gray-400'>Your chats</div>
            </div>{children}
    </div>
}

export default layout