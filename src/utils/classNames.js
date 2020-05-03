// export const classNames = (...classes) => {
//     const result = classes.filter(className => className !== undefined)
//     // console.log(result.join(' '))
//     return result.join(' ')
//   }



  export const classNames = (...classes) => {
      const result = classes.reduce((accumulator,className) => {
        if(typeof className !== 'undefined'){
          if(typeof className === 'object' && Object.values(className)[0] === true){
            const test = Object.keys(className)[0]
            accumulator.push(test)
          }else if(typeof className === 'string'){
            accumulator.push(className)
          }
          
        }
        return accumulator 
      },[])

      return result.join(' ')
    }
  