import React from 'react';
import Logo from '../../../assets/img/likelion_w_logo.svg';
import * as S from './Nav.styled';

const Nav = () => {
  return (
    <S.Layout>
      <img src={Logo} alt="Logo" />
      <S.ListBox>
        <li>브랜드 스토리</li>
        <li>서비스 소개</li>
        <li>미디어</li>
        <li>채용</li>
      </S.ListBox>
    </S.Layout>
  );
};

export default Nav;
