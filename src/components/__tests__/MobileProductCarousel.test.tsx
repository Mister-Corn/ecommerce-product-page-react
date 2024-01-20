import { render, screen, waitFor } from '@testing-library/react'
import MobileProductCarousel from '../MobileProductCarousel'

describe('MobileProductCarousel', () => {
  test('displays correct initial image number', async () => {
    render(<MobileProductCarousel />)

    const imageNumber = await screen.findByText(/Image 1 of 4/i)
    expect(imageNumber).toBeInTheDocument()
  })

  test('updates image number on next click', async () => {
    render(<MobileProductCarousel />)

    const nextButton = screen.getByLabelText('Go to next image')
    await waitFor(() => nextButton.click())

    const imageNumber = await screen.findByText(/Image 2 of 4/i)
    expect(imageNumber).toBeInTheDocument()
  })

  test('loops to first image number from last', async () => {
    render(<MobileProductCarousel />)

    const nextButton = screen.getByLabelText('Go to next image')
    await waitFor(() => {
      nextButton.click() // 2
      nextButton.click() // 3
      nextButton.click() // 4
      nextButton.click() // 1
    })

    const imageNumber = await screen.findByText(/Image 1 of 4/i)
    expect(imageNumber).toBeInTheDocument()
  })

  test('updates image number on previous click', async () => {
    render(<MobileProductCarousel />)

    const nextButton = screen.getByLabelText('Go to next image')
    await waitFor(() => nextButton.click())

    const prevButton = screen.getByLabelText('Go to previous image')
    await waitFor(() => prevButton.click())

    const imageNumber = await screen.findByText(/Image 1 of 4/i)
    expect(imageNumber).toBeInTheDocument()
  })

  test('loops to last image number from first', async () => {
    render(<MobileProductCarousel />)

    const prevButton = screen.getByLabelText('Go to previous image')
    await waitFor(() => prevButton.click())

    const imageNumber = await screen.findByText(/Image 4 of 4/i)
    expect(imageNumber).toBeInTheDocument()
  })
})
