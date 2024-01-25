import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MobileProductCarousel from '../MobileProductCarousel'

describe('MobileProductCarousel', () => {
  it('renders images', async () => {
    render(<MobileProductCarousel />)

    const image1 = await screen.findByRole('img', { name: 'Image 1' })
    const image2 = await screen.findByRole('img', { name: 'Image 2' })
    const image3 = await screen.findByRole('img', { name: 'Image 3' })
    const image4 = await screen.findByRole('img', { name: 'Image 4' })

    expect(image1).toBeInTheDocument()
    expect(image2).toBeInTheDocument()
    expect(image3).toBeInTheDocument()
    expect(image4).toBeInTheDocument()
  })

  it('navigates to next image on button click', async () => {
    render(<MobileProductCarousel />)

    const nextButton = screen.getByLabelText('Go to next image')

    await waitFor(() => {
      userEvent.click(nextButton)
    })

    const currentImage = await screen.findByRole('img', {
      name: 'Image 2',
    })

    expect(currentImage).toBeInTheDocument()
  })

  it('navigates to previous image on button click', async () => {
    render(<MobileProductCarousel />)

    const nextButton = screen.getByLabelText('Go to next image')
    await waitFor(() => {
      userEvent.click(nextButton)
    })

    const prevButton = screen.getByLabelText('Go to previous image')
    await waitFor(() => {
      userEvent.click(prevButton)
    })

    const currentImage = await screen.findByRole('img', {
      name: 'Image 1',
    })

    expect(currentImage).toBeInTheDocument()
  })
})
