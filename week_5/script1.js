function determinant(){
    let x11,x12,x13,x21,x22,x23,x31,x32,x33,d;
    x11 = document.getElementById('s11').value;
    x12 = document.getElementById('s12').value;
    x13 = document.getElementById('s13').value;
    x21 = document.getElementById('s21').value;
    x22 = document.getElementById('s22').value;
    x23 = document.getElementById('s23').value;
    x31 = document.getElementById('s31').value;
    x32 = document.getElementById('s32').value;
    x33 = document.getElementById('s33').value;
    x11 = parseInt(x11);
    x12 = parseInt(x12);
    x13 = parseInt(x13);
    x21 = parseInt(x21);
    x22 = parseInt(x22);
    x23 = parseInt(x23);
    x31 = parseInt(x31);
    x32 = parseInt(x32);
    x33 = parseInt(x33);
    d = ((x11 * x22 * x33) + (x12 * x23 * x31) + (x13 * x21 * x32) - (x13 * x22 * x31) - (x11 * x23 * x32) - (x12 * x21 * x33));
    document.getElementById('result').innerHTML = d;
}
const button = document.querySelector('button');
button.addEventListener('click',determinant);
