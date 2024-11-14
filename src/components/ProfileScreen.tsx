import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Camera, Mail, MapPin, Link as LinkIcon, Calendar, Edit2, X, Share2, Check } from 'lucide-react';

// ... (keep existing interfaces and mock data)

const ProfileScreen = () => {
  // ... (keep existing state and functions)

  return (
    <div className="min-h-screen bg-gray-50 mt-16 lg:mt-0">
      {/* Cover Photo */}
      <div className="h-48 lg:h-80 relative">
        <img
          src={profile.coverPhoto}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Profile Picture */}
        <div className="absolute -bottom-16 left-4 lg:left-8">
          <div className="relative">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-4 border-white object-cover"
            />
            {isEditing && profile.isCurrentUser && (
              <button className="absolute bottom-0 right-0 p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700">
                <Camera className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={handleShare}
            className="px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span className="hidden sm:inline">Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Share Profile</span>
              </>
            )}
          </button>
          {profile.isCurrentUser && !isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <Edit2 className="w-4 h-4" />
              <span className="hidden sm:inline">Edit Profile</span>
            </button>
          )}
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-5xl mx-auto px-4 lg:px-8 pt-20 pb-8">
        {isEditing ? (
          <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
            <div className="space-y-4">
              {/* ... (keep existing form fields) */}
            </div>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{profile.name}</h1>
              <p className="text-gray-600 mb-4">{profile.bio}</p>

              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm lg:text-base">{profile.email}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm lg:text-base">{profile.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <LinkIcon className="w-4 h-4" />
                  <a href={`https://${profile.website}`} className="text-sm lg:text-base text-indigo-600 hover:underline">
                    {profile.website}
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm lg:text-base">Joined {profile.joinDate}</span>
                </div>
              </div>

              <div className="flex gap-6 mt-6">
                <div>
                  <span className="font-semibold text-gray-900">{profile.followers.toLocaleString()}</span>
                  <span className="text-gray-600 ml-1">Followers</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">{profile.following.toLocaleString()}</span>
                  <span className="text-gray-600 ml-1">Following</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">{profile.posts.toLocaleString()}</span>
                  <span className="text-gray-600 ml-1">Posts</span>
                </div>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Recent Posts</h2>
              {recentPosts.map((post) => (
                <Post key={post.id} {...post} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileScreen;