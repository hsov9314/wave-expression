// alert("alert")

class ScrollValue {
    constructor() {
      this.scrollValue = 0;
    }
  
    getScroll() {
      return this.scrollValue;
    }

    setScroll(value){
        this.scrollValue += value
    }

}

const displayScrollValue = (event) => {
    const divElement = document.getElementById("water");
    divElement.innerHTML = "water X: " + event.deltaX + " Y: " + event.deltaY; 
}

const updateStyleWithScroll = (scrollValue) => {
    const value = scrollValue.getScroll();
    console.log(scrollValue.getScroll())
    if(value < 400){
        return
    }
    else if(400 < value && value < 800){
        const waterArea = document.getElementById("water");
        const beachArea = document.getElementById("beach");

        const waterAreaHeight = window.screen.height * (0.6 + (value-400)/400);
        const beachAreaHeight = (window.screen.height - waterAreaHeight) * 0.8;
        waterArea.style.height = waterAreaHeight < window.screen.height ? waterAreaHeight : window.screen.height;
        beachArea.style.height = beachAreaHeight;
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const scrollValue = new ScrollValue();

    window.addEventListener("wheel", (event) => {
        console.log(event);
        displayScrollValue(event);

        scrollValue.setScroll(event.deltaY);
        updateStyleWithScroll(scrollValue);
    }, false)
})
