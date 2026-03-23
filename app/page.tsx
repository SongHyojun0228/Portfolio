import { Me } from "@/app/lib/me";
import { Github, GraduationCap, Award, Terminal, Code2, Sparkles, BookOpen, MoveRight, Calendar } from "lucide-react";
import Link from "next/link";
import { getSortedPostsData } from "@/app/lib/posts";

export default function Home() {
  const latestPosts = getSortedPostsData().slice(0, 3);

  return (
    <div className="flex flex-col gap-12 pb-24 max-w-6xl mx-auto px-4 md:px-8">

      {/* 🚀 Hero Section */}
      <section className="flex flex-col gap-8 pt-12 md:pt-24 animate-fade-up">
        <div className="flex flex-col gap-4">
          <span className="text-primary font-bold tracking-widest uppercase text-sm animate-fade-up delay-100 italic">
            Backend Developer Portfolio
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[100px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-text via-text to-primary/80 drop-shadow-sm animate-blur-reveal delay-200">
            {Me.name}
          </h1>
          <p className="text-2xl md:text-3xl text-text-secondary font-medium max-w-2xl leading-relaxed animate-fade-up delay-300">
            기술의 깊이를 탐구하고, 사용자 경험을 고민하는 개발자입니다.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-6 animate-fade-up delay-400">
          <a
            href={Me.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-text text-background rounded-full hover:scale-105 hover:shadow-[0_5px_25px_rgba(0,0,0,0.2)] transition-all duration-300 font-bold group"
          >
            <Github size={20} className="group-hover:-rotate-12 transition-transform" />
            GitHub Profile
          </a>
          <Link
            href="/projects"
            className="flex items-center gap-2 px-8 py-4 bg-bg-second/50 text-text hover:text-primary rounded-full hover:bg-bg-second border border-text/5 hover:scale-105 transition-all duration-300 font-bold group"
          >
            <Code2 size={20} className="group-hover:-rotate-12 transition-transform" />
            View Projects
          </Link>
        </div>
      </section>

      {/* 📏 Divider */}
      <hr className="border-text/10 my-4 animate-fade-up delay-400" />

      {/* 🍱 Bento Grid Layout for Info */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up delay-500">

        {/* 👤 Profile Badge Card */}
        <div className="p-8 bg-bg-second/60 backdrop-blur-xl rounded-[36px] border border-text/10 flex flex-col gap-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden">
          <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-xl"></div>

          <div className="flex items-center gap-3 text-primary z-10">
            <GraduationCap size={28} />
            <h2 className="text-2xl font-black tracking-tight text-text">Profile</h2>
          </div>

          <div className="flex flex-col gap-5 z-10 w-full mt-2">
            <div className="flex justify-between items-center border-b border-text/10 pb-4">
              <span className="text-text-secondary font-bold">나이</span>
              <span className="text-xl font-black text-text">{Me.age}살(03년생)</span>
            </div>
            <div className="flex justify-between items-center border-b border-text/10 pb-4">
              <span className="text-text-secondary font-bold">최종학력</span>
              <span className="text-lg font-black text-text text-right">{Me.final_education}</span>
            </div>
            <div className="flex flex-col gap-3 pt-2">
              <span className="text-text-secondary font-bold">성격</span>
              <div className="flex flex-wrap gap-2">
                {Me.character.map((char) => (
                  <span key={char} className="px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-black flex items-center gap-1.5 shadow-sm">
                    <Sparkles size={14} /> {char}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 🛠️ Skills Matrix Card (Takes up 2 columns) */}
        <div className="p-8 bg-background border border-text/10 rounded-[36px] flex flex-col gap-6 lg:col-span-2 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden">
          <div className="absolute -inset-2 bg-gradient-to-tl from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-2xl"></div>

          <div className="flex items-center gap-3 text-text z-10">
            <Terminal size={28} />
            <h2 className="text-2xl font-black tracking-tight">Tech Stack</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 z-10 w-full mt-4 h-full">
            {Me.skills.map((skillGroup) => (
              <div key={skillGroup.category} className="flex flex-col items-start p-6 bg-bg-second/40 rounded-[24px] border border-text/5 hover:border-text/20 hover:bg-bg-second transition-all group/skill">
                <span className="text-sm font-black text-text-secondary uppercase tracking-widest mb-4 group-hover/skill:text-primary transition-colors shadow-sm">
                  {skillGroup.category}
                </span>
                <div className="flex flex-wrap gap-2 w-full">
                  {skillGroup.items.map(item => (
                    <span key={item} className="px-3 py-1.5 bg-background text-text rounded-lg text-[13px] font-bold shadow-sm border border-text/5 hover:scale-105 hover:-translate-y-0.5 transition-all cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 📜 Qualifications Vault (Full width row) */}
        <div className="p-10 bg-text text-background rounded-[40px] flex flex-col gap-8 md:col-span-2 lg:col-span-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:scale-[1.01] hover:-translate-y-1 transition-all duration-700 group relative overflow-hidden">
          <div className="absolute -inset-4 bg-gradient-to-r from-background/5 via-transparent to-background/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-0 blur-3xl"></div>

          <div className="flex items-center gap-3 text-background z-10">
            <Award size={32} />
            <h2 className="text-3xl font-black tracking-tight">Qualifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 z-10 mt-2">
            {Me.qualifications.map((qual) => (
              <div key={qual.id} className="p-7 bg-background/5 rounded-[28px] border border-background/10 hover:bg-background/10 hover:border-background/20 transition-all flex flex-col gap-4 relative overflow-hidden">
                <span className="absolute -top-4 -right-4 p-4 font-black text-7xl opacity-[0.03] italic select-none pointer-events-none">
                  {qual.title.substring(0, 3)}
                </span>

                <div className="flex justify-between items-start gap-4 z-10">
                  <h3 className="text-2xl font-black text-background leading-tight">{qual.title}</h3>
                  <span className="px-4 py-1.5 bg-background/20 rounded-full text-xs font-bold whitespace-nowrap self-start">
                    {qual.date}
                  </span>
                </div>

                <div className="flex items-end justify-between text-background/70 font-medium text-sm mt-auto z-10 pt-4">
                  <span className="flex items-center font-bold tracking-wide">{qual.organization}</span>
                  <span className="font-mono text-[10px] opacity-50 bg-background/10 px-2 py-1 rounded">{qual.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 📚 Recent Blog Posts */}
        {latestPosts.length > 0 && (
          <div className="md:col-span-2 lg:col-span-3 flex flex-col gap-8 mt-12 animate-fade-up delay-700">
            <div className="flex items-center justify-between border-b border-text/10 pb-4">
              <div className="flex items-center gap-3 text-text">
                <BookOpen size={28} className="text-primary" />
                <h2 className="text-3xl font-black tracking-tight">Recent Logs</h2>
              </div>
              <Link href="/blog" className="text-sm font-bold text-text-secondary hover:text-primary transition-colors flex items-center gap-1 group/more px-4 py-2 rounded-full hover:bg-primary/5">
                모두 보기 <MoveRight size={14} className="group-hover/more:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestPosts.map((post, idx) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  style={{ animationDelay: `${idx * 150}ms` }}
                  className="group/blog relative flex flex-col justify-between p-7 bg-bg-second/40 rounded-[28px] border border-text/5 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 min-h-[200px] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/blog:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex flex-col h-full gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-text-secondary uppercase tracking-widest">
                            <Calendar size={12} />
                            {post.date}
                        </div>
                        <h3 className="text-xl text-text font-black tracking-tight group-hover/blog:text-primary transition-colors duration-300 line-clamp-2">{post.title}</h3>
                        <p className="text-sm text-text-secondary line-clamp-2 mt-1">{post.description}</p>
                    </div>
                    
                    <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-4">
                        {post.tags?.slice(0, 3).map((tag: string) => (
                            <span key={tag} className="text-[10px] text-text-secondary px-2.5 py-1 bg-background rounded-md border border-text/5 font-bold uppercase shadow-sm">
                                {tag}
                            </span>
                        ))}
                        {post.tags && post.tags.length > 3 && (
                            <span className="text-[10px] text-text-secondary px-2 py-1 font-bold">+{post.tags.length - 3}</span>
                        )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </section>
    </div>
  );
}
