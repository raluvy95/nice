#!/bin/bash

counter=0
while true; do
   count=count+1
   rand=$RANDOM
   if [[ $rand -eq 42069 || $rand -eq 69420 ]]; then
      echo "$rand Found! - $counter times to find";
      break;
   fi
   echo $rand
done
# It worked, but still finding the number
