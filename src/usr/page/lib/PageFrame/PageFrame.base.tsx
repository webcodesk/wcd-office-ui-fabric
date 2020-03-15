import React from 'react';
import { classNamesFunction } from 'office-ui-fabric-react/lib/Utilities';
import { IProcessedStyleSet } from 'office-ui-fabric-react/lib/Styling';
import { IPageFrameProps, IPageFrameStyleProps, IPageFrameStyles } from './PageFrame.types';

const getClassNames = classNamesFunction<IPageFrameStyleProps, IPageFrameStyles>();

export class PageFrameBase extends React.Component<IPageFrameProps, {}> {

    public render(): JSX.Element {
        const { styles, theme } = this.props;
        const _classNames: IProcessedStyleSet<IPageFrameStyles> = getClassNames(styles!, {
            theme: theme!,
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
