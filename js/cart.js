












class Item {
    constructor(link, img, title, price, id) {
        this.link = link;
        this.img = img;
        this.title = title;
        this.price = price;
        this.id = id;
    }

    render() {
        const cart = document.querySelector('.header-cart-window-group'),
              item = document.createElement('li');

        item.classList.add('header-cart-window-item');
        item.innerHTML = `
            <a href="${this.link}" class="header-cart-window-item-link">
                <div class="header-cart-window-item-img">
                    <img src="${this.img}" alt="">
                </div>
                <span class="header-cart-window-item-title">${this.title}</span>
            </a>
                <span class="header-cart-window-item-price">${this.price} $</span>
            <div class="header-cart-window-item-dellete">×</div>
        `;
        //add listener to dellete item from cart
        item.addEventListener('click', ()=>{
            delleteItemfromCart(this.id);
        })

        //append item to cart
        cart.append(item);
    }
}

const cartLink = document.querySelector('.cart-link'),
      cartWindow = document.querySelector('.header-cart-window'),
      cartPrice = document.querySelector('.cart-price'),
      cartPriceIn = document.querySelector('.header-cart-window-sum-text'),
      cartAmount = document.querySelector('.cart-amount'),
      buyBtn = document.querySelectorAll('.btn-buy');
      
cartLink.addEventListener('click', (e)=> {
    e.preventDefault();
    cartWindow.classList.toggle('show');
});

//dellete item from cart
function delleteItemfromCart(id) {

    cartItems = cartItems.filter(item =>{
        return item.id !== id
    }) 
    appendNewItem(cartItems);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
appendNewItem(cartItems);

if (cartItems.length > 0) {
    appendNewItem(cartItems);
}

buyBtn.forEach((item)=> {
    item.addEventListener('click', (e)=> {
        e.preventDefault();
        let currentElem, currentElemToObj;

        if (item.dataset.single === '') {
            currentElem = item.closest('.single-wrraper');
            currentElemToObj = {
                link: window.location.href,
                img: currentElem.querySelector('.single-view img').src,
                title: currentElem.querySelector('.single-description-title').textContent,
                price: currentElem.querySelectorAll('.single-description-price-item')[1].textContent.replace(/\D/g, ''),
                id: currentElem.querySelector('.single-description-title').textContent.replace(' ', ''),
            };
        } else {
            currentElem = item.closest('.project');
            currentElemToObj = {
                link: currentElem.querySelector('a').href,
                img: currentElem.querySelector('.img-bot img').src,
                title: currentElem.querySelector('.text1').textContent,
                price: currentElem.querySelectorAll('.project-price-item')[1].textContent.replace(/\D/g, ''),
                id: currentElem.querySelector('.text1').textContent.replace(' ', ''),
            };
        }
       
        if (!cartItems.some(item=>item.id === currentElemToObj.id)) {
            cartItems.push(currentElemToObj);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            appendNewItem(cartItems);
        }
    });
});

function appendNewItem(arr) {
    //removeOldItem
    document.querySelectorAll('.header-cart-window-item').forEach(item=>{
        item.remove();
    });

    //change priceCart
    let allPrice = 0.00;
    arr.forEach(item=> {allPrice += +item.price;});
    if (allPrice === 0) {allPrice = '0.00'}
    cartPrice.innerHTML = `${allPrice} $`;
    cartPriceIn.innerHTML = `
        <span>Сума</span>
        ${allPrice} $
    `;

    //set empty cart
    const cartGroup = document.querySelector('.header-cart-window-group'),
          emptyTitle = document.createElement('li');
    emptyTitle.innerHTML = 'Корзина пуста!';
    emptyTitle.style.cssText = `
        text-align: center;
        margin: 10px 0;
    `;
    emptyTitle.classList.add('empty-title')
    if (arr.length === 0) {
        cartGroup.append(emptyTitle);
    } else {
        if (document.querySelector('.empty-title')) {
            document.querySelector('.empty-title').remove();
        }
    }

    //change cartAmount
    const cartAmountNum = arr.length;
    cartAmount.innerHTML = cartAmountNum;

    //appendNewItem
    arr.forEach(element => {
        const {link, img, title, price, id} = element;
        new Item(link, img, title, price, id).render();
    });
}



