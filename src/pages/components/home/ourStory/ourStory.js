import React from 'react'
import oran_pic from '../assets/orna_section2.jpg'
import styles from './ourStory.module.scss'

const OrnaBackground = () => {
  return (
    <section className={styles.ourStory}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.headline}>הסיפור שלנו </h1>
          <p>
            שמי אורנה ובר, אני יו"ר ארגון הקוסמטיקאיות בישראל, ובעלת עשרות שנים של ניסיון בתחום הקוסמטיקה אני בוגרת
            האקדמיה של חוה זינגבוים, מטפלת עם מוצרים של החברות המובילות בעולם, דוגמת Guinot ו- BIOFOR ועוד רבים וטובים.
            <br />
            <br /> ומזה מספר שנים המטפלת הרשמית בעור הפנים של מלכות היופי ומועמדות לתחרות מלכת היופי. את הקליניקה
            לאסתטיקה מתקדמת הקמתי לפני שנים רבות, מתוך החזון לאפשר לכל אחת ללכת עם גב זקוף ופנים קורנות, לאהוב את מי
            שהיא, ואת מה שהיא רואה במראה. <br />
            <br /> המדע והמחקר מספקים בימינו פתרונות מעולים לבעיות אסתטיות שונות, כל שאנו צריכות הוא לפרגן לעצמנו שעתיים
            בחודש של התנתקות זמנית ממבחנים, עבודה, ילדים, קריירה, ו, משרד הבריאות פרסם אזהרצרות היומיום, ולהתמסר קצת
            לעצמנו, לרגעים של בריאות פיסית ונפשית, פינוק ויופי. זה המקום להחליט שמגיע לכן עור פנים בריא יותר, ללא כתמי
            פיגמנטציה, ללא אקנה, גוף ללא שיער מיותר, ואזורים שונים בגוף ללא צלוליט.
            <br />
            <br />
            כשאנחנו מרגישות עם עצמנו טוב יותר, אנחנו יפות יותר, ורואים את זה.
          </p>
        </div>
        <div className={styles.img}>
          <img src={oran_pic} alt="orna picture" />
        </div>
      </div>
    </section>
  )
}

export default OrnaBackground
