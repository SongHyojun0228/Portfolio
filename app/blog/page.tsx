import { getSortedPostsData } from "../lib/posts";
import BlogListClient from "./BlogListClient";

export default async function BlogPage() {
    const posts = getSortedPostsData();

    return (
        <div className="flex flex-col gap-12">
            <header className="flex flex-col gap-4 animate-fade-up">
                <h1 className="text-4xl text-text font-black tracking-tight drop-shadow-sm">Tech Blog</h1>
                <p className="text-text-secondary text-lg font-medium delay-100">개발하며 얻은 인사이트와 트러블슈팅 경험을 기록합니다.</p>
            </header>

            <BlogListClient posts={posts} />
        </div>
    )
}
