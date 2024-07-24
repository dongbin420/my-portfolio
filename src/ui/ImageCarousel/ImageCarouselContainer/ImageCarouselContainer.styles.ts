import { styled } from 'styled-components';

export const ImageCarouselContainer = styled.div<{
  width?: string;
  height?: string;
}>`
  position: relative;
  overflow: hidden;
  max-width: ${({ width }) => width};
  /* max-height: ${({ height }) => height}; */

  @media (max-width: 768px) {
    margin: 0 -4rem;
  }
`;
