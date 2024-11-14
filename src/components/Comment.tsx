import React from 'react';
import { Heart, Reply, MoreHorizontal } from 'lucide-react';

export interface CommentType {
  id: number;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  isLiked?: boolean;
}

interface CommentProps {
  comment: CommentType;
  onLike: (id: number) => void;
  onReply: (id: number) => void;
}

const Comment = ({ comment, onLike, onReply }: CommentProps) => {
  return (
    <div className="flex gap-3 py-3">
      <img
        src={comment.author.avatar}
        alt={comment.author.name}
        className="w-8 h-8 rounded-full object-cover flex-shrink-0"
      />
      <div className="flex-1">
        <div className="bg-gray-50 rounded-lg px-4 py-2">
          <div className="flex justify-between items-start">
            <h4 className="font-medium text-gray-900">{comment.author.name}</h4>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
          <p className="text-gray-700 mt-1">{comment.content}</p>
        </div>
        <div className="flex items-center gap-4 mt-1 text-sm">
          <button
            onClick={() => onLike(comment.id)}
            className={`flex items-center gap-1 ${
              comment.isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
            }`}
          >
            <Heart className={`w-4 h-4 ${comment.isLiked ? 'fill-current' : ''}`} />
            <span>{comment.likes}</span>
          </button>
          <button
            onClick={() => onReply(comment.id)}
            className="flex items-center gap-1 text-gray-500 hover:text-indigo-600"
          >
            <Reply className="w-4 h-4" />
            Reply
          </button>
          <span className="text-gray-400">{comment.timestamp}</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;