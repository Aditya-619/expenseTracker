const item = document.getElementById('item-name');
const price = document.getElementById('price');
const addBtn = document.getElementById('add-button');
const clearBtn = document.getElementById('clear-button');
const itemList = document.querySelector('.item-list');

addBtn.addEventListener('click', () => {

    const basket = {
        itemName: item.value,
        itemPrice: price.value
    }
    const itemData = JSON.parse(localStorage.getItem('allItems')) || [];
    itemData.push(basket);
    localStorage.setItem('allItems', JSON.stringify(itemData));
    displayItem();
    item.value = '';
    price.value = '';

});

clearBtn.addEventListener('click', () => {

    const itemData = JSON.parse(localStorage.getItem('allItems')) || [];
    itemData.splice(0, itemData.length);
    localStorage.setItem('allItems', JSON.stringify(itemData));
    displayItem();

});

const displayItem = () => {

    const itemData = JSON.parse(localStorage.getItem('allItems')) || [];
    let total = 0;
    let finalData = '';
    itemData.forEach((element) => {
        total += Number(element.itemPrice)
        finalData += `<div class="item-list-show">
        <div class="name">${element.itemName}</div>
        <div class="price">$${element.itemPrice}</div>
        </div>`
    });
    finalData += `<div class="total-price">Total: $${total}</div>`
    itemList.innerHTML = finalData
};

displayItem();