    const userMenu = document.querySelector(".user-menu"); 
    const Btn = document.querySelector(".userBtn"); 
    const hiddenElement = document.querySelector(".hidden") ;

    
    Btn.addEventListener("click", function()
    { userMenu.classList.toggle('hidden'); });