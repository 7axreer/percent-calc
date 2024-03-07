var x;
var y;
var z = 100;

document.getElementById('submitBtn').onclick = function (e) {
    x = document.getElementById('number').value;
    y = document.getElementById('discount').value;
    e.preventDefault();

    if (isNaN(x) && isNaN(y) || x == 0 && y == 0) {
        document.getElementById('discountPrecent').textContent = `Iltimos son kiriting!`

    }
    else {
        var a = x * y / z;
        var c = x - a;

        const p = document.getElementById('discountPrecent').textContent = `Chegirma: -${y}%`
        const s = document.getElementById('totalPrice');
        s.textContent = `Umumiy narx: ${parseFloat(x).toLocaleString()} so'm`;
        const q = document.getElementById('answerPrice').textContent = `Chegirma narxi: ${c.toLocaleString()} so'm`
        const w = document.getElementById('author').textContent = `created by Sobirov Saidaxror`
    }
}

