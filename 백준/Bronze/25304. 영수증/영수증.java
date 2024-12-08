import java.util.Scanner;



public class Main {



	 public static void main(String[] args) {


		 


		 Scanner scan = new Scanner(System.in);


		 int total = scan.nextInt(); // 총금액


		 int n = scan.nextInt(); //구매한 물건의 종류의 수


		 int a = 0; //물건가격


		 int b = 0; //물건개수


		 int price = 0;


		 


		 for(int i = 0; i < n; i++) {


			 a = scan.nextInt();


			 b = scan.nextInt();


			 price += a * b;


		 }


		 


		 if (price == total) {


			 System.out.println("Yes");


		 } else {


			 System.out.println("No");


		 }


		 


		 


		scan.close();


	 }


}