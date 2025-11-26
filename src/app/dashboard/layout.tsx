export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen min-w-full overflow-x-hidden">
      {children}
    </div>
  );
}
