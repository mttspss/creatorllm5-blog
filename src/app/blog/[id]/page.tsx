import { getPostData, getAllPosts } from '@/lib/posts';

type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function Page({ params }: Props) {
  const postData = await getPostData(params.id);

  return (
    <article className="prose prose-lg mx-auto py-8">
      <h1>{postData.title}</h1>
      <p>{postData.date}</p>
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
    </article>
  );
} 