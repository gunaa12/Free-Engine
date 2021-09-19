//on load
window.onload = function() {
    changeScreen(1);
};

//to display different screens
function changeScreen(screen) {
    if (screen == 1) {
        document.getElementById('Home').style.display = 'block';
        document.getElementById('Suggestions').style.display = 'none';
    }
    else if (screen == 2) {
        document.getElementById('Home').style.display = 'none';
        document.getElementById('Suggestions').style.display = 'block';
    }
}
    
