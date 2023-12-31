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
    event.preventDefault();
    // preventDefault keeps page from reloading.
    const package = document.querySelector(".package");
    const package_id = package.getAttribute("id");
    const package_name = document.querySelector("#rest-name").innerHTML;
    
    
    const comment_text = document.querySelector("#review-text").value.trim();
    
  
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({comment_text,package_id,package_name}),
        headers: { 'Content-Type': 'application/json' },
        
      })

      console.log(response)
      location.reload();
    };


    document
    .querySelector('.review-form')
    .addEventListener('submit', review);



    const addToCart = async (event) => {

            const packageEle = event.target.closest('.package')

            const packageName = document.getElementById('rest-name').textContent

            const packageId = packageEle.getAttribute('id');

           const response = await fetch('/api/booking', {
             method: 'POST',
             body: JSON.stringify({packageId,packageName}),
             headers: { 'Content-Type': 'application/json' },
             
           })
        };
     
     
         document
         .querySelector('#add-to-cart')
         .addEventListener('click', addToCart)
     