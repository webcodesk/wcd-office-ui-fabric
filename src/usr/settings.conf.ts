// eslint no-unused-vars
import PropTypes from 'prop-types';

const SettingsProps = {
  /**
   * The theme specifies the color of the components, darkness of the surfaces, level of shadow, appropriate opacity of ink elements, etc.
   */
  theme: PropTypes.oneOf(['light', 'dark'])
};

export const defaultSettings = {
  theme: 'light',
};

type SettingsPropsType = PropTypes.InferProps<typeof SettingsProps>;
