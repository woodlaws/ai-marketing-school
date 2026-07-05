# 🤖 AI 마케팅 스쿨 — 랜딩페이지

> **거상스쿨 AI 마케팅 스쿨 12주 풀 패키지** 공식 랜딩페이지  
> Cloudflare Pages + GitHub 정적 배포 구조

---

## 📁 프로젝트 파일 구조

```
ai-marketing-school/
│
├── index.html              ← 메인 랜딩페이지 HTML (시맨틱 마크업)
├── style.css               ← 전체 CSS 스타일시트 (반응형 포함)
├── script.js               ← 인터랙티브 기능 JavaScript
├── README.md               ← 프로젝트 설명 및 배포 가이드
│
└── images/                 ← 이미지 파일 폴더
    ├── ai-tools-new.png           (AI 도구 소개 이미지)
    ├── roadmap-v2.jpg             (3개월 완전정복 로드맵)
    ├── month1-roadmap-new.jpg     (1개월차 로드맵)
    ├── month2-roadmap-new.jpg     (2개월차 로드맵)
    ├── month3-roadmap-new.jpg     (3개월차 로드맵)
    ├── result-graph-new.jpg       (수강 효과 그래프)
    ├── instructor-photo.jpg       (강사 프로필 사진)
    ├── instructor-books-v2.jpg    (강사 저서 이미지)
    ├── week1-notion.jpg           (1주차 강의 이미지)
    ├── week2-gemini.jpg           (2주차 강의 이미지)
    ├── week3-chatgpt.jpg          (3주차 강의 이미지)
    ├── week4-claude.jpg           (4주차 강의 이미지)
    ├── week5-blog.jpg             (5주차 강의 이미지)
    ├── week6-image.jpg            (6주차 강의 이미지)
    ├── week7-flow.jpg             (7주차 강의 이미지)
    ├── week8-shortform.jpg        (8주차 강의 이미지)
    ├── week9-codex.jpg            (9주차 강의 이미지)
    ├── week10-cowork1.jpg         (10주차 강의 이미지)
    ├── week11-cowork2.jpg         (11주차 강의 이미지)
    └── week12-vibecoding.jpg      (12주차 강의 이미지)
```

---

## 🚀 주요 기능

| 기능 | 설명 |
|------|------|
| **반응형 레이아웃** | PC(1400px) / 태블릿(768px) / 모바일(480px) 완전 지원 |
| **카운트다운 타이머** | 슈퍼 얼리버드 마감(2026-07-01 오전 12시) 실시간 카운트다운 |
| **스크롤 애니메이션** | IntersectionObserver 기반 reveal 애니메이션 |
| **FAQ 아코디언** | max-height 트랜지션 애니메이션 |
| **모바일 햄버거 메뉴** | 모바일 전용 토글 내비게이션 |
| **부드러운 앵커 스크롤** | 고정 내비게이션 오프셋 보정 스크롤 |
| **12주 커리큘럼 카드** | 주차별 강의 이미지 + 상세 내용 카드 |
| **강사 소개 섹션** | 프로필 사진, 스펙, 저서 이미지 포함 |

---

## 📋 섹션 구조

1. **NAVBAR** — 고정 내비게이션 (강사 소개 메뉴 포함)
2. **HERO** — 메인 헤드라인 + 통계 카운터 + CTA 버튼
3. **AI TOOLS** — 강의에서 다루는 AI 도구 이미지
4. **TARGET** — 수강 대상 4개 카드
5. **CURRICULUM** — 3개월 로드맵 + 1~12주차 커리큘럼 카드
6. **RESULT** — 수강 효과 그래프 이미지
7. **INSTRUCTOR** — 강사 소개 (사진, 스펙, 저서)
8. **FEATURES** — 왜 이 과정인가요? 9개 특장점 카드
9. **BONUS** — 수강생 전용 특별 선물 3개
10. **PRICING** — 슈퍼 얼리버드 + 정규가 + 결제방법 + 문의
11. **FAQ** — 자주 묻는 질문 4개 (아코디언)
12. **CTA FINAL** — 마감 카운트다운 + 최종 신청 버튼
13. **FOOTER** — 회사 정보 및 연락처

---

## 📦 GitHub 업로드 방법

### 방법 A: GitHub 웹사이트에서 직접 업로드

