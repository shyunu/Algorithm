import java.util.Scanner;



public class Main {



	public static void main(String[] args) {


		


		Scanner scan = new Scanner(System.in);


		int[] student = new int[31];


		


		for(int i = 1; i <= 28; i++) {


			int number = scan.nextInt();


			student[number] = 1;


		}


		


		for(int i = 1; i < student.length; i++) {


			if(student[i] != 1) {


				System.out.println(i);


			}


		}


		scan.close();


		


	}


}

