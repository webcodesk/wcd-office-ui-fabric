import React from 'react';
import PropTypes from 'prop-types';

interface GridProps {
    rows: React.ReactNode[];
}

/**
 * Grid
 */
class Grid extends React.Component<GridProps, any> {

    static propTypes: PropTypes.InferProps<GridProps> = {
        rows: PropTypes.arrayOf(PropTypes.element)
    };

    static defaultProps: GridProps = {
        rows: []
    };

    render() {
        const { rows } = this.props;
        if (rows) {
            return (
                <div className="ms-Grid" dir="ltr">
                    {rows}
                </div>
            );
        }
        return null;
    }
}

export default Grid;
