//HO AGGIUNTO QUALCHE PASSAGGIO IN PIU' E MOLTI COMMENTI SPECIFICI PER CAPIRE OGNI AZIONE

//creo l'interazione al "carousel-next"
//intercetto il click sull'icona next
$(".carousel-right").click(function () {
    //blocco lo scorrimento al click del pulsante
    clearInterval(next_auto);

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
})

//creo l'interazione al "carousel-prev"
//intercetto il click sull'icona
$(".carousel-left").click(function() {
    //blocco lo scorrimento al click del pulsante
    clearInterval(next_auto);

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
})

//creo l'interazione al click sul singolo pallino
$(".bullets i").click(function() {
    //blocco lo scorrimento al click del pulsante
    clearInterval(next_auto);

    //recupero il pallino cliccato
    var bullets_clicked = $(this);
    //recupero l'indice del pallino cliccato
    var ind_bullets_clicked = bullets_clicked.index();

    //seleziono l'immagine con classe active
    var immagine_corrente = $("img.active");
    //rimuovo la classe active all'immagine corrente
    immagine_corrente.removeClass("active");

    //seleziono l'immagine con indice uguale al punto selezionato
    var immagine_parallela = $(".slide img").eq(ind_bullets_clicked);
    //aggiungo la classe active all'immagine parallela
    immagine_parallela.addClass("active");

    //seleziono il pallino con classe active
    var bullets_corrente = $(".bullets i.active");
    //elimino la classe active al pallino
    bullets_corrente.removeClass("active");
    //aggiungo la classe active al pallino cliccato
    bullets_clicked.addClass("active");
})

//creo una funzione per lo scorrimento automatico
var next_auto = setInterval(function() {
    //blocco lo scorrimento al click del pulsante
    clearInterval(next_auto);
    
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
}, 3000)
