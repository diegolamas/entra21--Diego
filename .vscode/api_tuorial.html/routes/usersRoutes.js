const express = require("express");
const router = express.Router();


const users = [
    { id: 1, name: "Pedro", email: "pedro@email.com" },
    { id: 2, name: "João", email: "joao@email.com" },
    { id: 3, name: "Marcos", email: "marcos@email.com" },
];




router.get("/", (req, res) => {
    res.json(users);
});


router.get("/:id", (req, res) => {
    const userId = req.params.id;
    const user = users.find(user => user.id == userId);

    if (!user) {
        res.status(404).json({ message: "User not found!" });
    }
    res.json(user);
});





router.post("/users", (req, res) => {

    const { id, name, email } = req.body;

    const userAlreadyExists = users.find(user => user.email === email);

    if (userAlreadyExists) {

        return res.status(409).json({ message: "User already exists" });
    }

    const user = { id, name, email };

    users.push({ id, name, email });

    res.status(201).json(user);


});


router.put("/users/:id", (req, res) => {

    const { name } = req.body;

    const userId = req.params.id;

    const user = users.find(user => user.id == userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.name = name;

    res.json(user);




});







module.exports = router;

