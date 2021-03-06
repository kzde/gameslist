import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import backgroundImg from '../assets/images/rayman-legends.jpg';
import withI18N from '../contexts/withI18n';
import ClickableText from '../components/ClickableText';
import { colorPalettes, textSizes, media } from '../utils/style';

const Img = styled.img`
  width: 100%;
  background-size: cover;
  height: 100vh;
  background: url(${backgroundImg});
  background-repeat: no-repeat;
  background-position: center;
`;

const ContentWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 40%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  width: 50%;
  height: 200px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: ${textSizes.titleText};
  padding: 0 30px;
  ${media.desktop`font-size:${textSizes.normalText};`}
`;
const Content = styled.div`
  color: ${colorPalettes.white};
  text-align: center;
`;
const GoBackButton = styled.div``;

const NotFoundScreen = ({ i18n }) => (
  <Fragment>
    <Header text={i18n._('catalog.header.title')} />
    <Img />
    <ContentWrapper>
      <Content data-test="not-found-message">{i18n._('notfoundpage.text.pagenotfound')}</Content>
      <GoBackButton data-test="go-back-button">
        <NavLink
          to="/"
          activeStyle={{
            color: colorPalettes.red
          }}
        >
          <ClickableText text={i18n._('notfoundpage.text.goback')} />
        </NavLink>
      </GoBackButton>
    </ContentWrapper>
  </Fragment>
);

NotFoundScreen.propTypes = {
  i18n: PropTypes.object.isRequired
};
export const notFoundScreen = NotFoundScreen;
export default withI18N(NotFoundScreen);
