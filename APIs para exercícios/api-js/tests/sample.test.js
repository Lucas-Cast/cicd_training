import { describe, it, expect } from "@jest/globals"

describe("test", () => {
  it("should always pass", () => {
    expect(true).toBe(true)
  })

  it("1 + 1 should be 2", () => {
    expect(1 + 1).toBe(2)
  })
})