1. [github.com](https://github.com) 접속 → 로그인
2. **New repository** 클릭
3. Repository name 입력 (예: `ai-marketing-school`)
4. **Public** 선택 (Cloudflare Pages 무료 플랜은 Public 권장)
5. **Create repository** 클릭
6. **uploading an existing file** 링크 클릭
7. 아래 파일/폴더를 모두 드래그 앤 드롭:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
   - `images/` 폴더 전체
8. **Commit changes** 클릭

### 방법 B: Git CLI 사용

```bash
# 로컬 폴더에서 실행
git init
git add .
git commit -m "AI 마케팅 스쿨 랜딩페이지 초기 배포"
git branch -M main
git remote add origin https://github.com/[유저명]/[저장소명].git
git push -u origin main
```

---

## ☁️ Cloudflare Pages 배포 방법

### Step 1: Cloudflare 계정 준비
1. [dash.cloudflare.com](https://dash.cloudflare.com) 접속
2. 계정이 없으면 무료 가입

### Step 2: Pages 프로젝트 생성
1. 좌측 메뉴 → **Workers & Pages** → **Pages** 탭 클릭
2. **Create a project** 버튼 클릭
3. **Connect to Git** 선택

### Step 3: GitHub 연동
1. **Connect GitHub** 클릭 → GitHub 계정 인증
2. 업로드한 저장소 선택 (예: `ai-marketing-school`)
3. **Begin setup** 클릭

### Step 4: 배포 설정 입력

| 설정 항목 | 입력값 |
|-----------|--------|
| **Project name** | `ai-marketing-school` (원하는 이름) |
| **Production branch** | `main` |
| **Framework preset** | `None` |
| **Build command** | *(비워두기 — 입력하지 않음)* |
| **Build output directory** | `/` |
| **Root directory** | `/` |

### Step 5: 배포 완료
1. **Save and Deploy** 클릭
2. 약 1~2분 후 배포 완료
3. `https://[프로젝트명].pages.dev` URL로 접속 확인

---

## 🔄 파일 수정 후 재배포

GitHub에 파일을 업데이트하면 **Cloudflare Pages가 자동으로 재배포**합니다.

```bash
# 파일 수정 후 GitHub push
git add .
git commit -m "내용 수정: [변경 내용 요약]"
git push origin main
```

→ Push 후 약 1~2분 내 자동 재배포 완료

---

## 🛠️ 기술 스택

| 구분 | 사용 기술 |
|------|-----------|
| **HTML** | HTML5 시맨틱 마크업 |
| **CSS** | CSS3, Custom Properties, CSS Grid, Flexbox, `clamp()` |
| **JavaScript** | Vanilla JS (ES6+), IntersectionObserver, setInterval |
| **폰트** | Google Fonts — Noto Sans KR |
| **아이콘** | Font Awesome 6.4.0 (CDN) |
| **배포** | Cloudflare Pages (정적 호스팅) |
| **저장소** | GitHub |

---

## 🖼️ 외부 CDN 링크 (유지 필요)

```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

<!-- Font Awesome 6.4.0 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" />
```

---

## 📞 문의 정보

- **담당**: 권현임 교육팀장
- **전화**: 010-5795-8075
- **계좌**: 기업은행 667-045456-04-010 (거상스쿨(주))
- **신청 폼**: [Google Forms 링크](https://docs.google.com/forms/d/e/1FAIpQLSfgve1kf7GsMZvTV6Txyqp1nnFdZSgBV5W4bQDrj-a9WkbZcg/viewform)

---

## ✅ 완료된 작업 이력

- [x] 12주 커리큘럼 콘텐츠 업그레이드 (1~12주차 전체)
- [x] 전체 가로폭 확장 (1400px 기준)
- [x] 1~12주차 주차별 강의 이미지 삽입
- [x] 개월차별 로드맵 이미지 교체 (month1/2/3-roadmap-new.jpg)
- [x] 3개월 완전정복 로드맵 이미지 교체 (roadmap-v2.jpg)
- [x] 수강 효과 그래프 이미지 교체 (result-graph-new.jpg)
- [x] AI 솔루션 이미지 교체 (ai-tools-new.png)
- [x] 강사 소개 섹션 신규 추가 (instructor-photo.jpg, instructor-books-v2.jpg)
- [x] 얼리버드 금액 560,000원, 마감 7월 1일 오전 12시로 변경
- [x] 카운트다운 타이머 deadline 수정 (2026-07-01T00:00:00+09:00)
- [x] 커리큘럼 다운로드 링크 교체
- [x] 네비게이션에 "강사 소개" 메뉴 추가
- [x] HTML / CSS / JavaScript 파일 분리 (Cloudflare Pages 배포용)

---

© 2026 거상스쿨. All rights reserved.
