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

    fullHeight?: boolean;

    centralArea?: {
        centralAreaElement?: React.ReactNode;
    }

    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IPageFrameStyleProps, IPageFrameStyles>;
}

export type IPageFrameStyleProps = Required<Pick<IPageFrameProps, 'theme'>> & Pick<IPageFrameProps, 'fullHeight'>;
export interface IPageFrameStyles {
    /**
     *  Style for the root element.
     */
    root?: IStyle;

    centralAreaWrapper?: IStyle;

    centralArea?: IStyle;

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
