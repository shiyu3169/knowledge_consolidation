let animal = {
  eats: true,
  walk() {
    alert('Animal walk')
  },
}
let rabbit = {
  jumps: true,
}

rabbit.__proto__ = animal // sets rabbit.[[Prototype]] = animal

// we can find both properties in rabbit now:
alert(rabbit.eats) // true (**)
alert(rabbit.jumps) // true
rabbit.walk() // Animal walk

let longEar = {
  earLength: 10,
  __proto__: rabbit,
}

// walk is taken from the prototype chain
longEar.walk() // Animal walk
alert(longEar.jumps) // true (from rabbit)
