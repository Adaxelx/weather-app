/* eslint-disable import/prefer-default-export */

export const theme = {
  bgColor: 'rgb(35, 35, 145)',
  lightColor: '#4d4dc9',
  fontColor: 'white',
  marginContent: '15px',
  marginBox: '30px',
  fontSize: {
    xs: '1.2rem',
    s: '1.5rem',
    m: '1.75rem',
    l: '2rem',
    xl: '3rem',
    xxl: '4rem',
    xxxl: '5rem',
  },
  device: {
    mobileS: '@media (min-width: 360p)',
    mobileM: '@media (min-width: 640px)',
    tablet: '@media(min-width: 768px)',
    laptop: '@media (min-width: 1024px)',
    laptopL: '@media (min-width: 1280px)',
    desktop: '@media (min-width: 1600px)',
  },
  devicePort: {
    mobileS: '@media (min-width: 360px) and (orientation: portrait)',
    mobileM: '@media (min-width: 640px) and (orientation: portrait)',
    tablet: '@media(min-width: 768px) and (orientation: portrait)',
    laptop: '@media (min-width: 1024px) and (orientation: portrait)',
    laptopL: '@media (min-width: 1280px) and (orientation: portrait)',
    desktop: '@media (min-width: 1600px) and (orientation: portrait)',
  },
  deviceLand: {
    mobileM: '@media (min-width: 640px) and (orientation: landscape)',
    tablet: '@media(min-width: 768px) and (orientation: landscape)',
    laptop: '@media (min-width: 1024px) and (orientation: landscape)',
    laptopL: '@media (min-width: 1280px) and (orientation: landscape)',
    desktop: '@media (min-width: 1600px) and (orientation: landscape)',
  },
};
