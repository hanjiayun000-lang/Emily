
import React from 'react';
import { Celebrity } from './types';

export const RANKING_DATA: Celebrity[] = [
  { rank: 2, name: '周杰伦', heat: '95w', avatar: 'https://picsum.photos/seed/jay/200' },
  { rank: 1, name: '吴宣仪', heat: '105w', avatar: 'https://picsum.photos/seed/wuxuanyi/200' },
  { rank: 3, name: '林俊杰', heat: '88w', avatar: 'https://picsum.photos/seed/lin/200' },
  { rank: 4, name: '迪丽热巴', heat: '78w', recommendation: '上海迪士尼', avatar: 'https://picsum.photos/seed/dilraba/200', trend: 'up' },
  { rank: 5, name: '张艺兴', heat: '72w', recommendation: '南锣鼓巷', avatar: 'https://picsum.photos/seed/zyx/200', trend: 'up' },
  { rank: 6, name: '王一博', heat: '68w', recommendation: '霸王岭国家森林', avatar: 'https://picsum.photos/seed/wyb/200', trend: 'neutral' },
  { rank: 7, name: '杨超越', heat: '65w', recommendation: '朝阳公园', avatar: 'https://picsum.photos/seed/ycy/200', trend: 'down' },
  { rank: 8, name: '蔡徐坤', heat: '60w', recommendation: '蜀九宫', avatar: 'https://picsum.photos/seed/cxk/200', trend: 'down' },
  { rank: 9, name: '黄子韬', heat: '58w', recommendation: '外滩', avatar: 'https://picsum.photos/seed/hzt/200', trend: 'neutral' },
];

export const FireIcon = () => (
  <svg className="w-3 h-3 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1014 0c0-1.187-.234-2.315-.657-3.344a.337.337 0 00-.01-.033c-.05-.123-.11-.248-.175-.372a10.057 10.057 0 01-1.285-1.742c-.512-.876-1.155-2.023-1.478-2.956zm-2.99 4.1c.153-.393.313-.767.478-1.114a27.18 27.18 0 01.554-1.1c.163-.303.3-.54.406-.713a1 1 0 01.527-.417c.18-.046.368-.035.541.032.173.067.317.184.41.332.094.148.136.321.12.495-.008.087-.021.173-.038.258a10.02 10.02 0 01-.643 2.1c-.28.75-.68 1.455-1.177 2.103a4.03 4.03 0 00-.236-.086c-.167-.052-.33-.105-.487-.158-.29-.096-.543-.17-.745-.23a10.51 10.51 0 01-.202-1.016z" clipRule="evenodd" />
  </svg>
);

export const LocationIcon = () => (
  <svg className="w-3 h-3 text-purple-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);
