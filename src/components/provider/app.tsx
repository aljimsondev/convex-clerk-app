'use client';

import { ConvexClientProvider } from '@/components/provider/convex-client-provider';
import { PageProps } from '@/lib/types/common';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from 'sonner';

function AppProvider({ children }: PageProps) {
  return (
    <ClerkProvider>
      <ConvexClientProvider>
        {children}
        <Toaster />
      </ConvexClientProvider>
    </ClerkProvider>
  );
}

export default AppProvider;
