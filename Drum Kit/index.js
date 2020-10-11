var numOfDrumButton = document.querySelectorAll(".drum").length;
for(var i=0;i<numOfDrumButton;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("mousedown",function (){
    console.log(this);
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);


  });

  // document.querySelectorAll(".drum")[i].addEventListener("mouseup",  (event) => {
  //   console.log("This Event " + this);
  //   console.log("This Event " + event);
  //   buttonRemoveAnimation(this.innerHTML);
  // });

};

document.addEventListener("keydown", function(event)
{
  console.log(event.key);
  makeSound(event.key);
  buttonAnimation(event.key);

});

document.addEventListener("keyup", event => {

  buttonRemoveAnimation(event.key);
});

function buttonAnimation(key)
{
  console.log("Inside Button Animation " + key);
  var activeButton= document.querySelector("."+key);
  console.log(activeButton.classList);
  activeButton.classList.add("pressed");
  console.log(activeButton.classList);
  setTimeout(()=>{activeButton.classList.remove("pressed");},100);
  console.log(activeButton.classList);
}

function buttonRemoveAnimation(key)
{
  console.log("event Key " + key);
  var activeButton= document.querySelector("."+key);
  activeButton.classList.remove("pressed");
  console.log(activeButton.classList);
}




function makeSound(key)
{
  switch (key) {
    case "w":
        var  tom1= new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;

    case "a":
        var  tom2= new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;

    case "s":
        var  tom3= new Audio("sounds/tom-3.mp3");
        tom3.play();
      break;

    case "d":
        var  tom4= new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;

    case "j":
        var  snare= new Audio("sounds/snare.mp3");
        snare.play();
      break;
    case "k":
        var  crash= new Audio("sounds/crash.mp3");
        crash.play();
      break;
    case "l":
        var  kick= new Audio("sounds/kick-bass.mp3");
        kick.play();
      break;
    default:
      console.log("Something Wrong with me!!!");

  }
}
