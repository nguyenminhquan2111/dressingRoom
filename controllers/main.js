import ListChosen from "../models/ListChosen.js";
import ChoseItem from "../models/ChoseItem.js";

const listChose = ListChosen;
const choseItem = ChoseItem;

// console.log(listChose);
// console.log(choseItem);
const getEle = (id) => document.getElementById(id);

const createNavPills = (data) => {
  let navPillsHTML = "";
  navPillsHTML = `<li class="nav-item list__title">
        <a class="nav-link active" data-toggle="tab" onclick="showProduct('${data[0].type}')">${data[0].showName}</a>
      </li>`;
  for (let i = 1; i < data.length; i++) {
    navPillsHTML += `<li class="nav-item list__title">
        <a class="nav-link" data-toggle="tab" onclick="showProduct('${data[i].type}')" >${data[i].showName}</a>
      </li>`;
  }
  getEle("navPills").innerHTML = navPillsHTML;
};

const createTabPanes = (data) => {
  let tabPanesHTML = "";
  tabPanesHTML += `<div class="tab-pane container active tab__container" id="${data[0].type}">
      </div>`;
  for (let i = 1; i < data.length; i++) {
    tabPanesHTML += `<div class="tab-pane container fade tab__container" id="${data[i].type}">
      </div>`;
  }
  getEle("tabContent").innerHTML = tabPanesHTML;
};

const createProducts = (data) => {
  let productHTML = "";
  data.forEach((item) => {
    productHTML += `<div class="item">
      <div class="item__container">
        <img src="${item.imgSrc_jpg}" />
        <p>${item.name}</p>
        <button class="btn btn-info" onclick=handleWear('${item.id}','${item.type}')>Thử đồ</button>
      </div>    
    </div>`;
  });
  getEle("tabContent").innerHTML = productHTML;
};

const showProduct = (type) => {
  var result = [];
  type = type.toLowerCase().trim();
  for (let i in choseItem) {
    let convertedType = choseItem[i].type.toLowerCase();
    if (convertedType === type) result.push(choseItem[i]);
    createProducts(result);
  }
};

const handleWear = (id, type) => {
  let index = choseItem.findIndex((item) => {
    return item.id === id;
  });

  if (type === "topclothes") {
    let topclothesHTML = "";
    topclothesHTML += `<img src="${choseItem[index].imgSrc_png}"/>`;
    getEle("bikinitop").innerHTML = topclothesHTML;
  }
  if (type === "botclothes") {
    let botclothesHTML = "";
    botclothesHTML += `<img src="${choseItem[index].imgSrc_png}"/>`;
    getEle("bikinibottom").innerHTML = botclothesHTML;
  }
  if (type === "shoes") {
    let shoesHTML = "";
    shoesHTML += `<img src="${choseItem[index].imgSrc_png}"/>`;
    getEle("feet").innerHTML = shoesHTML;
  }
  if (type === "handbags") {
    let handbagsHTML = "";
    handbagsHTML += `<img src="${choseItem[index].imgSrc_png}"/>`;
    getEle("handbag").innerHTML = handbagsHTML;
  }
  if (type === "necklaces") {
    let necklacesHTML = "";
    necklacesHTML += `<img src="${choseItem[index].imgSrc_png}"/>`;
    getEle("necklace").innerHTML = necklacesHTML;
  }
  if (type === "hairstyle") {
    let hairstyleHTML = "";
    hairstyleHTML += `<img src="${choseItem[index].imgSrc_png}"/>`;
    getEle("hairstyle").innerHTML = hairstyleHTML;
  }
  if (type === "background") {
    let backgroundHTML = "";
    backgroundHTML += `<img src="${choseItem[index].imgSrc_png}"/>`;
    getEle("background").innerHTML = backgroundHTML;
  }

  console.log(index, type);
};

createNavPills(listChose);
createTabPanes(listChose);
showProduct(choseItem[0].type);

window.createTabPanes = createTabPanes;
window.createNavPills = createNavPills;
window.showProduct = showProduct;
window.createProducts = createProducts;
window.handleWear = handleWear;
