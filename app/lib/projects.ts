// lib/projects.ts
export interface Project {
    id: number;
    title: string;
    tags: string[];
    github: string;
    description?: string; 
}

export const ALL_PROJECTS: Project[] = [
    {
        id: 1,
        title: "BookShelf", 
        description: "나만의 도서 우주, 서재 기록 및 리뷰 커뮤니티 플랫폼",
        tags: [
            "React", "TypeScript", "Next.js", "Apollo Client",
            "GraphQL", "Supabase Auth", "PostgreSQL", "Aladin API"
        ],
        github: "https://github.com/SongHyojun0228/BookShelf",
    },
    {
        id: 2,
        title: "Portfolio",
        description: "시선을 사로잡는 Bento UI와 압도적인 애니메이션을 적용한 백엔드 개발자 포트폴리오",
        tags: [
            "Next.js", "React", "TypeScript", "Tailwind CSS",
            "Lucide React", "React Markdown"
        ],
        github: "https://github.com/SongHyojun0228/portfolio",
    },
    {
        id: 3,
        title: "Programmer",
        description: "사용자가 문제를 선택하여 Java 언어로 직접 코드를 작성, 제출 할 수 있는 플랫폼",
        tags: [
            "Java", "Spring Boot", "Spring MVC", "Spring Security",
            "JPA", "Oracle", "HTML", "CSS",
            "JavaScript", "Thymeleaf", "AWS Lightsail"
        ],
        github: "https://github.com/SongHyojun0228/Programmer",
    },
    {
        id: 4,
        title: "JOBCHO",
        description: "잔디(JANDI)를 벤치마킹하여 만든 실시간 소통 및 프로젝트 관리 제공의 웹 기반 팀 협업 플랫폼",
        tags: [
            "Java", "Spring Boot", "Spring Security",
            "HTML", "CSS", "JavaScript"
        ],
        github: "https://github.com/SongHyojun0228/Jobcho_Project",
    },
    {
        id: 5,
        title: "SLIME SURVIVAL",
        description: "Java Swing과 Socket 통신을 이용해 멀티 플레이 환경을 구현한 생존 미니 게임",
        tags: [
            "Java", "Java Swing", "Socket"
        ],
        github: "https://github.com/SongHyojun0228/Mensa",
    },
    {
        id: 6,
        title: "PANATA",
        description: "운동, 특히 헬스를 좋아하는 사람들을 위한 커뮤니티 및 스토어 플랫폼",
        tags: [
            "Node.js", "Express", "HTML", "CSS",
            "JavaScript", "REST API"
        ],
        github: "https://github.com/SongHyojun0228/Gym-Project",
    },
    {
        id: 7,
        title: "MYCLOSET",
        description: "다양한 패션 정보와 스타일을 공유하고 소통할 수 있는 패션 커뮤니티",
        tags: [
            "Node.js", "Express", "HTML", "CSS",
            "JavaScript", "AJAX"
        ],
        github: "https://github.com/SongHyojun0228/Clothes-Project",
    }
];
