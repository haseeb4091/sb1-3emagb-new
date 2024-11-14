import React from 'react';
import FeaturedProfiles from './FeaturedProfiles';
import Post from './Post';

const HomeScreen = () => {
  const posts = [
    {
      id: 1,
      author: {
        name: 'Sarah Wilson',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      },
      content: 'Just finished working on an amazing new design project! Can\'t wait to share more details soon. 🎨 #DesignLife #Creativity',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1000',
      timestamp: '2 hours ago',
      likes: 124,
      comments: 18,
    },
    {
      id: 2,
      author: {
        name: 'Alex Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      },
      content: 'Had a great time at the tech conference today! Met so many inspiring developers and learned about the latest trends in web development. 💻 #TechLife #WebDev',
      timestamp: '4 hours ago',
      likes: 89,
      comments: 12,
    },
    {
      id: 3,
      author: {
        name: 'Maria Garcia',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      },
      content: 'Beautiful sunset view from my evening walk! 🌅',
      image: 'https://images.unsplash.com/photo-1472120435266-53107fd0c44a?w=1000',
      timestamp: '6 hours ago',
      likes: 256,
      comments: 24,
    },
  ];

  return (
    <div className="py-8 px-4">
      <FeaturedProfiles />
      <div className="space-y-6">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;