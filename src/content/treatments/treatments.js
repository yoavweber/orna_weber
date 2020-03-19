import groupBy from 'lodash/groupBy';




const rawTreatments = [
    {id:"hair",treatment:"הפחתת שיער לצמיתות",link:"#", size:"test" },
    {id:"akne",treatment:"אקנה",link:"#" },
    {id:"antiAging",treatment:"אנטי-אייג'ינג",link:"#" },
    {id:"butox",treatment:"הזרקות בוטוקס",link:"#" },
    {id:"reflexology",treatment:"רפלקסולוגיה",link:"#" },
    {id:"massage",treatment:"מאסז׳ים מפנקים",link:"#" },
    {id:"wax",treatment:"טיפולי שעווה",link:"#" },
    {id:"makeUp",treatment:"איפור קבוע",link:"#" },
    {id:"pigmentation",treatment:"הבהרת כתמים",link:"#" },
    ];



    const Treatments = groupBy(rawTreatments,'id')


export {Treatments,rawTreatments}