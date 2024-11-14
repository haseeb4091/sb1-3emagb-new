import React from 'react';
import Comment, { CommentType } from './Comment';

interface CommentListProps {
  comments: CommentType[];
  onLike: (id: number) => void;
  onReply: (id: number) => void;
}

const CommentList = ({ comments, onLike, onReply }: CommentListProps) => {
  return (
    <div className="space-y-1 mt-2">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onLike={onLike}
          onReply={onReply}
        />
      ))}
    </div>
  );
};

export default CommentList;