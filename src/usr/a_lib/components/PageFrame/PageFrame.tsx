import React from 'react';
import { classNamesFunction, styled } from '@fluentui/react/lib/Utilities';
import { IProcessedStyleSet } from "@fluentui/react/lib/Styling";
import { getStyles } from './PageFrame.styles';
import { IPageFrameProps, IPageFrameStyleProps, IPageFrameStyles } from './PageFrame.types';

const getClassNames = classNamesFunction<IPageFrameStyleProps, IPageFrameStyles>();

class PageFrameBase extends React.Component<IPageFrameProps, {}> {

    public render(): JSX.Element {
        const { styles, theme, fullHeight } = this.props;
        const _classNames: IProcessedStyleSet<IPageFrameStyles> = getClassNames(styles!, {
            theme: theme!,
            fullHeight
        });
        return (
            <div className={_classNames.root}>
                <div className={_classNames.main}>
                    <div className={_classNames.content}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export const PageFrame: React.FunctionComponent<IPageFrameProps> = styled<IPageFrameProps, IPageFrameStyleProps, IPageFrameStyles>(
    PageFrameBase,
    getStyles
);
