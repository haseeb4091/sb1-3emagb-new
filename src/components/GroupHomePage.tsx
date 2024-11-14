import React from 'react';
import { Users, MessageCircle, Bell, Settings, Share2 } from 'lucide-react';
import Post from './Post';

interface GroupHomePageProps {
  groupId: number;
}

const GroupHomePage = ({ groupId }: GroupHomePageProps) => {
  const group = {
    id: groupId,
    name: 'Web Developers Hub',
    description: 'A community for web developers to share knowledge and experiences',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000',
    members: 1234,
    posts: 456,
    isAdmin: true,
    privacy: 'Public',
    tags: ['webdev', 'programming', 'javascript', 'react'],
    recentMembers: [
      { id: 1, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
      { id: 2, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
      { id: 3, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150' },
    ],
  };

  const posts = [
    {
      id: 1,
      author: {
        name: 'Sarah Wilson',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      },
      content: 'Just launched my new portfolio website! Built with React and Tailwind CSS. Would love your feedback! 🚀',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1000',
      timestamp: '2 hours ago',
      likes: 45,
      comments: 12,
    },
    {
      id: 2,
      author: {
        name: 'Alex Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      },
      content: 'What are your thoughts on the new Next.js 14 features? The server components are amazing! 💭',
      timestamp: '4 hours ago',
      likes: 32,
      comments: 8,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Group Header */}
      <div className="h-64 relative">
        <img
          src={group.image}
          alt={group.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-4xl font-bold mb-2">{group.name}</h1>
          <p className="text-lg opacity-90 mb-4">{group.description}</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              {group.members.toLocaleString()} members
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              {group.posts} posts
            </div>
            <div className="flex -space-x-2">
              {group.recentMembers.map((member) => (
                <img
                  key={member.id}
                  src={member.avatar}
                  alt="Member"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Join Group
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
          {group.isAdmin && (
            <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Settings className="w-5 h-5" />
              Manage Group
            </button>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="col-span-2 space-y-6">
          {/* Create Post */}
          <div className="bg-white rounded-xl p-4">
            <textarea
              placeholder="Share something with the group..."
              className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500"
              rows={3}
            />
            <div className="flex justify-end mt-2">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Post
              </button>
            </div>
          </div>

          {/* Posts */}
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* About */}
          <div className="bg-white rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Privacy</h3>
                <p className="text-gray-900">{group.privacy}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Tags</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recent Members */}
          <div className="bg-white rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Members</h2>
            <div className="space-y-4">
              {group.recentMembers.map((member) => (
                <div key={member.id} className="flex items-center gap-3">
                  <img
                    src={member.avatar}
                    alt="Member"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium">Member Name</h3>
                    <p className="text-sm text-gray-500">Joined recently</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupHomePage;