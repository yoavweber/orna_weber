import React from 'react';
import styled from 'styled-components';

import { BOOK_NOW } from '../../../../global';
import { Button,H1 } from '../../../../layout/common/common';
import styles from './startBanner.module.scss';

const StyledbgPicture = styled.div`
  background-image: url(${(props) => props.bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  height:100%;
  flex: 1;
`;

const StartBanner = (props) => {
  return (
    <section className={styles.wrapper}>
      <StyledbgPicture bgImg={props.img} />
      <div className={styles.content}>
        <H1 color="black">{props.name}</H1>
        <h4>{props.text}</h4>
        <Button primary> {BOOK_NOW} </Button>
      </div>
    </section>
  );
};

export default StartBanner;
