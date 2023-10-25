import React from 'react';
import {
  TelegramIcon,
  TwitterIcon,
} from '@icons';
import Discord from '@assets/icon-discord.svg';

export const socialMediaLinks:{
  component: React.ReactNode;
  className: string;
  url: string;
}[] = [
  {
    component: <Discord />,
    className: 'medium',
    url: 'https://discord.gg/p8jQAGhbX7',
  },
  {
    component: <TelegramIcon />,
    className: 'telegram',
    url: 'https://t.me/treasurenet',
  },
  // {
  //   component: <LinkedinIcon />,
  //   className: 'linkedin',
  //   url: 'https://www.linkedin.com/company/forbole',
  // },
  // {
  //   component: <GithubIcon />,
  //   className: 'github',
  //   url: 'https://wiki.treasurenet.io/en/treasureNetDescription',
  // },
  {
    component: <TwitterIcon />,
    className: 'twitter',
    url: 'https://twitter.com/treasurenet_io',
  },

  // {
  //   component: <Medium />,
  //   className: 'medium',
  //   url: 'https://medium.com/@treasurenet_io',
  // },

  //
];
