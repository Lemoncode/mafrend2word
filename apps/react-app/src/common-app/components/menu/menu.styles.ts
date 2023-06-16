import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const root = css`
  position: absolute;
  top: 50px;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100vh;
`;

export const container = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 227px;
  height: auto;
  right: 0px;
  padding: 32px;
  gap: 16px;
  border-radius: 0px 0px 0px 12px;
  background-color: ${theme.palette.dark[50]};

  @media (min-width: 725px) {
    width: ${theme.spacing(85)};
  }

  @media (min-width: 1024px) {
    width: 278px;
  }
`;

export const item = css`
  display: flex;
  width: 100%;
  align-items: center;
  padding: ${theme.spacing(2.5)};
  gap: ${theme.spacing(2.5)};
  font: ${theme.typography.body1};
  text-decoration: none;

  #icon {
    fill: ${theme.palette.dark[900]};
  }

  &:visited {
    color: inherit;
    #icon {
      fill: inherit;
    }
  }
  &:hover {
    color: ${theme.palette.secondary[500]};
    #icon {
      fill: ${theme.palette.secondary[500]};
    }
  }
`;

export const noLink = css`
  cursor: default;
  &:hover {
    color: inherit;
    #icon {
      fill: inherit;
    }
  }
`;
