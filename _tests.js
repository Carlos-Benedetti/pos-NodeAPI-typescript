async function post() {
    await fetch("http://localhost:3000/api/produtos", {
        method: "POST",
        body: JSON.stringify({
            name: "teste cliente",
            password: "senha123",
            email: "bob@gmail.com"
        })
    })
}
async function get() {
    await fetch("http://localhost:3000/api/produtos/1", {
        method: "GET",
    })
}
