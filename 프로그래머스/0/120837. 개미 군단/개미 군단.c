#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int hp) {
    int answer = 0;
    
    int a = hp / 5; // a 장군개미 수
    int b = hp % 5 / 3; // b 병정개미 수
    int c = hp % 5 % 3 / 1; // c 일개미 수
    
    answer = a + b + c;
    return answer;
}