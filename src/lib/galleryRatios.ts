import type { GalleryCategory } from '../data/content.ts'

/** Real-world shape of each kind of design, so placeholders sit in the grid like the real files will. */
export const ratios: Record<GalleryCategory, string> = {
  Posters: '1 / 1.414', // A-series paper
  'Social Media': '4 / 5', // feed post
  Branding: '4 / 3',
  'Company IDs': '54 / 85.6', // CR80 ID card, portrait
}
