'use client';

import ProjectsHeader from '@/ui/ProjectsHeader/ProjectsHeader';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProjectsHeader />
      {children}
    </>
  );
}
