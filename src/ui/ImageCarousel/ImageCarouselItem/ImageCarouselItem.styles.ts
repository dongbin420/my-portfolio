import { styled } from 'styled-components';

export const ImageCarouselItemContainer = styled.div`
  flex: 0 0 100%;
`;

export const ImageCarouselImage = styled.img`
  width: 100%;
  height: 650px;
  /* object-fit: contain; */
  /* object-fit: cover; */

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 400px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 300px;
  }
`;
