import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learning Roadmaps - Coder Pod',
  description: 'Explore role-based career roadmaps and skill-based learning paths.',
};

// Disable caching for this page
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function RoadmapsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
