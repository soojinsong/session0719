import * as S from './FooterLeft.styled';

import Logo from '../../../assets/img/likelion_logo.svg';
import Instar from '../../../assets/img/instar.svg';
import Youtube from '../../../assets/img/youtube.svg';
import Branch from '../../../assets/img/branch.svg';

export default function FooterLeft() {
  return (
    <S.Layout>
      <img src={Logo} alt="Logo" className="logo" />
      <p>
        (주)멋쟁이사자처럼 | 대표이사 나성영
        <br />
        서울특별시 종로구 종로3길 17 D타워, 16-17층
        <br />
        사업자 번호 : 264-88-01106
        <br />
        통신판매업 신고번호 : 2022-서울종로-1534
        <br />
        문의처 contact@likelion.net
        <br />
      </p>
      <S.ImageBox>
        <div>
          <img src={Instar} alt="Instar" className="instar" />
        </div>
        <div>
          <img src={Youtube} alt="Youtube" className="youtube" />
        </div>
        <div>
          <img src={Branch} alt="Branch" className="branch" />
        </div>
      </S.ImageBox>
    </S.Layout>
  );
}
