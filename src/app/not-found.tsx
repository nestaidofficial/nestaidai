import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { RetroTvError } from '@/components/ui/retro-tv-error';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: '404 — Page Not Found',
  description: 'The page you were looking for does not exist.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] flex flex-col items-center justify-center section-padding gap-10">
        <RetroTvError errorCode="404" errorMessage="NOT FOUND" />

        <div className="flex flex-col items-center gap-3 text-center">
          <p className="font-subheading text-base text-black/60 max-w-sm">
            Looks like this channel doesn&apos;t exist. Let&apos;s get you back on air.
          </p>
          <Link href="/">
            <Button variant="default" size="lg">
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
