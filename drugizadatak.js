// Написати програм који исписује структуру броја 8 од #, за унето W и H (width,height)

let W = 10
let H = 11

let poklopac = ''
let red = ''

poklopac = ' ' + '#'.repeat(W - 2) + ' '
red = '#' + ' '.repeat(W - 2) + '#'
let prvap = Math.floor((H - 3) / 2)
let drugap =  (H - 3) - prvap

console.log(poklopac)

for (let i = 1; i <= prvap; i++){
    console.log(red)
}

console.log(poklopac)

for (let i = 1; i <= drugap; i++){
    console.log(red)
}

console.log(poklopac)
