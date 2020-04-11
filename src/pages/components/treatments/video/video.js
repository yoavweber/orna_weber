import React from 'react';

import styles from './video.module.scss';

const Video = (props) =>{
    return(
        <section>
            <div className={styles.content}>
                <h1>על השיטה</h1>
                <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY" />
                {props.content}
            </div>
        </section>
    )
}

export default Video;