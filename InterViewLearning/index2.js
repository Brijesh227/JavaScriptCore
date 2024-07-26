try {
    require('./index1.js')
    require('./index1.js')
} catch {
    console.log("error");
    throw new Error()
}