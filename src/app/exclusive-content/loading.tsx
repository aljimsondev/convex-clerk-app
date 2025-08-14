import Navbar from '@/app/_component/navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function ContentLoader() {
  return (
    <section className="container mx-auto">
      <Navbar />
      <Card>
        <CardContent className="space-y-4">
          <Skeleton className="h-[42px] w-[300px]" />
          <Skeleton className="h-[14px] w-[300px]" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {new Array(12).fill(0).map((_, index) => (
              <div key={index}>
                <Skeleton className="w-full aspect-video" />
                <div className="space-y-2 mt-4">
                  <Skeleton className="h-[22px] w-full" />
                  <Skeleton className="h-[16px] w-full" />
                  <Skeleton className="h-[16px] w-full" />
                  <Skeleton className="h-[16px] w-[60%]" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default ContentLoader;
