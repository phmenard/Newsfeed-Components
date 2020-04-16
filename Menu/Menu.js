/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out',
  'bye'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function createMenu(menuItems) {
  const myMenu = document.createElement('div');
  myMenu.classList.add('menu--open');
  myMenu.classList.add('menu');

  const itemList = document.createElement('ul');
  menuItems.forEach((item) => {
    const menuItem = document.createElement('li');
    menuItem.textContent = item;
    itemList.appendChild(menuItem);
  })
  
  myMenu.appendChild(itemList);

  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', (event) => {
    console.log('click');
    if (myMenu.classList.toggle('menu--open')) {  
    //if (myMenu.style.width !== '350px') {  
      
      showNav(itemList, myMenu);
      itemList.style.display = 'block';
    } else {
      hideNav(itemList, myMenu);
    }
  })

  return myMenu;
}

const newMenu = createMenu(menuItems);
const myBody = document.querySelector('body');
myBody.appendChild(newMenu);

myBody.addEventListener('click', ()=>{
  hideNav(newMenu);
})


function showNav(navBar, menu) {
  //opacity del aside
  /*TweenLite.to(navBar, 0.01, {
      autoAlpha: 1
  });
  // width del aside
  TweenLite.to(navBar, 0.3, {

      width: elemWidth,
      ease: Power2.easeInOut
  });*/
  // all of menu
  /*TweenLite.to(navBar, 0.2, {
    autoAlpha: 1,
    width: 350,
    ease: Power2.easeInOut,
    delay: 0.1
  });*/
  TweenLite.to(menu, 0.2, {
    autoAlpha: 1,
    width: 350,
    ease: Power2.easeInOut,
    delay: 0.1
  });
}

  

function hideNav(navBar, menu) {
  TweenLite.to(menu, 0.2, {
    autoAlpha: 1,
    width: 0,
    ease: Power2.easeInOut,
    delay: 0.1

  });
  /*TweenLite.to(navBar, 0.3, {

      width: 0,
      ease: Power2.easeInOut
  });
  TweenLite.to(navBar, 0.01, {
      autoAlpha: 0,
      delay: 0.3
  });*/
}