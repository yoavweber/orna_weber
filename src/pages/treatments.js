import React from 'react';

import Banner from '../layout/common/banner/banner';
import { StartBanner } from './components/treatments';
import { Content } from './components/treatments';
import { Video } from './components/treatments';
import { StickyCtl } from './components/treatments';
import { Benefits } from './components/treatments';


import hairSection from './components/treatments/assets/hairRemoval.jpg';
import hairBanner from './components/treatments/assets/hair-removal1.jpg';

import styles from './components/treatments/layout.module.scss';
// import bannerStyle from './components/treatments/startBanner/startBanner.module.scss';
import { StaticQuery,graphql } from 'gatsby';


const Treatment = ({ pageContext }) => (
  <StaticQuery
    query={graphql`
      query {
        gcms {
          articles {
            name
            subHeadline
            contentPartOne{
              text
            }
            candidate{
             html
            }
            benefits
          }
        }
      }
    `}
    
    render={data => (
      <>
      <StartBanner img={hairBanner} name={pageContext.name} text={pageContext.subHeadline} />
      <div className={styles.wrapper}>
       <StickyCtl />
       <Content img={hairSection} processText={pageContext.contentPartOne} candidateText={pageContext.candidate} />
       <Benefits items={pageContext.benefits} />
       <Video  />
       <section>
         <Banner />
       </section>
     </div>
     </>
    )}
  />
)


export default Treatment;
