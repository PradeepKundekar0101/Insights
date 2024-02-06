import Link from 'next/link'
import { Button } from '../components/ui/button';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className='font-bold text-3xl my-3'>Hello Admin!</h1>
      <Button variant="secondary">
        <Link href="/dashboard">Dashboard</Link>
      </Button> 
    </main>
  );
}
