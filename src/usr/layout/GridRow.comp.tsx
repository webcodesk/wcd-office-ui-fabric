import React from 'react';
import PropTypes from 'prop-types';

interface GridRowProps {
    columns: React.ReactNode[];
}

/**
 * Grid
 */
class GridRow extends React.Component<GridRowProps, any> {

    static propTypes: PropTypes.InferProps<GridRowProps> = {
        columns: PropTypes.arrayOf(PropTypes.element)
    };

    static defaultProps: GridRowProps = {
        columns: []
    };

    render() {
        const { columns } = this.props;
        if (columns && columns.length > 0) {
            return (
                <div className="ms-Grid-row">
                    {columns}
                </div>
            );
        }
        return null;
    }
}

export default GridRow;
