# INK_ASSIGNMENT - Collaborative Notebook Application

## Overview
INK_ASSIGNMENT is a web-based collaborative notebook application that allows users to seamlessly create, manage, and share notebooks. It features both text editing and drawing capabilities, ensuring a versatile note-taking experience.

## Features

### 🔐 Authentication
- Secure user registration and login
- Token-based authentication for enhanced security
- Session management to maintain user state

### 📒 Notebook Management
- Create, delete, and manage multiple notebooks
- View all notebooks or filter based on ownership
- Search notebooks by title or creator
- Real-time autosave to prevent data loss

### ✍️ Rich Text Editor
- Feature-rich text editing with formatting options
- Real-time autosave to capture changes instantly
- User-friendly and intuitive interface for a smooth experience

### 🎨 Drawing Canvas
- Freehand drawing tools for sketching and annotations
- Eraser functionality to remove unwanted strokes
- Undo and redo options for precise corrections
- Clear canvas feature to start fresh
- Full touch-screen support for mobile and tablet users
- Autosave functionality for drawings to preserve work

### 📄 Additional Features
- **PDF Export**: Convert both text and drawings into a downloadable PDF
- **Owner Badges**: Highlight notebook creators with unique badges
- **Timestamps**: Track creation and last modified times for better organization
- **Search & Filter**: Quickly locate notebooks using advanced filters
- **Responsive Design**: Optimized layout for seamless experience across devices

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (latest LTS version recommended)
- **MongoDB** (for database management)

### Installation
1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd notebook-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the root directory and add the required environment variables:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 🛠 Tech Stack
- **Frontend**: Next.js, TypeScript, CSS Modules
- **Backend**: Next.js API Routes
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **PDF Export**: jsPDF
- **State Management**: React Hooks

## 💡 Design Philosophy

### 🔄 Split View Layout
- **Enhanced organization**: Dedicated sections for text and drawing
- **Adaptive display**: Side-by-side for desktops, stacked layout for mobile devices

### 🔃 Real-time Autosave
- **Automatic saving** after every change
- **Local storage backup** for unsaved changes in case of connection issues

### 🖊️ Advanced Canvas Implementation
- **Custom-built canvas** for optimal control and performance
- **Support for mouse and touch inputs** for seamless interaction
- **Individual stroke history** for advanced undo/redo functionality

### 🔑 Authentication & Security
- **JWT-based authentication** for scalability and security
- **User-specific access control** to ensure data privacy

## 🔮 Future Enhancements

### ✨ Handwriting Recognition
- Integrate **MyScript API** for converting handwritten notes into digital text
- Smart stroke detection and correction for enhanced accuracy
- AI-powered stroke prediction for a smoother drawing experience

### 📢 Collaborative Editing
- Multi-user real-time editing with live updates
- Commenting and annotation system for team discussions

### 🔗 Cloud Storage Integration
- Seamless **Google Drive & Dropbox** sync for automatic backups
- Multi-device accessibility for a continuous workflow

## 🏃‍♂️ Running the Application
1. Open your browser and visit `http://localhost:3000`
2. Sign up or log in to access your notebooks
3. Click the `+ New Notebook` button to create your first notebook
4. Start writing and drawing effortlessly!

---
Happy note-taking! 🎉
