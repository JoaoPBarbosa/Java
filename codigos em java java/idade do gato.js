<script>
    var idade = 0;
    var pet = 7;
    var n = 3;
    var first_year = 15;
    var second_year = first_year + 10;
    var next_years = second_year;

    while (n <= 7) {
        next_years = next_years + 4;
        n++
    }
    document.write("A idade do gato de 7 anos é" + parseInt(next_years));
</script>
