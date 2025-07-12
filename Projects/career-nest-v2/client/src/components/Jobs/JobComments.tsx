import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";

const JobComments = ({ jobId }: { jobId: string }) => {
  const { user } = useAuth();
  const isPro = user?.subscription === "PRO";
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // Fetch comments (mock for now)
  useEffect(() => {
    setComments([
      {
        id: 1,
        author: "JaneDoe",
        content: "Great company to apply to!",
        createdAt: "2025-07-11T10:00:00Z",
      },
      {
        id: 2,
        author: "JohnSmith",
        content: "I had a great interview here.",
        createdAt: "2025-07-10T12:00:00Z",
      },
    ]);
  }, []);

  const handleSubmit = () => {
    if (!newComment.trim()) return;
    const newEntry = {
      id: Date.now(),
      author: user.username,
      content: newComment,
      createdAt: new Date().toISOString(),
    };
    setComments((prev) => [...prev, newEntry]);
    setNewComment("");
  };

  if (!isPro) {
    return (
      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-md text-sm">
        Upgrade to <strong>Pro</strong> to join community threads for job
        applications.
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
        Community Thread
      </h3>

      <div className="space-y-4 mb-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-md"
          >
            <div className="text-sm font-medium text-gray-900 dark:text-gray-200">
              {comment.author}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {comment.content}
            </div>
            <div className="text-xs text-gray-400">
              {new Date(comment.createdAt).toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      <textarea
        rows={3}
        className="w-full px-3 py-2 border dark:border-gray-700 rounded-md dark:bg-gray-900 dark:text-white"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write your comment..."
      />
      <button
        onClick={handleSubmit}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Post Comment
      </button>
    </div>
  );
};

export default JobComments;
