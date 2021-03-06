export interface NounSeed {
  background: number
  body: number
  accessory: number
  head: number
  glasses: number
}

export interface EncodedImage {
  filename: string
  data: string
}

export interface NounData {
  parts: EncodedImage[]
  background: string
}

export interface ImageBounds {
  top: number
  right: number
  bottom: number
  left: number
}

export interface DecodedImage {
  paletteIndex: number
  bounds: ImageBounds
  rects: [length: number, colorIndex: number][]
}
