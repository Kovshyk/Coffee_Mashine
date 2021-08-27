let acc = document.getElementsByClassName("accordion_button ")
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.padding = null;
        } else {
            panel.style.maxHeight = '10rem';
            panel.style.padding = "1rem 1rem 2rem 0";
        }
    });
}
