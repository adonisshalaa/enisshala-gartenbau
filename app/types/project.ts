export interface Project {
  id: number
  src: string
  alt: string
  title: string
}

export interface ProjectCollection {
  id: string
  title: string
  category: string
  description: string
  photos: [Project, ...Project[]]
}
