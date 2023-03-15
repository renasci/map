export class TableComponent {
  constructor(ratingComponent) {
    this.ratingComponent = new ratingComponent();
  }

  create(data) {
    const section = document.createElement(`div`);
    section.classList.add("table-section");
    const sectionTitle = document.createElement(`div`);
    sectionTitle.classList.add("table-section__title");
    sectionTitle.innerHTML = data.title;
    section.append(sectionTitle);

    data.tableItems.forEach((item) => {
      section.append(this.createTable(item));
    });

    return section;
  }

  createTable(data) {
    const table = document.createElement("table");
    table.classList.add("table-item");
    
    const headRow = document.createElement("tr");
    headRow.classList.add("table-item__header");

    const tableTitle = document.createElement("td");
    tableTitle.classList.add("table-item__title");
    tableTitle.setAttribute("colspan", "2");
    tableTitle.innerHTML = data.region;
    headRow.append(tableTitle);

    const tableRating = document.createElement("td");
    tableRating.classList.add("table-item__rating");
    tableRating.append(this.ratingComponent.create(data.stars));
    headRow.append(tableRating);

    const dataRow = document.createElement("tr");
    dataRow.append(
      this.createStandertCell(data.latency),
      this.createStandertCell(data.time),
      this.createStandertCell(data.stream)
    );
    table.append(headRow, dataRow);
    return table
  }

  createStandertCell(inner) {
    const cell = document.createElement("td");
    cell.classList.add("table-item__cell");
    cell.innerHTML = inner;
    return cell
  }
}