module.exports = function zeros(expression) {
  // test1
  let number_of_2=0;
  let number_of_5=0;
  let array1=[];
  let array2=[];
  let ArrayofStr=expression.split('*');
ArrayofStr.forEach(function(element)  {
      if (element.slice(-2) === "!!")
      { 
        array1.push(element.slice(0,element.length-2));
        console.log("array1=",array1);
       }
         
        
        
        if (element.slice(-1) === "!" &&  (element.slice(-2) !== "!!"))
        {
          array2.push(element.slice(0,element.length-1));
          console.log("array2=",array2);
        }
    });
    if (array1 !== []) {
    array1.forEach(function(element){
      for (let i = 0; i < element; i++){
      if ((element-i)%2 === 0) {
        number_of_2++;
      }
        if ((element-i)%5 === 0) {
          number_of_5++;
        
      }
      if ((element-i)%25 === 0) {
        number_of_5++;
      }
      i++;
    
    }})};
    if (array2 !== []) {
    array2.forEach(function(element){
      for (let i = 0; i < element; i++) {
        
        
      
      if ((element-i)%2 === 0) {
        number_of_2++;
      }
        if ((element-i)%5 === 0) {
          number_of_5++;
        
      }
      if ((element-i)%25 === 0) {
        number_of_5++;
    }
    }})}
    console.log("2,5",number_of_2,number_of_5);
    return Math.min(number_of_2,number_of_5);
  

}
  
  