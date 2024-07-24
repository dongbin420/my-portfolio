import { styled } from 'styled-components';
import IndicatorIcon from '@/assets/indicator.svg';

export const ImageCarouselIndicatorContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.spacing1};
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
`;

export const StyledIndicatorIcon = styled(IndicatorIcon).withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>`
  fill: ${({ isActive }) => (isActive ? 'black' : '#8e8e8e')};
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 25px;
    height: 25px;
  }
`;
