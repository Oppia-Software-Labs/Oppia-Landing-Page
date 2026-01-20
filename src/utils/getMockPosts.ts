import type { SocialMediaPost } from '@/types/socialMedia';
import { extractHashtags } from '@/utils/formatHashtags';

export const mockPosts: SocialMediaPost[] = [
  {
    id: '1',
    author: {
      name: 'Oppia Software Labs',
      username: 'OppiaLabs',
      verified: true,
    },
    content:
      'Who are we⁉️\nA technology & innovation studio.\n\nWe don\'t just create products, we build solutions with purpose, engineered to make a difference.\n\nImpact over hype. Direction over noise. 🎯🌟',
    hashtags: extractHashtags(
      'Who are we⁉️\nA technology & innovation studio.\n\nWe don\'t just create products, we build solutions with purpose, engineered to make a difference.\n\nImpact over hype. Direction over noise. 🎯🌟'
    ),
    interactions: {
      comments: 13,
      retweets: 12,
      likes: 24,
      shares: 13,
    },
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    url: 'https://x.com/OppiaLabs/status/1948991128042184955',
  },
  {
    id: '2',
    author: {
      name: 'Oppia Software Labs',
      username: 'OppiaLabs',
      verified: true,
    },
    content:
      'Oppia is Brazil-bound! 🇧🇷📍\n\nOur co-founders Santiago Villarreal (@Villarley_) & Kevin Latino (@KevinLatino_) are heading to Brazil for HackMeridian and the Meridian Conference.\n\nThe Oppia core team is ready to build, connect and grow.\n\nOn to Rio, with the Stellar Community! 🌍👋🏼',
    hashtags: extractHashtags(
      'Oppia is Brazil-bound! 🇧🇷📍\n\nOur co-founders Santiago Villarreal (@Villarley_) & Kevin Latino (@KevinLatino_) are heading to Brazil for HackMeridian and the Meridian Conference.\n\nThe Oppia core team is ready to build, connect and grow.\n\nOn to Rio, with the Stellar Community! 🌍👋🏼'
    ),
    interactions: {
      comments: 13,
      retweets: 12,
      likes: 24,
      shares: 13,
    },
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    url: 'https://x.com/OppiaLabs/status/1963785812673257675',
  },
  {
    id: '3',
    author: {
      name: 'Oppia Software Labs',
      username: 'OppiaLabs',
      verified: true,
    },
    content:
      'Today, before heading to Meridian, we\'re hosting a Blockchain After Office in Costa Rica with @StarMaker_LATAM, @TrustlessWork & @KindFi_W3.\n\nJoin us for drinks, networking, and a dive into the Stellar ecosystem.\n\nhttps://luma.com/myej8smi 📍',
    hashtags: extractHashtags(
      'Today, before heading to Meridian, we\'re hosting a Blockchain After Office in Costa Rica with @StarMaker_LATAM, @TrustlessWork & @KindFi_W3.\n\nJoin us for drinks, networking, and a dive into the Stellar ecosystem.\n\nhttps://luma.com/myej8smi 📍'
    ),
    interactions: {
      comments: 13,
      retweets: 12,
      likes: 24,
      shares: 13,
    },
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    url: 'https://x.com/OppiaLabs/status/1963044015139340315',
  },
  {
    id: '4',
    author: {
      name: 'Oppia Software Labs',
      username: 'OppiaLabs',
      verified: true,
    },
    content:
      'At Oppia Software Labs, we are proud to share that our co-founders, Santiago Villarreal (@Villarley_) & Kevin Latino (@Kevs_jLM) participated in the Stellar Builder House in CDMX and came home with a win! 🏆🇲🇽\n\nThey won Track 2: Identity Without Barriers 🌟\n\nMore below 👇',
    hashtags: extractHashtags(
      'At Oppia Software Labs, we are proud to share that our co-founders, Santiago Villarreal (@Villarley_) & Kevin Latino (@Kevs_jLM) participated in the Stellar Builder House in CDMX and came home with a win! 🏆🇲🇽\n\nThey won Track 2: Identity Without Barriers 🌟\n\nMore below 👇'
    ),
    interactions: {
      comments: 13,
      retweets: 12,
      likes: 24,
      shares: 13,
    },
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    url: 'https://x.com/OppiaLabs/status/1949232855214694426',
  },
  {
    id: '5',
    author: {
      name: 'Oppia Software Labs',
      username: 'OppiaLabs',
      verified: true,
    },
    content:
      'This weekend in San José!\nJoin the Stellar LATAM Hackathon at the Satellite Hub\n\n📍 Saturday, July 12 – Republic Casa Cultural\n🏆 $1,000 USD prizes per track\n🍕 Food, merch, community & more\n\nRegister here: https://lu.ma/6rea5m4u?tk=qrm1v1\n\n@TheBAFNetwork @Stellar_LATAM @BuildOnStellar',
    hashtags: extractHashtags(
      'This weekend in San José!\nJoin the Stellar LATAM Hackathon at the Satellite Hub\n\n📍 Saturday, July 12 – Republic Casa Cultural\n🏆 $1,000 USD prizes per track\n🍕 Food, merch, community & more\n\nRegister here: https://lu.ma/6rea5m4u?tk=qrm1v1\n\n@TheBAFNetwork @Stellar_LATAM @BuildOnStellar'
    ),
    interactions: {
      comments: 13,
      retweets: 12,
      likes: 24,
      shares: 13,
    },
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    url: 'https://x.com/OppiaLabs/status/1943724872653320623',
  },
  {
    id: '6',
    author: {
      name: 'Oppia Software Labs',
      username: 'OppiaLabs',
      verified: true,
    },
    content:
      'We are proud to share that @Villarley_ & @Kevs_jLM, co-founders of Oppia Software Labs, played a key role in organizing the first @StarMakerCR event in colab with @TheBAFNetwork 🇨🇷\n\nbringing 60+ participants to learn, Let\'s take a look at what they brought to the table 🧵👇',
    hashtags: extractHashtags(
      'We are proud to share that @Villarley_ & @Kevs_jLM, co-founders of Oppia Software Labs, played a key role in organizing the first @StarMakerCR event in colab with @TheBAFNetwork 🇨🇷\n\nbringing 60+ participants to learn, Let\'s take a look at what they brought to the table 🧵👇'
    ),
    interactions: {
      comments: 13,
      retweets: 12,
      likes: 24,
      shares: 13,
    },
    createdAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
    url: 'https://x.com/OppiaLabs/status/1934786824800817663',
  },
];
