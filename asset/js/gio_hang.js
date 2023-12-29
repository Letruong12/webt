function cong(element) {
    var t = element.previousElementSibling.value;
    element.previousElementSibling.value = parseInt(t) + 1;
}

function tru(element) {
    var t = element.nextElementSibling.value;
    if (parseInt(t) > 1)
        element.nextElementSibling.value = parseInt(t) - 1;
}