let tabNavs = document.getElementsByClassName("nav_tab");
let tabPanes = document.getElementsByClassName("tab-pane");

for (let i = 0; i < tabNavs.length; i++) {
    tabNavs[i].addEventListener("click", function(e){
        e.preventDefault();
        let activeTabAttr = this.getAttribute("data-tab");
        for (let j = 0; j < tabNavs.length; j++) {
            let contentAttr = tabPanes[j].getAttribute("data-tab-content");
            if (activeTabAttr === contentAttr) {
                tabNavs[j].classList.add("active");
                tabPanes[j].classList.add("active");
            } else {
                tabNavs[j].classList.remove("active");
                tabPanes[j].classList.remove("active");
            }
        };
    });
}