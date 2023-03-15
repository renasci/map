export class ProvidersApi {
  constructor() {
    this.data = [
      {
        location: "Los Angeles",
        id: 1,
        position: {x: 189, y: 390}
      },
      {
        location: "New York",
        id: 2,
        position: {x: 378, y: 403}
      },
      {
        location: "Frankfurt",
        id: 3,
        position: {x: 637, y: 428}
      },
      {
        location: "Singapore",
        id: 4,
        position: {x: 979, y: 221}
      }
    ]
  }

  get(id) {
    return structuredClone(this.data.find(item => item.id == id));
  }
}