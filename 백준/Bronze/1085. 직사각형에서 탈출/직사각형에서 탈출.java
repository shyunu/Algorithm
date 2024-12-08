import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int x = scan.nextInt();
        int y = scan.nextInt();
        int w = scan.nextInt();
        int h = scan.nextInt();

        //각각의 경계선까지의 거리
        int distanceToLeft = x;
        int distanceToBottom = y;
        int distanceToRight = w-x;
        int distanceToTop = h-y;

        int shortDistance = Math.min(Math.min(distanceToLeft, distanceToBottom), Math.min(distanceToRight, distanceToTop));

        System.out.println(shortDistance);
    }
}
