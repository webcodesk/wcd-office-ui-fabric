import { IPageFrameStyleProps, IPageFrameStyles } from './PageFrame.types';

export const getStyles = (props: IPageFrameStyleProps): IPageFrameStyles => {
    const { theme } = props;
    return {
        root: [
            {
                backgroundColor: theme.palette.white,
                display: 'flex',
                position: 'relative',
                height: '100%',
                width: '100%',
            }
        ],
        main: [
            {
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
            }
        ],
        content: [
            {
                display: 'flex',
                position: 'relative',
                flexDirection: 'column',
                flexGrow: 1,
            }
        ],
    };
};