export interface Qualification {
    id: string;
    title: string;
    organization: string;
    date: string;
}

export interface Skill {
    category: string;
    items: string[];
}

export interface MyInfo {
    name: string;
    age: number;
    final_education: string;
    character: string[];
    skills: Skill[];
    qualifications: Qualification[];
    githubUrl: string;
}

export const Me: MyInfo = {
    name: "송효준",
    age: 24,
    final_education: "숭실대학교 휴학 중",
    character: [
        "성실함"
    ],
    skills: [
        {
            category: "Backend",
            items: ["Node.js", "NestJS", "Java", "Spring Boot", "Spring MVC", "JPA (Hibernate)", "TypeScript"]
        },
        {
            category: "Frontend",
            items: ["HTML5 / CSS3", "React", "JavaScript", "Next.js", "Thymeleaf"]
        },
        {
            category: "Database & API",
            items: ["Oracle", "PostgreSQL", "MongoDB", "RESTful API", "GraphQL"]
        },
        {
            category: "Infra",
            items: ["AWS (Ubuntu)", "Oracle XE", "Render", "Railway", "Vercel"]
        },
        {
            category: "Build & Tools",
            items: ["Git", "GitHub", "Gradle"]
        },
        {
            category: "AI Tools",
            items: ["Cursor", "Claude", "Gemini"]
        }
    ],
    qualifications: [
        {
            id: "25251020160C",
            title: "정보처리산업기사",
            organization: "과학기술정보통신부",
            date: "-"
        },
        {
            id: "SQLD-057012725",
            title: "SQLD",
            organization: "한국데이터산업진흥원",
            date: "2027.06.27"
        },
    ],
    githubUrl: "https://github.com/SongHyojun0228"
}