// Implement a clock that handles times without dates.

// You should be able to add and subtract minutes to it.

// Two clocks that represent the same time should be equal to each other.

class Clock {
  total = 0;
  hours = 0;
  minutes = 0;
  constructor(hour: number, minute?: number) {
    this.total = Math.floor(hour * 60);
    if (minute) {
      this.total = this.total + minute;
    }

    this.hours = this.getHour();

    this.minutes = this.getMinutes();
  }

  private getHour(total = this.total): number {
    let hour = Math.floor(total / 60);
    const days = Math.floor(hour / 24);
    return hour - days * 24;
  }

  private getMinutes(total = this.total): number {
    let minutes = total % 60;
    if (this.total < 0) {
      minutes = 60 + minutes;
    }
    return minutes;
  }

  public toString(): string {
    const hour = this.getHour();
    const hourString = hour.toString().padStart(2, "0");
    const minutes = this.getMinutes();
    const minuteString = minutes.toString().padStart(2, "0");
    return `${hourString}:${minuteString}`;
  }

  public plus(minutes: number) {
    this.total = this.total + minutes;
  }

  public minus(minutes: number) {
    this.total = this.total - minutes;
  }

  // public equals(other?: unknown): unknown {
  //   throw new Error("Remove this line and implement the function");
  // }
}

// const clock1 = new Clock(8, 30);
// const clock2 = new Clock(0, 160);
const clock3 = new Clock(0, 45);
clock3.plus(40);
console.log(clock3.toString());

// =========
// KEY LOGIC
// =========

// padStart()
