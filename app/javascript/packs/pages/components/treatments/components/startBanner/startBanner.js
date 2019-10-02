import React from 'react'
import styled from 'styled-components'

import styles from './startBanner.module.scss'
import {Button} from '../../../../../layout/components/common/common'


const StyledbgPicture = styled.div`
   
    background-image: url(${props => props.bgImg});
    background-repeat: no-repeat;
    flex:2;
    
`;


const StartBanner = (props) => {     
    console.log(props)
    return(
        <section className={styles.wrapper}>
            <StyledbgPicture bgImg={props.img} />
            <div className={styles.content}>
                {props.text}
                <Button primary> Book Now </Button>
            </div>
        </section>

    )
}





export default StartBanner;