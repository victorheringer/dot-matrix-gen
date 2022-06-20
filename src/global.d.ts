type Frame = {
  id: number;
  name: string;
  matrix: boolean[][];
};

type Sprite = {
  id: number;
  name: string;
  frames: Frame[];
};

type Project = {
  id: number;
  name: string;
  sprites: Sprite[];
};
