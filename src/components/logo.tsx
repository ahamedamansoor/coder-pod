import { Icons } from '@/components/icons';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="LinguaLeap Home">
      <Icons.logo className="h-7 w-7 text-primary" />
      <span className="font-headline text-2xl font-bold text-foreground tracking-tight">
        LinguaLeap
      </span>
    </Link>
  );
}
