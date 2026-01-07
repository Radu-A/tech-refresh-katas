const GAME_CONFIG = {
  difficulty: "easy",
  volume: 7,
  isMuted: false,
} as const;

// 1. Crea aquí el tipo 'ConfigKey' usando keyof y typeof
type ConfigKey = keyof typeof GAME_CONFIG;

// 2. Crea la función que reciba esa clave
function getConfigValue(key: ConfigKey) {
  return GAME_CONFIG[key];
}
