let jumlahkartu = 5;
let kartuPertama = 0;
let kartuKedua = 0;

function buatAngka(){
let angkaBerurut = [];

for (var i=1; i<= jumlahkartu; i++){
   angkaBerurut.push(i, i);
}
    return angkaBerurut;
    
}   

function acakAngka(angkaBerurut){

    let angkaAcak = angkaBerurut.sort(function(){
        return 0.5 - Math.random();
        
    });
    return angkaAcak;
}

function mempersiapkankartu(angkaAcak){

    let string = '';

    angkaAcak.forEach(function(i) {
        string += '<div class="kartu" nilai ="' + i + '">'+
                        '<div class="belakang">' + i + '</div>'+
                        '<div class="depan">K A R T U</div>'+
                    '</div>';
    });

    $('#game').append(string);

}

function aturan(){
    $('.kartu').on('click', function(){
        $(this).addClass('buka');

            if(kartuPertama == 0){
                // Cara Pertama (Lebih recommend), karena tinggal panggil nilai
                kartuPertama = $(this).attr('nilai');
                /* Cara Kedua
                kartuPertama = $(this).children('.belakang').text();
                */
                console.log('kartuPertama : ' + kartuPertama);
                

            }else{
                kartuKedua = $(this).attr('nilai');
                console.log('kartuKedua : ' + kartuKedua);
                    if(kartuPertama == kartuKedua){
                        console.log('benar');
                        $('.buka').addClass('benar');
                        $('.benar').removeClass('buka');
                        kartuPertama = kartuKedua = 0;
                    }else{
                        console.log('salah');
                        kartuPertama = kartuKedua = 0;
                        $(this).one('transitionend', function(){
                        $('.kartu').removeClass('buka');
                });
            }
        }
    });
}


$(document).ready(function(){

    let angkaBerurut = buatAngka();
    
    let angkaAcak = acakAngka(angkaBerurut);

    mempersiapkankartu(angkaAcak);
    // console.log('ini adalah angka berurut :' + angkaBerurut);
    // console.log('ini adalah angka acak :' + angkaAcak);

    aturan();

});

