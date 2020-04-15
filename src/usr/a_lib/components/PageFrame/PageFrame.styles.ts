import { IPageFrameStyleProps, IPageFrameStyles } from './PageFrame.types';

export const getStyles = (props: IPageFrameStyleProps): IPageFrameStyles => {
    const { theme, fullHeight } = props;
    let rootItem: any = {
        backgroundColor: theme.palette.white,
        display: 'flex',
        position: 'relative',
        width: '100%',
    };
    if (fullHeight) {
        rootItem.height = '100%'
    }
    return {
        root: [
            rootItem,
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