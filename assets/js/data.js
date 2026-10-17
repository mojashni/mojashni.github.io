/*
  Portfolio content — this is the only file you need to edit.
  Sources: resume (Oct 2026) and github.com/mojashni.
*/
window.PORTFOLIO = {
  name: "Mohammad Karimi Jashni",
  role: "Software Developer · AI & Backend Systems",
  location: "Calgary, AB",
  github: "mojashni",
  email: "mohammad.karimijashn@ucalgary.ca",

  // Shows the green status pill in the hero. Set to "" to hide it.
  status: "Open to internships",

  // Profile photo, e.g. "assets/img/me.jpg". Empty = initials.
  avatar: "",

  // Resume PDF placed next to index.html, e.g. "resume.pdf". Empty = button hidden.
  resume: "",

  intro:
    "Electrical and Computer Engineering master's student at the University of Calgary and Software Developer Intern at SAGA Wisdom, building production recommendation and AI systems.",

  about: [
    "I'm an MEng student in Electrical and Computer Engineering at the University of Calgary. At SAGA Wisdom I designed and shipped a course recommendation microservice from scratch to production, and prototyped observability for the platform's RAG-based course assistant.",
    "My work sits between machine learning and backend engineering: recommendation systems, RAG, data pipelines and model evaluation. I like building things that run in production and measuring whether they actually work."
  ],

  // Shown under "About me". icon: camera | gamepad | glove | palette (or leave out)
  interests: [
    { label: "Photography", icon: "camera" },
    { label: "Video games", icon: "gamepad" },
    { label: "Boxing", icon: "glove" },
    { label: "Oil painting", icon: "palette" }
  ],

  facts: [
    { label: "Currently", value: "Software Developer Intern, SAGA Wisdom" },
    { label: "Studying", value: "MEng ECE, University of Calgary" },
    { label: "Based in", value: "Calgary, AB" }
  ],

  skills: [
    { group: "Languages", icon: "code", items: ["Python", "SQL", "JavaScript", "Elixir"] },
    { group: "AI & Machine Learning", icon: "spark", items: ["PyTorch", "scikit-learn", "Pandas", "LangChain", "OpenAI API", "RAG", "Model Evaluation"] },
    { group: "Backend & Data", icon: "layers", items: ["FastAPI", "Phoenix LiveView", "SQLAlchemy", "PostgreSQL", "MySQL", "MongoDB", "OpenSearch", "ETL & Data Pipelines"] },
    { group: "Cloud & Tools", icon: "tool", items: ["AWS", "AWS Lambda", "Docker", "Databricks", "Git", "Langfuse", "OpenTelemetry", "Claude Code", "Cursor"] }
  ],

  // Featured projects. "highlights" are short bullet points; "repo" and "demo" are optional.
  projects: [
    {
      title: "MiniGenRec",
      subtitle: "LLM-native movie recommendation · Research, in progress",
      description:
        "Inspired by Netflix's GenRec: does a LoRA-fine-tuned text LLM beat a sequential recommender (SASRec) that sees the same events and metadata, under low data and item cold-start?",
      highlights: [
        "Reproducible evaluation protocol on MovieLens 1M with paired bootstrap tests across seeds",
        "Synthetic zero-shot cold-start split with cold-only Hit@10 and cold-intrusion metrics to catch misleading wins"
      ],
      tags: ["Python", "PyTorch", "Transformers", "PEFT / LoRA"],
      repo: "https://github.com/mojashni/minigenrec"
    },
    {
      title: "Chinook Leadership Evaluator",
      subtitle: "RAG · Full-stack · Oct 2025",
      description:
        "An educational chatbot that walks students through leadership case-study modules and grades their written answers with retrieval-augmented generation.",
      highlights: [
        "RAG grading service with LangChain, FAISS and OpenAI over 10 course modules",
        "FastAPI + PostgreSQL backend with resumable student sessions, plus an admin panel for progress tracking and Excel export",
        "Containerized with Docker and deployed as separate frontend, backend and RAG services on Railway"
      ],
      tags: ["Python", "FastAPI", "LangChain", "FAISS", "PostgreSQL", "Docker"]
    },
    {
      title: "AI-Generated Image Detection",
      subtitle: "Computer vision · Apr – May 2026",
      description:
        "A two-branch CNN that combines frequency (FFT) and texture (LBP) features to tell real images from AI-generated ones.",
      highlights: [
        "85.5% test accuracy (macro F1 0.85) on a held-out split",
        "Memmap feature cache for large-scale data; EMA checkpoints and early stopping for stable training"
      ],
      tags: ["Python", "PyTorch", "scikit-image", "CNN"],
      repo: "https://github.com/mojashni/fake-ai-image-detector"
    },
    {
      title: "Multimodal Garbage Classification",
      subtitle: "Multimodal ML · Team project · Feb – Mar 2026",
      description:
        "Classifies waste into 4 recycling categories by combining an image model (ResNet-50) with a text model (BERT).",
      highlights: [
        "Cached features from frozen backbones to cut training time and iterate faster on the classifier head",
        "Modular end-to-end pipeline built as a team with clear module ownership"
      ],
      tags: ["Python", "PyTorch", "ResNet-50", "BERT"],
      repo: "https://github.com/mojashni/garbageCollection"
    },
    {
      title: "Calgary Urban Growth Analysis",
      subtitle: "Data pipeline · Satellite imagery · Nov – Dec 2025",
      description:
        "Estimates the physical growth of Calgary's urban area over 24 years (2002–2024) from satellite imagery.",
      highlights: [
        "Collected and filtered 2,000+ images via NASA Worldview APIs and cloud-coverage data",
        "Detected urban regions with colour masking and boundary masks in OpenCV"
      ],
      tags: ["Python", "OpenCV", "Pandas", "REST APIs"],
      repo: "https://github.com/mojashni/ENSF_612_City_Geospectors"
    },
    {
      title: "Movie Success Prediction",
      subtitle: "Machine learning · Oct – Nov 2025",
      description:
        "Predicts whether a movie will be commercially successful (revenue > budget) before release, using 3,229 movies from TMDB.",
      highlights: [
        "Feature engineering from raw JSON fields and TF-IDF on text",
        "Compared three models; Gradient Boosting reached 82.2% accuracy, evaluated with accuracy and F1"
      ],
      tags: ["Python", "scikit-learn", "Pandas", "TF-IDF"],
      repo: "https://github.com/mojashni/Movie-Success-Prediction"
    },
    {
      title: "Full-Stack Blog Platform",
      subtitle: "Full-stack web app · 2024 – 2025",
      description:
        "A blogging platform with a React front end and an Express REST API backed by MongoDB.",
      highlights: [
        "JWT authentication with bcrypt-hashed passwords",
        "Rich-text post editor, Redux Toolkit state management and a Tailwind/Flowbite UI"
      ],
      tags: ["React", "Redux", "Express", "MongoDB"],
      repo: "https://github.com/mojashni/blog"
    }
  ],

  // Optional compact list of smaller projects (hidden when empty).
  otherProjects: [],

  experience: [
    {
      title: "Software Developer Intern",
      place: "SAGA Wisdom · Calgary, AB",
      period: "Jun 2026 – Present",
      points: [
        "Designed and built a Python/FastAPI course recommendation microservice from scratch to production, including an offline precompute job on AWS Lambda",
        "Shipped multiple recommendation strategies: Bayesian rating smoothing, co-occurrence, Jaccard similarity and cosine similarity of enrollment vectors",
        "Built analytics on how users engage with the recommendation engine, with CSV export so the team could measure its performance",
        "Designed and prototyped observability for the RAG course assistant with Langfuse/OpenTelemetry: latency and cost metrics, citation checks and LLM-based quality evaluation",
        "Developed and improved UI features on the main learning platform in Elixir/Phoenix LiveView"
      ]
    },
    {
      title: "Sales and Labour Agent",
      place: "Canadian Property Stars · Calgary, AB",
      period: "May 2025 – Aug 2025",
      points: [
        "Spoke face-to-face with 40–60 potential customers a day, tailoring each conversation to their needs",
        "Refined pitch and messaging from customer feedback, turning frequent rejection into clearer, more persuasive conversations"
      ]
    },
    {
      title: "Frontend Developer Intern",
      place: "EvoTeam",
      period: "Apr 2024 – Sep 2024",
      points: [
        "Built responsive pages with HTML, CSS and Tailwind CSS, including a bookstore website",
        "Developed a JavaScript weather app using the OpenWeather API to show current conditions and a forecast for Shiraz",
        "Worked with backend teams on API integration, and tested and debugged pages to improve responsiveness and load times"
      ]
    }
  ],

  education: [
    {
      degree: "Master of Engineering, Electrical and Computer Engineering",
      school: "Schulich School of Engineering, University of Calgary",
      period: "Expected May 2028",
      detail: "GPA 3.56 / 4.0"
    },
    {
      degree: "Bachelor of Engineering, Computer Engineering",
      school: "IAU of Shiraz, Iran",
      period: "2020 – 2024",
      detail: "GPA 3.5 / 4.0"
    }
  ],

  contactText:
    "I'm looking for software and AI/ML internship opportunities. If you're hiring or want to talk about recommendation systems, RAG or data pipelines, I'd be glad to hear from you.",

  // type: github | linkedin | email | website | x
  links: [
    { type: "github", url: "https://github.com/mojashni" },
    { type: "linkedin", url: "https://www.linkedin.com/in/mojashni" }
  ]
};
