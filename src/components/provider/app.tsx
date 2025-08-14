'use client';

import { ConvexClientProvider } from '@/components/provider/convex-client-provider';
import { PageProps } from '@/lib/types/common';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from 'sonner';

function AppProvider({ children }: PageProps) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <ConvexClientProvider>
        {children}
        <Toaster />
      </ConvexClientProvider>
    </ClerkProvider>
  );
}

export default AppProvider;
