import React from 'react';
import Media from 'react-media';
import { classNamesFunction, styled } from '@fluentui/react/lib/Utilities';
import { IProcessedStyleSet } from "@fluentui/react/lib/Styling";
import { getStyles } from './PageFrame.styles';
import { IPageFrameProps, IPageFrameStyleProps, IPageFrameStyles } from './PageFrame.types';

const getClassNames = classNamesFunction<IPageFrameStyleProps, IPageFrameStyles>();

const DEFAULT_MOBILE_BREAKPOINT: number = 1024;
const MOBILE_BREAKPOINT_DELTA: number = 0.00001;

const MIN_MEDIA_QUERY = (breakpoint: number) => (`(min-width: ${breakpoint}px)`);
const MAX_MEDIA_QUERY = (breakpoint: number) => (`(max-width: ${breakpoint - MOBILE_BREAKPOINT_DELTA}px)`);

class PageFrameBase extends React.Component<IPageFrameProps, {}> {

    public render(): JSX.Element {
        const {
            styles,
            theme,
            leftAreaElement,
            centralAreaElement,
            leftAreaWidth,
            headerBarHeight,
            commandBarHeight,
            mobileBreakpoint
        } = this.props;
        const _classNames: IProcessedStyleSet<IPageFrameStyles> = getClassNames(styles!, {
            theme: theme!,
            leftAreaWidth,
            headerBarHeight,
            commandBarHeight
        });

        const validMobileBreakpoint = mobileBreakpoint || DEFAULT_MOBILE_BREAKPOINT;

        return (
            <div className={_classNames.root}>
                <div className={_classNames.headerAreaRowFlex} />
                <div className={_classNames.commandAreaRowFlex} />
                <div className={_classNames.contentAreaRowFlex}>
                    <Media query={MIN_MEDIA_QUERY(validMobileBreakpoint)} render={() => (
                        <div className={_classNames.contentAreaLeftColumnFlex} />
                    )} />
                    <Media query={MAX_MEDIA_QUERY(validMobileBreakpoint)} render={() => (
                        <div className={_classNames.contentAreaCentralColumnFlex}>
                            {centralAreaElement}
                        </div>
                    )} />
                </div>
                <div className={_classNames.headerAreaRowFixed}>
                    <Media query={MIN_MEDIA_QUERY(validMobileBreakpoint)} render={() => (
                        <div className={_classNames.headerAreaLeftColumnFlex}>
                            Left header
                        </div>
                    )} />
                    <div className={_classNames.headerAreaCentralColumnFlex}>
                        Central header
                    </div>
                </div>
                <div className={_classNames.commandAreaRowFixed}>
                    <Media query={MIN_MEDIA_QUERY(validMobileBreakpoint)} render={() => (
                        <div className={_classNames.commandAreaLeftColumnFlex}>
                            Left command
                        </div>
                    )}/>
                    <div className={_classNames.commandAreaCentralColumnFlex}>
                        Central command
                    </div>
                </div>
                <Media query={MIN_MEDIA_QUERY(validMobileBreakpoint)} render={() => (
                    <div className={_classNames.contentAreaLeftColumnFixed}>
                        {leftAreaElement}
                    </div>
                )} />
                <Media query={MIN_MEDIA_QUERY(validMobileBreakpoint)} render={() => (
                    <div className={_classNames.contentAreaCentralColumnFixed}>
                        {centralAreaElement}
                    </div>
                )} />
            </div>
        );
    }
}

export const PageFrame: React.FunctionComponent<IPageFrameProps> = styled<IPageFrameProps, IPageFrameStyleProps, IPageFrameStyles>(
    PageFrameBase,
    getStyles
);
