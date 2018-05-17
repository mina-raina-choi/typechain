const name = "Mina",
    age = 30,
    gender = "Female"

const sayHi = (name:string, age:number, gender:string): void => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}!`)
}

sayHi(name, age, gender);
export {}