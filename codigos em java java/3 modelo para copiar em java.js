<script>
    var a = prompt("Digite o valor do primeiro número:");
    var b = prompt("digite o valor do segundo número:");
    var temp

    temp = a;
    a = b;
    b = temp;

    document.write("O novo valor de A é:" + a + "</br>");
    document.write("O novo valor de B é de:" + b + "</br>");
</script>