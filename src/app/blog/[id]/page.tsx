import { getPostData, getAllPosts } from '@/lib/posts';

export async function generateStaticParams() {
  return getAllPosts().map(post => ({ id: post.id }));
}

export default async function Page(context: any) {
  const { id } = context.params;
  const postData = await getPostData(id);

  return (
    <article className="prose prose-lg mx-auto py-8">
      <h1>{postData.title}</h1>
      <p>{postData.date}</p>
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
    </article>
  );
}
