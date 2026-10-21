export const profile = {
  name: "Ji-Eun Han",
  nativeName: "한지은",
  role: "AI Researcher",
  organization: "KT Frontier AI Lab",
  location: "Seoul, South Korea",
  email: "hanji0514@gmail.com",
  workEmail: "ji-eun.han@kt.com",
  linkedin: "",
  photo: "",
  cv: "",
  focus: ["Large Language Models", "Reinforcement Learning", "Reasoning", "Reliable AI", "Code Generation"],
  about: [
    "I am an AI Researcher at KT (Korea Telecom) Frontier AI Lab, where I work on KT's large language model Mi:dm, reinforcement learning-based post-training, reasoning models, and reliability.",
    "My current research focuses on reinforcement learning especially on abstention-aware AI, execution-based reinforcement learning for code generation. I received my M.S. in Artificial Intelligence and B.S. in Computer Engineering from Ajou University.",
    "My interest in language and culture began long before my research career. Studying English and Japanese at a foreign language high school sparked my curiosity about linguistic and cultural diversity—an interest that continues to shape my research in multilingual and culturally aware language models.",
    "Outside of research, I'm currently learning Mandarin Chinese and enjoy exploring new languages and cultures. 🌏"
  ]
};

export const news = [
  { date: "2026", text: "CulturePRM was accepted as a poster at EMNLP 2026. See you at Budapest 🇭🇺" },
  { date: "2026", text: "SciGraphSelect was accepted to the NeurIPS 2026 AI4Science Workshop." },
  { date: "2026", text: "Mi:dm K 2.5 Pro and Mi:dm 2.0 technical reports were released on arXiv." },
  { date: "2024", text: "PSYDIAL was presented orally at LREC-COLING 2024." }
];

export const publications = [
  {
    title: "SciGraphSelect: Auditable Scientific Data Selection through Knowledge-Reasoning Graphs",
    authors: "MiHyeon Kim*, Ji-Eun Han*, Eunkyeong Lee*, Jeehyun Lim, Hwijung Ryu",
    venue: "NeurIPS 2026 AI4Science Workshop (Poster)",
    year: "2026",
    paper: "#",
    note: "* Equal contribution. Paper link to be added."
  },
  {
    title: "CulturePRM: A Process Reward Model for Mitigating Cultural Overriding in Cultural Reasoning",
    authors: "Ji-Eun Han, Yoonseok Heo",
    venue: "EMNLP 2026 (Poster)",
    year: "2026",
    paper: "#",
    note: "Paper link to be added."
  },
  {
    title: "Mi:dm K 2.5 Pro",
    authors: "KT Tech Innovation Group",
    venue: "arXiv preprint, 2026",
    year: "2026",
    paper: "https://arxiv.org/abs/2603.18788",
    contribution: "Core contributor"
  },
  {
    title: "Mi:dm 2.0 Korea-centric Bilingual Language Models",
    authors: "Donghoon Shin, Sejung Lee, Soonmin Bae, Hwijung Ryu, Changwon Ok, Hoyoun Jung, Hyesung Ji, Jeehyun Lim, Jehoon Lee, Ji-Eun Han, et al.",
    venue: "arXiv preprint, 2026",
    year: "2026",
    paper: "https://arxiv.org/abs/2601.09066"
  },
  {
    title: "Music2P: A Multi-Modal AI-Driven Tool for Simplifying Album Cover Design",
    authors: "Joong Ho Choi, Geonyeong Choi, Ji-Eun Han, Wonjin Yang, Zhi-Qi Cheng",
    venue: "CIKM 2024 Demo, pp. 5200–5204",
    year: "2024",
    paper: "https://doi.org/10.1145/3627673.3679223"
  },
  {
    title: "PSYDIAL: Personality-based Synthetic Dialogue Generation Using Large Language Models",
    authors: "Ji-Eun Han, Jun-Seok Koh, Hyeon-Tae Seo, Du-Seong Chang, Kyung-Ah Sohn",
    venue: "LREC-COLING 2024 (Oral), pp. 13321–13331",
    year: "2024",
    paper: "https://aclanthology.org/2024.lrec-main.1166/"
  },
  {
    title: "Fluency Matters! Controllable Style Transfer with Syntax Guidance",
    authors: "Ji-Eun Han, Kyung-Ah Sohn",
    venue: "ACL 2023 WASSA Workshop",
    year: "2023",
    paper: "https://aclanthology.org/2023.wassa-1.15/"
  }
];

export const experience = [
  {
    institution: "KT Frontier AI Lab",
    mark: "KT",
    logo: "images/kt-logo.png",
    role: "Research Scientist, Large Language Models",
    location: "Seoul, South Korea",
    period: "Mar. 2024 — Present",
    groups: [
      { title: "Mi:dm 3.0 · Reasoning AI Team", period: "2026 — Present", current: true, details: ["Reinforcement learning-based post-training for LLM reasoning and reliability", "Abstention-aware reinforcement learning", "Execution-based reinforcement learning and synthetic data construction for code generation"] },
      { title: "Mi:dm 2.0 series · Language AI Team", period: "2025", details: ["LLM pre-training, long-context extension, and depth up-scaling", "Synthetic code data generation for pre-training"] },
      { title: "Mi:dm Chat · AI Alignment Team", period: "2024", details: ["Research and development of conversational large language models"] }
    ]
  },
  { institution: "Korea Telecom", mark: "KT", logo: "images/kt-logo.png", role: "Research Intern, Natural Language Processing", location: "South Korea", period: "Jul. 2023 — Aug. 2023", details: ["LLM-based dialogue generation"] },
  { institution: "Electronics and Telecommunications Research Institute", mark: "ETRI", logo: "images/etri-logo.png", role: "Research Intern", location: "South Korea", period: "Jul. 2021 — Aug. 2021", details: ["Human pose estimation research"] },
  { institution: "Ajou University · Computer Systems Laboratory", mark: "AU", logo: "images/ajou-logo.png", role: "Undergraduate Research Intern", location: "South Korea", period: "Jul. 2020 — Jun. 2021", details: ["Accelerated DLRM training using hybrid CPU-GPU computation"] }
];

export const education = [
  { institution: "Ajou University", mark: "AU", logo: "images/ajou-logo.png", degree: "M.S. in Artificial Intelligence", period: "Aug. 2021 — Feb. 2024", details: "Advisor: Prof. Kyung-Ah Sohn" },
  { institution: "Ajou University", mark: "AU", logo: "images/ajou-logo.png", degree: "B.S. in Computer Engineering (Software)", period: "2017 — 2021", details: "Graduated 3rd in the department" }
];

export const internationalExperience = [
  { institution: "Carnegie Mellon University", mark: "CMU", logo: "images/cmu-logo.png", degree: "AI Talent Development Program (non-degree)", period: "Aug. 2023 — Feb. 2024", details: "South Korean government-funded program supported by IITP" },
  { institution: "Nanyang Technological University", mark: "NTU", logo: "images/ntu-logo.png", degree: "Exchange Student, Computer Engineering", period: "Aug. 2019 — Dec. 2019", details: "Singapore" }
];

export const awards = [
  { title: "National Science & Technology Scholarship", year: "2019 — 2020", issuer: "Ministry of Science and ICT, Republic of Korea", detail: "Two-year full tuition scholarship" },
  { title: "Excellence Award — SW-Centered University Joint Hackathon", year: "2021", issuer: "Institute of Information & Communications Technology Planning & Evaluation (IITP)", detail: "Team Leader, DOTORI Team" }
];

export const sections = ["about", "news", "publications", "experience", "education", "international", "awards"];
