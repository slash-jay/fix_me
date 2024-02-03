function changee() {
    var selectedService = document.getElementById('services').value;
  
    // Redirect to the corresponding HTML page based on the selected service
    switch (selectedService) {
      case 'business':
        window.location.href = "business.html";
        break;
      case 'investor':
        window.location.href = "investor.html";
        break;
      case 'parttime':
        window.location.href = "parttimejob.html";
        break;
      case 'partner':
        window.location.href = "partnerfinder.html";
        break;
      default:
        // Handle default case or provide an error message
        console.error('Invalid service selected');
        break;
    }
  }
  