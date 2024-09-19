import { isMobile } from 'react-device-detect';

import type { ISourceOptions } from '@tsparticles/engine';
const options: ISourceOptions = {
  key: 'absorbers',
  name: 'Absorbers',
  particles: {
    number: {
      value: 300,
    },
    collisions: {
      enable: true,
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: {
        min: 0.05,
        max: 0.2,
      },
    },
    size: {
      value: {
        min: isMobile ? 1 : 2,
        max: isMobile ? 2 : 4,
      },
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: 'top',
      straight: true,
      warp: true,
    },
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
    },
    modes: {
      push: {
        quantity: 10,
      },
    },
  },
  absorbers: {
    draggable: true,
    size: {
      value: {
        min: 5,
        max: 10,
      },
      limit: 10,
    },
    position: {
      x: 50,
      y: 50,
    },
  },
  // background: {
  //   color: '#0d47a1',
  // },
};
export default options;
