function rand()
    return math.random(10000, 99999)
end

local count = 0

while true do
   count = count + 1
   local finder = rand()
   if finder == 69420 or finder == 42069 then
      print(finder .. " Found! - " .. count .. " times to find!")
      break
   end
   print(finder)
end
