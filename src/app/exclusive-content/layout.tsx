import { PageProps } from '@/lib/types/common';

function Layout({ children }: PageProps) {
  return <main>{children}</main>;
}

export default Layout;
