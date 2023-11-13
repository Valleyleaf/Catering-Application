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