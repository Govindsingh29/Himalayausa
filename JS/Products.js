// search

var closeSearch=document.getElementById("searchClose")
closeSearch.onmouseover=function(){
  clickonSearchOption.style.visibility="hidden"
}
var cLICKSEARCH=document.getElementById("cLICKSEARCH")
var clickonSearchOption=document.getElementById("clickonSearchOption")
cLICKSEARCH.onclick=function(){
  clickonSearchOption.style.visibility="visible"
}


// hovering on shop

var shop=document.getElementById("hoverover")
var upline=document.getElementById("upline")
var s=document.getElementById("shophover")
var navbar=document.getElementById("NavBar")
var shopOnHoverDiv=document.getElementById("shopOnHoverDiv")
shop.onmouseover=function(){
    shopOnHoverDiv.style.visibility="visible"
    upline.style.visibility="visible"
}
shopOnHoverDiv.onmouseleave=function(){
    shopOnHoverDiv.style.visibility="hidden"
    upline.style.visibility="hidden"
}

s.onmouseover=function(){
    shopOnHoverDiv.style.visibility="visible"
    upline.style.visibility="visible"
}

// product page 
var c=0;
var hid1=document.getElementById("hidden1")
var show1=document.getElementById("click1toshowhidden")
show1.onclick=function(){
    c++;
    if(c%2!==0){
        hid1.style.display="block"
    }else{
        hid1.style.display="none"
    }
 
}

var c=0;
var hid2=document.getElementById("hidden2")
var show2=document.getElementById("click2toshowhidden")
show2.onclick=function(){
    c++;
    if(c%2!==0){
        hid2.style.display="block"
        hid2.style.display="flex"
    }else{
        hid2.style.display="none"
    }
}
var c=0;
var hid3=document.getElementById("hidden3")
var show3=document.getElementById("click3toshowhidden")
show3.onclick=function(){
    c++;
    if(c%2!==0){
        hid3.style.display="block"
        hid3.style.display="flex"
    }else{
        hid3.style.display="none"
    }
}
var c=0;
var hid4=document.getElementById("hidden4")
var show4=document.getElementById("click4toshowhidden")
show4.onclick=function(){
    c++;
    if(c%2!==0){
        hid4.style.display="block"
        hid4.style.display="flex"
    }else{
        hid4.style.display="none"
    }
}
var c=0;
var hid5=document.getElementById("hidden5")
var show5=document.getElementById("click5toshowhidden")
show5.onclick=function(){
    c++;
    if(c%2!==0){
        hid5.style.display="block"
        hid5.style.display="flex"
    }else{
        hid5.style.display="none"
    }
}

//productPage

var proArr=[
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-3_1024x.png?v=1591028195",
      Name:"Back to Balance Cleanse™",
      Price:"29.95",
      des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/Boswellia-60---Box-Bottle_1024x.png?v=1595862802",
      Name:"Boswellia",
      Price:"14.95",
      des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-58_1024x.png?v=1591027935",
      Name:"Chyavanprash",
      Price:"13.95",
      des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-33_1024x.png?v=1591027962",
      Name:"ComfortCleanse®",
      Price:"24.99",
      des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-30_1024x.png?v=1590836814",
      Name:"Curcumin Complete™",
      Price:"18.99",
      des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-34_1024x.png?v=1591027900",
      Name:"DermaCare®",
      Price:"22.95",
      des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-69_1024x.png?v=1590836866",
      Name:"FlorAvani®",
      Price:"39.95",
      des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-126_1024x.png?v=1591028001",
      Name:"GlucoCare®",
      Price:"24.95",
      des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-36_1024x.png?v=1590836878",
      Name:"Guggul",
      Price:"15.95",
      des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/image-36_fbc92680-5171-436b-acc1-6a5a6a2ac59c_1024x.png?v=1591028013",
      Name:"HeartCare®",
      Price:"22.95",
      des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HUSAHELLOENERGYBOX_BOTTLE_1024x.jpg?v=1608243299",
      Name:"Hello Energy®",
      Price:"23.99",
      des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HUSAHELLOJOYBOX_BOTTLE_1024x.jpg?v=1608241956",
      Name:"Hello Joy®",
      Price:"23.99",
      des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HUSAHELLOPEACEBOX_BOTTLE_1024x.jpg?v=1608243907",
      Name:"Hello Peace®",
      Price:"23.99",
      des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HolyBasil-30-box-bottle_1024x.png?v=1591028027",
      Name:"Holy Basil",
      Price:"12.95",
      des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/ImmunoCare-120---Box-Bottle_1024x.png?v=1595814320",
      Name:"ImmunoCare®",
      Price:"23.95",
      des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
    },
    {
      Image:"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/JointCare-120---Box-Bottle_1024x.png?v=1595814579",
      Name:"JointCare®",
      Price:"21.49",
      des:"Helps eliminate waste and relieves occasional bloating. Restores regularity by supporting digestive metabolism. Doesn’t rely on harsh detox herbs or fad diet ingredients. Clinically studied for comfortable, cleansing bowel movements....",
    },
  ]

  var parent=document.getElementById("productsAddingMaindiv")
