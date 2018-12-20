export class Card {
    titre: string;
    contenu: string;
    isFav?:boolean;

    constructor(titre: string, contenu: string) {
        this.titre = titre;
        this.contenu = contenu;
    }
}
