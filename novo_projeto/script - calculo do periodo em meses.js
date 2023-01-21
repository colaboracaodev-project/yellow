function myFunction() {
    const dataInicial = document.getElementById('tempoInicial').value
    const dataFinal = document.getElementById('tempoFinal').value
    
    var data1 = new Date(dataInicial); 
    var data2 = new Date(dataFinal);

    if(data1 > data2){
        alert('A data em que você começou a trabalhar deve ser menor que a data do último dia')
    }

    var total = (data2.getFullYear() - data1.getFullYear())*12 + (data2.getMonth() - data1.getMonth());

    return total
}