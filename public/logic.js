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
    else if(screen == 3){
        document.getElementById('').style.display ='block';
    }
}
function StandaloneToggleButton() {
    const [selected, setSelected] = React.useState(false);
  
    return (
      <ToggleButton
        value="check"
        selected={selected}
        onChange={() => {
            if (selected){
              console.log("Value of Button",selected);
              <script src="./search.js"></script>
            }
            else{
              console.log("Value of Button",selected);
              <script src="./searchDark.js"></script>
            }
           
          setSelected(!selected);
        }}
      >
        <CheckIcon />
      </ToggleButton>
    );
  }
    
