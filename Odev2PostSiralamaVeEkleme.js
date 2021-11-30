const posts = [
    {post: "My first blog!", author: "Emrecan"},
    {post: "Learning Nodejs", author: "Ahmet"},
    {post: "Patika courses are best...", author: "Şenol"}
]

const listPosts = () => {
    posts.map(post => {
        console.log("Post: "+post.post +" Author: "+post.author);
    });
}

const addPost = (newPost) => {
    
    const promise1 = new Promise((resolve, reject)=>{
        posts.push(newPost);
        resolve(posts);
    });

}

async function showPosts(){
    try {
        await addPost({post: "Doing homework!", author: "Emrecan"});
        listPosts();
    } catch (error) {
        console.log(error);
    }

}

showPosts();