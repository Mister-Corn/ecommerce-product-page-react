import sneakersFallLimitedThumbnail from '@/assets/products/image-product-1-thumbnail.jpg'

export const productCatalog = {
  sneakersFallLimited: {
    name: 'Fall Limited Edition Sneakers',
    thumbnail: sneakersFallLimitedThumbnail,
    thumbnailAlt:
      'Side view of Fall Limited Edition Sneakers with a white upper and beige sole, displayed against an orange background.',
    price: 12500, // In USD
  },
} as const

export type ProductId = keyof typeof productCatalog
export type CartLineItem = { productId: ProductId; quantity: number }
