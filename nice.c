#include <stdlib.h>

int main() {
   int count;
   do {
      count++;
      int finder = rand() % 99999 + 1;
      if(finder == 69420 || finder == 42069) {
          printf("%i Found! ", finder);
          printf("%i times to find\n", count);
          break;
      }
      printf("%i \n", finder);
   } while(1);
   return 0;
}
