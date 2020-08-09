function random(): number {
    return Math.floor(Math.random() * 99999)
}
let count: number = 0;
do {
   count++;
   const finder: number = random();
   if(finder == 42069 || finder == 69420) {
      console.log(`${finder} Found! ${count} numbers to find`);
      break;
   } else {
     console.log(finder);
   }
} while(true);
