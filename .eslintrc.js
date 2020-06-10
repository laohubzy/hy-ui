module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        'js',
        'markdown'
    ],
    "rules": {
        'indent': ['error', 4], // tabSize大小
    }
};

