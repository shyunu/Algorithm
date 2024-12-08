import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		
	Scanner scan = new Scanner(System.in);
	int n = scan.nextInt(); //시험 본 과목의 개수 n
	double[] arr = new double[n]; //시험점수 배열
	double m = 0; //시험점수의 최대값
	double sum = 0; //시험점수의 합계
	double avg = 0; //시험점수의 평균값
	
	for(int i = 0; i < n; i++) {
		arr[i] = scan.nextInt();
		if(arr[i] > m) { //시험점수의 최대값 찾기
			m = arr[i];
		}
	}
	
	for(int i = 0; i < n; i++) {
		arr[i] = arr[i]/m*100;
		sum += arr[i];
	}
	
	avg = sum / n;
	System.out.println(avg);
	
	scan.close();
	}
}
