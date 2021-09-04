import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import breakpointsMedia from '../../../../../theme/utils/breakpointsMedia';

export const CardWrapper = styled.div`
  width: 290px;
  border-radius: 6px;
  border: 1px solid rgba(0,0,0,0.35);
  box-shadow: 0 3px 5px 0 rgba(0,0,0,0.1);
  transition: 0.3s;
  cursor: pointer;
  ${breakpointsMedia({
    xs: 'height: 249px',
    md: 'height: 460px',
  })}
  &:hover { 
    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.2);
  }
`;

const A = styled.a`
  text-decoration:none;
  color: inherit;
`;

export const CardImage = styled.img`
  width: 100%;
  z-index: -1;
  ${breakpointsMedia({
    xs: 'height: 177px;',
    md: 'height: 350px',
  })}
`;

export const CardTitle = styled.h3`
  font-weight: 700;
  text-align: center;
  ${breakpointsMedia({
    xs: 'font-size: 24px',
    md: 'font-size: 32px',
  })}
  `;

export default function Card({ imageDesktop, imageMobile, title }) {
  return (
    <>
      <Link href={`/projects/${title}`}>
        <A>
          <CardWrapper>
            <MediaQuery maxWidth={767}>
              <CardImage src={imageMobile} />
            </MediaQuery>
            <MediaQuery minWidth={768}>
              <CardImage src={imageDesktop} />
            </MediaQuery>
            <CardTitle>{title}</CardTitle>
          </CardWrapper>
        </A>
      </Link>
    </>
  );
}

Card.defaultProps = {
  imageMobile: 'https://via.placeholder.com/288x177',
  imageDesktop: 'https://via.placeholder.com/287x390',
};

Card.propTypes = {
  imageMobile: PropTypes.string,
  imageDesktop: PropTypes.string,
  title: PropTypes.string,
};
