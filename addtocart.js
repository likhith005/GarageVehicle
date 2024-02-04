const product = [
    {
        id: 0,
        image: 'https://w.forfun.com/fetch/6c/6c41ca944d695566adc3aa6d24cdc93d.jpeg',
        title: 'Mclearn',
        price: 7,
    },
    {
        id: 1,
        image: 'https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-cayenne/small/2fbf4ab0-ded1-11ed-8101-005056bbdc38;sQ;twebp;c1696;gc/porsche-small.webp',
        title: 'Porsche Cayanne',
        price: 5,
    },
    {
        id: 2,
        image: 'https://thumbs.dreamstime.com/b/vertical-shot-luxury-beautiful-purple-audi-car-driving-highway-vertical-shot-luxury-beautiful-purple-266104486.jpg',
        title: 'Audi Q8',
        price: 2,
    },
    {
        id: 3,
        image: 'https://s1.1zoom.me/b6361/3/Audi_Sportback_RS_7_2020_Front_Red_Metallic_570939_640x960.jpg',
        title: 'Audi A6',
        price: 4,
    },
    {
        id: 4,
        image: 'https://4kwallpapers.com/images/wallpapers/lamborghini-urus-1284x2778-8156.jpg',
        title: 'lambo Urus',
        price: 5,
    },
    {
        id: 5,
        image: 'https://s.abcnews.com/images/US/HT-lamborghini-aventador-s-04-jpo-170623_4x5_992.jpg',
        title: 'Aventendaour',
        price: 4,
    },
    {
        id: 6,
        image: 'https://www.mad4wheels.com/img/free-car-images/mobile/17752/aston-martin-dbs-superleggera-concorde-edition-2019-614823.jpg',
        title: 'Austin Martin',
        price: 13,
    },
    {
        id: 7,
        image: 'https://geekculture.co/wp-content/uploads/2019/12/mini-cooper-s-review-6.jpg',
        title: 'Mini',
        price: 10,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Get Started</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}