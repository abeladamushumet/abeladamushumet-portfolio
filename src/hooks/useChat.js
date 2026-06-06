import { useState, useCallback, useRef } from 'react';
import { sendMessageToGemini } from '../services/gemini';

const INITIAL_MESSAGE = {
  id: 'welcome',
  role: 'assistant',
  text: "👋 Hi! I'm **Ask Abel AI** - your guide to Abel's portfolio.\n\nAsk me anything about his skills, projects, experience, or how to get in touch!",
  timestamp: new Date(),
};

export function useChat() {
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const historyRef = useRef([]);

  const openChat = useCallback(() => setIsOpen(true), []);
  const closeChat = useCallback(() => setIsOpen(false), []);
  const toggleChat = useCallback(() => setIsOpen((prev) => !prev), []);

  const sendMessage = useCallback(async (text) => {
    if (!text.trim() || isLoading) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: text.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Add to history for context
    historyRef.current = [
      ...historyRef.current,
      { role: 'user', text: text.trim() },
    ];

    try {
      const response = await sendMessageToGemini(text.trim(), historyRef.current);

      const assistantMessage = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        text: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      historyRef.current = [
        ...historyRef.current,
        { role: 'assistant', text: response },
      ];
    } catch (error) {
      const errorMessage = {
        id: `error-${Date.now()}`,
        role: 'assistant',
        text: 'Sorry, something went wrong. Please try again.',
        timestamp: new Date(),
        isError: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  const clearChat = useCallback(() => {
    setMessages([INITIAL_MESSAGE]);
    historyRef.current = [];
  }, []);

  return {
    messages,
    isLoading,
    isOpen,
    openChat,
    closeChat,
    toggleChat,
    sendMessage,
    clearChat,
  };
}
