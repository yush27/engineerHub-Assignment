document.getElementById('order-now').addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('order-modal').style.display = 'block';
  });
  
  document.querySelector('.close-button').addEventListener('click', function(){
    document.getElementById('order-modal').style.display = 'none';
  });
  
  window.addEventListener('click', function(e){
    const modal = document.getElementById('order-modal');
    if (e.target === modal){
      modal.style.display = 'none';
    }
  });
  
  document.getElementById('order-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Your order has been submitted. Thank you!');
    document.getElementById('order-modal').style.display = 'none';
  });
  