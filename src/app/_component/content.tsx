'use client';

import { api } from '@api/_generated/api';
import { useQuery } from 'convex/react';

export default function Content() {
  const messages = useQuery(api.messages.getForCurrentUser);
  return <div>Authenticated content: {messages?.length}</div>;
}
