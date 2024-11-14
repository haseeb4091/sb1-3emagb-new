import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Share2, Heart, MessageCircle, Copy, Check } from 'lucide-react';
import CommentList from './CommentList';
import CommentInput from './CommentInput';
import { CommentType } from './Comment';

const PostPage = () => {
  const { postId } = useParams();
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(124);
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

  const post = {
    id: postId,
    author: {
      name: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    },
    content: 'Just finished working on an amazing new design project! Can\'t wait to share more details soon. 🎨 #DesignLife #Creativity',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1000',
    timestamp: '2 hours ago',
  };

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
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

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <Link to="/" className="text-indigo-600 hover:text-indigo-700 mb-6 inline-block">
          ← Back to Home
        </Link>
        
        <div className="flex gap-6">
          {/* Main Post Content */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Post Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                    <p className="text-sm text-gray-500">{post.timestamp}</p>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <p className="text-gray-800 whitespace-pre-wrap mb-4">{post.content}</p>
                {post.image && (
                  <img
                    src={post.image}
                    alt="Post content"
                    className="w-full rounded-lg"
                  />
                )}
              </div>

              {/* Post Actions */}
              <div className="px-6 py-4 border-t border-gray-100">
                <div className="flex items-center gap-6">
                  <button
                    onClick={handleLike}
                    className={`flex items-center gap-2 ${
                      liked ? 'text-red-500' : 'text-gray-600'
                    } hover:text-red-500 transition-colors`}
                  >
                    <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                    <span>{likes}</span>
                  </button>

                  <button className="flex items-center gap-2 text-gray-600">
                    <MessageCircle className="w-5 h-5" />
                    <span>{comments.length}</span>
                  </button>

                  <button
                    onClick={handleShare}
                    className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors ml-auto"
                  >
                    {copied ? (
                      <>
                        <Check className="w-5 h-5" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-5 h-5" />
                        <span>Share</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Comments Section */}
          <div className="w-96">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Comments</h2>
              
              {/* Comment Input */}
              <div className="mb-6">
                <CommentInput
                  userAvatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
                  onSubmit={handleAddComment}
                  placeholder="Write a comment..."
                />
              </div>

              {/* Comments List */}
              <div className="space-y-4">
                <CommentList
                  comments={comments}
                  onLike={handleCommentLike}
                  onReply={handleCommentReply}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;