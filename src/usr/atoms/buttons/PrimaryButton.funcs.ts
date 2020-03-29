import { StateOptions, DispatchFunction } from "typings/global";
import { PrimaryButtonProps } from './PrimaryButton.comp';

export const setText = (text: string, stateOptions: StateOptions<PrimaryButtonProps>) => (dispatch: DispatchFunction) => {
    const { stateByDispatch, history } = stateOptions;
    // ...
    // OR
    // const hist: History = stateOptions.history;
    // const stateByDispatch: PrimaryButtonProps = stateOptions.stateByDispatch;
    //...
};
