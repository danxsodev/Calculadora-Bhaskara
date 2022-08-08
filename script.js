function Calcular() {
    var va = document.getElementById("a").value;
    var vb = document.getElementById("b").value;
    var vc = document.getElementById("c").value;
    var delta = b**2-(4*a*c);
    var vx1 = document.getElementById("x1").value;
    var vx2 = document.getElementById("x2").value;

    if ((isNaN(va))||(va=="")||(va==0)) {
        window.alert("O 1º termo não pode ser vazio, zero ou caracter!");
        document.getElementById("a").value = "";
        document.getElementById("delta").value = "";
        document.getElementById("x1").value = "";
        document.getElementById("x2").value = "";
        document.getElementById("a").focus();
    }

    else if ((isNaN(vb))||(vb=="")) {
        window.alert("O 2º termo não pode ser vazio, zero ou caracter!");
        document.getElementById("b").value = "";
        document.getElementById("delta").value = "";
        document.getElementById("x1").value = "";
        document.getElementById("x2").value = "";
        document.getElementById("b").focus();
    }

    else if ((isNaN(vc))||(vc=="")) {
        window.alert("O 2º termo não pode ser vazio, zero ou caracter!");
        document.getElementById("c").value = "";
        document.getElementById("delta").value = "";
        document.getElementById("x1").value = "";
        document.getElementById("x2").value = "";
        document.getElementById("c").focus();
    }

    else {
        va = parseFloat(va);
        vb = parseFloat(vb);
        vc = parseFloat(vc);
        delta = Math.pow(vb,2)-4*va*vc;
        document.getElementById("delta").value = delta;
        
        if (delta > 0) {
            vx1 = (-vb+Math.sqrt(delta))/(2*va);
            vx2 = (-vb-Math.sqrt(delta))/(2*va);
            document.getElementById("x1").value = vx1;
            document.getElementById("x2").value = vx2;
        }

        else if (delta < 0) {
            window.alert("Não há raízes reais");
        }
    }
}

function Limpar() {
    document.getElementById("a").focus();
    document.getElementById("x1").style.width="10%";
    document.getElementById("x2").style.width="10%";
}
