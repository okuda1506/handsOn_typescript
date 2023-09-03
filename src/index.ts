const num: number = NaN;

if (!Number.isNaN(num)) {
    console.log(`${num}はNaNではありません`);
} else {
    console.log(`${num}はNaNです`);
}