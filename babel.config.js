module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          "@domain/entities": "./src/domain/entities/index",
          "@domain/usecases": "./src/domain/usecases/index",
          "@adapters/datasource": "./src/adapters/datasource/index",
          "@adapters/hooks": "./src/adapters/hooks/index",
          "@presentation": "./src/presentation/index",
          "@frameworks": "./src/frameworks/index",
          "@types": "./src/types/index"
        }
      }
    ],
    ['@babel/plugin-transform-class-static-block'],
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["babel-plugin-transform-typescript-metadata"]
  ]
};
