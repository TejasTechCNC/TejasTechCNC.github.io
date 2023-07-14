document.addEventListener('DOMContentLoaded', function() {
    var services = document.querySelectorAll('.service');
  
    services.forEach(function(service) {
      service.addEventListener('click', function() {
        this.classList.toggle('expanded');
        toggleIcon(this.querySelector('.icon-container'));
      });
    });
  
    function toggleIcon(icon) {
      if (icon.textContent === "+") {
        icon.textContent = "-";
      } else {
        icon.textContent = "+";
      }
    }
  });
  