module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "globals": {
      window: true,
      document: true
    },
    "rules": {
      "indent": ["error", 2],
      "comma-dangle": ["off"],
      "react/sort-comp": ["off"],
      "jsx-a11y/click-events-have-key-events": ["off"],
      "react/jsx-filename-extension": ["off"],
      "jsx-a11y/no-static-element-interactions": ["off"],
      "react/prefer-stateless-function": ["off"]
    }
};
