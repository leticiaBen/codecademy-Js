let raceNumber = Math.floor(Math.random() * 1000);
const registredEarly= false;
const age= 18 ;
if( age > 18 && registredEarly== true) {
  raceNumber+=1000;
};


if(age>18 && registredEarly== true){
  raceTime= 9.30 ;
  console.log(` your race number is : ${raceNumber}`);
  console.log(`the race it's at ${raceTime}`)
}
else if(age>18 && registredEarly== false){
  raceTime= 11.00 ;
  console.log(` your race number is : ${raceNumber}`);
  console.log(`the race it's at ${raceTime}`)
   
}
else if(age< 18) {
  raceTime= 12.30 ;
  console.log(` your race number is : ${raceNumber}`);
   console.log(`the race it's at ${raceTime}`)
}
else {
  console.log('Please check the registration desk!')
}