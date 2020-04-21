import React from 'react';
import PropTypes from 'prop-types';
import { PageFrame } from "usr/a_lib/components/PageFrame/PageFrame";
import { IPageFrameProps } from "usr/a_lib/components/PageFrame/PageFrame.types";

/**
 * PageFrame
 */
class PageWithSidebar extends React.Component<IPageFrameProps, any> {

  static propTypes: PropTypes.InferProps<IPageFrameProps> = {
    fullHeight: PropTypes.bool,
    /**
     * The central area in the page
     */
    centralArea: PropTypes.shape({
      /**
       * Sets the central area element
       */
      centralAreaElement: PropTypes.element
    })
  };

  static defaultProps: IPageFrameProps = {
    fullHeight: false,
    centralArea: {
      centralAreaElement: <span />,
    }
  };

  // constructor(props: PageFrameProps) {
  //   super(props);
  // }

  render(): JSX.Element {
    const { fullHeight, centralArea } = this.props;
    return (
        <PageFrame
            fullHeight={fullHeight}
            centralArea={centralArea}
        />
    );
  }
}

export default PageWithSidebar;
