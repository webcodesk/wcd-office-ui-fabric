import { IPageFrameStyleProps, IPageFrameStyles } from './PageFrame.types';

export const getStyles = (props: IPageFrameStyleProps): IPageFrameStyles => {
    const { leftAreaWidth, headerBarHeight, commandBarHeight } = props;
    return {
        root: [
            {
                display: 'flex',
                position: 'relative',
                width: '100%',
                flexDirection: 'column'
            },
        ],
        headerAreaRowFlex: [
            {
                display: 'flex',
                width: '100%',
                height: `${headerBarHeight}px`
            }
        ],
        headerAreaRowFixed: [
            {
                position: 'fixed',
                zIndex: 1200,
                top: 0,
                left: 0,
                width: '100%',
                height: `${headerBarHeight}px`,
                display: 'flex',
            }
        ],
        headerAreaLeftColumnFlex: [
            {
                position: 'relative',
                flexGrow: 0,
                width: `${leftAreaWidth}px`
            }
        ],
        headerAreaCentralColumnFlex: [
            {
                position: 'relative',
                flexGrow: 1
            }
        ],
        commandAreaRowFlex: [
            {
                width: '100%',
                height: `${commandBarHeight}px`,
            }
        ],
        commandAreaRowFixed: [
            {
                position: 'fixed',
                zIndex: 1200,
                top: `${headerBarHeight}px`,
                left: 0,
                width: '100%',
                height: `${commandBarHeight}px`,
                display: 'flex',
            }
        ],
        commandAreaLeftColumnFlex: [
            {
                position: 'relative',
                flexGrow: 0,
                width: `${leftAreaWidth}px`
            }
        ],
        commandAreaCentralColumnFlex: [
            {
                position: 'relative',
                flexGrow: 1
            }
        ],
        contentAreaRowFlex: [
            {
                display: 'flex',
                width: '100%',
            }
        ],
        contentAreaLeftColumnFlex: [
            {
                position: 'relative',
                flexGrow: 0,
                width: `${leftAreaWidth}px`
            }
        ],
        contentAreaCentralColumnFlex: [
            {
                position: 'relative',
                flexGrow: 1
            }
        ],
        contentAreaLeftColumnFixed: [
            {
                position: 'fixed',
                zIndex: 1200,
                top: `${headerBarHeight! + commandBarHeight!}px`,
                left: 0,
                width: `${leftAreaWidth}px`,
                bottom: 0,
                overflow: 'auto',
            }
        ],
        contentAreaCentralColumnFixed: [
            {
                position: 'fixed',
                zIndex: 1200,
                top: `${headerBarHeight! + commandBarHeight!}px`,
                left: `${leftAreaWidth}px`,
                right: 0,
                bottom: 0,
                overflow: 'auto',
            }
        ],
    };
};