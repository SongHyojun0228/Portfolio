import { ALL_PROJECTS } from "@/app/lib/projects";
import { getSortedPostsData } from "@/app/lib/posts";
import { MoveLeft, Github, ExternalLink, Code2, NotebookPen } from "lucide-react";
import { parseUrl } from "next/dist/shared/lib/router/utils/parse-url";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const project = ALL_PROJECTS.find((p) => p.id === Number(id));

    const allPosts = getSortedPostsData();
    const relatedPosts = project ? allPosts.filter(post => post.tags?.includes(project.title)) : [];

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                <p className="text-2xl font-bold opacity-50">프로젝트를 찾을 수 없습니다.</p>
                <Link href="/projects" className="text-primary hover:underline flex items-center gap-2">
                    <MoveLeft size={20} /> 프로젝트 목록으로 돌아가기
                </Link>
            </div>
        )
    }

    const githubUrl: string = project?.github;
    const parsedUrl = new URL(githubUrl);
    const repoPath = parsedUrl.pathname.substring(1);
    const githubAPI = `https://raw.githubusercontent.com/${repoPath}/main/README.md`;
    const gitResponse = await fetch(githubAPI, { next: { revalidate: 3600 } });

    if (!gitResponse.ok) {
        return <div>README.md를 불러오는 데에 실패했습니다.</div>
    }

    const README = await gitResponse.text();

    return (
        <div className="flex flex-col gap-10 max-w-5xl mx-auto pb-20">
            {/* ⬅️ Top Navigation - First to appear */}
            <nav className="flex items-center justify-between animate-fade-up">
                <Link
                    href="/projects"
                    className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors group px-5 py-2.5 bg-text/5 rounded-full backdrop-blur-sm border border-text/5 w-fit hover:bg-text/10"
                >
                    <MoveLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-bold">Back to Projects</span>
                </Link>
                <div className="flex items-center gap-3">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-6 py-2.5 bg-text text-background rounded-full hover:scale-105 hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)] transition-all duration-300 text-sm font-bold"
                    >
                        <Github size={18} /> Repository
                    </a>
                </div>
            </nav>

            {/* 🚀 Hero Section - Breathtaking Title Reveal */}
            <header className="flex flex-col gap-6 py-8 border-b border-text/10">
                <div className="flex flex-col gap-4 animate-fade-up delay-100">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-text via-text to-primary/80 drop-shadow-sm italic animate-blur-reveal delay-200">
                        {project.title.toUpperCase()}
                    </h1>
                    {project.description && (
                        <p className="text-xl text-text-secondary font-medium animate-fade-up delay-300">
                            {project.description}
                        </p>
                    )}
                </div>

                {/* ✨ Tags with 3D Hover & Glow */}
                <div className="flex flex-wrap gap-2 mt-4 animate-fade-up delay-400">
                    {project.tags.map((tag, idx) => (
                        <span
                            key={tag}
                            style={{ animationDelay: `${400 + (idx * 50)}ms` }}
                            className="px-4 py-1.5 bg-primary/10 text-primary font-bold rounded-lg text-sm backdrop-blur-sm border border-primary/20 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_4px_20px_var(--primary)] transition-all duration-300 animate-fade-up shadow-sm cursor-default"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </header>

            {/* 📄 Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-4">

                {/* 📝 Markdown Section - Sweeping entry */}
                <article className="lg:col-span-8 xl:col-span-8 prose dark:prose-invert max-w-none animate-fade-up delay-500
                    prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-text
                    prose-h1:text-4xl prose-h1:border-b prose-h1:border-text/10 prose-h1:pb-4 prose-h1:mb-8
                    prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:flex prose-h2:items-center prose-h2:gap-2
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
                    prose-hr:border-text/10 prose-hr:my-12
                    prose-blockquote:border-l-primary prose-blockquote:border-l-4 prose-blockquote:bg-primary/5 prose-blockquote:py-3 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-text-secondary prose-blockquote:my-8
                ">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{README}</ReactMarkdown>
                </article>

                {/* 🔗 Sidebar Info (Sticky) - Delayed entrace + magical glow */}
                <aside className="lg:col-span-4 xl:col-span-4 flex flex-col gap-6 sticky top-8 animate-fade-up delay-700">
                    <div className="relative group">
                        {/* 🔥 Magical Background Glow on Hover */}
                        <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 rounded-[36px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10"></div>

                        <div className="relative p-8 bg-bg-second/90 backdrop-blur-xl rounded-[32px] border border-text/10 flex flex-col gap-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 z-10">

                            {/* Repository Info */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xs font-bold text-text-secondary uppercase tracking-widest flex items-center gap-2">
                                    <Code2 size={16} /> Repository Info
                                </h3>
                                <a href={project.github} target="_blank" rel="noreferrer" className="text-sm font-semibold text-text hover:text-primary transition-colors break-all flex items-center gap-3 bg-background p-4 rounded-2xl border border-text/5 group/link hover:scale-[1.02] hover:shadow-md duration-300">
                                    <Github size={20} className="flex-shrink-0" />
                                    <span className="truncate">{repoPath}</span>
                                    <ExternalLink size={16} className="ml-auto opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all" />
                                </a>
                            </div>

                            <div className="w-full h-px bg-text/5" />

                            {/* Tech Stack */}
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xs font-bold text-text-secondary uppercase tracking-widest">Tech Stack Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1.5 bg-background text-text-secondary rounded-xl text-xs font-bold border border-text/5 shadow-sm hover:text-text hover:border-text/20 transition-colors cursor-default">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {relatedPosts.length > 0 && (
                                <>
                                    <div className="w-full h-px bg-text/5" />

                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-xs font-bold text-text-secondary uppercase tracking-widest flex items-center gap-2">
                                            <NotebookPen size={16} /> Related Posts
                                        </h3>
                                        <div className="flex flex-col gap-3">
                                            {relatedPosts.map(post => (
                                                <Link 
                                                    key={post.id} 
                                                    href={`/blog/${post.id}`}
                                                    className="group/post flex flex-col gap-1.5 p-4 rounded-2xl bg-background border border-text/5 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                                                >
                                                    <h4 className="text-sm font-bold text-text group-hover/post:text-primary transition-colors line-clamp-2">{post.title}</h4>
                                                    <span className="text-[11px] font-semibold text-text-secondary opacity-70">{post.date}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}

                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
