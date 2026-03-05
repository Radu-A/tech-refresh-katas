// Implement a clock that handles times without dates.

// You should be able to add and subtract minutes to it.

// Two clocks that represent the same time should be equal to each other.

class Clock {
  private total = 0;
  constructor(hour: number, minute?: number) {
    this.total = hour * 60;
    if (minute) {
      this.total = this.total + minute;
    }
  }

  private getHours(total = this.total): number {
    let hour = Math.floor(total / 60);
    const days = Math.floor(hour / 24);
    return hour - days * 24;
  }

  private getMinutes(total = this.total): number {
    let minutes = total % 60;
    if (this.total < 0 && minutes !== 0) {
      minutes = 60 + minutes;
    }
    return minutes;
  }

  public toString(): string {
    const hours = this.getHours();
    const hourString = hours.toString().padStart(2, "0");
    const minutes = this.getMinutes();
    const minuteString = minutes.toString().padStart(2, "0");
    return `${hourString}:${minuteString}`;
  }

  public plus(minutes: number) {
    this.total += minutes;
    return this.toString();
  }

  public minus(minutes: number) {
    this.total -= minutes;
    return this.toString();
  }

  public equals(other: Clock) {
    return this.toString() === other.toString();
  }
}

// const clock1 = new Clock(8, 30);
// const clock2 = new Clock(0, 160);

// const clock3 = new Clock(0, 45);
// clock3.plus(40);
// console.log(clock3.toString());

// const clock4 = new Clock(-25, 0);
// console.log(clock4.toString());

// console.log(new Clock(10, 0).plus(3).toString());

// const clock5 = new Clock(8);
// console.log(clock5.toString());

// console.log(new Clock(0, 45).plus(40).toString());

// console.log(new Clock(15, 37).equals(new Clock(15, 37)));

const time = (1 * 60 + 60) % 1440;

console.log(time);

// =========
// KEY LOGIC
// =========

// padStart()
