
let kolicina = 200
let cena = 50
let dan = 1

if (kolicina > 0 && cena > 0 && dan > 0 && dan < 8) {
    let cenaproizvoda = (cena / 100) * kolicina
    if (dan === 1 || dan === 5) {
        cenaproizvoda = cenaproizvoda * 0.9
    }
    console.log(`Cena proizvoda je ${cenaproizvoda} dinara.`)
}
else {
    console.log('Unesite validne iznose za cenu/kolicinu/dan')
}