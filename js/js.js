function get_element(e){
    var elem = document.getElementById(e);
    return elem
}

function show_modal(){
    get_element('modal').style.display = "block";
    get_element('e-modal').style.display = "block";
}

function close_modal(){
    get_element('modal').style.display = "none";
    get_element('e-modal').style.display = 'none'
}

