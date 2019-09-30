import React from 'react';

import styles from './video.module.scss';

const Video = (props) =>{
    return(
        <section>
            <div className={styles.content}>
                <h1>The Procedure</h1>
                {props.content}
            </div>
        </section>
    )
}

export default Video;