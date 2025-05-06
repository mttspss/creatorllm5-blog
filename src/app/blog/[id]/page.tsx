/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPostData, getAllPosts } from '@/lib/posts';
import ProgressTracker from '@/components/ProgressTracker';

export async function generateStaticParams() {
  return getAllPosts().map(post => ({ id: post.id }));
}

export default async function Page(props: any) {
  const { id } = (await props.params) as { id: string };

  if (id === '2025-05-02-day-1') {
    // JSX/HTML diretto per il post Day 1
    const shareUrl = `https://x.com/intent/tweet?url=https://creatorllm.vercel.app/blog/2025-05-02-day-1`;
    return (
      <div className="max-w-2xl mx-auto py-10 px-4">
        <ProgressTracker startDate="2025-05-01" />
        <article className="bg-white rounded-xl shadow-lg p-8 md:p-12 mt-6 mb-8 border border-[#00DAFB]/10">
          <div className="mb-4 flex flex-col gap-1">
            <span className="text-[#00DAFB] font-semibold text-sm uppercase tracking-widest">
              2025-05-02
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-2">
              Day 1/365 of building 12 startups in 12 months
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              First day: commitment, research, and first steps towards the 12-month challenge.
            </p>
          </div>
          <hr className="my-6 border-[#00DAFB]/20" />
          <div className="text-gray-900 text-lg leading-relaxed space-y-4">
            <p>Day 1/365 of building 12 startups in 12 months</p>
            <p>Today was about translating commitment into first steps.</p>
            <p>As I was saying yesterday, the focus was completely on the 12-month plan.<br />
            I have to refine a lot of things before I start building.<br />
            You need to use your imagination a lot for this and be productive at the same time.<br />
            I will not give you the story that it will be easy.</p>
            <p>So I spent the whole day on:</p>
            <ul className="list-disc pl-6">
              <li>
                Analyzed and studied <span className="font-semibold text-[#00DAFB]">@starter_story</span> and <span className="font-semibold text-[#00DAFB]">@levelsio</span>:
                <ul className="list-disc pl-6">
                  <li>During these 365 days I will 100% need to use cursor to launch startups and code, that&apos;s why I was watching <span className="font-semibold text-[#00DAFB]">@starter_story</span>&apos;s yt video for vide coding.</li>
                  <li>&rarr; Confirmed that cursor will be essential for the AI-assisted coding workflow</li>
                  <li>At the same time I was deep researching <span className="font-semibold text-[#00DAFB]">@levelsio</span></li>
                  <li>Because it&apos;s an inspiration for me and everything I can discover from him is gold for my journey.</li>
                  <li>Key lesson from <span className="font-semibold text-[#00DAFB]">@levelsio</span> deep-dive:<br />
                    &rarr; Speed comes from solving <em>your own</em> problems first.<br />
                    &rarr; Reminder to self: keep startup n.1 focused on a real pain point I understand.
                  </li>
                </ul>
              </li>
              <li>
                Twitter management will be key, I&apos;ve decided to keep this format &quot;day x/365 of..&quot; because it&apos;s the best one for me to tell you my journey and the backstage of it. But at the same time I don&apos;t want to do just one post, I&apos;d like to push more value.
              </li>
              <li>
                TikTok research.<br />
                I had to do market research a lot for this. I&apos;m not an expert of the field but if I want to grow there and create a faceless figure like I am, I need to understand what works and what doesn&apos;t.
              </li>
              <li>
                Brainstormed some ideas.<br />
                It takes time to have a concrete idea, I don&apos;t want to just push a startup just because a light is turning on in my mind.<br />
                &rarr; Generating ideas is easy, validating them is hard.<br />
                Today I was trying to draft prompts for quick problem validation. But I&apos;m still hunting for the final form.
              </li>
            </ul>
            <p>Feeling the challenge, but the process is moving.</p>
          </div>
          <div className="mt-8 flex justify-end">
            <a
              href={shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#00DAFB] text-white rounded-lg font-semibold shadow hover:bg-[#00b8c7] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="120" rx="24" fill="black"/>
                <path d="M85 35H100L67.5 70L105 120H79L60 95L41 120H15L52.5 70L20 35H45L60 55L75 35ZM80 110H90L50 50H40L80 110Z" fill="white"/>
              </svg>
              Condividi su X
            </a>
          </div>
        </article>
      </div>
    );
  }

  if (id === '2025-05-01-day-0') {
    // JSX/HTML diretto per il post Day 0
    const shareUrl = `https://x.com/intent/tweet?url=https://creatorllm.vercel.app/blog/2025-05-01-day-0`;
    return (
      <div className="max-w-2xl mx-auto py-10 px-4">
        <ProgressTracker startDate="2025-05-01" />
        <article className="bg-white rounded-xl shadow-lg p-8 md:p-12 mt-6 mb-8 border border-[#00DAFB]/10">
          <div className="mb-4 flex flex-col gap-1">
            <span className="text-[#00DAFB] font-semibold text-sm uppercase tracking-widest">
              2025-05-01
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-2">
              Day 0/365 of building 12 startups in 12 months
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Setting the foundation: planning, mindset, and first steps before the challenge begins.
            </p>
          </div>
          <hr className="my-6 border-[#00DAFB]/20" />
          <div className="text-gray-900 text-lg leading-relaxed space-y-4">
            <p>Day 0/365 of building 12 startups in 12 months.</p>
            <p>After creating my socials and sharing my story yesterday, today was about getting my mind clear and setting the foundation for the next 365 days.</p>
            <p>First thing I had to do was to build a plan, a solid 12-month roadmap with real long-term goals baked in.<br />
            Then, I started brainstorming ideas for the first month because I didn&apos;t show up here with something ready to launch, but with something to build from 0.<br />
            These first few days are for market research.</p>
            <p>Every startup or digital product I launch will come from three places:</p>
            <ul className="list-disc pl-6">
              <li>problems I personally experience in different fields</li>
              <li>real frustrations people already face (and talk about) in those spaces</li>
              <li>things I like</li>
            </ul>
            <p>And that&apos;s because you should never build something you don&apos;t understand and appreciate the value.<br />
            If you don&apos;t live it, don&apos;t ship it.</p>
            <p>So the next steps will be:</p>
            <ul className="list-disc pl-6">
              <li>brainstorming</li>
              <li>market research for potential problems people face</li>
              <li>validate the ideas</li>
              <li>find solutions and outline the initial scope for the very first projects</li>
            </ul>
            <p>See you tomorrow.</p>
          </div>
          <div className="mt-8 flex justify-end">
            <a
              href={shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#00DAFB] text-white rounded-lg font-semibold shadow hover:bg-[#00b8c7] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="120" rx="24" fill="black"/>
                <path d="M85 35H100L67.5 70L105 120H79L60 95L41 120H15L52.5 70L20 35H45L60 55L75 35ZM80 110H90L50 50H40L80 110Z" fill="white"/>
              </svg>
              Condividi su X
            </a>
          </div>
        </article>
      </div>
    );
  }

  if (id === '2025-05-03-day-3' || id === '2025-05-04-day-3') {
    // JSX/HTML diretto per il post Day 3 (ora 4 maggio)
    const shareUrl = `https://x.com/intent/tweet?url=https://creatorllm.vercel.app/blog/2025-05-04-day-3`;
    return (
      <div className="max-w-2xl mx-auto py-10 px-4">
        <ProgressTracker startDate="2025-05-01" />
        <article className="bg-white rounded-xl shadow-lg p-8 md:p-12 mt-6 mb-8 border border-[#00DAFB]/10">
          <div className="mb-4 flex flex-col gap-1">
            <span className="text-[#00DAFB] font-semibold text-sm uppercase tracking-widest">
              2025-05-04
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-2">
              Day 3/365 of building 12 startups in 12 months
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Debugging, wasted time, and new ideas: a day of learning and frustration.
            </p>
          </div>
          <hr className="my-6 border-[#00DAFB]/20" />
          <div className="text-gray-900 text-lg leading-relaxed space-y-4">
            <p>Day 3/365 of building 12 startups in 12 months.</p>
            <p>Yesterday I did not posted but.. a lot of time wasted for now.</p>
            <p>Two days ago I was watching <span className="font-semibold text-[#00DAFB]">@starter_story</span>&apos;s yt video with him trying to build a website with Cursor.<br />
            Three days ago I was watching <span className="font-semibold text-[#00DAFB]">@marc_louvion</span> building a website.<br />
            And I swear I was hyped a lot.</p>
            <p>So, I&apos;ve spent the whole day trying to build a blog to insert every post i will share here on twitter with this format.<br />
            The goal was to build something simple to start, like imagine if I have to build a SaaS.<br />
            I&apos;ve started building an homepage, calendarview, something simple... until I realized that my blog posts text wasn&apos;t respecting the points I was using, the number like (1.) the spaces I was using and I tried to debug for like 2 hours with no results.</p>
            <p>I have to say it, i&apos;ve burned 6/7 hours of precious time.<br />
            I need to continue another days to try and fix it.</p>
            <p>At the same time I decided to scraped some ideas with Gemini and look for potential solutions with problems I&apos;ve spotted in the AI community / digital products.</p>
            <p>Tomorrow I will share a lot of related content.<br />
            Have a good night everyone.</p>
          </div>
          <div className="mt-8 flex justify-end">
            <a
              href={shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#00DAFB] text-white rounded-lg font-semibold shadow hover:bg-[#00b8c7] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="120" rx="24" fill="black"/>
                <path d="M85 35H100L67.5 70L105 120H79L60 95L41 120H15L52.5 70L20 35H45L60 55L75 35ZM80 110H90L50 50H40L80 110Z" fill="white"/>
              </svg>
              Condividi su X
            </a>
          </div>
        </article>
      </div>
    );
  }

  if (id === '2025-05-05-day-4') {
    // JSX/HTML diretto per il post Day 4
    const shareUrl = `https://x.com/intent/tweet?url=https://creatorllm.vercel.app/blog/2025-05-05-day-4`;
    return (
      <div className="max-w-2xl mx-auto py-10 px-4">
        <ProgressTracker startDate="2025-05-01" />
        <article className="bg-white rounded-xl shadow-lg p-8 md:p-12 mt-6 mb-8 border border-[#00DAFB]/10">
          <div className="mb-4 flex flex-col gap-1">
            <span className="text-[#00DAFB] font-semibold text-sm uppercase tracking-widest">
              2025-05-05
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-2">
              Day 4/365 of building 12 startups in 12 months
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              The blog is online! A milestone in the journey and plans for the first startup.
            </p>
          </div>
          <hr className="my-6 border-[#00DAFB]/20" />
          <div className="text-gray-900 text-lg leading-relaxed space-y-4">
            <p>Day 4/365 of building 12 startups in 12 months.</p>
            <p>The blog is ONLINE!</p>
            <p>you can check it out here: <a href="https://creatorllm.blog" className="text-[#00DAFB] hover:underline">creatorllm.blog</a><br />
            it&apos;s super minimal, but enough to start.</p>
            <p>after 2 days of debugging small stupid issues (that drove me crazy), today I managed to launch it online.<br />
            the goal was never to build the perfect blog but something that works and lets me post my daily updates from Twitter in a more permanent space.</p>
            <p>why?<br />
            because it&apos;s going to be a place to store my projects (the next ones, because the blog will not count), links, tools, frameworks and video.<br />
            it will be easier to upload them and to see them for people.</p>
            <p>– eventually I will track the story behind each startup, with screenshots and decisions included</p>
            <p>this is how Ive built it:</p>
            <ul className="list-disc pl-6">
              <li>cursor to vibe code everything (and i swear im not good at coding)</li>
              <li>imagination for the design</li>
              <li>chat gpt to debug</li>
              <li>vercel to deploy it online</li>
            </ul>
            <p>build → test → move on</p>
            <p>besides the blog launch, I also spent part of the afternoon:</p>
            <ol className="list-decimal pl-6">
              <li>scraping more startup ideas using Gemini; at the moment i have two concrete ideas for the first startup we&apos;re going to build.</li>
              <li>i was planning to share my documents and deep research about tiktok and twitter strategy, so if you need to grow in social media, it might be a good resource for you.<br />
              (still need to respect those because im very busy thinking about ideas and startups)</li>
              <li>listing AI tools I personally use but find frustrating</li>
              <li>writing prompts to speed up research/validation for the coming weeks</li>
            </ol>
            <p>Tomorrow I&apos;ll focus on 3 things:</p>
            <p>➝ planning the first mini-MVP<br />
            ➝ reviewing my idea list and picking just 1 to validate faster</p>
            <p>warming up.</p>
          </div>
          <div className="mt-8 flex justify-end">
            <a
              href={shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#00DAFB] text-white rounded-lg font-semibold shadow hover:bg-[#00b8c7] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="120" rx="24" fill="black"/>
                <path d="M85 35H100L67.5 70L105 120H79L60 95L41 120H15L52.5 70L20 35H45L60 55L75 35ZM80 110H90L50 50H40L80 110Z" fill="white"/>
              </svg>
              Condividi su X
            </a>
          </div>
        </article>
      </div>
    );
  }

  if (id === '2025-05-06-day-5') {
    // JSX/HTML diretto per il post Day 5
    const shareUrl = `https://x.com/intent/tweet?url=https://creatorllm.vercel.app/blog/2025-05-06-day-5`;
    return (
      <div className="max-w-2xl mx-auto py-10 px-4">
        <ProgressTracker startDate="2025-05-01" />
        <article className="bg-white rounded-xl shadow-lg p-8 md:p-12 mt-6 mb-8 border border-[#00DAFB]/10">
          <div className="mb-4 flex flex-col gap-1">
            <span className="text-[#00DAFB] font-semibold text-sm uppercase tracking-widest">
              2025-05-06
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-2">
              Day 5/365 of building 12 startups in 12 months
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              First MVP locked in. Blog improvements and startup #1 begins.
            </p>
          </div>
          <hr className="my-6 border-[#00DAFB]/20" />
          <div className="text-gray-900 text-lg leading-relaxed space-y-4">
            <p>Day 5/365 of building 12 startups in 12 months.</p>
            <p>First MVP locked in.</p>
            <p>after scraping a lot of ideas during the week, finally first mvp is done completed with a 7 day plan.<br />
            some ideas had to be dropped because of how strictly regulated certain niches are. (and that should be a good reminder for you too)</p>
            <p>after launching the blog yesterday, today was about improving it:</p>
            <ul className="list-disc pl-6">
              <li>optimized SEO and performance</li>
              <li>added estimated reading time for each post</li>
              <li>added sharing functionality to blog posts</li>
              <li>missing google analytics but ill do it tonight</li>
            </ul>
            <p>i&apos;m trying hard even with a blog, because when it will be time for a real startup, i should be able to predict.<br />
            it forces me to clarify the process, not just share the vibe.<br />
            the blog obviously is not for reach but for documentation and if it helps someone it&apos;s even better.</p>
            <p>also spent part of the day:</p>
            <ol className="list-decimal pl-6">
              <li>deep-researched tiktok strategies for faceless profiles (will share link to download at the end of today&apos;s blog post here: <a href="https://creatorllm.blog/timeline" className="text-[#00DAFB] hover:underline">creatorllm.blog/timeline</a>)</li>
              <li>discovered <span className="font-semibold text-[#00DAFB]">@reel_farm</span> by <span className="font-semibold text-[#00DAFB]">@_mattwelter</span> for potential tiktok video creation.<br />
              useful for anyone looking to scale short-form content fast.</li>
              <li>started building startup #1:<br />
              the UI, auth, apis, supabase for the first startup idea (should be done within a week).<br />
              im currently at day 0 for startup #1.</li>
            </ol>
            <p>Key lessons today:</p>
            <p>➝ Validate your niche before you fall in love with the idea because regulation can kill momentum.<br />
            ➝ Every project, even a blog, is to train skills you&apos;ll need later.</p>
            <p>Keep showing up.</p>
          </div>
          <div className="mt-8 flex justify-end">
            <a
              href={shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#00DAFB] text-white rounded-lg font-semibold shadow hover:bg-[#00b8c7] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="120" rx="24" fill="black"/>
                <path d="M85 35H100L67.5 70L105 120H79L60 95L41 120H15L52.5 70L20 35H45L60 55L75 35ZM80 110H90L50 50H40L80 110Z" fill="white"/>
              </svg>
              Condividi su X
            </a>
          </div>
        </article>
      </div>
    );
  }

  // Rendering standard per tutti gli altri post
  const postData = await getPostData(id);

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <ProgressTracker startDate="2025-05-01" />
      <article className="bg-white rounded-xl shadow-lg p-8 md:p-12 mt-6 mb-8 border border-[#00DAFB]/10">
        <div className="mb-4 flex flex-col gap-1">
          <span className="text-[#00DAFB] font-semibold text-sm uppercase tracking-widest">
            {postData.date}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-2">
            {postData.title}
          </h1>
          {postData.description && (
            <p className="text-lg text-gray-600 mb-2">{postData.description}</p>
          )}
        </div>
        <hr className="my-6 border-[#00DAFB]/20" />
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: postData.content }} />
        </div>
      </article>
    </div>
  );
}