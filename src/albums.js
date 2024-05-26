import { v4 as uuidv4 } from 'uuid';

export const albums = [
  {
    id: uuidv4(),
    title: 'Sheesh',
    artist: 'Baby Monster',
    cover: '/images/album/sheesh.png'
  },
  {
    id: uuidv4(),
    title: 'Super Real Me',
    artist: 'Illit',
    cover: '/images/album/super-real-me.jpg'
  },
  {
    id: uuidv4(),
    title: 'Next Level',
    artist: 'aespa',
    cover: '/images/album/next-level.jpg'
  }
];