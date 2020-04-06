module.exports = {
    "extends": [
        "eslint:recommended",
    ],
    "env": {
        "browser": false,
        "node": true,
        "es6": true
    },
    "parser":"babel-eslint",
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "script"
    },
    "globals": {
        "window":false,
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "rules": {
        "no-console":["warn",{
          "allow":["warn","error","info"]
        }],
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
