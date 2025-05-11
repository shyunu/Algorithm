function solution(lines) {
    const arr = new Array(201).fill(0); // [-100 ~ 100] 총 201칸

    for (let [start, end] of lines) {
        for (let i = start; i < end; i++) {
            arr[i + 100] += 1; // 인덱스를 0부터 시작하도록 +100
        }
    }

    // 겹친 부분이 2개 이상인 곳의 길이만 합산
    return arr.filter(count => count >= 2).length;
}