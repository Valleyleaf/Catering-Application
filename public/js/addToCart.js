const addtoCartBtn = document.querySelector(".add-to-cart");

for (let i = 0; i < addtoCartBtn.length; i++) {
    addToCartBtn[i].addEventListener("click", addToCart )

}

console.log('testing', addtoCartBtn)

const addToCart = async (event) => {
   console.log('inside')
    const package = document.querySelector(".cart");
    const package_id = package.getAttribute("id");
    const package_name = document.querySelector("#rest-name").innerHTML;
    
  
      const response = await fetch('/api/bookingRoutes', {
        method: 'POST',
        body: JSON.stringify({package_id,package_name}),
        headers: { 'Content-Type': 'application/json' },
        
      })

      console.log(response)
      location.reload();
    };


    document
    .getElementById('add-to-cart')
    .addEventListener('click', function(){
      console.log('force console')
    });