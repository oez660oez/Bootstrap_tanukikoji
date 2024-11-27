// 加入最愛功能
function addToFavorite(imgSrc, productName, heartIcon) {
  const list = JSON.parse(localStorage.getItem('favoriteProducts')) || [];

  // 檢查是否已在最愛清單中
  if (list.some(product => product.image === imgSrc)) {
    return alert('此商品已經在您的最愛清單中！');
  }

  // 將商品加入最愛清單
  list.push({ image: imgSrc, name: productName });
  localStorage.setItem('favoriteProducts', JSON.stringify(list));
  alert('已加入您的最愛清單！');

  // 更新心形圖標為實心
  heartIcon.classList.remove('bi-heart');
  heartIcon.classList.add('bi-heart-fill');
}

// 監聽 heart icon 的點擊事件
document.querySelectorAll('.bi-heart').forEach(heart => {
  heart.addEventListener('click', function(event) {
    event.preventDefault(); // 阻止<a>的預設行為
    event.stopPropagation(); // 停止事件冒泡

    const imgSrc = this.closest('a').querySelector('img').src;
    const productName = this.closest('.mb-4').querySelector('p').innerText.trim(); // 商品名稱在第一個 <p> 標籤中
    addToFavorite(imgSrc, productName, this); // 傳遞圖片路徑、商品名稱和當前點擊的heart圖標
  });
});