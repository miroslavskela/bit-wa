const createCard = (post) => {
    return    `  
    <div class="row">
    <div class="col s12 ">
    <div class="card blue-grey darken-1">
    <div class="card-content white-text">
    <span class="card-title">${post.title}</span>
    <p>
    ${post.intro}</p>
    </div>
    
    </div>
    </div>
    </div>`
    
}

const createPostList = (posts) => {
    const $row = $(".row");
    let content = ""
    
    posts.forEach(post => {
        content += createCard(post)
    });
    
    $row.append(content)
}

const displayError = () => {
   
    const errImg = `
            <img class="responsive-img center-align" 
                alt="error"
                src="https://cdn-images-1.medium.com/max/1600/1*qdFdhbR00beEaIKDI_WDCw.gif" >
    `
    $(row).append(errImg)
}

export {createPostList, displayError}
