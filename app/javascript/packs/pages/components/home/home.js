import React from 'react';
import './home.css';
import oran_pic from './assets/orna_section2.jpg';
// import * from './assets'




// var req = require.context("./assets", true, /^(.*\.(jpg$))[^.]*$/igm);
// var files={};
// req.keys().forEach(function(key){
//     req(key);
//     files[key] = req(key);
// })

console.log("from home!!!")




function Home(){
    
    const column = []
    const grid = () => {
        for(let i=1; i>3;i++){
            column.push(
        <div className={`column-${i}`}>
            <img src="#" alt="test">hiii</img>
            <img src="#" alt="test1">jo</img>
        </div>)
        }
    }

    let test = column.map((i) => {
        return i
    })



    return(
        <div className="container">
            <section className="first-section-container">
                <div className="first-section">
                    <div className="text" id = "first_sec_text">
                        <h1> שרב כבד, משרד הבריאות פרסם אזהרה</h1>
                        <h2>שקע שרבי מגיע ממצרים ויביא עמו חום כבד עד קיצוני. באזורים רבים יעלו מידות החום מעל ל-40 מעלות. חזאי מטאו-טק: "מצב חריג וקצר מאוד". משרד הבריאות: "קשישים וחולים כרוניים מתבקשים להימנע מחשיפה לחום ולשמש". התחזית המלאה</h2>
                    </div>
                    <div className="first-sec-button">
                        <button className="green-btn">לפגישת ייעוץ</button>
                        <button className="white-btn">התקשר</button>
                    </div>
                </div>
            </section>
            <section className="second-section-container">
                <div className="second-section">
                    <div className="text">
                        <h1 className="green-headline">מחר שרב כבד, משרד הבריאות פרסם אזהרה</h1>
                        <h2>שקע שרבי מגיע ממצרים ויביא עמו חום כבד עד קיצוני. באזורים רבים יעלו מידות החום מעל ל-40 מעלות. חזאי מטאו-טק: "מצב חריג וקצר מאוד". משרד הבריאות: "קשישים וחולים כרוניים מתבקשים להימנע מחשיפה לחום ולשמש". התחזית המלאה</h2>
                    </div>
                    <div className="orna-img">
                        <img src={oran_pic} alt="orna picture"/>               
                    </div>
                </div>
            </section>
            <section className="third-section-container">
                <h1> הטיפולים שלנו</h1>
                <div className="third-section">
                    {test}
                    {/* <div className="column-1">
                        <img src="#"></img>
                        <img src="#"></img>
                    </div>
                    <div className="column-2">
                        <img src="#"></img>
                        <img src="#"></img>
                    </div>
                    <div className="column-3">
                        <img src="#"></img>
                        <img src="#"></img>
                    </div> */}
                </div>
            </section>
       </div>
    
    )
}


export default Home;