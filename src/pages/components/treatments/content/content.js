import React from 'react';
import styles from './content.module.scss';

const Content = (props) => {
  return (
    <section>
      <img src={props.img} />
      <div className={styles.content}>
        <h1>On the process</h1>
        {props.processText}
        <h1>Are you good candidate</h1>
        {props.canidataText}
      </div>
    </section>
  );
};

export default Content;
