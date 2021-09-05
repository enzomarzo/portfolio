import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

export const CardsRowWrapper = styled.div`
  display: flex;
  align-self: center;
  margin-bottom:20px;
  ${breakpointsMedia({
    xs: css`
      flex-direction: column; 
      align-items: center;  
      flex-grow: 1;`,
    md: css`
      flex-direction: row`,
  })}
`;

export const ProjectWrapper = styled.div`
  align-self: center;
  ${breakpointsMedia({
    xs: css` 
      display: flex;
      flex-direction: column; ,
    `,
  })}
`;