function showprod(){
 parent.innerHTML=""
  proArr.forEach(function(element,index){
      var productdetailContainer=document.createElement("div")
      productdetailContainer.setAttribute("class","productdetailContainerClass")
      var productImage=document.createElement("img")
      var productName=document.createElement("p")
      var productPrice=document.createElement("p")
      var addToCartBt=document.createElement("button")
      var btnAndPrice=document.createElement("div")
      var pnameDiv=document.createElement("div")
      var descrp=document.createElement("p")
      pnameDiv.setAttribute("id","pnameDiv")

      productdetailContainer.setAttribute("id","productdetailsDiv")
      productImage.setAttribute("id","pImage")
      productImage.setAttribute("class","pImageClass")
      productName.setAttribute("id","pName")
      productName.setAttribute("class","pNameClass")
      productPrice.setAttribute("id","pPrice")
      productPrice.setAttribute("class","prodcutPriceClass")
      addToCartBt.setAttribute("id","addCartBt")
      addToCartBt.setAttribute("class","addToCartBtClass")
      btnAndPrice.setAttribute("id","btnAndPrice")
      btnAndPrice.setAttribute("class","btnAndPriceClass")
      descrp.setAttribute("id","describ")
      descrp.setAttribute("class","describclass")
      
    addToCartBt.onclick=function(){
      AddToCart(element)
      window.location.href="../HTML/Products.html"
     
    }
    
      productImage.src=element.Image
      productName.innerHTML=element.Name
      productPrice.innerHTML=element.Price
      descrp.innerHTML=element.des
      pnameDiv.append(productName,descrp)
      btnAndPrice.append(productPrice,addToCartBt)
      productdetailContainer.append(productImage)
      var secondmaindiv=document.createElement("div")
      secondmaindiv.setAttribute("id","secondMainDiv")
      secondmaindiv.setAttribute("class","secondmaindivClass")
      secondmaindiv.append(productdetailContainer,pnameDiv,btnAndPrice)
      parent.append(secondmaindiv)
  });






}
showprod()
  var a=0;
  var clickedOnuser=document.getElementById("clickedOnuser")
  var clickUser=document.getElementById("clickUser")
  clickUser.onclick=function(){
      a++;
      if(a%2!==0){
        clickedOnuser.style.visibility="visible"
      }else{
        clickedOnuser.style.visibility="hidden"
      }
     
  }

  // signin&up

  var signIn=document.getElementById("signIn")
  signIn.onclick=function(){
    window.location.href="../HTML/Signin.html"
  }
 
// localStorage

if (localStorage.getItem("HimalayaUsStorage") === null) {
  localStorage.setItem("HimalayaUsStorage", JSON.stringify([]));
};


  // addcartbutton

  var ProductArr=JSON.parse(localStorage.getItem("HimalayaUsStorage"))

  function AddToCart(element){
    ProductArr.push(element)
    alert("Product is Added in Cart")
   localStorage.setItem("HimalayaUsStorage",JSON.stringify(ProductArr))
  }
   

  // smallCart
  var showcartItemsNumber=document.getElementById("showItemNumber")
  var smallcartHim=JSON.parse(localStorage.getItem("HimalayaUsStorage"))
  
var smallCartParent=document.getElementById("ProductsDivClickedOnCart")
function showp(){
  smallcartHim.forEach(function(el,index){
  var sdiv=document.createElement("div")
  sdiv.setAttribute("id","sdiv")
showcartItemsNumber.innerHTML=smallcartHim.length
var pimg=document.createElement("img")
var pname=document.createElement("p")
var pprice=document.createElement("p")
pimg.src=el.Image
pprice.innerHTML="$"+el.Price
pname.innerHTML=el.Name
sdiv.append(pimg,pname,pprice)
smallCartParent.append(sdiv)
});


}showp()
  // smallCart
var cm=0;
var smallcartShow=document.getElementById("clickonCart")
 var clickedonCart=document.getElementById("clickToShowCart")
 clickedonCart.onclick=function(){
  cm++;
  if(cm%2!==0){
    smallcartShow.style.visibility="visible"
  }else{
    smallcartShow.style.visibility="hidden"
  }
 }

//  filter

// Ascending by Price


function getSelectValue(){
  var selectedfilter=document.getElementById("filterBypriceOrName")
  if(selectedfilter.value==="PriceAscending"){
    var filterArr=proArr.sort(function(a,b){
      return a.Price-b.Price
    })
   // console.log(filterArr);
    showprod(filterArr)
}
else if(selectedfilter.value==="PriceDescending"){
  var filterArr1=proArr.sort(function(a,b){
    return b.Price-a.Price
  })
  //console.log(filterArr);
  showprod(filterArr1)
}
else if(selectedfilter.value==="NameAscending"){
 var filterArr2=proArr.sort((a,b) => (a.Name >b.Name) ? 1 : ((b.Name >a.Name) ? -1 : 0))
  showprod(filterArr2)
}
else if(selectedfilter.value==="NameDescending"){
  var filterArr3=proArr.sort((a,b) => (a.Name <b.Name) ? 1 : ((b.Name <a.Name) ? -1 : 0))
  showprod(filterArr3)
}
else if(selectedfilter.value==="BestSelling"||selectedfilter.value==="Featured"){
  for (var a = 0; a < proArr.length; a++) {
    var x = proArr[a];
    var y = Math.floor(Math.random() * (a + 1));
    proArr[a] = proArr[y];
    proArr[y] = x;
}showprod(proArr)
}
else if(flterbyQuant.value==="8"){
  var newsliceArr= proArr.slice(0,8)
   console.log(newsliceArr);
  
 } vert(newsliceArr)
}

