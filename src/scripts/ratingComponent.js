export class RatingComponent {
  constructor() {
    this.totalCount = 5;
  }
  
  create(activeCount) {
    const conteiner = document.createElement(`span`);
    conteiner.classList.add("stars-conteiner");

    for (let i = 0; i < 5; i++) {
      const element = document.createElement(`span`);
      element.classList.add("star");

      if(i >= this.totalCount - activeCount) {
        element.classList.add("star_active");
      }

      conteiner.append(element);
    }

    return conteiner
  }
}