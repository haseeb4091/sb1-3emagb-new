import React, { useState } from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import CommentList from './CommentList';
import CommentInput from './CommentInput';
import { CommentType } from './Comment';
import { Link } from 'react-router-dom';

interface PostProps {
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  id: number;
}

const Post = ({ author, content, image, timestamp, likes: initialLikes, comments: initialComments, id }: PostProps) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<CommentType[]>([
    {
      id: 1,
      author: {
        name: 'Alex Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      },
      content: 'This looks amazing! Great work! 🎉',
      timestamp: '15m ago',
      likes: 3,
      isLiked: false,
    },
    {
      id: 2,
      author: {
        name: 'Maria Garcia',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      },
      content: 'Thanks for sharing your experience!',
      timestamp: '1h ago',
      likes: 5,
      isLiked: true,
    },
  ]);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleCommentLike = (commentId: number) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
          isLiked: !comment.isLiked,
        };
      }
      return comment;
    }));
  };

  const handleCommentReply = (commentId: number) => {
    console.log('Reply to comment:', commentId);
  };

  const handleAddComment = (content: string) => {
    const newComment: CommentType = {
      id: Date.now(),
      author: {
        name: 'You',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      },
      content,
      timestamp: 'Just now',
      likes: 0,
      isLiked: false,
    };
    setComments([...comments, newComment]);
  };

  const username = author.name.toLowerCase().replace(' ', '.');

  return (
    <div className="bg-white rounded-xl p-6 mb-4">
      <div className="flex items-center mb-4">
        <Link to={`/user/${username}`}>
          <img
            src={author.avatar}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        </Link>
        <div className="ml-3">
          <Link to={`/user/${username}`} className="hover:underline">
            <h3 className="font-semibold text-gray-900">{author.name}</h3>
          </Link>
          <p className="text-sm text-gray-500">{timestamp}</p>
        </div>
      </div>

      <Link to={`/post/${id}`} className="block">
        <p className="text-gray-800 mb-4">{content}</p>
        {image && (
          <img
            src={image}
            alt="Post content"
            className="rounded-lg w-full object-cover mb-4"
          />
        )}
      </Link>

      <div className="flex items-center gap-6 pt-4 border-t">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 ${
            liked ? 'text-red-500' : 'text-gray-600'
          } hover:text-red-500 transition-colors`}
        >
          <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
          <span>{likes}</span>
        </button>

        <button
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span>{comments.length}</span>
        </button>

        <Link 
          to={`/post/${id}`}
          className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
        >
          <Share2 className="w-5 h-5" />
          <span>Share</span>
        </Link>
      </div>

      {showComments && (
        <div className="mt-4 pt-4 border-t">
          <CommentList
            comments={comments}
            onLike={handleCommentLike}
            onReply={handleCommentReply}
          />
          <div className="mt-4">
            <CommentInput
              userAvatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
              onSubmit={handleAddComment}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;