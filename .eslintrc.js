module.exports = {
    root: true,
    extends: ["standard", "plugin:vue/recommended"],
    plugins: ["vue"],
    settings: {
        "import/resolver": {
            "webpack": {
                "config": "webpack.config.js",
            },
        },
    },
    rules: {
        semi: [2, "always"]
    }
};