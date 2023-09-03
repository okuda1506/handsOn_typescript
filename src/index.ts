import { createInterface } from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('名前を入力してください: ', (name) => {
    // true⇒name, false（空）⇒"名無し"を返す
    const displayName = name || "名無し";
    console.log(`こんにちは、${displayName}さん`);
    rl.close();
});