import React from 'react';
import PropTypes from 'prop-types';

interface DataFormProps {
    formControls: any[];
}

/**
 * DataForm
 */
class DataForm extends React.Component<DataFormProps, any> {

    static propTypes: PropTypes.InferProps<DataFormProps> = {
        formControls: PropTypes.arrayOf(PropTypes.shape({
            type: PropTypes.oneOf(['type1']),
            label: PropTypes.string,
            values: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string,
            }))
        }))
        // Is not working yet....
        // formControls: PropTypes.oneOfType([
        //     PropTypes.shape({
        //         type: PropTypes.oneOf(['type1']),
        //         label: PropTypes.string,
        //     }),
        //     PropTypes.shape({
        //         type: PropTypes.oneOf(['type2']),
        //         label: PropTypes.string,
        //         values: PropTypes.arrayOf(PropTypes.shape({
        //             id: PropTypes.string,
        //         }))
        //     }),
        // ])
    };

    static defaultProps: DataFormProps = {
        formControls: []
    };

    render() {
        const { formControls } = this.props;
        if (formControls && formControls.length > 0) {
            return (
                <div>
                    <pre>
                        <code>
                            {JSON.stringify(formControls, null, 4)}
                        </code>
                    </pre>
                </div>
            );
        }
        return null;
    }
}

export default DataForm;
