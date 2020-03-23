export const classNames = (...classes) => {
    const result = classes.filter(className => className !== undefined)
    return result.join(' ')
  }
