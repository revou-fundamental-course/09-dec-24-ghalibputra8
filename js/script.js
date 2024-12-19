// Slide Gambar Otomatis
//Mendeklarasikan variabel slideIndex dan function showSlides
let slideIndex = 0;
showSlides();

//Membuat Function showSlides untuk memunculkan gambar
function showSlides() { 
  let slides = document.getElementsByClassName("mySlides"); //Mendeklarasikan variable slides untuk mengambil element dengan class mySlides
  
  //
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++; 
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); //Mengganti gambar setiap 3 detik
}

// Validasi Formulir
function validateForm() {
  let x = document.forms["myForm"]["full-name"].value;

  if (x == "") {
    alert("Namanya jangan lupa ya");
    return false;
  } else {
    alert("Berhasil!")
    return true;
  }
}