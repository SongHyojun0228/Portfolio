"use client"

import Link from "next/link";
import { Calendar } from "lucide-react";
import { useState } from "react";
import type { PostData } from "../lib/posts";

import { ALL_PROJECTS } from "../lib/projects";

export default function BlogListClient({ posts }: { posts: PostData[] }) {
    const [selectedTag, setSelectedTag] = useState<string>("ALL");

    // 프로젝트 목록에서 이름(title)만 추출하여 카테고리 탭으로 구성
    const projectNames = ALL_PROJECTS.map(project => project.title);
    const categories = ["ALL", ...projectNames];

    const filteredPosts = selectedTag === "ALL" 
        ? posts 
        : posts.filter(post => post.tags?.includes(selectedTag));

    return (
        <div className="flex flex-col gap-6 w-full">
            {/* 카테고리 (로컬 태그) 탭 */}
            {categories.length > 1 && (
                <div className="flex flex-wrap gap-2 p-1 bg-bg-second rounded-xl w-fit animate-fade-up delay-200 mt-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedTag(cat)}
                            className={`px-5 py-2 rounded-lg text-sm font-bold transition-all hover:text-primary ${
                                selectedTag === cat
                                    ? "bg-background text-primary shadow-sm"
                                    : "text-text-secondary hover:text-text cursor-pointer"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            )}

            <div className="grid grid-cols-1 gap-6 mt-6 [perspective:1500px]">
                {filteredPosts.length === 0 ? (
                    <div className="text-text-secondary p-8 bg-bg-second/50 rounded-2xl border border-text/10">아직 작성된 글이 없습니다.</div>
                ) : (
                    filteredPosts.map((post, index) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.id}`}
                            style={{ animationDelay: `${index * 120}ms` }}
                            className="group relative flex flex-col justify-between p-8 bg-background backdrop-blur-xl rounded-[32px] border border-text/5 hover:border-primary/40 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 min-h-[160px] animate-suit-up overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-0"></div>

                            <div className="relative z-10 flex flex-col gap-4">
                                <div className="flex items-center gap-2 text-xs font-bold text-text-secondary uppercase tracking-wider">
                                    <Calendar size={14} />
                                    {post.date}
                                </div>
                                <h3 className="text-3xl text-text font-black tracking-tight group-hover:text-primary transition-colors duration-500 line-clamp-1">{post.title}</h3>
                                <p className="text-text-secondary text-base line-clamp-2">
                                    {post.description}
                                </p>
                            </div>
                            
                            <div className="relative z-10 flex flex-wrap gap-2 mt-6">
                                {post.tags?.map((tag: string) => (
                                    <span key={tag} className="text-[11px] text-text-secondary px-3 py-1 bg-bg-second/50 rounded-full border border-text/10 font-bold uppercase tracking-wider shadow-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </div>
    )
}
