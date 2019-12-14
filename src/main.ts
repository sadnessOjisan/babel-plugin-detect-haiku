import { TIdentifierType } from "./type";

const hike = require("haiku-core");

/**
 * main関数. 検知した俳句をconsoleに出力する.
 */
module.exports = function() {
  return {
    name: "plugin-hike-detect",
    visitor: {
      Identifier(path: TIdentifierType) {
        const { node } = path;
        const data = hike(node);
        if (data) {
          console.log(data);
        }
      }
    }
  };
};
