//HO AGGIUNTO QUALCHE PASSAGGIO IN PIU' E MOLTI COMMENTI SPECIFICI PER CAPIRE OGNI AZIONE

//creo l'interazione al "carousel-next"
//intercetto il click sull'icona "carousel-right" ed utilizzo la funzione "next"
$(".carousel-right").click(next)

//creo l'interazione al "carousel-prev"
//intercetto il click sull'icona carousel-left ed utilizzo la funzione "prev"
$(".carousel-left").click(prev)

//creo l'interazione al click sul singolo pallino
$(".bullets i").click(function() {
    //recupero il pallino cliccato
    var bullets_clicked = $(this);
    //recupero l'indice del pallino cliccato
    var ind_bullets_clicked = bullets_clicked.index();

    //seleziono l'immagine con classe active e gli rimuovo la classe active
    var immagine_corrente = $("img.active").removeClass("active");

    //seleziono l'immagine con indice uguale al punto selezionato
    var immagine_parallela = $(".slide img").eq(ind_bullets_clicked);
    //aggiungo la classe active all'immagine parallela
    immagine_parallela.addClass("active");

    //seleziono il pallino con classe active e gli rimuovo la classe active
    var bullets_corrente = $(".bullets i.active").removeClass("active");

    //aggiungo la classe active al pallino cliccato
    bullets_clicked.addClass("active");
})

//aggiungo lo scorrimento automatico all'apertura della pagina web
var autoplay = setInterval(next, 3000);

//avvio l'autoplay al click del pulsante play
$(".play").click(function() {
    autoplay = setInterval(next, 3000);

    //seleziono l'icona pause e gli rimuovo la classe active
    $(".pause").removeClass("active");

    //selezioni l'icona play e gli aggiungo la classe active
    $(".play").addClass("active");
})

//interrompo l'intervallo al click dei pulsanti: pausa e carousel (left e right)
$(".pause, .carousel-left, .carousel-right").click(function() {
    //interrompo l'intervallo designato con variabile "autoplay"
    clearInterval(autoplay);

    //seleziono il pulsante play e gli rimuovo la classe active
    $(".play").removeClass("active");

    //seleziono il pulsante pause e gli assegno la classe active
    $(".pause").addClass("active");
})

//creo delle funzioni per evitare di ripetere codice
function next () {
    //seleziono l'immagine che ha l'active
    var img_corrente = $("img.active");
    //seleziono il pallino con l'active
    var bullets_corrente = $(".bullets i.active");

    //rimuovo la classe active all'immagine
    img_corrente.removeClass("active");
    //rimuovo la classe active al pallino
    bullets_corrente.removeClass("active");

    //seleziono l'immagine successiva
    var img_seguente = img_corrente.next("img");
    //seleziono il pallino successivo
    var bullets_seguente = bullets_corrente.next("i");

    //creo la condizione per verificare l'esistenza dell'immagine successiva
    if (img_seguente.length != 0) {
        //aggiungo la classe all'immagine successiva
        img_seguente.addClass("active");
        //aggiungo la classe al pallino successivo
        bullets_seguente.addClass("active");
    } else {
        //se length = 0 ritorno alla prima immagine
        img_seguente = $("img:first-child");
        img_seguente.addClass("active");
        //se length = 0 ritorno al primo pallino
        bullets_seguente = $(".bullets :first-child");
        bullets_seguente.addClass("active");
    }
}

function prev () {
    //seleziono l'immagine con la classe active
    var img_corrente = $("img.active");
    //seleziono il pallino con la classe active
    var bullets_corrente = $(".bullets i.active");

    //rimuovo la classe active all'immagine
    img_corrente.removeClass("active");
    //rimuovo la classe active al pallino precedente
    bullets_corrente.removeClass("active");

    //seleziono l'immagine precedente
    var img_precedente = img_corrente.prev("img");
    //seleziono il bullets precedente
    var bullets_precedente = bullets_corrente.prev("i");

    //creo la condizione per verificare l'esistenza dell'immagine precedente
    if (img_precedente.length !=0) {
        //aggiungo la classe active all'immagine precedente
        img_precedente.addClass("active");
        //aggiungo la classe active al pallino precedente
        bullets_precedente.addClass("active");
    } else {
        //se length = 0 ritorno all'ultima' immagine
        img_precedente = $("img:last-child");
        img_precedente.addClass("active");
        //se length = 0 ritorno all'ultimo pallino
        bullets_precedente = $(".bullets :last-child");
        bullets_precedente.addClass("active");
    }
}
