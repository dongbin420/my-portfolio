import { styled } from 'styled-components';
import PreviousIcon from '@/assets/previous.svg';
import NextIcon from '@/assets/next.svg';

export const ImageCarouselButtonContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;

  top: 0;
`;

export const CarouselPrevButton = styled.button`
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing.spacing5} ${({ theme }) => theme.spacing.spacing5};
  cursor: pointer;
`;

export const CarouselNextButton = styled.button`
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing.spacing5} ${({ theme }) => theme.spacing.spacing5};
  cursor: pointer;
`;

export const StyledPreviousIcon = styled(PreviousIcon)`
  fill: #686868;
  width: 50px;
  height: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 35px;
    height: 35px;
  }
`;

export const StyledNextIcon = styled(NextIcon)`
  fill: #686868;
  width: 50px;
  height: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 35px;
    height: 35px;
  }
`;
