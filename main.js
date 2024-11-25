class Book {
    constructor(ad, muellif) {
        this.ad = ad;
        this.muellif = muellif;
        this.movcuddur = true; 
    }
}

class Kitabxana {
    constructor() {
        this.kitablar = [];
    }

    kitabElaveEt(kitab) {
        this.kitablar.push(kitab);
    }

    kitabSil(ad) {
        this.kitablar = this.kitablar.filter(kitab => kitab.ad !== ad);
    }

    kitabVer(ad) {
        const kitab = this.kitablar.find(kitab => kitab.ad === ad);
        if (kitab && kitab.movcuddur) {
            kitab.movcuddur = false;
            console.log(`${ad} kitabı uğurla ödünc verildi.`);
        } else {
            console.log(`${ad} kitabı mövcud deyil və ya artıq ödünc verilib.`);
        }
    }

    kitabQaytar(ad) {
        const kitab = this.kitablar.find(kitab => kitab.ad === ad);
        if (kitab && !kitab.movcuddur) {
            kitab.movcuddur = true;
            console.log(`${ad} kitabı uğurla geri qaytarıldı.`);
        } else {
            console.log(`${ad} kitabı artıq mövcuddur.`);
        }
    }

    muellifeGoreAxtar(muellif) {
        return this.kitablar.filter(kitab => kitab.muellif === muellif);
    }

    movcudKitablariGoster() {
        return this.kitablar.filter(kitab => kitab.movcuddur);
    }

    kitablariSirala() {
        return this.kitablar.sort((a, b) => a.ad.localeCompare(b.ad));
    }
}

const kitabxana = new Kitabxana();

const kitab1 = new Book("Hərb və Sülh", "Lev Tolstoy");
const kitab2 = new Book("Kürk Mantolu Madonna", "Sabahattin Ali");
const kitab3 = new Book("1984", "Corc Oruel");

kitabxana.kitabElaveEt(kitab1);
kitabxana.kitabElaveEt(kitab2);
kitabxana.kitabElaveEt(kitab3);

console.log("Bütün Kitablar:", kitabxana.kitablar);

kitabxana.kitabVer("1984");
console.log("1984 Kitabı Mövcuddurmu?", kitabxana.kitablar.find(kitab => kitab.ad === "1984").movcuddur);

kitabxana.kitabQaytar("1984");
console.log("1984 Kitabı Mövcuddurmu?", kitabxana.kitablar.find(kitab => kitab.ad === "1984").movcuddur);

console.log("Sabahattin Ali'nin kitabları:", kitabxana.muellifeGoreAxtar("Sabahattin Ali"));

console.log("Mövcud Kitablar:", kitabxana.movcudKitablariGoster());

console.log("Sıralanmış Kitablar:", kitabxana.kitablariSirala());
