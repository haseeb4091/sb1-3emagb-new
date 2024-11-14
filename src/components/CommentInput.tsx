import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

interface CommentInputProps {
  userAvatar: string;
  onSubmit: (content: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
}

const CommentInput = ({ userAvatar, onSubmit, placeholder = 'Write a comment...', autoFocus = false }: CommentInputProps) => {
  const [content, setContent] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleSubmit = () => {
    if (content.trim()) {
      onSubmit(content);
      setContent('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex gap-3 items-start">
      <img
        src={userAvatar}
        alt="Your avatar"
        className="w-8 h-8 rounded-full object-cover flex-shrink-0"
      />
      <div className="flex-1 relative">
        <textarea
          ref={inputRef}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder={placeholder}
          rows={1}
          className="w-full px-4 py-2 bg-gray-50 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
        />
        <button
          onClick={handleSubmit}
          disabled={!content.trim()}
          className={`absolute right-2 top-2 p-1 rounded-full transition-colors ${
            content.trim()
              ? 'text-indigo-600 hover:bg-indigo-50'
              : 'text-gray-400'
          }`}
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CommentInput;