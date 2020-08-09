function rand() {
    return Math.floor(Math.random() * 99999 + 10000)
}
let count = 0
do {
   count++
   const finder = rand()
   if(finder == 69420 || finder == 42069) {
      console.log(`${finder} Found! - ${count} times to find`)
      break
   }
   console.log(finder)
} while (true)
