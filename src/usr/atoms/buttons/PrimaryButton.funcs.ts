import { StateOptions, DispatchFunction } from "typings/global";
import { PrimaryButtonProps } from './PrimaryButton.comp';

interface StateByDispatch {
    props?: PrimaryButtonProps;
}

interface DispatchOptions extends StateByDispatch {
    // here we already have output fields from StateByDispatch
    // add additional fields for the dispatch output
}

export const setText = (textValue: string, stateOptions: StateOptions<StateByDispatch>) => (dispatch: DispatchFunction<DispatchOptions>) => {
    const { stateByDispatch, history } = stateOptions;
    if (stateByDispatch) {
        const {props} = stateByDispatch;
        dispatch({props: {...props, text: textValue}});
    }
};
