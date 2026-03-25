let pics = document.getElementById("pics");
let favorites = document.getElementById("favorites");
let actions = document.getElementById("actions");


let images = pics.querySelectorAll("img");
let selectedCount = 0;            
let totalImages = images.length;  

/*images[0].addEventListener("click", function() {
  favorites.appendChild(this);
});*/


/*for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    if (this.classList.contains("selected")) {
      return;
    }
    favorites.appendChild(this);
    selectedCount++;
  });
}*/

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
  
    if (this.classList.contains("selected")) {
      return;
    }

    favorites.appendChild(this);

  
    this.classList.add("selected");

   
    selectedCount++;

  });
}
/*favorites.addEventListener(onclick = function() {
   

  if (img.tagName.toLowerCase() === "img") {
    
    img.classList.remove("selected");

   
    pics.appendChild(img);*/
    
    /*favorites.addEventListener("click", function(event) {
  let img = event.target;
  img.classList.remove("selected"); 
});*/
    
favorites.addEventListener("click", function(event) {
  let img = event.target;

  if (img.tagName.toLowerCase() === "img") {
    
    img.classList.remove("selected");

   
    pics.appendChild(img);

   
    let li = document.createElement("li");
    li.textContent = "Reverted " + img.src + " back to the main list";
    actions.appendChild(li);


    selectedCount--;
  }
});