# Design Document: Dynamic Academic Portfolio Website (Next.js & Vercel)

This design blueprint configures a dynamic, component-driven portfolio hosted on Vercel. It leverages dynamic state management and modular routing over hardcoded static layouts.

---

## 1. Visual Strategy & Interaction Mechanics

### Typography & Palette
* **Headings:** `Playfair Display` (Serif) — gives a crisp, authoritative academic feel.
* **Body:** `Inter` (Sans-Serif) — geometric layout optimized for clean UI scanning.
* **Colors:** Deep Navy (`#1A365D`) headers, Steel Blue (`#2B6CB0`) interactive states, and an ultra-soft light gray canvas background (`#FAFAFA`).

### Dynamic Interactivity (Beyond Static Pages)
* **Interactive Publication Filter:** Users can dynamically toggle tags (`#MARL`, `#ComputerVision`, `#Robotics`, `#BigData`) to instantly filter the publication array without reloading the page.
* **Client-Side Live Search:** A search field at the top of the research/publication component that matches keywords across titles, venues, and co-author names on the fly.
* **Asynchronous Document Preview:** Rather than forcing visitors to open PDFs in a new tab, download links can trigger an overlaid modular viewer panel seamlessly.

---

## 2. Page Components & Architecture

### Layout Shell (`app/layout.tsx`)
A persistent global wrapper containing a sticky, high-blur navigation header (`/`, `/research`, `/experience`, `/skills`) and social anchors linking directly to institutional emails, GitHub, and LinkedIn profiles.

### Core View Configuration (`app/page.tsx`)

#### 👤 Profile Header Panel
* **Maitrayee Keskar**
* *Ph.D. Student in Electrical Engineering and Computer Science (EECS)* | [cite_start]University of California, Merced [cite: 6, 7]
* *M.S. in ECE (Intelligent Systems, Robotics, Control)* | [cite_start]UC San Diego [cite: 8, 9]
* *B.S. in Probability and Statistics (Minor in CS | Cum Laude)* | [cite_start]UC San Diego [cite: 10]

> [cite_start]**Identity Synthesis:** A brief narrative bridging your foundational mathematical expertise (Probability & Statistics) with your research vision in multi-agent reinforcement learning, computer vision, and dynamic robot control systems[cite: 10, 19, 30, 37]. [cite_start]Highlights your path from scalable enterprise engineering back to intensive doctoral research at UC Merced under Prof. Ross Greer starting August 2026[cite: 6, 14, 42].

---

### 🔬 Research Modules (`app/research/page.tsx`)

#### **LISA Lab, UC San Diego**
[cite_start]*Graduate & Undergraduate Student Researcher (April 2021 – Present)* [cite: 12, 13, 17]
* [cite_start]**Graduate Track (with Mi3 Lab, UC Merced; Advisor: Prof. Ross Greer):** [cite: 19]
    * [cite_start]Engineered *MTR-VP*, a vision-first trajectory planning network replacing HD-map features with learned visual representations via Vision Transformers (ViT)[cite: 20].
    * [cite_start]Developed a cross-attention decoder combining behavioral intent vectors with visual scene context to generate multi-trajectory sets[cite: 21].
    * [cite_start]Placed in the **Top-15 internationally** in the Waymo End-to-End Challenge[cite: 22].
* [cite_start]**Undergraduate Track (Advisor: Prof. Mohan Trivedi):** [cite: 18, 23]
    * [cite_start]Adapted anchor-free *CenterNet* models for joint multi-target localization, earning a first-author slot in *IEEE Robotics and Automation Letters*[cite: 24].
    * [cite_start]Created custom keypoint loss architectures in PyTorch, establishing a **78.2% AP** score on the ApolloCar3D dataset[cite: 25].

#### **MINDS Lab, UC San Diego**
*Graduate Student Researcher (Jan. 2025 – Jan. 2026) | [cite_start]Advisor: Prof. Parinaz Naghizadeh* [cite: 26, 27, 28, 29]
* [cite_start]Modeled sample-complexity scaling proofs mapping communication protocol overhead straight to MARL training efficiency[cite: 30].
* [cite_start]Tailored *Optimized Maximum Likelihood Estimation (OMLE)* algorithms to establish bounds on multi-agent observation clarity[cite: 31].

#### **Existential Robotics Lab (ERL), UC San Diego**
*Graduate Student Researcher (Nov. 2024 – Sep. 2025) | Advisor: Prof. Nikolay Atanasov* [cite: 33, 34, 35, 36]
* [cite_start]Deployed Graph Attention Networks (GAT) within the *BenchMARL* framework to benchmark lightweight coordination layers for an ICRA paper submission[cite: 37, 38].

---

### 💼 Professional Experience Hub (`app/experience/page.tsx`)

#### **Balbix**
[cite_start]*AI Software Engineer (July 2022 – August 2024)* [cite: 41, 42, 44]
* [cite_start]Deployed PySpark structures processing 500k+ vulnerability signals into custom remediation pathways[cite: 45].
* [cite_start]Orchestrated Airflow workflows over Kubernetes environments to classify vulnerability layers across 2M+ EOL packages[cite: 46].
* [cite_start]Designed Cassandra event architectures managing state pipelines across 5M+ active computing assets[cite: 47].
* [cite_start]Formulated statistical breach prediction frameworks using CVSS and CWE criteria for C-suite engineering briefings[cite: 48, 49].

[cite_start]*Engineering Intern (Jun. 2021 – Sep. 2021)* [cite: 51, 52]
* [cite_start]Built Q-learning and Actor-Critic topologies to map threat vector paths inside simulated defenses[cite: 53].

---

### 📚 Interactive Publication Registry (`app/publications/page.tsx`)

* [cite_start]**Work Zone Intelligence (ITSC 2026):** *Accepted* speed regulation modeling[cite: 55, 56, 57].
* [cite_start]**Driving Scene Assessment (NHTSA ESV 2026):** Vision/Language asset representation frameworks[cite: 58, 59, 60].
* [cite_start]**Multimodal Intelligent Vehicles (NHTSA ESV 2026):** Inside/outside driver attention coordination systems[cite: 62, 63, 64].
* [cite_start]**Cascaded CNN Vehicle Lighting (NHTSA ESV 2026):** Localization and context association suites[cite: 65, 66, 67].
* [cite_start]**Self-Attention Policy Gradients (arXiv 2025 / IROS 2026):** Model-free distributed nonlinear game spaces[cite: 68, 69].
* [cite_start]**Lights as Points (IEEE RA-L / CASE 2025):** First-author publication on anchor-free keypoint detection[cite: 70, 71, 72].
* [cite_start]**Vehicle Light Dataset Complexities (PR Letters 2024):** Camera metric evaluation pipelines[cite: 73, 74].
* [cite_start]**Integrated Vehicle Internal Detection (IEEE IV 2022):** Landmark workshop oral presentation[cite: 75, 76].

---

### 🛠️ Interactive Tool Inventory (`components/SkillsMatrix.tsx`)
Rendered as an interactive skill-graph component layout:
* [cite_start]**Languages:** `Python`, `SQL`, `Java`, `C++`, `R`, `C`, `Shell Scripting` [cite: 78]
* [cite_start]**AI/Frameworks:** `PyTorch`, `TorchRL`, `TensorFlow`, `Scikit-Learn`, `OpenCV`, `Pandas`, `BenchMARL` [cite: 79]
* **Cloud Infrastructure:** `Kubernetes`, `Docker`, `Airflow`, `PySpark`, `Git`, `AWS`, `PostgreSQL`, `Redis`, `Cassandra`