function capitalize(string) {
    let firstLetter = string.slice(0,1)
    return firstLetter.toUpperCase() + string.slice(1)
}



export { capitalize };