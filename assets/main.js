const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// let upgradeTime = 172801;
// let seconds = upgradeTime;
// function timer() {
//   let days        = Math.floor(seconds/24/60/60);
//   let hoursLeft   = Math.floor((seconds) - (days*86400));
//   let hours       = Math.floor(hoursLeft/3600);
//   let minutesLeft = Math.floor((hoursLeft) - (hours*3600));
//   let minutes     = Math.floor(minutesLeft/60);
//   let remainingSeconds = seconds % 60;
//   let pad = (n) => {
//     return (n < 10 ? "0" + n : n);
//   }
//   document.getElementById('countdown').innerHTML =
//   `<span class="countdown__item flex-col align-center">
//         <p class="countdomwn__number">${pad(days)}</p>
//         <p class="countdomwn__text">DAYS</p>
//     </span>
//     <img src="./asset/img/icon/colon.svg" alt="#" class="colon">
//     <span class="countdown__item flex-col align-center">
//         <p class="countdomwn__number">${pad(hours)}</p>
//         <p class="countdomwn__text">HOURS</p>
//     </span>
//     <img src="./asset/img/icon/colon.svg" alt="#" class="colon">
//     <span class="countdown__item flex-col align-center">
//         <p class="countdomwn__number">${pad(minutes)}</p>
//         <p class="countdomwn__text">MINS</p>
//     </span>
//     <img src="./asset/img/icon/colon.svg" alt="#" class="colon">
//     <span class="countdown__item flex-col align-center">
//         <p class="countdomwn__number">${pad(remainingSeconds)}</p>
//         <p class="countdomwn__text">SECS</p>
//     </span>
//   `;
//   if (seconds == 0) {
//     clearInterval(countdownTimer);
//     document.getElementById('countdown').innerHTML = "Completed";
//   } else {
//     seconds--;
//   }
// }
// let countdownTimer = setInterval('timer()', 1000);
//

// const playMovie = $(".js-movie__play");
// const decorVideo = $(".js-decor__video");

// let toogleElement = (element, className) => {
//   $(element).classList.toggle(className);
// };

// let playVideo = () => {
//   toogleElement(".js-movie__play", "hide");
//   toogleElement(".js-decor-img", "hide");
//   toogleElement(".decor__video", "show");
//   closeVideo();
// };

// playMovie.addEventListener("click", playVideo);
// //

const slideImgs = $$(".slide__img");
const sellerItems = $$(".seller__item");

sellerItems.forEach(function (ele) {
  let sellerImg = ele.querySelector(".seller__img");
  let slideSrc = ele.querySelector(".slide__img--active").getAttribute("src");
  let sellerContents = ele.querySelectorAll(".seller__content");
  sellerImg.setAttribute("src", slideSrc);

  // add to cart
  const addToCartBtn = ele.querySelector(".add-to-cart-btn");
  addToCartBtn.addEventListener("click", function () {
    const variantId = ele.querySelector(".product-select").value;
    const quantity = ele.querySelector(".quantity").value;
    const formData = new FormData();
    formData.append("id", variantId);
    formData.append("quantity", quantity);
    fetch("/cart/add.js", {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        showSuccessToast();
        updateCartItemCount();
        return response.json();
      })
      .then(function (json) {
        console.log(json);
      })
      .catch(function (error) {
        console.error(error);
      });
  });
  //

  ele.querySelectorAll(".slide__img").forEach((item, index) => {
    item.onclick = function () {
      let sellerContent = sellerContents[index];
      ele
        .querySelector(".slide__img.slide__img--active")
        .classList.remove("slide__img--active");
      ele
        .querySelector(".seller__content.seller__content--active")
        .classList.remove("seller__content--active");
      this.classList.add("slide__img--active");
      sellerContent.classList.add("seller__content--active");
      let slideSrc = ele
        .querySelector(".slide__img--active")
        .getAttribute("src");
      sellerImg.setAttribute("src", slideSrc);
    };
  });
});

const navElemnt = $(".search__menu");
const navigationElement = $(".navigation");

navElemnt.onclick = function () {
  navigationElement.classList.toggle("navigation--active");
};

// /Script để update số lượng sản phẩm trong giỏ hàng

// Lấy thẻ HTML chứa số lượng sản phẩm trong giỏ hàng
const cartItemCount = document.getElementById("cart-item-count");

// Lấy số lượng sản phẩm trong giỏ hàng từ đối tượng JSON trả về sau khi thêm sản phẩm vào giỏ hàng
function updateCartItemCount() {
  fetch("/cart.json")
    .then((response) => response.json())
    .then((data) => {
      const itemCount = data.item_count;
      cartItemCount.textContent = itemCount;
    })
    .catch((error) => {
      console.error("Error fetching cart data:", error);
    });
}

// Gọi hàm updateCartItemCount để cập nhật số lượng sản phẩm ban đầu
updateCartItemCount();

const featureItems = $$(".feature__item");

featureItems.forEach(function (ele) {
  // add to cart
  const addToCartBtn = ele.querySelector(".add-to-cart-btn");
  addToCartBtn.addEventListener("click", function () {
    const variantId = ele.querySelector(".product-select").value;
    const quantity = ele.querySelector(".quantity").value;
    const formData = new FormData();
    formData.append("id", variantId);
    formData.append("quantity", quantity);
    fetch("/cart/add.js", {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        showSuccessToast();
        updateCartItemCount();
        return response.json();
      })
      .then(function (json) {
        console.log(json);
      })
      .catch(function (error) {
        console.error(error);
      });
  });
  //
});

const collectionProductItems = $$(".collection__product-item");

collectionProductItems.forEach(function (ele) {
  // add to cart
  const addToCartBtn = ele.querySelector(".add-to-cart-btn");
  addToCartBtn.addEventListener("click", function () {
    const variantId = ele.querySelector(".product-select").value;
    const quantity = ele.querySelector(".quantity").value;
    const formData = new FormData();
    formData.append("id", variantId);
    formData.append("quantity", quantity);
    fetch("/cart/add.js", {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        showSuccessToast();
        updateCartItemCount();
        return response.json();
      })
      .then(function (json) {
        console.log(json);
      })
      .catch(function (error) {
        console.error(error);
      });
  });
  //
});

const productItem = $(".js-product__item");


  // add to cart
  const addToCartBtn = productItem.querySelector(".add-to-cart-btn");
  addToCartBtn.onclick = function () {
    const variantId = productItem.querySelector(".product-select").value;
    // const quantity = productItem.querySelector(".quantity").value;
    const formData = new FormData();
    formData.append("id", variantId);
    // formData.append("quantity", quantity);
    fetch("/cart/add.js", {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        showSuccessToast();
        updateCartItemCount();
        return response.json();
      })
      .then(function (json) {
        console.log(json);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  //
  