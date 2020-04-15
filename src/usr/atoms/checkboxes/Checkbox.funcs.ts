import { StateOptions, DispatchFunction } from "typings/global";
import { CheckboxProps } from './Checkbox.comp';

export const setText = (text: string, stateOptions: StateOptions<CheckboxProps>) => (dispatch: DispatchFunction) => {
    const { stateByDispatch, history } = stateOptions;
    // ...
    // OR
    // const hist: History = stateOptions.history;
    // const stateByDispatch: PrimaryButtonProps = stateOptions.stateByDispatch;
    //...
};
