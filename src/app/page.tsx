'use client';

import Content from '@/app/_component/content';
import { Button } from '@/components/ui/button';
import { SignInButton, UserButton } from '@clerk/nextjs';
import { Authenticated, Unauthenticated } from 'convex/react';

export default function Home() {
  return (
    <>
      <Authenticated>
        <UserButton />
        <Content />
      </Authenticated>
      <Unauthenticated>
        <SignInButton>
          <Button>Sign in</Button>
        </SignInButton>
      </Unauthenticated>
    </>
  );
}
