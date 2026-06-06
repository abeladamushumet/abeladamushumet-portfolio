export const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'abeladamushumet';
export const GITHUB_API_BASE = 'https://api.github.com';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/abeladamushumet',
  linkedin: 'https://www.linkedin.com/in/abeladamushumet/',
  email: 'abeladamushumet@gmail.com',
};

export const SKILL_LEVELS = {
  BEGINNER: 'Beginner',
  INTERMEDIATE: 'Intermediate',
  ADVANCED: 'Advanced',
};

export const FILTER_CATEGORIES = ['All', 'NLP', 'Speech AI', 'Computer Vision', 'ML Systems'];

export const SUGGESTED_PROMPTS = [
  { id: 1, text: 'Who is Abel?', icon: '👤' },
  { id: 2, text: 'Show me his projects', icon: '🚀' },
  { id: 3, text: 'Experience at INSA', icon: '🏢' },
  { id: 4, text: 'What skills does he have?', icon: '💡' },
  { id: 5, text: 'How can I contact Abel?', icon: '📬' },
];

export const FOCUS_AREAS = [
  {
    id: 1,
    icon: '🧠',
    title: 'NLP Systems',
    description: 'Text classification, sentiment analysis, language modeling, and intelligent text processing pipelines.',
    color: '#4F46E5',
  },
  {
    id: 2,
    icon: '🎙️',
    title: 'Speech AI',
    description: 'Speech-to-Text and Text-to-Speech systems, real-time voice agents, and Amharic language AI.',
    color: '#06B6D4',
  },
  {
    id: 3,
    icon: '👁️',
    title: 'Computer Vision',
    description: 'Object detection, image processing, and deep learning models for visual intelligence.',
    color: '#8B5CF6',
  },
  {
    id: 4,
    icon: '⚙️',
    title: 'ML Pipelines',
    description: 'End-to-end machine learning systems from data preprocessing to model deployment.',
    color: '#10B981',
  },
  {
    id: 5,
    icon: '🤖',
    title: 'Generative AI',
    description: 'LLM-powered applications, prompt engineering, RAG systems, and AI assistants.',
    color: '#F59E0B',
  },
  {
    id: 6,
    icon: '🚀',
    title: 'MLOps & Deployment',
    description: 'Production AI deployment with FastAPI, Streamlit, and cloud infrastructure.',
    color: '#EF4444',
  },
];

export const SKILLS_DATA = [
  {
    category: 'Machine Learning',
    icon: '🧮',
    skills: [
      { name: 'Scikit-learn', level: 'Advanced' },
      { name: 'XGBoost', level: 'Advanced' },
      { name: 'Feature Engineering', level: 'Advanced' },
      { name: 'Model Evaluation', level: 'Advanced' },
      { name: 'Classification', level: 'Advanced' },
      { name: 'Regression', level: 'Advanced' },
      { name: 'Ensemble Methods', level: 'Intermediate' },
    ],
  },
  {
    category: 'Deep Learning',
    icon: '🧠',
    skills: [
      { name: 'TensorFlow', level: 'Intermediate' },
      { name: 'PyTorch', level: 'Intermediate' },
      { name: 'CNN', level: 'Intermediate' },
      { name: 'LSTM / RNN', level: 'Intermediate' },
      { name: 'Transformers', level: 'Intermediate' },
    ],
  },
  {
    category: 'NLP',
    icon: '📝',
    skills: [
      { name: 'Text Classification', level: 'Advanced' },
      { name: 'Sentiment Analysis', level: 'Advanced' },
      { name: 'Language Modeling', level: 'Intermediate' },
      { name: 'Information Extraction', level: 'Intermediate' },
      { name: 'Chatbots', level: 'Advanced' },
    ],
  },
  {
    category: 'Speech AI',
    icon: '🎙️',
    skills: [
      { name: 'Speech-to-Text', level: 'Advanced' },
      { name: 'Text-to-Speech', level: 'Intermediate' },
      { name: 'Amharic ASR', level: 'Advanced' },
      { name: 'Real-Time STT', level: 'Advanced' },
      { name: 'Voice Agents', level: 'Intermediate' },
    ],
  },
  {
    category: 'Computer Vision',
    icon: '👁️',
    skills: [
      { name: 'OpenCV', level: 'Intermediate' },
      { name: 'Object Detection', level: 'Intermediate' },
      { name: 'Image Processing', level: 'Intermediate' },
    ],
  },
  {
    category: 'MLOps & Deployment',
    icon: '🚀',
    skills: [
      { name: 'FastAPI', level: 'Intermediate' },
      { name: 'Streamlit', level: 'Advanced' },
      { name: 'Git / GitHub', level: 'Advanced' },
      { name: 'Python', level: 'Advanced' },
      { name: 'Prompt Engineering', level: 'Advanced' },
      { name: 'LLM Applications', level: 'Intermediate' },
    ],
  },
];
