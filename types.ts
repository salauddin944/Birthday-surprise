export interface Photo {
  id: number;
  url: string;
  caption: string;
}

export interface Wish {
  id: number;
  author: string;
  message: string;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
