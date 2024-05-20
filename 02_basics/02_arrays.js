const marvel_heros = ["Thor","IronMan","SpiderMan"]

const dc_heros =["SuperMan","BatMan","Flash"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][1])


const allHeros=marvel_heros.concat(dc_heros)
console.log(allHeros)

const allNewHeros=[...marvel_heros,...dc_heros]
console.log(allNewHeros)


const newarr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const newArr2=newarr.flat(Infinity)
console.log(newArr2)

console.log(Array.isArray("shubham"))
console.log(Array.from("shubham"))
console.log(Array.from({name:"shubham"}))

let scrore1=1000
let scrore2=2000
let scrore3=3000
let scrore4=4000
console.log(Array.of(scrore1,scrore2,scrore3,scrore4))


