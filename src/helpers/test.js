const  firtsWordToUperCase = (string)=>{
    const str = string;
    const  toUpercase = str.charAt(0).toUpperCase() + str.slice(1);
    return toUpercase;    
}
console.log(firtsWordToUperCase('LEONOR'))