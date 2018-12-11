function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


      // Glavni slajder na stranici
      // Pocinje od prvog slajda
        var slideIndex = 1;
        showSlides(slideIndex);
        // Uvodimo novu funkciju koja pokazuje indeks.
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        // trenutni indeks saljda
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        // Prikaz slajdova.
        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
          }
          for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";
          dots[slideIndex-1].className += " active";
        }

          //Modal
          // Get the modal
          var modal = document.getElementById('myModal');

          // Get the button that opens the modal
          var btn = document.getElementById("myBtn");

          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];

          // When the user clicks on the button, open the modal
          btn.onclick = function() {
              modal.style.display = "block";
          }

          // When the user clicks on <span> (x), close the modal
          span.onclick = function() {
              modal.style.display = "none";
          }

          // When the user clicks anywhere outside of the modal, close it
          window.onclick = function(event) {
              if (event.target == modal) {
                  modal.style.display = "none";
              }
          }
