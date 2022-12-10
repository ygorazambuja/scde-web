import { searchByName } from "./searchByName";
import { describe, it, expect } from "vitest";

describe("searchByName", () => {
  it("searches by name", () => {
    expect(searchByName("")).toHaveLength(0);
    expect(searchByName("a")).toHaveLength(0);
    expect(searchByName("ab")).toHaveLength(0);
    expect(searchByName("joa")).toHaveLength(37);
    expect(searchByName("joão")).toHaveLength(75);
  });
});
