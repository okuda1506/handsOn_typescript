const input1 = "123", input2 = "";

//!! の意味⇒!(!式)という意味 
// !! ⇒オペランドを真偽値に変換(Boolean() と同じ)
const input1isNotEmpty = !!input1;
console.log(input1isNotEmpty); // true
const input2isNotEmpty = !!input2;
console.log(input2isNotEmpty); // false