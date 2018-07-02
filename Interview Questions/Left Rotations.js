var a = [1, 2, 3, 4, 5]
var d = 5 

function RotateLeft(a, d) {
    for (let index = 0; index < d; index++) {
        var x = a.shift(0)
        a.push(x)
    }
}

RotateLeft(a, d)