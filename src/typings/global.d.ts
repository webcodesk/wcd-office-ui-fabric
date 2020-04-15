import { History } from 'history';

export type DispatchFunction<T> = (arg0: T) => void;

export interface StateOptions<T> {
    stateByDispatch: T;
    history: History;
}
