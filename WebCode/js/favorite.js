// 初始設定
let favoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts')) || [];
const dataPanel = document.querySelector(".col-12 .row");

// 監聽 data panel
dataPanel.addEventListener("click", function onPanelClicked(event) {
  const target = event.target;
  if (target.matches('.btn-remove-favorite')) {
    event.stopPropagation();
    const productElement = target.closest('.col-12');
    const productId = productElement.querySelector('img').src; // 使用圖片的 src 作為識別標識
    removeFromFavorite(productId);
    productElement.remove(); // 從畫面上移除該產品
  }
});

// 移除我的最愛
function removeFromFavorite(productId) {
  favoriteProducts = favoriteProducts.filter(product => product.image !== productId);
  localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProducts));
}

// 渲染我的最愛列表
function renderFavoriteList(data) {
  let rawHTML = "";
  data.forEach(product => {
    rawHTML += `
      <div class="col-12 col-md-4">
        <a href="product.html"><img src="${product.image}" alt="" class="img-fluid"></a>
        <p class="text-center"><a href="product.html">${product.name}</a></p>
        <div class="d-flex justify-content-center my-2">
          <button class="btn btn-danger btn-remove-favorite" data-id="${product.image}">-</button>
        </div>
      </div>
    `;
  });
  dataPanel.innerHTML = rawHTML;
}

// 初始化時渲染我的最愛列表
renderFavoriteList(favoriteProducts);
