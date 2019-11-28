var $ = require("jquery");
var Blazy = require("blazy");

$(function onDomContentLoaded() {
    $(".header__nav-items").hide();
    $(".header__nav-icon").click(function toggleNavigation(e) {
        $(".header__nav-items").slideToggle();
    });

    parallax();
    lazyLoadImages();

    window.addEventListener('scroll', parallax);
    window.addEventListener('resize', parallax);

    $(".footer").click(function() {
        $.ajax({
            url: "https://api.chucknorris.io/jokes/random",
            success: function(result) {
                $(".footer__text").text(result.value);
            },
            async: false
        });
    });
});

function parallax() {
    var scroll = window.scrollY + window.innerHeight;
    var servicesOffset = $(".services").offset().top;

    if (scroll >= servicesOffset) {
        $(".services__overlay").each(function (evt) {
            var currentPosition = window.scrollY + window.innerHeight / 2;
            var bodyHeight = $("body").outerHeight();
            var serviceHeight = $(".services__service").outerHeight();

            $(this).css({top: serviceHeight * currentPosition / bodyHeight + "px"});

        });
    }
}

function loadFonts() {
    if(document.fonts) {
        document.fonts.load("1em Raleway");

        document.fonts.ready.then(function(fontFaceSet) {
            document.documentElement.className += " fonts-loaded";

        });
    }
}

function lazyLoadImages() {
    var bLazy = new Blazy({
        selector: ".lazy",
        container: "body",
        loadInvisible: true
    });
}