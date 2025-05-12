function solution(n) {
    const isPrime = Array(n + 1).fill(true); // 0 ~ n까지 true로 초기화
    isPrime[0] = false;
    isPrime[1] = false;

    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false; // i의 배수는 소수가 아님
            }
        }
    }

    // true인 개수가 소수의 개수
    return isPrime.filter(Boolean).length;
}