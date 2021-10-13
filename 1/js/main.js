const products = [
    {id: 1, title: 'Notebook', price: 2000, dsc: 'asdas'},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
// const renderProduct = (title, price) => {
//     return `<div class="product-item">
//                 <h3>${title}</h3>
//                 <img src="https://im0-tub-ru.yandex.net/i?id=831dcff7b19ca0d921ff5f3e9d3b3e4e&n=13&exp=1" alt="photo">
//                 <p>Price: ${price}</p>
//                 <button class="buy-btn">Купить</button>
//             </div>`
// };

const renderProduct = (object) => {
  var myString = `<div class="product-item">
                <h3>${object.title}</h3>
                <img src="https://im0-tub-ru.yandex.net/i?id=831dcff7b19ca0d921ff5f3e9d3b3e4e&n=13&exp=1" alt="photo">`
  x: for (var key in object) {
    if (key === 'id' || key === 'title' ) {
      continue x;
    }
    else {
      myString += `<p>${key}: ${object[key]}</p>`
    }
  }
  myString += `<button class="buy-btn">Купить</button>
</div>`
console.log(myString);
return myString
  // return `<div class="product-item">
  //               <h3>${title}</h3>
  //               <img src="https://im0-tub-ru.yandex.net/i?id=831dcff7b19ca0d921ff5f3e9d3b3e4e&n=13&exp=1" alt="photo">
  //               <p>Price: ${price}</p>
  //               <button class="buy-btn">Купить</button>
  //           </div>`
};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);
