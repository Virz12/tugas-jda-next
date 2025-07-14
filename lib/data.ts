export interface Game {
  id: number;
  name: string;
  time: string;
}

let games = [
  {
    id: 1,
    name: "Zenless Zone Zero",
    time: "1 Year",
  },
  {
    id: 2,
    name: "Osu!",
    time: "6 Year",
  },
  {
    id: 3,
    name: "Terraria",
    time: "1 Year",
  },
  {
    id: 4,
    name: "Roblox",
    time: "7 Year",
  },
];

export function getGames() {
  return games;
}

export function getGame(id: number) {
  return games.find((item) => item.id === id);
}

export function addGame(name: string) {
  const newGame: Game = { id: Date.now(), name, time: "Today" };
  games.push(newGame);
  return newGame;
}

export function updateGame(id: number, name: string) {
  const item = getGame(id);
  if (item) item.name = name;
  return item;
}

export function deleteItem(id: number) {
  games = games.filter((item) => item.id !== id);
}
