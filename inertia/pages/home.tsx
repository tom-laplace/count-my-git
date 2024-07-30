import { Head } from '@inertiajs/react'
import { Github } from "lucide-react"
import { Button } from '~/lib/components/ui/button'

export default function Home() {
  return (
    <>
      <Head title="Homepage" />

      <div className='flex-col'>
        <div className='text-center my-36'>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
            Count My Git
          </h1>
          <p className="text-xl text-muted-foreground">
            A simple tool to know how much lines of code contains a Github repository.
          </p>
        </div>

        <div className='flex justify-center items-center'>
          <Button>
            <Github className='mr-2 h-4 w-4' /> Login with Github
          </Button>
        </div>
      </div>
    </>
  )
}