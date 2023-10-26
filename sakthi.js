document.addEventListener('DOMContentLoaded', function() {
   const contentElement = document.querySelector('.section-contant');
   const colors = ['#FF5733', '#07AE98', '#3D85c6', '#F333FF'];

   function changeBackgroundColor() {
      const randomColor = colors[Math.floor(Math.random()* colors.length)];
      contentElement.Style.backgroundColor = randomColor;
   }

   //change the background color every 2 seconds (2000 milliseconds)
   setInterval(changeBackgroundColor, 2000);
});