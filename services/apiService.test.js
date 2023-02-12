const { apiService, apiTitle } = require("./apiService");

//jest.mock("./apiService");

describe("Testing the API Service", () => {
  test("should test the apiService Functions", async () => {
    const result = await apiService();
    expect(result.data.entries[2].API).toEqual("Cat Facts");
    expect(result.data.entries[2].Description).toEqual("Daily cat facts");
    expect(result.data.entries[2].Category).toEqual("Animals");
  });

  test("should test the apiTitle function", async () => {
    const result = await apiTitle("AdoptAPet");
    expect(result.data.entries[0].API).toEqual("AdoptAPet");
    expect(result.data.entries[0].Description).toEqual("Resource to help get pets adopted")
    expect(result.data.entries[0].Category).toEqual("Animals");
  });
});
