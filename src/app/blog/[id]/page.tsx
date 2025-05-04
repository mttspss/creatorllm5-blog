/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPostData, getAllPosts } from '@/lib/posts';
import ProgressBar from '@/components/ProgressBar';

export async function generateStaticParams() {
  return getAllPosts().map(post => ({ id: post.id }));
}

export default async function Page(context: any) {
  const { id } = context.params;
  const postData = await getPostData(id);
  const { date } = postData;

  return (
    <>
      <ProgressBar
        date={date}
        startDate="2025-05-01"
        totalDays={365}
      />
      <article className="prose prose-lg mx-auto py-8">
        <h1>{postData.title}</h1>
        <p>{date}</p>
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </article>
    </>
  );
}