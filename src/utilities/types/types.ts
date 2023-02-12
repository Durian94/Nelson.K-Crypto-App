export type ClickHandler = (event: React.MouseEvent<HTMLInputElement>) => void;
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
export interface ThunkAPI {
  dispatch: Function;
  getState: Function;
  extra?: any;
  requestId: string;
  signal: AbortSignal;
}
