import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Image src="/royal-prestige-logo.png" alt="Royal Prestige" width={500} height={500} />
      </div>
      <Button>Click me</Button>
    </div>
  )
}
