import { ApiCategory, Server } from '@/types/api';

export const servers: Server[] = [
  {
    url: 'https://www.api.neext.online',
    name: 'Production Server',
  },
  {
    url: 'https://neext-api.hf.space',
    name: 'Backup Server',
  },
  {
    url: 'http://localhost:3000',
    name: 'Development Server',
  },
];

export const apiCategories: ApiCategory[] = [
  {
    name: 'AI',
    endpoints: [
      {
        id: 'ai-research',
        method: 'GET',
        path: '/ai/ai-research',
        alias: 'AI Research',
        category: 'AI',
        parameters: [
          {
            name: 'text',
            type: 'text',
            required: true,
            description: 'Input text for generating response.',
            placeholder: 'What caused the demonstrations in Indonesia?',
          },
        ],
      },
      {
        id: 'ai-4chat',
        method: 'GET',
        path: '/ai/ai4chat',
        alias: 'AI 4Chat',
        category: 'AI',
        parameters: [
          {
            name: 'text',
            type: 'text',
            required: true,
            description: 'Input text for generating response.',
            placeholder: 'Hi! How are you?',
          },
        ],
      },
      {
        id: 'animagine-xl',
        method: 'GET',
        path: '/ai/animagine/xl-3.1',
        alias: 'Animagine XL 3.1',
        category: 'AI',
        parameters: [
          {
            name: 'prompt',
            type: 'text',
            required: true,
            description: 'Input text for generating image.',
            placeholder: 'Shiroko (Blue Archive), Take a bath',
          },
          {
            name: 'ratio',
            type: 'select',
            required: true,
            description: 'Image aspect ratio.',
            options: ['1:1', '16:9', '9:16', '4:3', '3:4'],
            defaultValue: '1:1',
          },
        ],
      },
      {
        id: 'blackbox-ai',
        method: 'GET',
        path: '/ai/blackbox-ai',
        alias: 'Blackbox AI',
        category: 'AI',
        parameters: [
          {
            name: 'text',
            type: 'text',
            required: true,
            description: 'Input text for generating response.',
            placeholder: 'Explain quantum computing',
          },
        ],
      },
      {
        id: 'chatgpt',
        method: 'GET',
        path: '/ai/chatgpt',
        alias: 'ChatGPT',
        category: 'AI',
        parameters: [
          {
            name: 'text',
            type: 'text',
            required: true,
            description: 'Input text for generating response.',
            placeholder: 'Write a poem about technology',
          },
        ],
      },
    ],
  },
  {
    name: 'Downloads',
    endpoints: [
      {
        id: 'tiktok-dl',
        method: 'GET',
        path: '/download/tiktok',
        alias: 'TikTok Downloader',
        category: 'Downloads',
        parameters: [
          {
            name: 'url',
            type: 'text',
            required: true,
            description: 'TikTok video URL.',
            placeholder: 'https://vt.tiktok.com/...',
          },
        ],
      },
      {
        id: 'instagram-dl',
        method: 'GET',
        path: '/download/instagram',
        alias: 'Instagram Downloader',
        category: 'Downloads',
        parameters: [
          {
            name: 'url',
            type: 'text',
            required: true,
            description: 'Instagram post URL.',
            placeholder: 'https://www.instagram.com/p/...',
          },
        ],
      },
      {
        id: 'youtube-dl',
        method: 'GET',
        path: '/download/youtube',
        alias: 'YouTube Downloader',
        category: 'Downloads',
        parameters: [
          {
            name: 'url',
            type: 'text',
            required: true,
            description: 'YouTube video URL.',
            placeholder: 'https://www.youtube.com/watch?v=...',
          },
          {
            name: 'quality',
            type: 'select',
            required: false,
            description: 'Video quality.',
            options: ['360p', '480p', '720p', '1080p'],
            defaultValue: '720p',
          },
        ],
      },
    ],
  },
  {
    name: 'Information',
    endpoints: [
      {
        id: 'weather',
        method: 'GET',
        path: '/info/weather',
        alias: 'Weather Info',
        category: 'Information',
        parameters: [
          {
            name: 'city',
            type: 'text',
            required: true,
            description: 'City name.',
            placeholder: 'Jakarta',
          },
        ],
      },
      {
        id: 'news',
        method: 'GET',
        path: '/info/news',
        alias: 'Latest News',
        category: 'Information',
        parameters: [
          {
            name: 'category',
            type: 'select',
            required: false,
            description: 'News category.',
            options: ['technology', 'business', 'sports', 'entertainment'],
            defaultValue: 'technology',
          },
        ],
      },
    ],
  },
  {
    name: 'Tools',
    endpoints: [
      {
        id: 'qr-generator',
        method: 'GET',
        path: '/tools/qr-generator',
        alias: 'QR Code Generator',
        category: 'Tools',
        parameters: [
          {
            name: 'text',
            type: 'text',
            required: true,
            description: 'Text to encode in QR code.',
            placeholder: 'https://example.com',
          },
        ],
      },
      {
        id: 'short-url',
        method: 'GET',
        path: '/tools/short-url',
        alias: 'URL Shortener',
        category: 'Tools',
        parameters: [
          {
            name: 'url',
            type: 'text',
            required: true,
            description: 'URL to shorten.',
            placeholder: 'https://example.com/very/long/url',
          },
        ],
      },
    ],
  },
  {
    name: 'Random',
    endpoints: [
      {
        id: 'hentai',
        method: 'GET',
        path: '/api/hentai',
        alias: 'Hentai Image',
        category: 'Random',
        parameters: [],
      },
    ],
  },
  {
    name: 'Notícias',
    endpoints: [
      {
        id: 'noticias',
        method: 'GET',
        path: '/api/noticias',
        alias: 'Notícias Recentes',
        category: 'Notícias',
        parameters: [],
      },
    ],
  },
];

export const getTotalEndpoints = (): number => {
  return apiCategories.reduce((total, category) => total + category.endpoints.length, 0);
};

export const getTotalCategories = (): number => {
  return apiCategories.length;
};
