import React from 'react';
import styled from 'styled-components';

import { BOOK_NOW } from '../../../../global';
import { Button } from '../../../../layout/common/common';
import styles from './startBanner.module.scss';

const StyledbgPicture = styled.div`
  background-image: url(${(props) => props.bgImg});
  background-repeat: no-repeat;
  background-size: contain;
  flex: 1;
`;

const StartBanner = (props) => {
  return (
    <section className={styles.wrapper}>
      <StyledbgPicture bgImg={props.img} />
      <div className={styles.content}>
        {props.text}
        <Button primary> {BOOK_NOW} </Button>
      </div>
    </section>
  );
};

export default StartBanner;
