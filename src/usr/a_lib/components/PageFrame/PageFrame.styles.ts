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
        centralAreaWrapper: [
            {
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
            }
        ],
        centralArea: [
            {
                display: 'flex',
                position: 'relative',
                flexGrow: 1,
            }
        ],
    };
};