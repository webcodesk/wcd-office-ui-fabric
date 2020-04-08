import React from 'react';
import PropTypes from 'prop-types';
import { PageFrame } from "usr/a_lib/components/PageFrame/PageFrame";

interface PageFrameProps {
  fullHeight: boolean;
  children: React.ElementType[];
}

/**
 * PageFrame
 */
class PageWithSidebar extends React.Component<PageFrameProps, any> {

  static propTypes: PropTypes.InferProps<PageFrameProps> = {
    fullHeight: PropTypes.bool,
    /**
     * Children components
     */
    children: PropTypes.arrayOf(PropTypes.element),
  };

  static defaultProps: PageFrameProps = {
    fullHeight: false,
    children: [],
  };

  // constructor(props: PageFrameProps) {
  //   super(props);
  // }

  render(): JSX.Element {
    return (
        <PageFrame fullHeight={this.props.fullHeight}>
          {this.props.children}
        </PageFrame>
    );
  }
}

export default PageWithSidebar;
