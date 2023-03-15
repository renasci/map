import { Component } from "./component.js";
export class DeviceComponent extends Component{
  showChilds(count) {
    [...this.element.children].forEach((element) => {
      if(element.dataset.devicevolume <= count) {
        element.style.visibility = `visible`;
      }
    });
  }

  hideAllChilds() {
    [...this.element.children].forEach((element) => {
      element.style.visibility = `hidden`;
    });
  }

  playAnimation(duration) {
    const masks = [...this.element.querySelectorAll(`.device__mask`)];

    masks.forEach((item) =>{
      item.style.transitionDuration = duration + `s`;
      item.classList.add(`device__mask_active`);
      
    });
  }

  hideAnimation() {
    const masks = [...this.element.querySelectorAll(`.device__mask`)];
    masks.forEach((item) =>{
      item.style.transitionDuration = `0s`;
      item.classList.remove(`device__mask_active`);
    })
  }

  setInitialState() {
    this.hideAllChilds();
  }
}