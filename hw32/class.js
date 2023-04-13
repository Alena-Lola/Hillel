class Human {
   constructor(name,sex) {
       this.name = name;
       this.sex = sex;
   }
   people(){
       console.log(`${this.name} is sex ${this.sex} `)
   }
}

const misha = new Human('Misha','man');
const yana = new Human('Yana','women');


class Apartment extends Human{
    resident(){
        console.log(`${Human}`)
    }
}


