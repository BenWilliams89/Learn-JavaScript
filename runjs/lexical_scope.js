// Lexical Scope - Functions inside functions

function outer() {
    let hero = 'Black Panther'

    function inner() {
        let cryForHelp = `${hero}, please save me`
        console.log(cryForHelp)
    }

    inner()
}

outer()


function bankRobbery() {
    const heros = [
        'Spiderman', ' Batman','Superman', 'Flash'
    ]
    function help(){
        for(let hero of heros){
            console.log(`Please help us ${hero.toUpperCase()}`)
        }
    } help()
}
bankRobbery()