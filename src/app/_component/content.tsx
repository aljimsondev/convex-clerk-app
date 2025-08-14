'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { api } from '@api/_generated/api';
import { Protect } from '@clerk/nextjs';
import { useQuery } from 'convex/react';
import Link from 'next/link';

export default function Content() {
  const messages = useQuery(api.messages.getForCurrentUser);

  return (
    <div className="grid grid-cols-2 gap-4">
      <Card>
        <CardContent className="space-y-4">
          <CardHeader className="px-0">
            <CardTitle>Free Content</CardTitle>
            <CardDescription>
              This is only available for free plan subscribers!
            </CardDescription>
          </CardHeader>
          <Link
            href="/exclusive-content"
            className="text-destructive underline"
          >
            Try to view protected contents!
          </Link>
        </CardContent>
      </Card>
      <Protect plan={'pro'}>
        <Card>
          <CardContent className="space-y-4">
            <CardHeader className="px-0">
              <CardTitle>Pro Content</CardTitle>
              <CardDescription>
                This is only available for pro plan subscribers!
              </CardDescription>
            </CardHeader>
            <Link href="/exclusive-content">
              View Exclusive Contents for you!
            </Link>
          </CardContent>
        </Card>
      </Protect>
    </div>
  );
}
