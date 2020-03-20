import React from 'react';

import Banner from '../layout/common/banner/banner';
import { StartBanner } from './components/treatments';
import { Content } from './components/treatments';
import { Video } from './components/treatments';
import { StickyCtl } from './components/treatments';

import hairSection from './components/treatments/assets/hairRemoval.jpg';
import hairBanner from './components/treatments/assets/HairRemovalBanner.jpg';

// import styles from './test.module.scss';
import bannerStyle from './components/treatments/startBanner/startBanner.module.scss';
import { graphql } from 'gatsby';

const ConetntBannerText = () => {
  return (
    <div className={bannerStyle.bannerText}>
      <h1>הסרת שיער בלייזר</h1>
      <h3>
        מבין כל השיטות המוכרות לנו בהתמודדות מול שיער הגוף המיותר, הסרת שיער בלייזר, היא, ללא ספק, הדרך היעילה מכולן.
        זאת, לא רק משום שמדובר בהליך אשר מפחית באופן משמעותי את קצב וצפיפות צמיחת השיער באזורי הגוף השונים, אלא גם משום
        שמדובר בהליך המבוצע על ידי צוות מיומן בפיקוח רפואי, והוא ממוקד בחיסול זקיקי השערה עצמם. מה שמקנה לו, ללא עוררין
        וללא מתחרים גם את הצביון המקצועי והבטוח שלו.{' '}
      </h3>
    </div>
  );
};

const ConetntProcessText = () => {
  return <div>hi</div>;
};

const Treatment = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log(data)
  return (
    <div>
      <StartBanner img={hairBanner} text={ConetntBannerText()} />
      <StickyCtl />
      <Content img={hairSection} processText={post.html} />
      <Video />
      <Banner />
    </div>
  );
};

export const testQuery = graphql`
  query test($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;

export default Treatment;
