const { request, response } = require("express");
const express = require("express");
const app = express();
const PORT = 3000;


// importando as rotas

const userRoutes = require("./routes/usersRoutes");

// definindo os middlewares
app.use(express.json());

//definindo as rotas 

app.use("/users", userRoutes);


app.get("/", (request, response) => {

    response.send("HOLA MUNDO!");
});

app.post("/", (request, response) => {
    response.send("Metodo POST");
});

app.put("/", (request, response) => {
    response.send("Metodo PUT");;
});

app.delete("/", (request, response) => {
    response.send("Metodo DELETE");
});

const users = [
    { id: 1, name: "Pedro", email: "pedro@email.com" },
    { id: 2, name: "João", email: "joao@email.com" },
    { id: 3, name: "Marcos", email: "marcos@email.com" },
];


app.get("/users", (req, res) => {
    res.json(users);
});


app.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    const user = users.find(user => user.id == userId);

    if (!user) {
        res.status(404).json({ message: "User not found!" });
    }
    res.json(user);
});


app.post("/users", (req, res) => {

    const { id, name, email } = req.body;

    const userAlreadyExists = users.find(user => user.email === email);

    if (userAlreadyExists) {

        return res.status(409).json({ message: "User already exists" });
    }

    const user = { id, name, email };

    users.push({ id, name, email });

    res.status(201).json(user);


});

app.put("/users/:id", (req, res) => {

    const { name } = req.body;

    const userId = req.params.id;

    const user = users.find(user => user.id == userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.name = name;

    res.json(user);




});

app.put("/users/:id", (req, res) => {

    const { name } = req.body;

    const userId = req.params.id;

    const user = users.find(user => user.id == userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.name = name;

    res.json(user);




});



app.delete("/:id", req, res) =>{
    const userId = req.params.id;
    const userI
}


app.listen(PORT, () => console.log("O servidor está rodando..."));