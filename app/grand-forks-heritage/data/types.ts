// Shared type definition for all heritage building entries
export interface HeritageImage {
  src: string
  caption?: string
}

export interface BuildingEntryData {
  id: string
  name: string
  location?: string
  yearBuilt?: string
  images: (string | HeritageImage)[] // Support both formats for backward compatibility
  description: string
  downloadLink?: string // Optional Gumroad or external link for hi-res downloads
}
