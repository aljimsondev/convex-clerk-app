import Navbar from '@/app/_component/navbar';
import Pricing from '@/app/_component/pricing';
import ExclusiveContents from '@/app/exclusive-content/_components/contents';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { auth } from '@clerk/nextjs/server';

async function ExclusiveContent() {
  const { has } = await auth();
  const hasProAccess = has({ plan: 'pro' });

  return (
    <section className="container mx-auto">
      <Navbar />
      {!hasProAccess ? (
        <Card>
          <CardContent className="space-y-4">
            <CardHeader className="px-0">
              <CardTitle className="text-4xl leading-16">
                Oppss, you are not subscribe for this content!
              </CardTitle>
              <CardDescription>
                Exclusive Content for Pro Plan Subscribers only!
              </CardDescription>
            </CardHeader>
            <h4>Subscribe to view this content!</h4>
            <Pricing />
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="space-y-4">
            <CardHeader className="px-0">
              <CardTitle className="text-4xl leading-16">
                Exclusive Contents!
              </CardTitle>
              <CardDescription>
                Exclusive Content for Pro Plan Subscribers!
              </CardDescription>
            </CardHeader>
            <ExclusiveContents />
          </CardContent>
        </Card>
      )}
    </section>
  );
}

export default ExclusiveContent;
