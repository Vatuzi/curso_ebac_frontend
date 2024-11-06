function Animal(tipo){
    this.tipo = tipo;
}

function Cachorro(tipo,raca,porte){
    this.raca = raca;
    this.porte = porte;

    Animal.call(this, tipo);
}

function Capivara(tipo,idade,sexo){
    this.idade = idade;
    this.sexo = sexo;

    Animal.call(this, tipo);
}

const Thor = new Cachorro("Cachorro","Pastor Alemão","Grande");
const Kira = new Cachorro("Cachorro","Dachshund","Pequeno");
const Cleitin = new Capivara("Capivara","5","Macho",);


console.log(Thor);
console.log(Kira);
console.log(Cleitin);
