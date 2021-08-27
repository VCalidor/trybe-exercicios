let n = 20
let espacos = n
if (n % 2 == 0)
    for (i = 2;i <= n;i += 2){
        console.log(" ".repeat(espacos / 2), "*".repeat(i))
        espacos -= 2
    }

else {
    for (i = 1;i <= n;i += 2){
        console.log(" ".repeat(espacos / 2 + 1), "*".repeat(i))
        espacos-= 2
    }
}