import { expect, describe, test } from 'bun:test'

describe("about tascript" ,() => {
  test("job is tascript", () => {
    const name = 'tascript'
    expect(name).toBe('tascript')
  })
  
  test("job is engineer", () => {
    const job = 'engineer'
    expect(job).toBe('engineer')
  })
  
  test("major is frontend", () => {
    const major = 'frontend'
    expect(major).toBe('frontend')
  })
})