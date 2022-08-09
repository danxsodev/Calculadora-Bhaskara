function Mostrar() {
   const numMes= document.getElementById("textboxNum").value;
   
   if (isNaN(numMes)) {
        alert("Digite somente números!");
        document.getElementById("textboxExtenso").value="Inválido";
    }

   else if (numMes == "1") 
        document.getElementById("textboxExtenso").value="Janeiro";

    else if (numMes == "2") 
        document.getElementById("textboxExtenso").value="Fevereiro";
                
    else if (numMes == "3") 
        document.getElementById("textboxExtenso").value="Março";
    
    else if (numMes == "4") 
        document.getElementById("textboxExtenso").value="Abril";
    
    else if (numMes == "5") 
        document.getElementById("textboxExtenso").value="Maio";
    
    else if (numMes == "6") 
        document.getElementById("textboxExtenso").value="Junho";
    
    else if (numMes == "7") 
        document.getElementById("textboxExtenso").value="Julho";
     
    else if (numMes == "8") 
         document.getElementById("textboxExtenso").value="Agosto";

    else if (numMes == "9") 
        document.getElementById("textboxExtenso").value="Setembro";
    
    else if (numMes == "10") 
        document.getElementById("textboxExtenso").value="Outubro";

    else if (numMes == "11") 
        document.getElementById("textboxExtenso").value="Novembro";

    else if (numMes == "12") 
        document.getElementById("textboxExtenso").value="Dezembro";

    else
        document.getElementById("textboxExtenso").value="Inválido";
}

function Limpar() {
    document.getElementById("textboxNum").focus();
}