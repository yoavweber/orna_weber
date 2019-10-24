import React from 'react';

import styles from './stickyCtl.module.scss'
import { Button } from '../../../../../layout/components/common/common';
import {BOOK_NOW, PHONE_NUMBER} from '../../../../../global'


const StickyCtl = () => {
    return(
        <div>
            <div className={styles.wrapper}>
                <div className={styles.sticky}>
                    <div className={styles.firstSection}>
                        <h2>יש שאלה?</h2>
                        <h3>התקשרי</h3>
                        <p>{PHONE_NUMBER}</p>
                    </div>
                    <div className={styles.secondSection}>
                        <hr />
                        <h3>או</h3>
                        <Button primary> {BOOK_NOW} </Button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default StickyCtl;