jQuery(document).ready(function () {

    "use strick"

    $('body').ripples({
        dropRadius: 10,
        pertubance: 0.01,
    })

});

var typed = new Typed(".type", {
    strings: ["Operator",
        "Operator",
        "Silahkan Login"
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});