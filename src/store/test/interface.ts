export interface IDirections {
  id: number;
  name: string;
  time_out: number;
}

export interface ISubjects {
  id: number;
  name: string;
  test_time: number | string;
  order_number: number | string;
}

export interface IThemes {
  id: number;
  name: string;
  subject: number | string;
}
