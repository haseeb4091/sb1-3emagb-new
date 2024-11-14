import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomeScreen from './components/HomeScreen';
import ChatScreen from './components/ChatScreen';
import GroupScreen from './components/GroupScreen';
import ProfileScreen from './components/ProfileScreen';
import PostPage from './components/PostPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 lg:ml-64">
        <Sidebar />
        
        <main className="w-full">
          <div className="max-w-6xl mx-auto px-4">
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/chat" element={<ChatScreen />} />
              <Route path="/groups" element={<GroupScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/user/:username" element={<ProfileScreen />} />
              <Route path="/post/:postId" element={<PostPage />} />
              <Route path="/settings" element={<div className="p-8">Settings page (coming soon)</div>} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;