var index = 0;

var kep1 = {
    eleresiut: "kepek/pug.jpg",
    cim: "Fázós mopsz",
    leiras: "1. leírás"
}; /*objektum, leírja egyetlen kép tulajdonságait*/

var kep2 = {
    eleresiut: "kepek/weimari.jpg",
    cim: "Kölyök weimári vizsla",
    leiras: "2. leírás"
};
var kep3 = {
    eleresiut: "kepek/welsh-corgi.jpg",
    cim: "Corgi élvezi az esőt",
    leiras: "3. leírás"
};
var kepTomb = [kep1, kep2, kep3];

$(function () {
    htmlModositasok();
    //ki kell cserélni a kattintott kép elérési útvonalára a nagykép elérési útvonalát
    $("article img").click(kepCsere);
    $("#bal").click(kepLeptetesBal);
    $("#jobb").click(kepLeptetesJobb);
});

function htmlModositasok() {
    for (var i = 0; i < kepTomb.length; i++) {
        var elem = '<div><h3></h3><img id="' + i + '" src="" alt=""/><p></p></div>';
        $("article").append(elem);
    }

    var kepElemTomb = $("article div img");
    var cimElemTomb = $("article div h3");
    var leirasElemTomb = $("article div p");
    console.log(kepElemTomb);

    for (var i = 0; i < kepElemTomb.length; i++) {
//        console.log(kepTomb[i].eleresiut);
        kepElemTomb.eq(i).attr("src", kepTomb[i].eleresiut);
        cimElemTomb.eq(i).html(kepTomb[index].cim);
        leirasElemTomb.eq(i).html(kepTomb[index].leiras);
    }

    //kattintás eseménykezelő a kisképre
    for (var i = 0; i < kepElemTomb.length; i++) {
        kepElemTomb[i].click(kepCsere);
    }

}

function kepCsere() {
    //itt cserélem ki a képet
    var i = this.id;
    $("#nagykepTarolo img").attr("src", kepTomb[i].eleresiut);
    $("#nagykepTarolo h3").eq(0).html(kepTomb[i].cim);
    $("#nagykepTarolo p").eq(0).html(kepTomb[i].leiras);
}

function kepLeptetesBal() {
    $("#nagykepTarolo img").attr("src", kepTomb[index].eleresiut);
    index--;
    if (index < 0) {
        index = kepTomb.length - 1;
    }
}

function kepLeptetesJobb() {
    $("#nagykepTarolo img").attr("src", kepTomb[index].eleresiut);
    index++;
    if (index > kepTomb.length - 1) {
        index = 0;
    }
}