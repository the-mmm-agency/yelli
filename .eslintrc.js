if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development'
}

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFreatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  globals: {
    window: true
  },
  plugins: [
    'import',
    'jsx-a11y',
    'prettier',
    'react',
    'unicorn'
  ],
  rules: {
    // https://eslint.org
    'global-require': 'off',
    'getter-return': 'warn',
    'jsx-quotes': 'warn',
    'no-console': 'off',
    'no-restricted-properties': [
      'error',
      {
        object: 'require',
        property: 'ensure',
        message:
          'Please use import() instead. More info: https: //github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting'
      },
      {
        object: 'System',
        property: 'import',
        message:
          'Please use import() instead. More info: https: //github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting'
      }
    ],
    'no-underscore-dangle': 'off',
    'sort-keys': ['warn', 'asc', { natural: true }],
    'sort-vars': 'warn',


    // https://github.com/benmosher/eslint-plugin-import
    'import/export': 'error',
    'import/first': 'error',
    'import/named': 'error',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        packageDir: './'
      }
    ],
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-unresolved': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-webpack-loader-syntax': 'warn',
    'import/order': [
      'error',
      {
        'newlines-between': 'always'
      }
    ],
    'import/prefer-default-export': 'off',

    // https://github.com/evcohen/eslint-plugin-jsx-a11y
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-role': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/heading-has-content': 'warn',
    'jsx-a11y/iframe-has-title': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/no-autofocus': 'warn',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/role-has-required-aria-props': 'warn',

    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      }
    ],

    // https://github.com/yannickcr/eslint-plugin-react
    'react/boolean-prop-naming': 'warn',
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-key': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-one-expression-per-line': 'warn',
    'react/jsx-pascal-case': 'warn',
    'react/jsx-sort-props': 'warn',
    'react/jsx-uses-react': 'error',
    'react/no-array-index-key': 'error',
    'react/no-danger': 'off',
    'react/no-did-mount-set-state': 'warn',
    'react/no-did-update-set-state': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/no-find-dom-node': 'error',
    'react/no-unescaped-entities': 'off',
    'react/no-unused-prop-types': 'warn',
    'react/no-unused-state': 'warn',
    'react/prefer-stateless-function': 'warn',
    'react/prop-types': 'error',
    'react/require-default-props': 'off',
    'react/require-render-return': 'error',
    'react/sort-comp': [
      'warn',
      {
        order: ['constructor', 'lifecycle', 'everything-else', 'render'],
        groups: {
          lifecycle: [
            'state',
            'statics',
            'contextTypes',
            'childContextTypes',
            'getChildContext',
            'propTypes',
            'defaultProps',
            'shouldComponentUpdate',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount'
          ]
        }
      }
    ],
    'react/sort-prop-types': 'off',
    'react/style-prop-object': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn
    'unicorn/catch-error-name': [
      'error',
      {
        name: 'error'
      }
    ],
    'unicorn/custom-error-definition': 'off',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/explicit-length-check': 'error',
    'unicorn/filename-case': 'off',
    'unicorn/import-index': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-process': 'off',
    'unicorn/no-process-exit': 'off',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-exponentiation-operator': 'warn',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/regex-shorthand': 'error',
    'unicorn/throw-new-error': 'error'
  },
  settings: {
    react: {
      version: '15.0'
    },
    'import/resolver': {
      webpack: {
        config: 'config/webpack.config.js'
      }
    }
  }
};
