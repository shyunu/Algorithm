import java.util.Scanner;

public class Main {
	public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);
        
		int a = scan.nextInt();
		int b = scan.nextInt();
		int c = scan.nextInt(); //주사위의 눈 3가지 스캔받음

		if( a > 0 && a <= 6 && b > 0 && b <= 6 && c > 0 && c <= 6) {

			// 같은 눈 3개 
			if(a == b && a == c && b == c) {
				System.out.println(10000 + a * 1000); 
			} 
            
			//같은 눈 2개
			else if(a == b || a == c) {
				System.out.println(1000 + a * 100);
			} else if (b == c) { //a,c
				System.out.println(1000 + b * 100);
			}

			//같은 눈 없음 
				else {


				if(a > b && a > c) { //a가 최대값


					System.out.println(100*a);


				} else if(b > a && b > c) { //b가 최대값


					System.out.println(100*b);


				} else if(c > a && c > b) {//c가 최대


					System.out.println(100*c);


				}


				scan.close();


			}


	


		}


	}


} 

