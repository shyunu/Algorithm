import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		
        //스캐너 
        
		Scanner scan = new Scanner(System.in);
		String s = scan.next();
		int i = scan.nextInt();
		
		System.out.println(s.charAt(i-1));
		
		
	}
}
