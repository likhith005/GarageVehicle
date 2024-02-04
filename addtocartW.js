const product = [
    {
        id: 0,
        image: 'https://www.xtrafondos.com/wallpapers/vertical/ducati-1199-panigale-s-1740.jpg',
        title: 'Ducati',
        price: 7,
    },
    {
        id: 1,
        image: 'https://w0.peakpx.com/wallpaper/512/566/HD-wallpaper-kawasaki-z1000-2019-motor-motorcycle-racer-stunt-thumbnail.jpg',
        title: 'Kawasaki Z1000',
        price: 5,
    },
    {
        id: 2,
        image: 'https://w0.peakpx.com/wallpaper/954/687/HD-wallpaper-ducati-scrambler.jpg',
        title: ' Scrambler',
        price: 2,
    },
    {
        id: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWdwKuKUWWdenu8YoXaZv-Vhjoo2yIciq3YxoCwHLR-oOmRGLBN1uWSFGfPRNyYqEtBWM&usqp=CAU',
        title: 'Truimph tiger',
        price: 4,
    },
    {
        id: 4,
        image: 'https://media.karousell.com/media/photos/products/2021/3/19/s1000rr_2013_1616126286_311be026.jpg',
        title: 'BMW s1000',
        price: 5,
    },
    {
        id: 5,
        image: 'https://cutewallpaper.org/22/bmw-1250-gs-wallpapers/1388726328.jpg',
        title: 'BMW GS',
        price: 4,
    },
    {
        id: 6,
        image: 'https://i1.wp.com/paultan.org/image/2021/09/2021-Ducati-Multistrada-V4S-5-1.jpg?w=294&h=441&ssl=1',
        title: 'Ducati Multistadar',
        price: 13,
    },
    {
        id: 7,
        image: 'https://thevocalnews.com/wp-content/uploads/2022/05/cropped-Kawasaki-Ninja-H2R-2.compressed.jpg',
        title: 'H2 R',
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