window.onload = function () {
    document.getElementById('open').onclick = function() {
            $(".nav_2").css({
                "visibility": "unset",
                "position": "absolute",
                "margin-right": "0",
                "right": "0",
                "transition": ".5s"
        })
    };

    document.getElementById('exit').onclick = function() {
            $(".nav_2").css({
                "visibility": "unset",
                "position": "absolute",
                "margin-right": "-100%",
                "right": "0",
                "transition": ".5s"
        })
    };
}