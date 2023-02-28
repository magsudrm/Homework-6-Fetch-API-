function GetProducts() {
    fetch('https://fakestoreapi.com/products')
    .then(response=>response.json())
    .then(data =>{
        let items= '';
        data.forEach(element => {
            items+= `
                    <div class="card col-lg-3">
        <img class="card-img-top" src="${element.image}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.description.length > 20 ? element.description.slice(0,35) + "..." : element.description}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${element.price}</li>
            <li class="list-group-item">${element.category}</li>
            <li class="list-group-item">${element.rating.rate}</li>
        </ul>
        </div>
            `
        });
        document.getElementById('list').innerHTML = items
    })
    .catch(err => console.log(err))
}

GetProducts();

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  let navbars=document.querySelectorAll('.navbars');
  for(let navbar of navbars){
    navbar.onclick=function GetCategories(){
        let inner=this.innerHTML;
        console.log(inner);
        fetch(`https://fakestoreapi.com/products/category/${inner}`)
        .then(res => res.json())
        .then(data =>{
            let items='';
            data.forEach(element =>{
                items+= `
                <div class="card col-lg-3">
                <img class="card-img-top" src="${element.image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.description.length > 20 ? element.description.slice(0,35) + "..." : element.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${element.price}</li>
                    <li class="list-group-item">${element.category}</li>
                    <li class="list-group-item">${element.rating.rate}</li>
                </ul>
                </div>
                `
            })
            document.getElementById('list').innerHTML=items;
        }) 
        .catch(err => console.log(err))
    }
  }
  GetCategories();