import React from 'react';
import PropTypes from 'prop-types';

interface GridRowColumnProps {
    size: string;
    element: React.ReactNode;
}

/**
 * Grid
 */
class GridRowColumn extends React.Component<GridRowColumnProps, any> {

    static propTypes: PropTypes.InferProps<GridRowColumnProps> = {
        size: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
        element: PropTypes.element,
    };

    static defaultProps: GridRowColumnProps = {
        size: '2',
        element: <span/>
    };

    render() {
        const {element, size} = this.props;
        if (element) {
            return (
                <div className={`ms-Grid-col ms-sm${size}`}>
                    {element}
                </div>
            );
        }
        return null;
    }
}

export default GridRowColumn;
