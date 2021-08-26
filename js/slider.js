(function () {
    const brandPhotoName = `[
        {
        "id": "1",
        "imgUrl": "../img/brand/lavazza_brand.png",
        "imgAlt":"lavazza brand"
        },
        {
        "id": "2",
        "imgUrl": "../img/brand/folgers_brand.png",
        "imgAlt":"folgers brand"
        },
        {
        "id": "3",
        "imgUrl": "../img/brand/frontier_brand.png",
        "imgAlt":"frontier organic coffee brand"
        },
        {
        "id": "4",
        "imgUrl": "../img/brand/melitta_brand.png",
        "imgAlt":"melitta brand"
        },
        {
        "id": "5",
        "imgUrl": "../img/brand/green_mountain_brand.png",
        "imgAlt":"green mountain coffee roaster brand"
        },
        {
        "id": "6",
        "imgUrl": "../img/brand/monarch_brand.png",
        "imgAlt":"monarch brand"
        },
        {
        "id": "7",
        "imgUrl": "../img/brand/costa_brand.png",
        "imgAlt":"costa brand"
        }
    ]`;

    const brands = JSON.parse(brandPhotoName);

    let brandPhotoNameAddList = [];
    for (const brand of brands) {
   brandPhotoNameAddList.push(`
  <img src="${brandPhotoName.imgUrl}" alt="${brandPhotoName.imgAlt}"/>
 `);
    }
    (function() {
        const sliders = brandPhotoNameAddList;
        let currentSlideIdx = 0;

        function showCurrentSlide() {
            if (window.innerWidth < 767) {
                const slideContainer = document.querySelector(".roundabout_brand");
                slideContainer.innerHTML = sliders[currentSlideIdx];
            } else {
                let slideContainer = document.querySelector(".roundabout_brand");
                slideContainer.innerHTML =
                    sliders[currentSlideIdx] +
                    sliders[currentSlideIdx + 1] +
                    sliders[currentSlideIdx + 2] +
                    sliders[currentSlideIdx + 3] +
                    sliders[currentSlideIdx + 4];
            }
        }

        function nextSlide() {
            currentSlideIdx++;
            if (currentSlideIdx >= sliders.length) currentSlideIdx = 0;
            showCurrentSlide();
        }

        function previousSlide() {
            currentSlideIdx--;
            if (currentSlideIdx < 0) currentSlideIdx = sliders.length - 1;
            showCurrentSlide();
        }

        setInterval(nextSlide, 5000);
        showCurrentSlide();

        document.querySelector(".button_slider_left")
            .addEventListener("click", previousSlide);
        document.querySelector(".button_slider_right")
            .addEventListener("click", nextSlide);
    })();
})();