import java.util.Scanner;



public class Main {



	 public static void main(String[] args) {


		 


		 Scanner scan = new Scanner(System.in);


		 int t = scan.nextInt();


		 String result = "";


		 


		 for ( int i = 0; i < t; i++) {


			 int a = scan.nextInt();


			 int b = scan.nextInt();


			 result += (a + b)+ " ";


		 }


		 System.out.println(result);


	 }


	 


}