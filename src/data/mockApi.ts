import { ApiCategory, Server } from '@/types/api';

export const servers: Server[] = [
  {
    url: 'https://www.api.neext.online',
    name: 'Production Server',
  },
];

export const apiCategories: ApiCategory[] = [
  {
    name: 'Download',
    endpoints: [
      {
        id: 'xvideos-download',
        method: 'GET',
        path: '/download/xvideos',
        alias: 'Xvideos Download',
        category: 'Download',
        parameters: [
          {
            name: 'url',
            type: 'text',
            required: true,
            description: 'URL do vídeo Xvideos',
            placeholder: 'https://www.xvideos.com/...',
          },
        ],
      },
      {
        id: 'snack-download',
        method: 'GET',
        path: '/search/snack/download',
        alias: 'SnackVídeo Download',
        category: 'Download',
        parameters: [
          {
            name: 'url',
            type: 'text',
            required: true,
            description: 'URL do vídeo SnackVídeo',
            placeholder: 'https://s.snackvideo.com/...',
          },
        ],
      },
      {
        id: 'spotify-download',
        method: 'GET',
        path: '/download/spotify',
        alias: 'Spotify Download',
        category: 'Download',
        parameters: [
          {
            name: 'url',
            type: 'text',
            required: true,
            description: 'URL do Spotify',
            placeholder: 'https://open.spotify.com/track/...',
          },
        ],
      },
      {
        id: 'threads-download',
        method: 'GET',
        path: '/download/threads',
        alias: 'Threads Download',
        category: 'Download',
        parameters: [
          {
            name: 'url',
            type: 'text',
            required: true,
            description: 'URL do Thread',
            placeholder: 'https://www.threads.net/...',
          },
        ],
      },
      {
        id: 'tiktok-download',
        method: 'GET',
        path: '/download/tiktok',
        alias: 'TikTok Download 1',
        category: 'Download',
        parameters: [
          {
            name: 'url',
            type: 'text',
            required: true,
            description: 'URL do vídeo TikTok',
            placeholder: 'https://www.tiktok.com/...',
          },
        ],
      },
      {
        id: 'tiktok-download-2',
        method: 'GET',
        path: '/download/tiktok2',
        alias: 'TikTok Download 2',
        category: 'Download',
        parameters: [
          {
            name: 'url',
            type: 'text',
            required: true,
            description: 'URL do vídeo TikTok',
            placeholder: 'https://www.tiktok.com/...',
          },
        ],
      },
      {
        id: 'youtube-mp3',
        method: 'GET',
        path: '/download/youtube/ytmp3',
        alias: 'YouTube MP3',
        category: 'Download',
        parameters: [
          {
            name: 'url',
            type: 'text',
            required: true,
            description: 'URL do vídeo YouTube',
            placeholder: 'https://www.youtube.com/watch?v=...',
          },
          {
            name: 'format',
            type: 'select',
            required: false,
            description: 'Formato do áudio',
            options: ['128', '192', '256', '320'],
            defaultValue: '128',
          },
        ],
      },
      {
        id: 'youtube-search',
        method: 'GET',
        path: '/download/youtube/search',
        alias: 'YouTube Play (Pesquisa)',
        category: 'Download',
        parameters: [
          {
            name: 'q',
            type: 'text',
            required: true,
            description: 'Termo de pesquisa',
            placeholder: 'Nome da música',
          },
        ],
      },
      {
        id: 'youtube-mp4',
        method: 'GET',
        path: '/download/youtube/ytmp4',
        alias: 'YouTube MP4',
        category: 'Download',
        parameters: [
          {
            name: 'url',
            type: 'text',
            required: true,
            description: 'URL do vídeo YouTube',
            placeholder: 'https://www.youtube.com/watch?v=...',
          },
          {
            name: 'format',
            type: 'select',
            required: false,
            description: 'Qualidade do vídeo',
            options: ['360', '480', '720', '1080'],
            defaultValue: '720',
          },
        ],
      },
      {
        id: 'youtube-v2',
        method: 'GET',
        path: '/download/youtube/ytdlv2',
        alias: 'YouTube Download V2',
        category: 'Download',
        parameters: [
          {
            name: 'url',
            type: 'text',
            required: true,
            description: 'URL do vídeo YouTube',
            placeholder: 'https://www.youtube.com/watch?v=...',
          },
          {
            name: 'format',
            type: 'select',
            required: false,
            description: 'Formato',
            options: ['128', '192', '256', '320'],
            defaultValue: '128',
          },
        ],
      },
      {
        id: 'stickerly-download',
        method: 'GET',
        path: '/stickerly/detail',
        alias: 'StickerLy Download',
        category: 'Download',
        parameters: [
          {
            name: 'url',
            type: 'text',
            required: true,
            description: 'URL do StickerLy',
            placeholder: 'https://stickerly.pstmn.io/...',
          },
        ],
      },
      {
        id: 'xnxx-download',
        method: 'GET',
        path: '/download/xnxx',
        alias: 'Xnxx Download',
        category: 'Download',
        parameters: [
          {
            name: 'url',
            type: 'text',
            required: true,
            description: 'URL do vídeo Xnxx',
            placeholder: 'https://www.xnxx.com/...',
          },
        ],
      },
    ],
  },
  {
    name: 'Pesquisa',
    endpoints: [
      {
        id: 'xvideos-search',
        method: 'GET',
        path: '/search/xvideos',
        alias: 'Xvideos Search',
        category: 'Pesquisa',
        parameters: [
          {
            name: 'q',
            type: 'text',
            required: true,
            description: 'Termo de pesquisa',
            placeholder: 'Digite o termo',
          },
        ],
      },
      {
        id: 'snack-search',
        method: 'GET',
        path: '/search/snack/search',
        alias: 'SnackVídeo Search',
        category: 'Pesquisa',
        parameters: [
          {
            name: 'q',
            type: 'text',
            required: true,
            description: 'Termo de pesquisa',
            placeholder: 'Digite o termo',
          },
        ],
      },
      {
        id: 'freepik-search',
        method: 'GET',
        path: '/freepik/search',
        alias: 'Freepik Search',
        category: 'Pesquisa',
        parameters: [
          {
            name: 'q',
            type: 'text',
            required: true,
            description: 'Termo de pesquisa',
            placeholder: 'Digite o termo',
          },
        ],
      },
      {
        id: 'pinterest-search',
        method: 'GET',
        path: '/search/pinterest',
        alias: 'Pinterest Search',
        category: 'Pesquisa',
        parameters: [
          {
            name: 'q',
            type: 'text',
            required: true,
            description: 'Termo de pesquisa',
            placeholder: 'Digite o termo',
          },
        ],
      },
      {
        id: 'stickerly-search',
        method: 'GET',
        path: '/stickerly/search',
        alias: 'StickerLy Search',
        category: 'Pesquisa',
        parameters: [
          {
            name: 'q',
            type: 'text',
            required: true,
            description: 'Termo de pesquisa',
            placeholder: 'Digite o termo',
          },
        ],
      },
      {
        id: 'xnxx-search',
        method: 'GET',
        path: '/search/xnxx',
        alias: 'Xnxx Search',
        category: 'Pesquisa',
        parameters: [
          {
            name: 'q',
            type: 'text',
            required: true,
            description: 'Termo de pesquisa',
            placeholder: 'Digite o termo',
          },
          {
            name: 'page',
            type: 'text',
            required: false,
            description: 'Número da página',
            placeholder: '1',
          },
        ],
      },
    ],
  },
  {
    name: 'Frases',
    endpoints: [
      {
        id: 'frases-anime',
        method: 'GET',
        path: '/frases/frasesanime',
        alias: 'Anime',
        category: 'Frases',
        parameters: [],
      },
    ],
  },
  {
    name: 'Wallpaper',
    endpoints: [
      {
        id: 'wallpaper-minecraft',
        method: 'GET',
        path: '/wallpaper/wallpaperminecraft',
        alias: 'Minecraft',
        category: 'Wallpaper',
        parameters: [],
      },
      {
        id: 'wallpaper-18',
        method: 'GET',
        path: '/18/photoporno',
        alias: '18+',
        category: 'Wallpaper',
        parameters: [],
      },
    ],
  },
  {
    name: 'Figurinhas',
    endpoints: [
      {
        id: 'sticker-brat',
        method: 'GET',
        path: '/sticker/brat',
        alias: 'Brat',
        category: 'Figurinhas',
        parameters: [
          {
            name: 'text',
            type: 'text',
            required: true,
            description: 'Seu texto',
            placeholder: 'Digite seu texto aqui',
          },
        ],
      },
      {
        id: 'sticker-anime',
        method: 'GET',
        path: '/sticker/figurinhas/anime',
        alias: 'Anime',
        category: 'Figurinhas',
        parameters: [],
      },
      {
        id: 'sticker-meme',
        method: 'GET',
        path: '/sticker/figurinhas/meme',
        alias: 'Meme',
        category: 'Figurinhas',
        parameters: [],
      },
      {
        id: 'sticker-emoji',
        method: 'GET',
        path: '/sticker/figurinhas/emoji',
        alias: 'Emoji',
        category: 'Figurinhas',
        parameters: [],
      },
    ],
  },
  {
    name: 'Jornal',
    endpoints: [
      {
        id: 'jornal-noticias',
        method: 'GET',
        path: '/jornal/noticias',
        alias: 'Notícias',
        category: 'Jornal',
        parameters: [],
      },
    ],
  },
  {
    name: 'Random',
    endpoints: [
      {
        id: 'random-hentai',
        method: 'GET',
        path: '/random/hentai',
        alias: 'Hentai',
        category: 'Random',
        parameters: [],
      },
      {
        id: 'random-shuushuu',
        method: 'GET',
        path: '/random/e-shuushuu',
        alias: 'Shuushuu',
        category: 'Random',
        parameters: [],
      },
      {
        id: 'random-loli',
        method: 'GET',
        path: '/random/loli',
        alias: 'Loli',
        category: 'Random',
        parameters: [],
      },
      {
        id: 'random-yandere',
        method: 'GET',
        path: '/random/yandere',
        alias: 'Yandere',
        category: 'Random',
        parameters: [],
      },
      {
        id: 'random-safebooru',
        method: 'GET',
        path: '/random/safebooru',
        alias: 'Safebooru',
        category: 'Random',
        parameters: [],
      },
      {
        id: 'random-konachan',
        method: 'GET',
        path: '/konachan/random',
        alias: 'Konachan',
        category: 'Random',
        parameters: [],
      },
      {
        id: 'random-memes',
        method: 'GET',
        path: '/random/memes',
        alias: 'Memes',
        category: 'Random',
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
