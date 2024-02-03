import Link from 'next/link'
import { Button } from '../components/ui/button';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Hello Admin!</h1>
      <Button variant="link">
        <Link href="/dashboard">Explore</Link>
      </Button> 
    </main>
  );
}
