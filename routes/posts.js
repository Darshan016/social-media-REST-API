const router = require("express").Router()
const Post = require("../models/Post.js")
const User = require("../models/User.js")

//create a post
router.post('/', async (req,res)=>{
    const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    }catch(err){
        res.status(500).json(err)
    }

    
})

//update a post
router.put('/:id',async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
        if(post.userId===req.body.userId){
            await post.updateOne({$set:req.body})
            res.status(200).json("Post updated Successfully.")
        }else{
            res.status(403).json("You can update only your posts.")
        }

    }catch(err){
        res.status(500).json(err)
    }
})

//delete a post
router.delete('/:id', async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
        if(post.userId===req.body.userId){
            await post.deleteOne()
            res.status(200).json('Post deleted successfully.')
        } else{
            res.status(403).json("You can delete only your posts")
        }

    }catch(error){
        res.status(500).json(error)
    }
})

//like a post
router.put('/:id/like', async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes:req.body.userId}})
            res.status(200).json("You liked this post")
        }else{
            await post.updateOne({$pull:{likes:req.body.userId}})
            res.status(200).json("You disliked this post.")
        }
    }catch(error){
        res.status(500).json(error)
    }
})

//get a post
router.get('/:id', async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
        if(post){
            res.status(200).json(post)
        }else{
            res.status(404).json("Post not found.")

        }

    }catch(error){
        res.status(500).json(error)
    }
})

//get timeline

router.get('/timeline/all', async(req,res)=>{
    try{
        const currentUser = await User.findById(req.body.userId)
        const userPost = await Post.find({userId:currentUser._id})
        const timeline = await Promise.all(
            currentUser.following.map((friend)=>{
               return Post.find({userId:friend})
            })
        )
        res.json(userPost.concat(...timeline))
    }catch(error){
        res.status(500).json(error)
    }
})

module.exports = router