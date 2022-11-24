const post = [
  { name : "post1", detail:"detay1"},
  { name : "post2", detail:"detay2"},
  { name : "post3", detail:"detay3"},
];

function addPost (deger) {
    return new Promise((resolve,reject) => {
        if(deger){
            post.push(deger);
            resolve("basıldı");
        
        }
        else{
            reject("post basılmadı");
        }
    })
}
function listPost (){
    post.map((deger) => {
        console.log(deger.name, deger.detail);

    });
}    

async function postAndList (newPost){
    try{
        const addStat = await addPost(newPost);
        console.log(addStat);
        listPost();
    }
    catch(error){
        console.log(error);

    }
}
listPost();
postAndList({
    name : "post5",
    detail : "detail5"
});
