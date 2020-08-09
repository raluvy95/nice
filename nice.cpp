#include <cstdlib>
#include <iostream>

int main() {
   int count = 0;
   do {
     count++;
     int finder = random() % 99999 + 1;
     if(finder == 69420 || finder == 42069) {
        std::cout << finder << " Found! - " << count << " times to find\n";
        break;
     }
     std::cout << finder << "\n";
   } while (true);
   return 0;
}

