import React from 'react';
import styles from './content.module.scss';

const Content = (props) => {
  console.log(props)
  return (
    <section>
      <img src={props.img} />
      <div className={styles.content}>
        {/* <div dangerouslySetInnerHTML={{__html: props.processText}} /> */}
        {props.processTest}
        

        {/* <h1>על התהליך</h1>
        {props.processText}
        <h1>Are you good candidate</h1>
        {props.canidataText} */}
      </div>
    </section>
  );
};


export default Content;
