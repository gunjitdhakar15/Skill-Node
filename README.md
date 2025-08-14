# **Skill Node**  
_Interactive Job Market Graph for Smarter Career Decisions_  

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Click%20Here-brightgreen)](https://66ec840df515105d57d7f9d4--rococo-cat-4f7b60.netlify.app/)  
[![GitHub Repo](https://img.shields.io/badge/Source%20Code-GitHub-blue)](https://github.com/gunjitdhakar15/Skill-Node)  

---

## **📌 What is Skill Node?**
Skill Node models the job market as an **interactive skill graph**, where:  
- **Nodes** represent skills.  
- **Edges** represent jobs requiring those skills together.  

By applying graph algorithms, Skill Node reveals insights such as **skills often hired together**, **possible career transitions**, and **trending skills** in the market.

---

## **🛠 Tech Stack**
- **Frontend:** React.js (modular components, virtual DOM) + Vite (fast build & configuration)  
- **Backend:** Node.js, Express.js (router handling)  
- **Database:** MongoDB (central data repository)  

---

## **💡 Motivation**
LinkedIn connects people via a graph of relationships. Skill Node adapts this concept to the **job market**:  
- Each **skill** is a node.  
- Each **job** connects multiple skills as edges.  
- By traversing these skill-job relationships, we can:  
  - Find related skills in demand.  
  - Suggest optimal career moves.  
  - Identify high-value skill clusters.

---

## **🚀 Features**

### **1. Frequently Hired Together**
- Input: threshold value (1–10)  
- Output: clusters of skills frequently hired together.  
- Implementation: **Cutoff-filtered DFS** — DFS propagates between two skills only if the job count between them meets the threshold.  
- **Use case:** Identify complementary skills to learn next.

---

### **2. Job Transitions**
- Input: user’s current skill set.  
- Output: jobs whose required skills exactly or nearly match.  
- Implementation:  
  - Assign weighted edges between skills based on pay and openings (log-scaled 0.01–0.99).  
  - Apply **Bellman-Ford** to compute shortest distances between skills.  
  - Estimate difficulty to acquire unknown skills by summing their shortest distances to known skills.  
- **Use case:** Suggests career moves that are easiest to achieve based on your current skill set.

---

### **3. Trending Skills**
- Lists skills most in demand.  
- Implementation: Node degree in the job graph (each edge = job hiring that skill).  
- **Use case:** Spot hot technologies in the market.

---

## **📂 Folder Structure**
Skill-Node/
├── backend/ # Node.js + Express API
├── frontend/ # React.js + Vite UI
├── public/ # Static assets
└── README.md


---

## **⚙️ Installation & Setup**
### **1. Clone the repo**

```git clone https://github.com/gunjitdhakar15/Skill-Node.git```

2. Install dependencies

Backend

```cd backend```
```npm install```

Frontend

```cd frontend```
```npm install```

3. Environment Variables

Create .env in backend/:

```MONGO_URI=your_mongodb_connection_string```
```JWT_SECRET=your_jwt_secret```

4. Run locally

Backend

```cd backend```
```npm run dev```


Frontend

```cd frontend```
```npm run dev```

<img width="1919" height="846" alt="image" src="https://github.com/user-attachments/assets/080bcd8a-dc68-479a-b678-8c634f2e7f9e" />


📜 License

MIT License
