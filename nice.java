class nice {
    public static int random() {
        return (int)(Math.random() * 99999 + 10000);
    }
    public static void main(String[] args) {
        int count = 0;
        do {
            count++;
            int find = nice.random();
            if(find == 69420 || find == 42069) {
                System.out.println(String.format("%d found! %d times to find", find, count));
                break;
            }
            System.out.println(find);
        } while(true);
    }
}
