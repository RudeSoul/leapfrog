class EditMap {
    constructor() {
    }

    addListeners() {
        document.getElementsByClassName('play-game')[0].addEventListener("click", function () {
            window.location.href = "game.html";
        });

    }
    // addListeners() {
    //     document.getElementsByClassName('edit-map')[0].addEventListener("click", function () {
    //         window.location.href = "editMap.html";
    //     });

    // }
}



let editMap = new EditMap();

edit.addListeners();