import { useRouter } from 'next/router'

export default function Custom404() {
  const router = useRouter()
  if (typeof window !== 'undefined') {
    router.replace('/')
  }

  return (
    <></>
  )
}
