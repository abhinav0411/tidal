function toggleDropdown() {
  document.getElementById("languageDropdown").classList.toggle("show");
  rotateArrow();
}

function changeLanguage(lang) {
  document.querySelector('.language-button').textContent = lang;
  toggleDropdown();
}

function rotateArrow() {
  const button = document.querySelector('.language-button');
  button.style.transition = 'transform 0.3s';
}

window.onclick = function(event) {
  if (!event.target.matches('.language-button')) {
      var dropdowns = document.getElementsByClassName("language-dropdown");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
              rotateArrow();
          }
      }
  }
}