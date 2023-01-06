const posts = [{
	title:'Post One', body: 'Yhis is Post One', createdAt: new Date().getTime()
},{
	title:'Post Two', body:'This is Post Two', createdAt: new Date().getTime()
}];

function getPost(){
	setTimeout(() =>{
		let output = '';
		for(let i = 0; i< posts.length;i++){
			output += `<li>${posts[i].title} created ${Math.floor((Date.now() - posts[i].createdAt) / 1000)} seconds ago</li>`
		}
		document.body.innerHTML = output;
	}, 1000);
}


async function createPost(post){
    const created = await new Promise((resolve, reject) =>{
        setTimeout(()=>{
            posts.push({...post, createdAt:new Date().getTime()});
            const error = true;
            if(error){
                resolve();
            }else{
                reject("somethig went wrong");
            }

        },2000);
    });
}
 createPost({title:'Post Three', body: ' This is Post Three'}).then(getPost).catch(error =>{
    console.log(error);
 });

 setInterval(getPost, 1000);

 async function deletePost() {
    const del1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (posts.length > 0) {
            let deletedElement = posts.pop();
          resolve(deletedElement);
          ;
        } else {
            reject("Array is empty");
        }
      }, 3000);
    });
  }
  deletePost().then(() => {
        console.log("Deleted last element of the array")});
//   deletePost().then(() => {
//     console.log("Deleted last element of the array");
//     return deletePost();
//   }).then(() => {
//     console.log("Deleted last element of the array");
//     return deletePost();
//   }).then(() => {
//     console.log("Deleted last element of the array");
//     return deletePost();
//   }).then(()=>{
//     console.log("Deleted last element of the array");
//     return deletePost();
//   }).catch((error) => {
//     console.log(error);
//   });
// function updateLastUserActivityTime() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         lastActivityTime = new Date().getTime();
//         resolve();
//       }, 1000);
//     });
//   }


//   createPost({title:'Post fourth', body: ' This is Post Four'}).then(updateLastUserActivityTime).then(()=>{
//     getPost();
//     console.log("All posts:", posts);
//     console.log("Last activity time:", lastActivityTime);
//     deletePost().then((deleedElement)=>{
//         console.log(deleedElement);
//         getPost();
//         deletePost().then((deleedElement)=>{
//             console.log(deleedElement);
//             getPost();
//             deletePost().then((deleedElement)=>{
//                 console.log(deleedElement);
//                 getPost();
//                 deletePost().then((deleedElement)=>{
//                     console.log(deleedElement);
//                     getPost();
//                     deletePost().then(()=>{}).catch((error)=>{
//                         console.log("Inside catch block", error)
//                     })
//                 }).catch((error)=>{
//                     console.log("Inside catch block", error);
//                 })
//             }).catch((error)=>{
//                 console.log("Inside catch block", error);
//             })
//         }).catch((error)=>{
//             console.log("Inside catch block", error);
//         })
//     }).catch((error)=>{
//         console.log("Inside catch block", error);
//     })
//   }).catch(error =>{
//     console.log(error);
//  });
  

