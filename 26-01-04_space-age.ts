// Given an age in seconds, calculate how old someone would be on a planet in our Solar System.

// One Earth year equals 365.25 Earth days, or 31,557,600 seconds. If you were told someone was 1,000,000,000 seconds old, their age would be 31.69 Earth-years.

// For the other planets, you have to account for their orbital period in Earth Years:

// Planet	Orbital period in Earth Years
// Mercury	0.2408467
// Venus	0.61519726
// Earth	1.0
// Mars	1.8808158
// Jupiter	11.862615
// Saturn	29.447498
// Uranus	84.016846
// Neptune	164.79132

const EARTH_YEAR_SECONDS = 31_557_600;

const PLANET_RATIOS = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
} as const;

type Planet = keyof typeof PLANET_RATIOS;

function age(planet: Planet, seconds: number): number {
  const yearsOnEarth = seconds / EARTH_YEAR_SECONDS;
  const planetAge = yearsOnEarth / PLANET_RATIOS[planet];
  return parseFloat(planetAge.toFixed(2));
}

age("earth", 1000000000);
age("mercury", 2134835688);
age("venus", 189839836);
age("mars", 2129871239);
