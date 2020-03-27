import React from 'react';
import { styled } from '@fluentui/react/lib/Utilities';
import { IPageFrameProps, IPageFrameStyleProps, IPageFrameStyles } from './PageFrame.types';
import { PageFrameBase } from './PageFrame.base';
import { getStyles } from './PageFrame.styles';

// Create a PieChart variant which uses these default styles and this styled subcomponent.
export const PageFrame: React.FunctionComponent<IPageFrameProps> = styled<IPageFrameProps, IPageFrameStyleProps, IPageFrameStyles>(
    PageFrameBase,
    getStyles
);
