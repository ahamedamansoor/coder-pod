import Link from 'next/link';

interface LogoProps {
  clickable?: boolean;
  align?: 'left' | 'center';
}

export function Logo({ clickable = true, align = 'center' }: LogoProps) {
  const content = (
    <div className={`flex flex-col leading-none h-16 justify-center ${align === 'left' ? 'items-start' : 'items-center'}`}>
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
        className="text-[10px] font-normal tracking-[0.25em] uppercase text-gray-500 dark:text-gray-400 mt-0.5 text-center"
        style={{ letterSpacing: '0.25em' }}
      >
        YOUR LAUNCHPAD FOR LEARNING
      </span>
    </div>
  );

  if (!clickable) {
    return content;
  }

  return (
    <Link href="/" aria-label="Coder Pod Home">
      {content}
    </Link>
  );
}
