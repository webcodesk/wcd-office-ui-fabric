import { StateOptions, DispatchFunction } from "typings/global";
import { TextFieldProps } from './TextField.comp';


interface StateByDispatch {
    props?: TextFieldProps;
}

interface DispatchOptions extends StateByDispatch {
    // here we already have output fields from StateByDispatch
    // add additional fields for the dispatch output
    newValue?: string;
}

export const handleChange = (newValue: string, stateOptions: StateOptions<StateByDispatch>) => (dispatch: DispatchFunction<DispatchOptions>) => {
    // const { stateByDispatch, history } = stateOptions;
    dispatch({newValue});
};
