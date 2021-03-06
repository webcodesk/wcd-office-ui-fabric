import React from 'react';
import PropTypes from 'prop-types';
import pickWithValues from "usr/a_lib/utils/pickWithValues";

export interface BasicFormProps {
    formElements: {componentType: string}[];
    headerLabel?: string;
    headerStyle?: any;
    onCancel?: () => void;
    onSubmit?: () => void;
}

/**
 * Button is generated by Webcodesk. Replace this comment with a valuable description.
 */
class BasicForm extends React.Component<BasicFormProps, any> {

    static propTypes: PropTypes.InferProps<BasicFormProps> = {
        formElements: PropTypes.arrayOf(PropTypes.shape({
            componentType: PropTypes.oneOf(['input-text', 'input-number', 'checkbox'])})),
        /**
         * Form header text
         */
        headerLabel: PropTypes.string,
        /**
         * Form header style
         */
        headerStyle: PropTypes.object,
        /**
         * Triggered when user cancel submission
         */
        onCancel: PropTypes.func,
        /**
         * Triggered when user submit form
         */
        onSubmit: PropTypes.func,
    };

    static defaultProps: BasicFormProps = {
        formElements: [],
    };

    // constructor(props: BasicFormProps) {
    //   super(props);
    // }

    onSubmitForm = (e: React.MouseEvent<HTMLElement>): void => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (this.props.onSubmit) {
            this.props.onSubmit();
        }
    };

    onCancelForm = (e: React.MouseEvent<HTMLElement>): void => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (this.props.onCancel) {
            this.props.onCancel();
        }
    };

    renderFormElements = (formElements: {componentType: string}[]): JSX.Element[] => {
        let itemsToRender: JSX.Element[] = [];
        if (formElements && formElements.length) {
            formElements.forEach((item, index) => {
                if (item.componentType && item.componentType === 'input-text') {
                    itemsToRender.push(
                        <div key={item.componentType + '_' + index}>
                            <span>Input-Text</span>
                        </div>
                    )
                }
            });
        }
        if (!itemsToRender.length) {
            itemsToRender.push(<div key={"empty element"}><span>Nothing to render</span></div>);
        }
        return itemsToRender;
    };

    render() {
        const {
            headerLabel, headerStyle, formElements,
        } = this.props;
        const itemsArray = this.renderFormElements(formElements);
        console.log("formElements", formElements)
        return (
            <div>
                {headerLabel &&
                    <h3 style={headerStyle || {}}>
                        {headerLabel}
                    </h3>
                }
                <div>
                    {itemsArray}
                </div>
            </div>
        );
    }
}

export default BasicForm;
