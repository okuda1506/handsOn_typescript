const bignum: bigint = (123n + 456n) * 2n;

const result = 5n / 2n;

// BigInt と number は一緒に使えないので下記はコンパイルエラー
// const wrong = 100n + 50;

console.log(bignum);
console.log(result);