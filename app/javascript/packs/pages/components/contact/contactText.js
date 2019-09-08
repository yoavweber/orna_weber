import React from 'react';
import {Button} from '../../../layout/components/common/common'




const ContactText = () =>{
    console.log(constructor.componentName)
    return(
        <div className="contact_text_wrapper">
            <h1>צרו קשר</h1>
            <p>יש לך בעיה ואת לא מוצאת את הפיתרון שלה?
                מחפשת את הטיפול המתאים לעור הפנים שלך?
                נשמח לתת לך מענה מהיר ומקצועי ולהזמין אותך לפגישה ייעוץ בחינם.</p>
            <h4>התקשרי עכשיו</h4>
            <p>0506398006</p>
            <h4 >או תתאמי פגישה</h4>
            <Button primary> לפגישת ייעוץ</Button>

        </div>
    )
}


export default ContactText;