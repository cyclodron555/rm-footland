export interface AlbumPhoto {
  src: string
}

export interface AlbumPage {
  images: AlbumPhoto[] // 1 or 2 images per page
}

// Add your photos here in the order you want them to appear
// Each page can contain 1 or 2 vertical images
export const heritageAlbum: AlbumPage[] = [
  // Single images
  { images: [{ src: "/grand-forks-heritage/city_hall_angle_diag.jpeg" }] },
  { images: [{ src: "/grand-forks-heritage/city_hall_hawkins_ambience.jpeg" }] },

  // Two vertical images stacked on one page
  {
    images: [
      { src: "/grand-forks-heritage/city_hall_monument.jpeg" },
      { src: "/grand-forks-heritage/black_bridge_GF.jpeg" },
    ],
  },

  // Single images
  { images: [{ src: "/grand-forks-heritage/black_bridge_gf_winter_snow.jpeg" }] },
  { images: [{ src: "/grand-forks-heritage/hummingbirdbridgeGFsunset.jpeg" }] },

  // Two vertical images stacked on one page
  {
    images: [
      { src: "/grand-forks-heritage/humingbrid_bridge_winter_snow.jpeg" },
      { src: "/grand-forks-heritage/kettleriver_other_blackbridgeGF.jpeg" },
    ],
  },

  // Single image
  { images: [{ src: "/grand-forks-heritage/mainstreet_nightcity_grandForks.jpeg" }] },
]
