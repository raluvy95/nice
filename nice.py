from random import randint

def rand():
   return randint(10000, 99999)
count = 0
while True:
   count+=1
   finder = rand()
   if finder == 69420 or finder == 42069:
      print(f"{finder} Found! - {count} times to find")
      break
   print(finder)

