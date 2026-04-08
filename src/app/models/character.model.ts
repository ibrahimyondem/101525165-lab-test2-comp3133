export interface Character {
  id: string;
  name: string;
  species: string;
  house: string;
  wizard: boolean;
  ancestry: string;
  actor: string;
  image: string;
  wand: { wood: string; core: string; length: number };
}
