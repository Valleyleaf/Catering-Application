const dashboardParent = document.querySelector(".profile-main");
const dashboardChildren = dashboardParent.children;
const btns = document.querySelectorAll(".profileBtn");



for (let i = 0; i < dashboardChildren.length; i++) {
  dashboardChildren[i].style.display = "none";
  dashboardChildren[i].setAttribute("id", i);
  console.log();
}

dashboardChildren[0].style.display = "flex";

const dashNav = (event) => {};

for (let i = 0; i < dashboardChildren.length; i++) {
  btns[i].setAttribute("id", i);
  btns[i].addEventListener("click", function (event) {
    console.log(this.id);
    for (let i = 0; i < dashboardChildren.length; i++) {
      dashboardChildren[i].style.display = "none";
      dashboardChildren[i].setAttribute("id", i);
      console.log();
    }
    dashboardChildren[this.id].style.display = "flex";
  });
}

const reviews = document.querySelectorAll(".package-reviews-profile");

async function deleteComment(id) {
  const response = await fetch("/api/comments", {
    method: "DELETE",
    body: JSON.stringify({id}),
    headers: { "Content-Type": "application/json" },
  });
}

for (let i = 0; i < reviews.length; i++) {
  reviews[i].addEventListener("click", function (event) {
    event.preventDefault();
    deleteComment(this.id);
    let element = document.getElementById(this.id)
    element.remove()
    
  });
  console.log(i);
}



