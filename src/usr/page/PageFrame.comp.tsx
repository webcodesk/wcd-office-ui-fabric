import React from 'react';
import PropTypes from 'prop-types';
import { PageFrame as PageFrameOF } from "./lib/PageFrame/PageFrame";

interface PageFrameProps {
  children: React.ElementType[];
}

/**
 * PageFrame
 */
class PageFrame extends React.Component<PageFrameProps, any> {

  static propTypes: PropTypes.InferProps<PageFrameProps> = {
    /**
     * Children components
     */
    children: PropTypes.arrayOf(PropTypes.element),
  };

  static defaultProps: PageFrameProps = {
    children: [],
  };

  // constructor(props: PageFrameProps) {
  //   super(props);
  // }

  render(): JSX.Element {
    return (
        <PageFrameOF>
          {this.props.children}
        </PageFrameOF>
    );
  }
}

export default PageFrame;
