import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: {
      title14: string;
      title17: string;
      title20: string;
      title24: string;
      content10: string;
      content12: string;
      content14: string;
      content17: string;
    };
    fontColor: {
      white: string;
      black: string;
    };
  }
}

export const Theme: DefaultTheme = {
  fontSize: {
    title14: '14px',
    title17: '17px',
    title20: '20px',
    title24: '24px',
    content10: '10px',
    content12: '12px',
    content14: '14px',
    content17: '17px',
  },
  fontColor: {
    white: '#fff',
    black: '#000',
  },
};
