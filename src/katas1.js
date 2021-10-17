function oneThroughTwenty() {
  for ( let contador = 0 ; contador <= num; contador++){
    console.log(contador); 
    } 
}

let num = 20;

console.log(oneThroughTwenty(num));

//call function oneThroughTwenty

function evensToTwenty() {
  let num = 20;
  for ( let contador = 0; contador <= num; contador++){
    if (contador % 2 === 0){    
      console.log(contador);    
        }
    
      }
  
    }  
console.log(evensToTwenty());
 

//call function evensToTwenty

function oddsToTwenty() {
    
  let num = 20;
  for ( let contador = 0; contador <= num; contador++){
    if (contador % 2 === 1){    
      console.log(contador);    
        }
    
      }
  
    }  
console.log(oddsToTwenty());

//call function oddsToTwenty

function multiplesOfFive() {
    
  let num = 100;
  for ( let contador = 5; contador <= num; contador +=5){
    if (contador % 5 === 0){
    
    console.log(contador);
    
  }
    
  }
  
} 
console.log(multiplesOfFive());

//call function multiplesOfFive

function squareNumbers() {
   
  for (let cont =1 ; cont <= 10; cont++){
        let result= cont * cont;
  
  console.log(result);
  
  }
   
      
  }console.log(squareNumbers());

//call function squareNumbers

function countingBackwards() {
  for ( let contador = 20 ; contador >= 0; contador--){
    console.log(contador); 
    } 
}



console.log(countingBackwards());

function evenNumbersBackwards() {
    
  for ( let contador = 20; contador >=0; contador--){
    if (contador % 2 === 0){    
      console.log(contador);    
        }
    
      }
  
    }  
console.log(evenNumbersBackwards());
 

function oddNumbersBackwards() {
    
  for ( let contador = 20; contador >=0; contador--){
    if (contador % 2 === 1){    
      console.log(contador);    
        }
    
      }
  
    }  
console.log(oddNumbersBackwards());

function multiplesOfFiveBackwards() {
    
  for ( let contador = 100; contador >= 0; contador -=5){
    if (contador % 5 === 0){    
      console.log(contador);
      }
    
  }
  
} 
console.log(multiplesOfFiveBackwards());

function squareNumbersBackwards() {
   
  for (let cont =10 ; cont >=1 ; cont--){
    let result= cont * cont;

console.log(result);

}

  
}console.log(squareNumbersBackwards());
