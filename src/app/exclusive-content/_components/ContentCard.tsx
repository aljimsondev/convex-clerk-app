import { ExclusiveContentType } from '@/app/exclusive-content/_components/contents';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

function ContentCard(content: ExclusiveContentType) {
  return (
    <Card className="p-0 overflow-hidden group">
      <CardContent className="p-0">
        <div className="w-full aspect-video relative overflow-hidden">
          <Image
            alt={content.title}
            src={content.imageUrl}
            fill
            className="object-cover object-center group-hover:scale-105 duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg">{content.title}</h3>
          <p className="font-light text-muted-foreground line-clamp-3">
            {content.body}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default ContentCard;
