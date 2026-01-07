const developer = {
  nickname: "Coder123",
  primaryLanguage: "TypeScript",
  yearsOfExperience: 5,
};

const designer = {
  nickname: "PixelPerfect",
  mainTool: "Figma",
  isFreelance: true,
};

function getDetail<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
