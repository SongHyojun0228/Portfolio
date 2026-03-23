import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// posts 디렉토리 경로 (프로젝트 최상단)
const postsDirectory = path.join(process.cwd(), 'app', 'posts');

export interface PostData {
    id: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
    contentHTML?: string;
}

export function getSortedPostsData(): PostData[] {
    // 디렉토리가 없으면 빈 배열 반환
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }
    
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.filter(fileName => fileName.endsWith('.md')).map(fileName => {
        // 확장자 제거 후 id값 생성 (.md 뒷부분)
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        // gray-matter를 이용한 메타데이터(frontmatter) 파싱
        const matterResult = matter(fileContents);

        return {
            id,
            ...(matterResult.data as { title: string; date: string; description: string; tags: string[] }),
        };
    });

    // 날짜 최신순 정렬
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
        id,
        content: matterResult.content,
        ...(matterResult.data as { title: string; date: string; description: string; tags: string[] }),
    };
}
