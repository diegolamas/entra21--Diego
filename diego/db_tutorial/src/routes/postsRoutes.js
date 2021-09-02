const express = require("express");
const router = express.Router();

const postsControllers = require("../controllers/postControllers");
const { delete } = require("./usersRoutes");

router.deletePost("/:id", postsControllers.deletePost);



try {
    const delete = await Delete.findOne({
        where: { id: postId }
    });

    if (!delete) {
        return res.status(404).json({ message: "Post not found" });
    }

    delete.title = title;
    delete.content = content;
    await delete.save();

    res.json(delete);
} catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
}    
}










module.exports = router;