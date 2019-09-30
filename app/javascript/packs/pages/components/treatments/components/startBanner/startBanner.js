import React from 'react'
import styled from 'styled-components'

import styles from './startBanner.module.scss'
import {Button} from '../../../../../layout/components/common/common'


const bgPicture = () => {
    return(
        <div> hiii</div> 
    )
}

const StyledbgPicture = styled(bgPicture)`
background-color: 'black';
width: 500px;
height:1000px;`
;


const StartBanner = (props) => {
    return(
        <section className={styles.wrapper}>
            <StyledbgPicture />
            <div className={styles.contant}>
                {props.text}
                <p>from banner!</p>
                <Button primary> Book Now </Button>
            </div>
        </section>

    )
}





export default StartBanner;