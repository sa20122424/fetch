async function geim() {
   try {
       let response = await fetch('https://fakestoreapi.com/products?limit=10');
       let products = await response.json();

       
       let container = document.createElement("div");
       container.classList = "container"
       document.body.append(container);

       products.forEach(e => {
          let description = document.createElement("p");
          let box = document.createElement("div");
          
          let category = document.createElement("p");
          let title = document.createElement("p");
          let price = document.createElement("p");
          
           box.classList = "box";
           
           title.innerHTML = e.title;
           
           description.innerHTML = e.description
           category.innerHTML = e.category;

           price.innerHTML = `$${e.price}`;

           let img = document.createElement("img");
           img.src = e.image;
           img.alt = e.title;

          
           box.append(img, title, description, category, price);
           container.append(box);
       });

   } catch (error) {
       console.error("Ошибка");
   }
}
geim();
