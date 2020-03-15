import { ITheme, IStyle } from 'office-ui-fabric-react/lib/Styling';
import { IStyleFunctionOrObject } from 'office-ui-fabric-react/lib/Utilities';

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

    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IPageFrameStyleProps, IPageFrameStyles>;
}

export type IPageFrameStyleProps = Required<Pick<IPageFrameProps, 'theme'>>;
export interface IPageFrameStyles {
    /**
     *  Style for the root element.
     */
    root?: IStyle;

    main?: IStyle;

    content?: IStyle;

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
