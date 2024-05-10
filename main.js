class Animal {
    constructor(nome, idade, cor) {
        this.nome = nome;
        this.idade = idade;
        this.cor = cor;
    }
}

class Cachorro extends Animal {
    emitirSom() {
        console.log(`${this.nome} diz: Au au!`);
    }

    mostrarIdade() {
        console.log(`${this.nome} tem ${this.idade} anos`);
    }

    mostrarCor() {
        console.log(`${this.nome} tem a cor ${this.cor}`);
    }
}

class Gato extends Animal {
    emitirSom() {
        console.log(`${this.nome} diz: Miau!`);
    }

    mostrarIdade() {
        console.log(`${this.nome} tem ${this.idade} anos`);
    }

    mostrarCor() {
        console.log(`${this.nome} tem a cor ${this.cor}`);
    }
}

class Cobra extends Animal {
    emitirSom() {
        console.log(`${this.nome} diz: Psss!`);
    }

    mostrarIdade() {
        console.log(`${this.nome} tem ${this.idade} anos`);
    }

    mostrarCor() {
        console.log(`${this.nome} tem a cor ${this.cor}`);
    }
}

// Instâncias de objetos
const cachorro = new Cachorro("Alfredo", 5, "branco");
const gato = new Gato("Luna", 3, "cinza");
const cobra = new Cobra("Bob", 2, "verde");


cachorro.emitirSom();
cachorro.mostrarIdade();
cachorro.mostrarCor();

gato.emitirSom();
gato.mostrarIdade();
gato.mostrarCor();

cobra.emitirSom();
cobra.mostrarIdade();
cobra.mostrarCor();
