(function() {
    const navBarHeader= document.querySelector('header>div>div');
    const navBarIcon = document.querySelector('.header_ico');
    const navBarButton = document.querySelector('.burger_button');
    const navBarUl = document.querySelector('header>nav>ul');
    const navBarClickClose = document.querySelector('header>nav>ul>li>a');
    function showNavBar () {
        if (window.innerWidth < 992) {
            navBarHeader.style.display = 'none';
            navBarIcon.style.display = 'none';
            navBarUl.style.display = 'none';
            navBarButton.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
        } else {
            navBarHeader.style.display = 'flex';
            navBarIcon.style.display = 'grid';
            navBarUl.style.display = 'flex';
        }
    }
        function navBarButtonClick() {
            navBarButton.innerHTML = navBarButton.innerHTML === '<i class="fa fa-times" aria-hidden="true"></i>' ? '<i class="fa fa-bars" aria-hidden="true"></i>' : '<i class="fa fa-times" aria-hidden="true"></i>';
            navBarHeader.style.display = navBarHeader.style.display === 'flex' ? 'none' : 'flex';
            navBarIcon.style.display = navBarIcon.style.display === 'grid' ? 'none' : 'grid';
            navBarUl.style.display = navBarUl.style.display === 'flex' ? 'none' : 'flex';

        }

        navBarButton.addEventListener('click', navBarButtonClick);

        function navBarButtonClickClose() {
            navBarButton.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
            navBarHeader.style.display = 'none';
            navBarIcon.style.display = 'none';
            navBarUl.style.display = 'none';
        }
        navBarClickClose.addEventListener('click', navBarButtonClickClose);
     window.addEventListener('resize', showNavBar);
})();