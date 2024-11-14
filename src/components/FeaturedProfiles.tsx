import React from 'react';

const FeaturedProfiles = () => {
  const profiles = [
    {
      id: 1,
      name: 'Sarah Wilson',
      role: 'Designer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    },
    {
      id: 2,
      name: 'Alex Chen',
      role: 'Developer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    },
    {
      id: 3,
      name: 'Maria Garcia',
      role: 'Product Manager',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    },
    {
      id: 4,
      name: 'James Cooper',
      role: 'Marketing',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Featured Profiles</h2>
      <div className="flex gap-6 overflow-x-auto pb-2">
        {profiles.map((profile) => (
          <div key={profile.id} className="flex-shrink-0">
            <div className="w-32 text-center">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-20 h-20 rounded-full mx-auto mb-2 object-cover border-2 border-indigo-600"
              />
              <h3 className="font-medium text-gray-900 truncate">{profile.name}</h3>
              <p className="text-sm text-gray-500">{profile.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProfiles;