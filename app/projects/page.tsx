"use client"

import { Github, MoveRight } from "lucide-react";
import Link from "next/link";
import { ALL_PROJECTS } from "../lib/projects";

export default function ProjectPage() {

    return (
        <div className="flex flex-col gap-12">
            <header className="flex flex-col gap-4 animate-fade-up">
                <h1 className="text-4xl text-text font-black tracking-tight drop-shadow-sm">Projects</h1>
                <p className="text-text-secondary text-lg font-medium delay-100">경험하며 배운 기술들을 프로젝트에 녹여냈습니다.</p>
            </header>

            {/* 프로젝트 그리드 영역 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 [perspective:1500px]">
                {ALL_PROJECTS.map((project, index) => (
                    <div
                        key={project.id}
                        style={{ animationDelay: `${index * 120}ms` }}
                        className="group relative flex flex-col justify-between p-8 bg-bg-second/80 backdrop-blur-xl rounded-[32px] border border-text/5 hover:border-primary/40 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 min-h-[250px] animate-suit-up overflow-hidden"
                    >
                        {/* Iron man arc reactor style glow on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-0 blur-2xl"></div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div>
                                <h3 className="text-2xl text-text font-black mb-2 tracking-tight group-hover:text-primary transition-colors duration-500">{project.title}</h3>
                            {project.description && (
                                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                            )}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs text-secondary px-3 py-1 bg-background rounded-full border border-secondary font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {/* 하단 버튼 영역 */}
                        <div className="relative z-10 flex justify-between items-center mt-auto pt-6">
                            <Link
                                href={`/projects/${project.id}`}
                                className="flex items-center gap-2 text-sm font-black text-primary hover:gap-4 transition-all"
                            >
                                Learn more <MoveRight size={16} />
                            </Link>
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-3 bg-background rounded-full border border-text/10 text-text-secondary hover:text-primary hover:border-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                                >
                                    <Github size={15} />
                                </a>
                            )}
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
