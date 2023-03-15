export class PingApi {
  constructor() {
    this.data = {
      "Bogota": {"Frankfurt": 169.486,"Los Angeles": 106.742,"New York": 87.652,"Singapore": 336.731},
      "Brasilia": {"Frankfurt": 174.77,"Los Angeles": 181.719,"New York": 139.533,"Singapore": 367.718},
      "Buenos Aires": {"Frankfurt": 249.719,"Los Angeles": 212.364,"New York": 165.18,"Singapore": 407.032},
      "Chicago": {"Frankfurt": 101.983,"Los Angeles": 51.699,"New York": 21.086,"Singapore": 226.616},
      "Dallas": {"Frankfurt": 122.733,"Los Angeles": 32.798,"New York": 48.174,"Singapore": 204.497},
      "Dhaka": {"Frankfurt": 182.128,"Los Angeles": 227.103,"New York": 294.66,"Singapore": 50.505},
      "Madrid": {"Frankfurt": 31.544,"Los Angeles": 141.274,"New York": 82.087,"Singapore": 250.956},
      "Melbourne": {"Frankfurt": 253.302,"Los Angeles": 190.655,"New York": 219.111,"Singapore": 82.568},
      "Moscow": {"Frankfurt": 40.561,"Los Angeles": 182.738,"New York": 118.94,"Singapore": 178.186},
      "New Delhi": {"Frankfurt": 157.059,"Los Angeles": 255.54,"New York": 327.019,"Singapore": 65.409},
      "Perth": {"Frankfurt": 215.247,"Los Angeles": 212.539,"New York": 260.334,"Singapore": 118.927},
      "Salt Lake City": {"Frankfurt": 131.759,"Los Angeles": 15.879,"New York": 53.959,"Singapore": 188.427},
      "Seoul": {"Frankfurt": 296.262,"Los Angeles": 143422,"New York": 232.983,"Singapore": 70.663},
      "Sydney": {"Frankfurt": 255.303,"Los Angeles": 179.444,"New York": 207.875,"Singapore": 92.456},
      "Warsaw": {"Frankfurt": 19.769,"Los Angeles": 170.207,"New York": 97.798,"Singapore": 182.078}
    }
  }

  get(from, to) {
    return this.data[from][to];
  }
}