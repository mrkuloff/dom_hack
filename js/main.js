'use strict';

const item = document.querySelectorAll('.item');

item[3].after(item[0]);

const propsList = document.querySelectorAll('.props__list');

const swapElements = (el1, el2) => {
  let prev1 = el1.previousSibling;
  let prev2 = el2.previousSibling;

  prev1.after(el2);
  prev2.after(el1);
}

swapElements(propsList[2], propsList[4]);

const propsItemFourES6 = document.querySelector('.item_two .props__item_four');
const propsItemFourType = document.querySelector('.item_four .props__item_four');
propsItemFourType.after(propsItemFourES6);

const propsItemFourAsync = document.querySelectorAll('.item_six .props__item');

propsList[1].append(propsItemFourAsync[8]);
propsList[1].append(propsItemFourAsync[9]);

const advertisement = document.querySelector('.ads');
advertisement.remove();
