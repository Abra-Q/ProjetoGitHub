let a = 5

let b = 8 

let c = 10

let d = 2

let k = (b < a * 2) && (d < c - b)
    // k = (8 < 5 * 2) && (2 < 10 -8)
    // k = (8 < 10) && (2 < 2 )
    // k = true && false
    // k = false

let x = (a > b ) || ! (c % 2 == 0)
    // x = (5 > 8 ) || ! (10 % 2 == 0)
    // x = (false ) || ! (0 == 0)
    // x = false || ! true
    // x = false || false
    // x = false

let y = x || ! (c < a + b / d)
    // y = false || ! (10 < 5 + 8 / 2)
    // y = false || ! (10 < 5 + 4)
    // y = false || ! (10 < 9)
    // y = false || ! false
    // y = false || true
    // y = true

let z = ! x && false || (d + a <= b + d)
    // z = ! false && false || (2 + 5 <= 8 + 2)
    // z = ! false && false || (7 <= 10)
    // z = ! false && false || true
    // z = true && false || true
    // z = false || true
    // z = true

console.log(`K = ${k}\nX = ${x}\nY = ${y}\nZ = ${z}\n`)