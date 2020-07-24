// Написати програм који рачуна аритметичку средину бројева између K и N

let K = 100
let N = 10
let sum = 0
let sredina
let i = 0

if (K > N) {
    let tmp = K
    K = N
    N = tmp
}

while (K <= N) {
    sum += K
    K++
    i++
}

sredina = sum / i
console.log(sredina)