const lightbox = new SimpleLightbox('.image-gallery a', {
    close: true,
    closeText: '×',
    docClose: true,
    swipeClose: true
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    var message = document.getElementById('messageInput').value;
  
    // Perform validation or additional processing here
  
    // Simulate sending the form data
    setTimeout(function() {
      var responseMessage = document.getElementById('responseMessage');
      responseMessage.textContent = 'Thank you, ' + name + '! Your message has been sent.';
      responseMessage.style.color = 'green';
    }, 1000);
  });
  