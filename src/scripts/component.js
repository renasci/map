export class Component {
  constructor(element) {
    this.element = element
  }

  show() {
    this.element.style.visibility ='visible';
  }

  hide() {
    this.element.style.visibility ='hidden';
  }
}