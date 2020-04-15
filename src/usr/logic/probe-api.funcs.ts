import { DispatchFunction } from "typings/global";

interface DispatchOptions {
    bufferText: string;
}

let bufferText: string = '';

export const saveBufferText = (text: string) => (dispatch: DispatchFunction<DispatchOptions>) => {
    bufferText = text;
    dispatch({bufferText});
};

export const getBufferText = () => (dispatch: DispatchFunction<DispatchOptions>) => {
    dispatch({bufferText});
};
