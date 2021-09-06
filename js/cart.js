class Item {
    constructor(link, img, title, price) {
        this.link = link;
        this.img = img;
        this.title = title;
        this.price = price;
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
        cart.append(item);
    }
}

const cartLink = document.querySelector('.cart-link'),
      cartWindow = document.querySelector('.header-cart-window'),
      cartPrice = document.querySelector('.cart-price'),
      cartPriceIn = document.querySelector('.header-cart-window-sum-text'),
      cartAmount = document.querySelector('.cart-amount');
      
cartLink.addEventListener('click', (e)=> {
    e.preventDefault();
    cartWindow.classList.toggle('show');
});

const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const buyBtn = document.querySelectorAll('.btn-buy');

if (cartItems.length > 0) {
    appendNewItem(cartItems);
}

buyBtn.forEach((item, id)=> {
    item.addEventListener('click', (e)=> {
        e.preventDefault();
        const currentElem = item.closest('.project');
        const currentElemtoObj = {
            link: currentElem.querySelector('a').href,
            img: currentElem.querySelector('.img-bot img').src,
            title: currentElem.querySelector('.text1').textContent,
            price: currentElem.querySelectorAll('.project-price-item')[1].textContent.replace(/\D/g, ''),
            id: id+1,
        };
        if (!cartItems.some(item=>item.id === currentElemtoObj.id)) {
            cartItems.push(currentElemtoObj);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            appendNewItem(cartItems);
        }
    });
});

function appendNewItem(arr) {
    console.log(arr);
    //removeOldItem
    document.querySelectorAll('.header-cart-window-item').forEach(item=>{
        item.remove();
    });

    let allPrice = 0.00;
    arr.forEach(item=> {
        allPrice += +item.price;
    });
    cartPrice.innerHTML = `${allPrice} $`;
    cartPriceIn.innerHTML = `
        <span>Сума</span>
        ${allPrice} $
    `;
    

    //change cartAmount
    const cartAmountNum = arr.length;
    cartAmount.innerHTML = cartAmountNum;

    //appendNewItem
    arr.forEach(element => {
        const {link, img, title, price} = element;
        new Item(link, img, title, price).render();
    });
}



