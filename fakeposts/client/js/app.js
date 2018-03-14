import Post from "./post.js";
import post from "./post.js";

const baseUrl = "http://127.0.0.1:3000/";
const $row = $(".row");
function init() {
    fetch(baseUrl)
        .then((response) => {

            return response.json();
        })
        .then((postList) => {

            return createPost(postList)

        })
        .then((postListMap) => {
            console.log(postListMap);
            
         postListMap.forEach(post => {
            createCard(post)
            return createdPost
         }) 
         
        })
        .then((createdPost) =>{
            console.log(createdPost);
            
        })
        



        const createPost = (postList) => {
            const postListMap = postList.map((post) => {
                const {
                    id,
                    title,
                    intro
                } = post
                return new Post(id, title, intro);
        
        
        
        
        
            })
            return postListMap;
        
        
        };
        
        const createCard = (postListMap) => {
            postListMap.forEach(post => {
                `  <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">${post.title}</span>
                  <p>
                  ${post.intro}</p>
                </div>
               
              </div>
            </div>
          </div>`
            });
        }

        

}





export default init;