// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  $(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    var productNavbar = $('#product-navbar');
    var addToCartButton = $('#add-to-cart-button');
    
    if (scrollTop > 800) { // 調整為需要觸發的滾動位置
      productNavbar.addClass('fixed-top');
      addToCartButton.removeClass('d-none');
    } else {
      productNavbar.removeClass('fixed-top');
      addToCartButton.addClass('d-none');
    }
  });

  $(window).on("load", function() {
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails"
    });
    $('.plus').click(function() {
      let input = $(this).closest('.input-group').find('.quantity');
      let currentValue = parseInt(input.val());
      input.val(currentValue + 1);
  });

  $('.minus').click(function() {
      let input = $(this).closest('.input-group').find('.quantity');
      let currentValue = parseInt(input.val());
      if (currentValue > 1) {
          input.val(currentValue - 1);
      }
  });
});