// Make a new function call create4thPost for adding one more new post "Post Four". create4thPost should take createPost as a callback function. Once the post is created all the 4 posts should be displayed too.
// Lets also record when the post was created. So now onwards whenever. a new post is created add a new key called createdAt in each post. CreatedAt should have the timestamp of when the post was created. So now your post object would look like { title, body, createdAt}
// On the screen show the user how long back each of the post was edited in seconds ago. Just add "{ current timestamp - postcreated At timestamp }" on each of the post. It should look like the following
// Post 1 created 8 seconds ago
// Post 2 created 7 seconds ago
// Post 3 crated 2 seconds

// const posts = [{
// 	title:'Post One', body: 'Yhis is Post One'
// },{
// 	title:'Post Two', body:'This is Post Two'
// }];

// function getPost(){
// 	setTimeout(() =>{
// 		let output = '';
// 		posts.forEach((post, index)=>{
// 			output += `<li>${post.title}</li>`
// 		});
// 		document.body.innerHTML = output;
// 	}, 1000);
// }


// function createPost(post, callback){
// 	setTimeout(()=>{
// 		posts.push(post);
// 		callback();
// 	},2000);
// }
//  createPost({title:'Post Three', body: ' This is Post Three'}, getPost);

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

function createPost(post, callback){
	setTimeout(()=>{
		posts.push({...post, createdAt:new Date().getTime()});
		callback();
	},2000);
}

createPost({title:'Post Three', body: ' This is Post Three'}, getPost);
setInterval(getPost, 1000);