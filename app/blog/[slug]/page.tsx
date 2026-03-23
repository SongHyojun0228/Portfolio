import { getPostData, getSortedPostsData } from "@/app/lib/posts";
import { MoveLeft, Calendar } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.id,
    }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postData = getPostData(slug);

    if (!postData) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                <p className="text-2xl font-bold opacity-50">글을 찾을 수 없습니다.</p>
                <Link href="/blog" className="text-primary hover:underline flex items-center gap-2">
                    <MoveLeft size={20} /> 블로그 목록으로 돌아가기
                </Link>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-10 max-w-4xl mx-auto pb-20">
            <nav className="flex items-center justify-between animate-fade-up">
                <Link
                    href="/blog"
                    className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors group px-5 py-2.5 bg-text/5 rounded-full backdrop-blur-sm border border-text/5 w-fit hover:bg-text/10"
                >
                    <MoveLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-bold">Back to Blog</span>
                </Link>
            </nav>

            {/* 헤더 섹션 */}
            <header className="flex flex-col gap-6 py-8 border-b border-text/10 animate-fade-up delay-100">
                <div className="flex items-center gap-3 text-text-secondary font-bold text-sm">
                    <Calendar size={18} />
                    {postData.date}
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text drop-shadow-sm">
                    {postData.title}
                </h1>
                <div className="flex flex-wrap gap-2 mt-2">
                    {postData.tags?.map((tag: string) => (
                        <span key={tag} className="px-3 py-1 bg-bg-second text-text-secondary text-xs font-bold rounded-lg border border-text/10">
                            {tag}
                        </span>
                    ))}
                </div>
            </header>

            {/* 마크다운 본문 */}
            <article className="prose dark:prose-invert max-w-none animate-fade-up delay-300
                prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-text
                prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-text/10 prose-h2:pb-3
                prose-h3:text-xl prose-h3:mt-8
                prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-primary prose-a:font-semibold prose-a:underline-offset-4 hover:prose-a:text-primary/80
                prose-strong:text-text prose-strong:font-bold
                prose-ul:text-text-secondary prose-ul:space-y-2
                prose-ol:text-text-secondary prose-ol:space-y-2
                prose-li:marker:text-primary/50
                prose-pre:bg-bg-second prose-pre:border prose-pre:border-text/10 prose-pre:rounded-2xl prose-pre:text-text prose-pre:shadow-sm
                prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-semibold prose-code:before:content-none prose-code:after:content-none
                prose-img:rounded-3xl prose-img:border prose-img:border-text/10 prose-img:shadow-md prose-img:my-10 hover:prose-img:shadow-xl hover:prose-img:-translate-y-1 prose-img:transition-all prose-img:duration-500
                prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:text-text-secondary
            ">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{postData.content}</ReactMarkdown>
            </article>
        </div>
    )
}
