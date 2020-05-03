import React from 'react';
import PropTypes from 'prop-types';
import { PageFrame } from "usr/a_lib/components/PageFrame/PageFrame";

export interface PageWithSidebarProps {
  headerBarHeight?: number;
  commandBarHeight?: number;
  mobileBreakpoint?: number;
  leftArea: {
    leftAreaWidth?: number;
    leftAreaElement?: React.ReactNode;
  }

  centralArea: {
    centralAreaElement?: React.ReactNode;
  }
}

/**
 * PageFrame
 */
class PageWithSidebar extends React.Component<PageWithSidebarProps, any> {

  static propTypes: PropTypes.InferProps<PageWithSidebarProps> = {
    headerBarHeight: PropTypes.number,
    commandBarHeight: PropTypes.number,
    mobileBreakpoint: PropTypes.number,
    leftArea: PropTypes.shape({
      /**
       * The width of the left drawer. Should be a number value in pixels.
       */
      leftAreaWidth: PropTypes.number,
      /**
       * The left area element
       */
      leftAreaElement: PropTypes.element,
    }),

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

  static defaultProps: PageWithSidebarProps = {
    headerBarHeight: 52,
    commandBarHeight: 52,
    mobileBreakpoint: 1024,
    leftArea: {
      leftAreaWidth: 250,
      leftAreaElement: <span />
    },
    centralArea: {
      centralAreaElement: <span />,
    }
  };

  // constructor(props: PageFrameProps) {
  //   super(props);
  // }

  render(): JSX.Element {
    const {
      centralArea,
      leftArea,
      commandBarHeight,
      headerBarHeight,
      mobileBreakpoint
    } = this.props;
    return (
        <PageFrame
            centralAreaElement={(
                <div style={{height: '2000px', border: '1px solid #cdcdcd'}}>
                  <h3>Central</h3>
                </div>
            )}
            leftAreaWidth={leftArea.leftAreaWidth}
            leftAreaElement={(
                <div style={{height: '1000px', border: '1px solid red'}}>
                  <h3>Left</h3>
                </div>
            )}
            commandBarHeight={commandBarHeight}
            headerBarHeight={headerBarHeight}
            mobileBreakpoint={mobileBreakpoint}
        />
    );
  }
}

export default PageWithSidebar;
