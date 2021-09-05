const cartLink = document.querySelector('.cart-link'),
      cartWindow = document.querySelector('.header-cart-window');

cartLink.addEventListener('click', (e)=> {
    e.preventDefault();
    cartWindow.classList.toggle('show');
});


const butBtn = document.querySelectorAll('.btn-buy');

butBtn.forEach(item=> {
    item.addEventListener('click', (e)=> {
        e.preventDefault();
        const currentProject = item.closest('.project');
              link = currentProject.querySelector('a').href,
              img = currentProject.querySelector('.img-bot img').src;
              title = currentProject.querySelector('.text1').textContent;
              price = currentProject.querySelectorAll('.project-price-item')[1].textContent;

        new Item(link, img, title, price).render();
    });
});



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
        // localStorage.setItem('cartItems');
    }
}