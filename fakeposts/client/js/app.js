import { createPostList, displayError } from './ui.js'
import { fetchPosts } from './data.js'; 
       

    const initPosts = () => {
        fetchPosts()
        .then(createPostList)
        .catch(displayError)
        
    }
  
        export {
            initPosts
        }
        