
// document.addEventListener('DOMContentLoaded', function () {
//     const banner = document.querySelector('#banner');
//     const currentDate = new Date();
//     const currentMonth = currentDate.getMonth(); // 0-indexed month (0 - 11)
  
//     // Define the month range for each background image
//     const backgroundImageMappings = [
//       { startMonth: 0, endMonth: 3, imageUrl: '../assets/images/winter-image.jpg' },
//       { startMonth: 3, endMonth: 5, imageUrl: '../assets/images/spring-image.jpg' },
//       { startMonth: 6, endMonth: 8, imageUrl: '../assets/images/summer-image.jpg' },
//       { startMonth: 9, endMonth: 11, imageUrl: '../assets/images/autumn-image.jpg' }
//     ];
  
//     // Find the matching background image for the current month
//     const matchingImage = backgroundImageMappings.find(mapping =>
//       currentMonth >= mapping.startMonth && currentMonth <= mapping.endMonth
//     );
  
//     // Set the background image
//     if (matchingImage) {
//       banner.style.backgroundImage = `url(${matchingImage.imageUrl})`;
//     }
//   });

  
  