import React, { useState } from 'react';
import { Search, Users, Plus, Settings, DollarSign } from 'lucide-react';
import CreateGroupModal from './CreateGroupModal';
import GroupHomePage from './GroupHomePage';

const GroupScreen = () => {
  // ... (keep existing state and functions)

  return (
    <div className="p-4 lg:p-8 mt-16 lg:mt-0">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Groups</h1>
        <button
          onClick={() => setShowCreateModal(true)}
          className="w-full lg:w-auto flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Create Group
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search groups..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500"
        />
        <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
      </div>

      {/* My Groups */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">My Groups</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <div
              key={group.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setSelectedGroup(group.id)}
            >
              <div className="h-32 overflow-hidden">
                <img
                  src={group.image}
                  alt={group.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{group.name}</h3>
                    {group.type === 'paid' && (
                      <span className="inline-flex items-center text-sm text-indigo-600 font-medium">
                        <DollarSign className="w-4 h-4 mr-1" />
                        ${group.subscriptionFee}/month
                      </span>
                    )}
                  </div>
                  {group.isAdmin && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add admin actions here
                      }}
                      className="p-1 text-gray-500 hover:text-gray-700"
                    >
                      <Settings className="w-5 h-5" />
                    </button>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-3">{group.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-1" />
                  {group.members.toLocaleString()} members
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rest of the component remains the same */}
    </div>
  );
};

export default GroupScreen;