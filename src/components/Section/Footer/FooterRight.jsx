import * as S from './FooterRight.styled';

import Download from '../../../assets/img/download.svg';
import Share from '../../../assets/img/share.svg';

export default function FooterRight() {
  return (
    <S.Layout>
      <div className="family">
        <h3>FAMILY BRAND</h3>
        <p>TECHIT</p>
        <p>SYLTARE</p>
        <p>MODERN LION</p>
        <p>QUADHASH</p>
      </div>
      <div className="policy">
        <h3>POLICY</h3>
        <p>이용약관</p>
        <p>개인정보처리방침</p>
        <div className="image_p_box">
          <p>Nonprofit Report</p>
          <img src={Download} alt="Download" />
        </div>
        <div className="image_p_box">
          <p>국민권익위원회</p>
          <img src={Share} alt="Share" />
        </div>
      </div>
      <div className="resource">
        <h3>RESOURCE</h3>
        <div className="image_p_box">
          <p>로고 가이드라인</p>
          <img src={Download} alt="Download" />
        </div>
      </div>
    </S.Layout>
  );
}
