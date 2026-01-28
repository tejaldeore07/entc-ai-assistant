# 🚀 ENTC AI Assistant

A **production-style AI-powered academic assistant** built for **ENTC (Electronics & Telecommunication) students**, using a **decoupled frontend–backend architecture**.  
This project demonstrates real-world usage of **automation workflows, AI services, and cloud deployment**.

---

## 📌 Project Overview

**ENTC AI Assistant** allows students to ask subject-related technical questions and receive structured, exam-oriented responses.

The system is designed with clear separation between:
- Frontend (UI)
- Automation & workflow logic
- AI processing layer

> ⚠️ Note: AI responses depend on backend services (n8n + OpenAI). The frontend remains functional even if the AI service is unavailable.

## 📂 Project Structure

entc-ai-assistant/
│
├── index.html # Main user interface
├── style.css # Styling and layout
├── script.js # Frontend logic & API calls
├── netlify.toml # Netlify configuration
└── README.md # Project documentation

## 🧠 Features
- Clean, responsive user interface
- Asynchronous AI query handling
- Decoupled frontend and backend design
- Automation-driven request processing using webhooks
- Scalable architecture for future expansion

## 🧩 System Architecture
User (Browser)
↓
Frontend (HTML + CSS + JS)
↓
Netlify Hosted Site
↓
Webhook Request
↓
n8n Workflow Engine
↓
OpenAI API
↓
AI Response
↓
Frontend UI


## 🛠️ Tech Stack

### Frontend
- **HTML5** – semantic markup  
- **CSS3** – modern UI and responsive layout  
- **JavaScript (ES6+)** – Fetch API and async logic  

### Backend & Automation
- **n8n** – workflow automation engine  
- **OpenAI API** – AI-based answer generation  

### Deployment & DevOps
- **GitHub** – version control and project hosting  
- **Netlify** – frontend deployment  
- **Webhooks** – frontend–backend communication

## ⚙️ How It Works
1. User enters a technical question in the UI
2. Frontend sends a **POST request** via Fetch API
3. Request reaches an **n8n webhook**
4. n8n processes the request and calls OpenAI
5. AI-generated response is returned
6. Answer is displayed on the frontend

## 🚧 Project Status
- ✅ Frontend completed and deployed
- ✅ GitHub repository structured
- ⚠️ AI responses depend on backend API configuration
- 🔄 Improvements planned (see below)

## 🔮 Future Enhancements
- Exam-oriented formatting (SPPU / GATE)
- User authentication
- Database-backed answer caching
- Admin dashboard for monitoring workflows
- Security and rate limiting

## 🎓 Academic & Portfolio Value
This project demonstrates:
- Practical **AI integration**
- **Automation workflows** using n8n
- **API-based system design**
- **Cloud deployment** experience
- Real-world **frontend–backend separation**
  

