// eslint no-unused-vars
import PropTypes from 'prop-types';
import { ThemeColorTypes } from './settings.props';

const SettingsProps = {
  /**
   * The theme specifies the color of the components, darkness of the surfaces, level of shadow, appropriate opacity of ink elements, etc.
   */
  theme: PropTypes.shape({
    /**
     * The palette enables you to modify the color of the components to suit your brand.
     */
    palette: PropTypes.shape({
      /**
       * Used to represent primary interface elements for a user
       */
      primary: PropTypes.shape({
        /**
         * Main background color
         */
        main: PropTypes.shape(ThemeColorTypes),
        /**
         * Text color in contrast to the background color
         */
        contrastText: PropTypes.string,
      }),
      /**
       * Used to represent secondary interface elements for a user.
       */
      secondary: PropTypes.shape({
        /**
         * Main background color
         */
        main: PropTypes.shape(ThemeColorTypes),
        /**
         * Text color in contrast to the background color
         */
        contrastText: PropTypes.string,
      }),
      /**
       * Used to represent interface elements that the user should be made aware of.
       */
      error: PropTypes.shape({
        /**
         * Main background color
         */
        main: PropTypes.shape(ThemeColorTypes),
        /**
         * Text color in contrast to the background color
         */
        contrastText: PropTypes.string,
      }),
    }),
  })
};

export const defaultSettings = {
  theme: {
    status: {
      fontFamily: ['"Roboto"', 'sans-serif'],
    },
    palette: {
      type: 'light',
      primary: {
        main: {
          colorHue: 'indigo',
          colorShade: '500'
        },
        contrastText: '#fff',
      },
      secondary: {
        main: {
          colorHue: 'pink',
          colorShade: 'A400'
        },
        contrastText: '#fff',
      },
      error: {
        main: {
          colorHue: 'red',
          colorShade: '500'
        },
        contrastText: '#fff',
      }
    },
  }
};

type SettingsPropsType = PropTypes.InferProps<typeof SettingsProps>;