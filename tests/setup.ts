import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'
import '@testing-library/jest-dom/vitest'

// Mock Zustand
// @see https://docs.pmnd.rs/zustand/guides/testing#vitest
vi.mock('zustand')

afterEach(() => {
  cleanup()
})
