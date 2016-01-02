import assert from "power-assert"
import App from "../src/components/App.js"

describe("App", () => {
  describe("to_24px", () => {
    it("appends '&s=24'", () => {
      assert(App.to_24px("a") === "a&s=24");
    });
  });
});
