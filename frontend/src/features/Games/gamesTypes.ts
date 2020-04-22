export type Game = {
  gameId: string;
  name: string;
  timePerDay: string;
  details: {
    [key: string]: string;
  };
  capacity: string;
  demand: string;
  length: string;
}
