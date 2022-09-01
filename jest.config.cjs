module.exports = {
    "moduleFileExtensions": [
        "ts",
        "js"
    ],
    "transform": {
        "^.+\\.ts$": "ts-jest"
    },
    "globals": {
        "ts-jest": {
            "tsconfig": "tsconfig.json"
        }
    },
    "testMatch": [
        "**/__tests__/**/*.test.ts"
    ]
}
