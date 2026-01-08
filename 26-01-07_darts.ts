function score(x: number, y: number): number {
  const radious = Math.sqrt(x ** 2 + y ** 2);
  if (radious <= 1) {
    return 10;
  } else if (radious <= 5) {
    return 5;
  } else if (radious <= 10) {
    return 1;
  } else {
    return 0;
  }
}

score(-9, 9);
score(0, 10);
score(-5, 0);
score(0, -1);
