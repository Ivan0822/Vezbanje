// 1300 se preskace
// Prvi 30 prestupnih godina ukljucujuci 1234

let godina = 1234
let i = 1

while (i <= 30) {
    if (godina % 4 === 0 && (godina % 100 !== 0 || godina % 400 === 0)) {
        console.log(godina)
        i++
    }
    godina++
}