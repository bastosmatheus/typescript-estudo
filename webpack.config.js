import path from "path";
import dirname from "path";

export default {
  mode: "development",
  entry: "./src/aula 33 - POO interfaces and class/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: "tsconfig.frontend.json",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(dirname.resolve("frontend/assets/js")),
  },
};
