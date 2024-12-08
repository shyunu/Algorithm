import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		int m = scan.nextInt();
		int n = scan.nextInt();
		
		int p = ( n % 10 ) * m ; 
		int q = ( n % 100 ) / 10 * m;
		int r = ( n / 100 ) * m;
		
		int s = p + 10*q + 100*r;
		
		System.out.println(p);
		System.out.println(q);
		System.out.println(r);
		System.out.println(s);
		
		scan.close();
	}
}