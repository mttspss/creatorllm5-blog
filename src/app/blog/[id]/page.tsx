import { getPostData, getAllPosts } from '@/lib/posts';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  return (
    <article className="prose prose-lg mx-auto py-8">
      <h1>{postData.title}</h1>
      <p>{postData.date}</p>
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
    </article>
  );
}
