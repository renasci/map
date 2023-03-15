export class ConsumersApi {
  constructor() {
    this.data = [
      {
        region: "North America",
        id: 1,
        position: {x: 288, y: 425},
        children: [
          {
            volume: 1,
            location: `Chicago`
          },
          {
            volume: 2,
            location: `Dallas`
          },
          {
            volume: 3,
            location: `Salt Lake City`
          }
        ]
      },
      {
        region: "South America",
        id: 2,
        position: {x: 216, y: 215},
        children: [
          {
            volume: 1,
            location: `Brasilia`
          },
          {
            volume: 2,
            location: `Buenos Aires`
          },
          {
            volume: 3,
            location: `Bogota`
          }
        ]
      },
      {
        region: "Europe",
        id: 3,
        position: {x: 669, y: 439},
        children: [
          {
            volume: 1,
            location: `Warsaw`
          },
          {
            volume: 2,
            location: `Madrid`
          },
          {
            volume: 3,
            location: `Moscow`
          }

        ]
      },
      {
        region: "Asia",
        id: 4,
        position: {x: 957, y: 356},
        children: [
          {
            volume: 1,
            location: `Dhaka`
          },

          {
            volume: 2,
            location: `New Delhi`
          },
          {
            volume: 3,
            location: `Seoul`
          }

        ]
      },
      {
        region: "Oceania",
        id: 5,
        position: {x: 1069, y: 166},
        children: [
          {
            volume: 1,
            location: `Sydney`
          },
          {
            volume: 2,
            location: `Perth`
          },
          {
            volume: 3,
            location: `Melbourne`
          }

        ]
      },

    ]
  }

  get(id) {
    return structuredClone(this.data.find(item => item.id == id));
  }
}