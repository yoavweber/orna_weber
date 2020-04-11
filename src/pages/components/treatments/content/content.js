import React from 'react';
import styles from './content.module.scss';

const Content = (props) => {
  return (
    <section>
      <img src={props.img} />
      <div className={styles.content}>

        <h1>על התהליך</h1> 
          <div dangerouslySetInnerHTML={{__html: props.processText}} />        
        
        <h1>האם את מועמדת מתאימה?</h1>
        <div dangerouslySetInnerHTML={{__html: props.candidateText}} />        
      </div>
    </section>
  );
};


export default Content;
