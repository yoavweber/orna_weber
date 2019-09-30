import React from 'react';

import Banner from '../../../layout/components/common/banner/banner';
import StartBanner from './components/startBanner/startBanner';
import Content from './components/content/content';
import Video from './components/video/video';


// const startBannerText = () =>{
//     return(
//         <div>
//             <h1>Laser Hair Removal</h1>
//             <h2>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
//             </h2>
//         </div>

//         )
// }

const ConetntProcessText = <p>
     Laser hair removal is a cosmetic procedure used to remove unwanted body hair with pulsed laser energy. This procedure removes hair from the targeted area while leaving the surrounding skin unharmed.
     Common areas on which laser hair removal is performed are the chin, upper lip, chest, underarms, back, bikini line and legs. Areas targeted are usually somewhat dependent on the gender of the patient. <br /> <br />
     While there are many temporary treatments to remove unwanted hair, such as tweezing, shaving, using depilatory creams and waxing, patients seeking more permanent,
     less irritating or painful methods, are frequently very pleased with laser hair removal. Through this safe, painless procedure, patients can enjoy long-term hair removal from nearly any area of the body with the exception of the eyes since there is a possibility of serious eye damage.
     

</p>


const Treatment = () => {

    return(
        <div>
            <StartBanner />
            <Content processText={ConetntProcessText}/>
            <Video />
            <Banner />
        </div>
    )
}


export default Treatment;