const dashboardParent = document.querySelector(".profile-main");
const dashboardChildren = dashboardParent.children; 
const btns = document.querySelectorAll(".profileBtn");

for (let i = 0; i < dashboardChildren.length; i++){
    dashboardChildren[i].style.display = "none";
    dashboardChildren[i].setAttribute("id", i)
    console.log()
}

dashboardChildren[0].style.display = 'flex'


const dashNav = (event) => {
    
}



for (let i = 0 ; i < dashboardChildren.length; i++) {  
        btns[i].setAttribute("id", i)
        btns[i].addEventListener("click", function(event) {
            console.log(this.id)
            for (let i = 0; i < dashboardChildren.length; i++){
                dashboardChildren[i].style.display = "none";
                dashboardChildren[i].setAttribute("id", i)
                console.log()
            }
            dashboardChildren[this.id].style.display = "flex"
        })
       
       
    }






    /* <div class="profile-dash">
<h1>User Dashboard</h1>
<p>User : {{name}}</p>

</div>

<div class="profile-fav" style="display :none;">
  <h1>Favourites</h1>
</div>

<div class="profile-rev" style="display :none;">
  <h1>Reviews</h1>
</div>

<div class="profile-order" style="display :none;">
  <h1>Previous Orders</h1>
</div>  */



