function Calculate(){
    var resultarea= Number(document.getElementById("n1").value) * Number(document.getElementById("n2").value);

    document.getElementById("AA").innerHTML= resultarea;

    var resultperimeter= (Number(document.getElementById("n1").value) + Number(document.getElementById("n2").value))*2;

    document.getElementById("AP").innerHTML= resultperimeter;
}