// pending
// limitedproductshowFilter


// var flterbyQuant=document.getElementById("flterbyQuant")
// function showselectedNumberProductsvalue(){
//   if(flterbyQuant.value==="8"){
//    var newsliceArr= proArr.slice(0,6)
//     console.log(newsliceArr);
//     showprod(newsliceArr)
//   }
   
// }


var v=0
var describ=document.getElementsByClassName("describclass")
var verticle=document.getElementById("verticleshow")
verticle.addEventListener("click",vert)
var productdetailContainerClass=document.getElementsByClassName("productdetailContainerClass")
var pImageClass=document.getElementsByClassName("pImageClass")
var productsAddingMaindiv =document.getElementById("productsAddingMaindiv")
var pNameClass=document.getElementsByClassName("pNameClass")
var pImageClass=document.getElementsByClassName("pImageClass")
var secondmaindivClass=document.getElementsByClassName("secondmaindivClass")
var btnAndPriceClass=document.getElementsByClassName("btnAndPriceClass")
var addToCartBtClass=document.getElementsByClassName("addToCartBtClass")
var prodcutPriceClass=document.getElementsByClassName("prodcutPriceClass")
var addToCartBtClass=document.getElementsByClassName("addToCartBtClass")
var arr=Array.from(describ)
// showhorizontalproducts
   var horizontal=document.getElementById("showhorizontalproducts")
   horizontal.addEventListener("click",showInRow)
  function showInRow()
  {
    productsAddingMaindiv.style.gridTemplateColumns="repeat(1,100%)";
    productsAddingMaindiv.style.width="90%"
    productsAddingMaindiv.style.padding="3%"

  arr.forEach(function(el){
    el.style.display="block"
   // el.style.visibility="visibile"
  })
  Array.from(productdetailContainerClass).forEach((el)=>{
    el.style.width="30%"
  })
  Array.from(pImageClass).forEach((el)=>{
    el.style.width="100%"
  })
  Array.from(pNameClass).forEach((el)=>{
    // el.style.fontSize="12px"
    el.style.textAlign="left";
    el.style.marginLeft="4%"
  })
  Array.from(secondmaindivClass).forEach((el)=>{
    el.style.flexDirection="row"
  })
  Array.from(btnAndPriceClass).forEach((el)=>{
  el.style.margin="auto"
  })
  Array.from(addToCartBtClass).forEach((el)=>{
    el.style.margin="0px"
    // el.style.width="100%"
  })
  Array.from(prodcutPriceClass).forEach((el)=>{
    el.style.marginLeft="300%"
  })
  Array.from(addToCartBtClass).forEach((el)=>{
    el.style.width="50%"
    el.style.top="-45%"
    el.style.cursor="pointer"
    el.onmouseover=function(){
      el.style.width="150%"
    }
    el.onmouseout=function(){
      el.style.width="50%"
    }
  })
  }

var gohomebackfromProduct=document.getElementsByClassName("gohomebackfromProduct")
Array.from(gohomebackfromProduct)[0].onclick=function(){
  window.location.href="../Index.html"
}




// verticle

function vert(){
  v=1
 if(v==1){
  productsAddingMaindiv.style.gridTemplateColumns="24% 24% 24% 24%"
  arr.forEach(function(el){
    el.style.display="none"
    //el.style.visibility="hidden"
  })
  Array.from(productdetailContainerClass).forEach((el)=>{
    el.style.flexDirection="row"
  })
  Array.from(pImageClass).forEach((el)=>{
    el.style.width="100%"
  })
  Array.from(pNameClass).forEach((el)=>{
    el.style.fontSize="12px"
  })
  Array.from(pImageClass).forEach((el)=>{
    el.style.width="300%"
  })
  Array.from(secondmaindivClass).forEach((el)=>{
    el.style.flexDirection="column"
  })
  Array.from(btnAndPriceClass).forEach((el)=>{
  el.style.margin="0px"
  })
  Array.from(addToCartBtClass).forEach((el)=>{
    el.style.margin="0px"
    // el.style.width="100%"
  })
  Array.from(prodcutPriceClass).forEach((el)=>{
    el.style.marginLeft="300%"
  })
  Array.from(addToCartBtClass).forEach((el)=>{
    el.style.width="200%"
    el.style.top="-45%"
    el.style.cursor="pointer"
    el.onmouseover=function(){
      el.style.width="520%"
    }
    el.onmouseout=function(){
      el.style.width="200%"
    }
  })
 }
}

window.addEventListener("load",ref)
function ref(){
  vert(proArr)
}

  