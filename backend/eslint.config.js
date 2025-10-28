// eslint.config.js
import globals from "globals";
import pluginJs from "@eslint/js";

export default [
    {
        languageOptions: {
            globals: globals.node,
        },
    },
    pluginJs.configs.recommended,
    {
        rules: {
            indent: ["error", 4],
            quotes: ["error", "double"],
            semi: ["error", "always"],
        },
    },
];