function solution(chicken) {
    let coupon = chicken;
    let service = 0; // 서비스 치킨 수
    
    while (coupon >= 10) {
        let free = Math.floor(coupon / 10);
        service += free;
        coupon = coupon % 10 + free;
    }
    
    return service;
}