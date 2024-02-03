function changee()
{
     var selectedService = document.getElementById('services').value;

      // Redirect to the corresponding HTML page based on the selected service
      switch (selectedService) {
        case 'service1':
          window.location.href = 'service1.html';
          break;
        case 'service2':
          window.location.href = 'service2.html';
          break;
        case 'service3':
          window.location.href = 'service3.html';
          break;
        default:
          // Handle default case or provide an error message
          console.error('Invalid service selected');
          break;
      }
    }