export interface ResponseFuncs {
  GET?: Function;
  POST?: Function;
  PUT?: Function;
  DELETE?: Function;
  OPTIONS?: Function;
}

export interface Todo {
  _id?: number;
  item: string;
  completed: boolean;
}
