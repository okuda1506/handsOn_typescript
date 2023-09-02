const str: any = "3";

// 暗黙の型変換を行ってから比較するためtrue
console.log(str == 3);

// 両オペランドの型が異なる場合は常にfalse
// 基本的に ===, !== を使うべき
console.log(str === 3);

// x == null の比較は == で良い ⇒ x がnull または undefined の意味