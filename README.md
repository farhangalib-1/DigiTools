# 🚀 DigiTools Platform

A modern, scalable React-based web application that provides a suite of digital tools, premium resources, and flexible pricing plans for individuals and businesses.

---

## 🌐 Live Demo

🔗 [Live Demo](https://digitools12.netlify.app/)

---

## 🧭 Overview

DigiTools Platform is designed to deliver productivity-enhancing tools with a clean UI and seamless user experience. The application dynamically renders products and pricing plans using structured JSON data, ensuring flexibility and scalability.

---

## ✨ Key Features

- ⚛️ Component-based architecture using React  
- 📦 Dynamic data rendering from JSON files  
- 💳 Multiple pricing tiers (Starter, Pro, Enterprise)  
- 🎨 Responsive and modern UI design  
- 🔁 Reusable and maintainable code structure  
- ⚡ Optimized for fast performance and deployment  

---

## 🛠️ Tech Stack

| Technology | Description |
|------------|------------|
| React.js | Frontend library for building UI |
| Tailwind CSS | Utility-first CSS framework |
| DaisyUI | Pre-built UI components |
| Netlify | Deployment platform |
| JSON | Data management |

---

## 📁 Project Structure

```bash
digitools-platform/
│
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│
├── src/
│   ├── components/
│   ├── assets/
│
├── Product.json
├── Price.json
├── index.html

```
---

## 📊 Products Module

The application showcases multiple digital tools including:

- AI Writing Pro  
- Design Templates Pack  
- Premium Stock Assets  
- Automation Toolkit  
- Resume Builder Pro  
- Social Media Content Kit  

All product data is managed through `Product.json`.

---

## 💰 Pricing Module

Three scalable pricing tiers are available:

| Plan | Price | Features |
|------|------|----------|
| Starter | Free | Basic tools & community access |
| Pro | $29/month | Full access + analytics |
| Enterprise | $99/month | Advanced business features |

Data source: `Price.json`.

---

## ⚙️ Application Flow

1. Static JSON files store product and pricing data  
2. React components dynamically render UI  
3. Tailwind & DaisyUI ensure consistent styling  
4. Deployed seamlessly via Netlify  

Main entry file: `index.html`

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/digitools-platform.git
cd digitools-platform
npm install
npm run dev
