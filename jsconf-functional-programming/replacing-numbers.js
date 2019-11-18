"use strict"

const ZERO = f => x => x
const ONE = f => x => f(x)
const TWO = f => x => f(f(x))
const THREE = f => x => f(f(f(x)))

const show = () => console.log("SOMETHING")
const showTwice = TWO(show)
showTwice()

const toNum = (nf) => {
    let i = 0
    nf(() => i++)()
    console.log(i)
}
toNum(THREE)