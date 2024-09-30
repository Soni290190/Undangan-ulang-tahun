document.querySelector('.rsvp-button').addEventListener('click', function() {
  this.textContent = "Thank you for RSVPing!";
  this.style.background = '#28a745';
  alert('Your RSVP has been received!');
});
