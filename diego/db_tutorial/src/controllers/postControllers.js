const { Post } = require("../db/models");



async function updatePost (req, res, next) {
    const { title, content } = req.body;
    const postId = req.params.id;

    try {
        const post = await Post.findOne({
            where: { id: postId }
        });

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        post.title = title;
        post.content = content;
        await post.save();

        res.json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }    
}


module.exports = {
    updatePost
}