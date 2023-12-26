'use client'

import { FC, useState } from 'react'
import Button from '../../components/ui/Button'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import toast from 'react-hot-toast'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
  const [isLoading, setIsLoading] = useState(false)
  async function logInWithGithub() {
    setIsLoading(true)
    try {
      await signIn('github')
    } catch (err) {
      toast.error('SignIn failed')
    } finally {
      setIsLoading(false)
    }
  }
  return <>
    <div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full flex flex-col items-center max-w-md space-y-8'>
        <div className='flex flex-col items-center gap-8'>
          logo
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>Sign in to your account</h2>
        </div>
        <Button isLoading={isLoading} type='button' className='max-w-sm mx-auto w-full' onClick={logInWithGithub}>
          {isLoading ? null : <Image src='/github-mark.svg' alt='github logo' width={20} height={20} className='mx-2' />}
          Login
        </Button>
      </div>
    </div>
  </>
}

export default page