'use client';

import { ConvexClientProvider } from '@/components/provider/convex-client-provider';
import { PageProps } from '@/lib/types/common';
import { Toaster } from 'sonner';

function AppProvider({ children }: PageProps) {
  return (
    <ConvexClientProvider>
      {children}
      <Toaster />
    </ConvexClientProvider>
  );
}

export default AppProvider;
