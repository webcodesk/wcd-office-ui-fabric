import { ITheme, IStyle } from '@fluentui/react/lib/Styling';
import { IStyleFunctionOrObject } from '@fluentui/react/lib/Utilities';
import React from "react";

export interface IPageFrameProps {
    // /**
    //  * Data to render in the chart.
    //  */
    // data?: IDataPoint[];
    //
    // /**
    //  * Width of the chart.
    //  */
    // width?: number;
    //
    // /**
    //  * Height of the chart.
    //  */
    // height?: number;
    //
    // /**
    //  * colors to render in the chart.
    //  */
    // colors?: string[];
    //
    // /**
    //  * Title to apply to the whole chart.
    //  */
    // chartTitle?: string;
    //
    // /**
    //  * Additional CSS class(es) to apply to the PieChart.
    //  */
    // className?: string;

    /**
     * Theme (provided through customization.)
     */
    theme?: ITheme;

    headerBarHeight?: number;
    commandBarHeight?: number;

    leftAreaWidth?: number;
    leftAreaElement?: React.ReactNode;

    centralAreaElement?: React.ReactNode;

    mobileBreakpoint?: number;

    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IPageFrameStyleProps, IPageFrameStyles>;
}

// Constructs a type consisting of all properties but theme should be required
export type IPageFrameStyleProps = Required<Pick<IPageFrameProps, 'theme'>> & IPageFrameProps;

export interface IPageFrameStyles {
    /**
     *  Style for the root element.
     */
    root?: IStyle;

    headerAreaRowFlex?: IStyle;
    headerAreaRowFixed?: IStyle;
    headerAreaLeftColumnFlex?: IStyle;
    headerAreaCentralColumnFlex?: IStyle;

    commandAreaRowFlex?: IStyle;
    commandAreaRowFixed?: IStyle;
    commandAreaLeftColumnFlex?: IStyle;
    commandAreaCentralColumnFlex?: IStyle;

    contentAreaRowFlex?: IStyle;
    contentAreaLeftColumnFlex?: IStyle;
    contentAreaCentralColumnFlex?: IStyle;
    contentAreaLeftColumnFixed?: IStyle;
    contentAreaCentralColumnFixed?: IStyle;

    // commandWraper?:
    //
    // centralAreaWrapper?: IStyle;
    //
    // centralArea?: IStyle;
    //
    // leftArea?: IStyle;

    // /**
    //  * Style for the chart.
    //  */
    // chart?: IStyle;
    //
    // /**
    //  * Style for the chart Title.
    //  */
    // chartTitle?: IStyle;
}
