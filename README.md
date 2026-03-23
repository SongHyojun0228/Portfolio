# 👨🏻‍💻 송효준의 인터랙티브 개발자 포트폴리오 (Interactive Dev Portfolio)

> 단순히 이력을 나열하는 것을 넘어, 백엔드 개발자로서의 기술적 역량과 사용자 경험에 대한 고민을 증명하기 위해 자체 구축한 인터랙티브 포트폴리오 프로젝트입니다.

🔗 **라이브 서비스 배포 (Vercel)**: [https://portfolio-five-nu-srmhgxn3o4.vercel.app/](https://portfolio-five-nu-srmhgxn3o4.vercel.app/)

---

## 📌 주요 특징 (Key Features)

### 1. 실시간 Github README 연동 및 Markdown 파싱
*   각 프로젝트의 상세 설명은 서버에 하드코딩하지 않고, **Github Repository의 `README.md`를 실시간으로 Fetch(가져오기)하여 렌더링**하도록 설계했습니다.
*   `react-markdown`, `remark-gfm`, `@tailwindcss/typography` 플러그인을 결합해 깃허브 원본 마크다운 문법(코드 블록, 표, 인용구 등)을 자체 다크모드 스타일에 맞게 완벽하게 구현했습니다.

### 2. 정적 마크다운 블로그 엔진(SSG) 자체 구축
*   외부 블로그 서비스 플랫폼(Notion, Tistory, Velog 등)에 의존하지 않습니다.
*   프로젝트 내의 `posts/` 폴더에 `.md` 파일을 추가하면 `gray-matter` 라이브러리로 Frontmatter(메타데이터)를 파싱하고, Next.js의 정적 페이지 생성(SSG)을 이용하여 번개같이 빠른 속도로 블로그 글이 렌더링됩니다.
*   **프로젝트-블로그 유기적 결합:** 블로그 글 작성 시 `tags`에 특정 프로젝트 이름(예: `Dev Portfolio`, `BookShelf`)을 넣으면, **해당 프로젝트의 상세 페이지(README가 보이는 화면) 사이드바에 관련된 트러블슈팅 글이 자동으로 맵핑되어 노출**됩니다. 면접관에게 코드 설명과 트러블슈팅 과정을 동시에 어필하는 동선을 구축했습니다.

### 3. 압도적인 성능과 UI/UX (Bento Grid & 3D Staggered Animation)
*   프로필, 기술 스택, 자격증 등을 애플(Apple) 스타일의 입체적인 **Bento Grid 레이아웃**으로 배치해 가독성을 극대화했습니다.
*   마치 아이언맨 수트 파츠가 허공에서 결합하는 듯한 입체감을 주는 **커스텀 3D 애니메이션(`animate-suit-up`)**을 개발하여 적용했습니다. (`transform-style: preserve-3d`, `translateZ`, `blur` 및 `cubic-bezier` 활용)
*   **완벽한 다크/라이트 모드 지원:** `next-themes` 패키지를 활용한 토글 기능과 Native CSS 변수 매핑 오버라이드를 통해 유저의 시스템 설정(OS) 또는 사용자 수동 토글 시 부드럽고 자연스러운 전환이 반영됩니다.

---

## 🚀 테크 스택 (Tech Stack)

*   **Framework**: Next.js 16 (App Router, Server Components)
*   **Library**: React 19
*   **Styling**: Tailwind CSS v4, Lucide React (Icons)
*   **Markdown processing**: `gray-matter` (Frontmatter 파싱), `react-markdown`, `remark-gfm`, `@tailwindcss/typography`
*   **Theme Management**: `next-themes` (Dark/Light mode)

---

## 📁 폴더 구조 및 아키텍처

```text
/app
 ├── /blog                   # 자체 구축 Markdown 기술 블로그 (리스트 및 슬러그 동적 라우팅)
 │    ├── page.tsx           # 프로젝트 이름 태그별 필터링 기능 (BlogListClient 내장)
 │    └── [slug]/page.tsx    # 마크다운 본문 파싱 페이지
 ├── /components             # 전역 재사용 컴포넌트 
 │    ├── Sidebar.tsx        # 고정형(Sticky) 네비게이션 및 다크모드(ThemeToggle) 통합
 │    ├── ThemeToggle.tsx    # next-themes를 활용한 다크/라이트 모드 토글
 │    └── ThemeProvider.tsx  # Next.js Hydration Warning 방지 wrapper
 ├── /lib
 │    ├── me.ts              # 개발자 이력(나이, 스택, 포트폴리오) 데이터 로직
 │    ├── posts.ts           # 로컬 file system 기반 '.md'파일 파싱 유틸리티 (gray-matter)
 │    └── projects.ts        # 프로젝트 이력 보관 (자동 블로그 카테고리 맵핑용)
 ├── /posts                  # 실제 Markdown 파일들이 저장되는 디렉토리 (사용자가 글을 쓰는 곳)
 ├── /projects               # 진행한 프로젝트 목록 (Bento Grid)
 │    ├── page.tsx           # 프로젝트 목록
 │    └── [id]/page.tsx      # Github API 호출 및 README 렌더링, 관련 포스트 자동 렌더링
 ├── globals.css             # Tailwind v4 설정 및 커스텀 3D CSS Animation 선언
 └── page.tsx                # 메인 Home 화면 (이력 기반 Bento UI + 최근 작성 블로그 Top 3 연동)
```

---

## 🛠️ 회고 및 트러블슈팅 (💡)

1. Next.js 16과 Tailwind v4의 변경된 환경 속에서 기존의 `tailwind.config.js` 방식 대신 `@theme`와 네이티브 CSS 변수 제어 방식으로 다크모드 최적화를 직접 연구해 구현했습니다.
2. 프로젝트 상세 화면에서 사이드바가 스크롤과 함께 바닥으로 꺼지는 레이아웃 이슈를 `sticky` 기능으로 해결하였고, 사용자 시점에서 편리하게 테마(다크모드)를 토글할 수 있게 좌측 하단에 고정시켰습니다.
3. 프로젝트 리스트 페이지와 블로그 리스트 페이지의 애니메이션 최적화를 위해 요소 인덱스(`index`)를 활용한 CSS 지연(`animationDelay`)을 적용하여 수트가 차례대로 장착되는 시각적 재미를 주었습니다.