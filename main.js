//creo l'interazione al "carousel-next"
//intercetto il click sull'icona next
$(".carousel-right").click(function () {
    //seleziono l'immagine che ha l'active
    var img_corrente = $("img.active");
    //seleziono il pallino con l'active
    var bullets_corrente = $(".bullets i.active")
    //rimuovo la classe active all'immagine
    img_corrente.removeClass("active");
    //rimuovo la classe active al pallino
    bullets_corrente.removeClass("active")
    //seleziono l'immagine successiva
    var img_seguente = img_corrente.next("img");
    //seleziono il pallino successivo
    var bullets_seguente = bullets_corrente.next("i")
    //creo la condizione per aggiungere la classe
    if (img_seguente.length !=0) {
        //aggiungo la classe all'immagine successiva
        img_seguente.addClass("active");
        //aggiungo la classe al pallino successivo
        bullets_seguente.addClass("active")
    } else {
        //se length = 0 ritorno alla prima immagine
        img_seguente = $("img:first-child");
        img_seguente.addClass("active")
        //se length = 0 ritorno al primo pallino
        bullets_seguente = $(".bullets :first-child")
        bullets_seguente.addClass("active")
    }
})

//creo l'interazione al "carousel-prev"
//intercetto il click sull'icona
$(".carousel-left").click(function() {
    //seleziono l'immagine con la classe active
    var img_corrente = $("img.active");
    //seleziono il bullets con la classe active
    var bullets_corrente = $(".bullets i.active")
    //rimuovo la classe active all'immagine
    img_corrente.removeClass("active");
    //rimuovo la classe active al bullets_seguente
    bullets_corrente.removeClass("active");
    //seleziono l'immagine precedente
    var img_precedente = img_corrente.prev("img");
    //seleziono il bullets precedente
    var bullets_precedente = bullets_corrente.prev("i");
    //creo la condizione per aggiungere la classe
    if (img_precedente.length !=0) {
        //aggiungo la classe active all'immagine precedente
        img_precedente.addClass("active");
        //aggiungo la classe active all'immagine precedente
        bullets_precedente.addClass("active");
    } else {
        //se length = 0 ritorno alla prima immagine
        img_precedente = $("img:last-child");
        img_precedente.addClass("active");
        //se length = 0 ritorno al primo pallino
        bullets_precedente = $(".bullets :last-child");
        bullets_precedente.addClass("active");
    }
})

//creo l'interazione al cliccare dei pallino
