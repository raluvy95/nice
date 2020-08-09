var count: Int = 0

func random() -> Int {
    return Int.random(in: 10000...99999)
}
repeat {
    count+=1
    let find: Int = random()
    if find == 42069 || find == 69420{
        print("\(find) Found! \(count) times to find.")
        break
    }
    print(find)
} while true
