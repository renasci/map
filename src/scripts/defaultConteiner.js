export class DefaultConteiner {
  constructor(component) {
    this.component = component;
    this.elements = [];
  }

  add(items) {
    items.forEach(item => {
      this.elements.push(new this.component(item));
    });
  }

  setInitialState() {
    this.elements.forEach(item => item.setInitialState());
  }

  hideAll() {
    this.elements.forEach((element) => {
      element.hide();
    });
  }
}