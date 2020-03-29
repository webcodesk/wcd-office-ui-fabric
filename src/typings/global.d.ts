import { History } from 'history';

export type DispatchFunction = (arg0: any) => void;

export interface StateOptions<T> {
    stateByDispatch: T;
    history: History;
}
