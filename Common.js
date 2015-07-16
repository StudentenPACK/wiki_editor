  /* Das folgende JavaScript wird für alle Benutzer geladen. */

if ( mw.toolbar ) {
    mw.toolbar.addButton( {
        imageFile: 'skins/common/images/button_comment.png',
        speedTip: 'Artikelbox einfügen',
        tagOpen: ' ',
        tagClose: ' ',
        sampleText: "{{Infobox Artikel\n| autor = Name des Autors\n| titel = Titel des Artikels\n| zweittitel = \n| kolumne = Kolumnentitel\n| stichwort = Stichwort\n| lektor = \n| ausgabe = Monat Jahr\n| zeichen = \n| status = Idea \n| bilder = keine \n}}",
        imageId: 'button-comment'
    } );
}
