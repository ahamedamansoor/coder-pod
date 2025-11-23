import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex flex-col leading-none" aria-label="Coder Pod Home">
      {/* Main Logo Text */}
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold tracking-tight" style={{ color: '#5B7FFF' }}>
          CODER
        </span>
        <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          POD
        </span>
      </div>
      
      {/* Tagline */}
      <span 
        className="text-[10px] font-normal tracking-[0.25em] uppercase text-gray-900 dark:text-gray-300 mt-0.5"
        style={{ letterSpacing: '0.25em' }}
      >
        YOUR LAUNCHPAD FOR LEARNING
      </span>
    </Link>
  );
}
