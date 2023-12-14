module.exports = {
    root: true,

    globals: {
        MyGlobal: true
    },

    env: {
        es6: true,
        browser: true,
        node: true
    },

    extends: [
        "plugin:vue/vue3-strongly-recommended",
        "@vue/eslint-config-typescript",
    ],

    rules: {
        semi: ["error", "never"],
        "no-nested-ternary": "off",
        "vue/block-order": ["error", {
            "order": [["template"], "script", "style"]
        }],
        "vue/no-mutating-props": ["error", {
            "shallowOnly": false
        }],
        "vue/block-lang": ["error",
            {
                "script": {
                    "lang": "ts"
                }
            }
        ],
        "vue/component-api-style": ["error",
            ["script-setup", "composition"]
        ],
        "vue/html-button-has-type": ["error", {
            "button": true,
            "submit": true,
            "reset": true
        }],
        "vue/html-comment-content-spacing": ["error", "always", { "exceptions": ["*"] }],
        "vue/no-undef-components": ["error"],
        "vue/no-undef-properties": ["error"],
        "vue/no-unsupported-features": ["error", {
            "version": "^2.7.0"
        }]
    },

    parserOptions: {
        parser: require.resolve("@typescript-eslint/parser"),
        extraFileExtensions: [".vue"],
        ecmaVersion: "latest",
        sourceType: "module"
    },

    plugins: ["@typescript-eslint"]
}
