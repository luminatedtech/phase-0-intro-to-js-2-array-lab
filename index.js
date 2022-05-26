const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat (name){
    return cats.push(name)
}
console.log(destructivelyAppendCat(Ralph))

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}
console.log(destructivelyPrependCat())
 
function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}

function appendCat () {
    const newCats = [...cats, "Broom"]
    return newCats
}

function prependCat () {
    const newNewCats = ["Arnold",...cats]
    return newNewCats
}
function removeLastCat () {
    const sliceCats = cats.slice(0,2)
    return sliceCats
}

function removeFirstCat() {
    const sliceCats = cats.slice(1)
    return sliceCats
}