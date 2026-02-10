// Implement a clock that handles times without dates.

// You should be able to add and subtract minutes to it.

// Two clocks that represent the same time should be equal to each other.

class Clock {
  total = 0;
  constructor(hour: number, minute?: number) {
    if (!minute) {
      this.total = Math.floor(hour * 60);
    } else {
      this.total = hour * 60 + minute;
    }
  }

  public toString(): unknown {
    const hourString = (this.total / 60).toString().padStart(2, "0");
    const minuteString = (this.total % 60).toString().padStart(2, "0");
    return `${hourString}:${minuteString}`;
  }

  // public plus(minutes?: unknown): Clock {
  //   throw new Error("Remove this line and implement the function");
  // }

  // public minus(minutes?: unknown): Clock {
  //   throw new Error("Remove this line and implement the function");
  // }

  // public equals(other?: unknown): unknown {
  //   throw new Error("Remove this line and implement the function");
  // }
}

const clock = new Clock(8, 30);
console.log(clock.toString());

// =========
// KEY LOGIC
// =========

// padStart()
