import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const container = css`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing(10)};
  position: absolute;
  z-index: 9999;
  top: 0;
  background: rgba(13, 20, 24, 0.75);
  & > :first-child {
    max-width: 1400px;
    align-self: center;
    overflow: hidden;
    overflow-y: scroll;
  }
  @media (min-width: 725px) {
    padding: ${theme.spacing(4)};
  }
  @media (min-width: 1024px) {
    padding: ${theme.spacing(8)};
  }
`;
