import ContentCard from '@/app/exclusive-content/_components/ContentCard';

export type ExclusiveContentType = {
  userId: number;
  id: number;
  title: string;
  body: string;
  imageUrl: string;
};

async function fetchPosts() {
  try {
    const contents = (await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=20',
      { cache: 'force-cache' },
    ).then(async (data) => {
      const posts = await data.json();

      return await Promise.all(
        posts.map(async (post: ExclusiveContentType, index: number) => {
          const url = await fetch(
            `https://picsum.photos/200/300?random=${index}`,
            { cache: 'force-cache' },
          ).then(async (response) => await response.url);

          return { ...post, imageUrl: url };
        }),
      );
    })) as ExclusiveContentType[];

    return contents;
  } catch (e) {
    console.warn(e);
    return [];
  }
}

async function ExclusiveContents() {
  const contents = await fetchPosts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {contents.map((content) => (
        <ContentCard {...content} key={content.id} />
      ))}
    </div>
  );
}

export default ExclusiveContents;
