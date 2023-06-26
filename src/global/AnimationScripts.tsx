export function toggleTransition(containerId:string){
  // clearTransitions();

  var container = document.getElementById(containerId);
  container?.classList.add("active");
}

export function clearTransitions(){
  const activeElements = document.getElementsByClassName('active');
  const activeArray = Array.from(activeElements);

  activeArray.forEach(element => {
    element.classList.remove('active');
  });
}