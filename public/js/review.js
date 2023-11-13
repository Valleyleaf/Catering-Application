const revBtn = document.querySelectorAll("#leave-review");
const menu = document.querySelector(".review-form-menu");




for (let i = 0; i < revBtn.length; i++) {
    revBtn[i].addEventListener("click", reviewMenu )

}


function reviewMenu() {
    let review = menu.style;
    console.log(review.display) 
    
    if (review.display === "none") {
        console.log("review form activated");
        review.display = "flex"
    } else if (review.display === "flex") {
        console.log("review form cancelled");
        review.display = "none"
    }
}


const review = async (event) => {
    
    // preventDefault keeps page from reloading.
    const package = document.querySelector(".package");
    const package_id = package.getAttribute("id");
    
    const comment_text = document.querySelector("#review-text").value.trim();
    
  
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({comment_text,package_id}),
        headers: { 'Content-Type': 'application/json' },
        
      })

      console.log(response)
      location.reload();
    };


    document
    .querySelector('.review-form')
    .addEventListener('submit', review);