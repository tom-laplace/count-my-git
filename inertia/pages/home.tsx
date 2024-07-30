import { Head } from '@inertiajs/react'
import { Button } from '~/lib/components/ui/button'

export default function Home(props: { version: number }) {
  return (
    <>
      <Head title="Homepage" />

      <Button variant={"outline"}>Click me</Button>

      <div className="container">
        <div className="title">AdonisJS {props.version} x Inertia x React</div>

        
      </div>
    </>
  )
}