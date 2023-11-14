const grid = document.querySelectorAll(".rest-card");

//This for loop is taking the packages on the homepage and making them clickable.
for (let i = 0; i < grid.length; i++) {
  let btn = grid[i];
  let id = btn.getAttribute('id')
  btn.addEventListener("click", function () {
    console.log("click");
    console.log(id)
    window.location.pathname = `/package/${id}`
  });
}
