<script>
     function calcularCircun(Raio2 ){
         var Raio2 = prompt("Qual o valor do Raio?");
         var P2 = 3.14

         var C = 2 * P2 * Raio2;

         document.write("O valor da área da Circunferência é de:" + C + "</br>");
     }    

    calcularCircun (0);
    
    function calcularArea(Raio ){
    var Raio = prompt("qual o valor do Raio?");
    var P = 3.14
 
    var area = P * (parseInt(Raio) * parseInt(Raio) );


    document.write("O valor da área do circulo é de:" + area);

   
}

calcularArea(0 );
</script>