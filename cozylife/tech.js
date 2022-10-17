let link = document.querySelectorAll('.link')

function mouseImg (evt){
 // I want to have a white text box that says "desktop screensavers" appear instead of my image while I mouseover   
 evt.target.classList.add("opacity")

}

function mouseOff (evt){
    evt.target.classList.remove("opacity")
}

for(i=0; i<link.length;i++){
link[i].addEventListener('mouseover', mouseImg)
link[i].addEventListener('mouseout', mouseOff)}