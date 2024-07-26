// magic square

class HelloWorld {
    public static void arrangeNumber(int arr[][]){
        int len = arr.length;
        int row = len/2;
        int col = len-1;
        for(int k = 2;k<len*len;++k) {
            if(row == -1){
                row = len -1;
            }else  if (col >= len){
                col = 0;
            } else {
                if(arr[row][col] != 0){
                    row+=2;
                    col-=1;
                }
            }
            arr[row][col] = k;
        }
        for(int i =0 ;i< arr.length;++i){
            for(int j=0;j< arr.length;++j){
                System.out.println(arr[i][j]);
            }
        }
    }
    
    public static void main(String[] args) {
        int arr[][] = {{0,0,0},{0,0,0},{0,0,0}};
        arrangeNumber(arr);
        
    }
}