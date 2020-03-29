import { History } from 'history';
import { PrimaryButtonProps } from './PrimaryButton.comp';

type SetTextStateOptions = {
    stateByDispatch: PrimaryButtonProps;
    history: History;
};

// Specify this in the global index.d.ts
type DispatchFunction = (arg0: any) => void;

export const setText = (text: string, stateOptions: SetTextStateOptions) => (dispatch: DispatchFunction) => {
    const { stateByDispatch, history } = stateOptions;
    // ...

    // OR
    // const hist: History = stateOptions.history;
    // const stateByDispatch: PrimaryButtonProps = stateOptions.stateByDispatch;
    //...
};
