export const textuallyTruthy = (value: any): boolean => 
  value === true || String(value).toLowerCase() === 'true'
