import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'
import '@testing-library/jest-dom/vitest'

// Mock Zustand
// @see https://docs.pmnd.rs/zustand/guides/testing#vitest
vi.mock('zustand')

// Mock the useMediaQuery and useIsDesktop hooks
vi.mock('../src/hooks/useMediaQuery')

afterEach(() => {
  cleanup()
})
