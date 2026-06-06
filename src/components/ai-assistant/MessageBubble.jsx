import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function formatTime(date) {
  return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function MessageBubble({ message }) {
  const isUser = message.role === 'user';

  return (
    <div className={`message-bubble-wrapper${isUser ? ' user' : ''}`}>
      {/* Avatar */}
      <div className={`message-avatar${isUser ? ' user' : ' ai'}`}>
        {isUser ? '👤' : '🤖'}
      </div>

      {/* Bubble + Time */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', maxWidth: '78%' }}>
        <div className={`message-bubble${isUser ? ' user' : ' ai'}`}>
          {isUser ? (
            <p>{message.text}</p>
          ) : (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {message.text}
            </ReactMarkdown>
          )}
        </div>
        <span className="message-time">{formatTime(message.timestamp)}</span>
      </div>
    </div>
  );
}
