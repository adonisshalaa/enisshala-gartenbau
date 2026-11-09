import type { ProjectCollection } from '~/types/project'

export const projectCollections: ProjectCollection[] = [
  {
    id: 'natural-stone-entrance',
    title: 'Hauseingang und Terrasse aus Stein',
    category: 'Naturstein und Pflaster',
    description: 'Steinverkleidung, Eingangsstufen, ein Weg am Hang und eine befestigte Terrasse. Die Bilder zeigen auch einzelne Bauphasen.',
    photos: [
      { id: 1, src: '/images/projects/stone-terrace.jpeg', alt: 'Breite Terrasse mit Steinbelag neben einem Haus mit steilem Dach', title: 'Terrasse am steinverkleideten Haus' },
      { id: 2, src: '/images/projects/stone-entrance.jpeg', alt: 'Granitstufen vor einem Eingang mit Steinverkleidung', title: 'Eingangsstufen aus Granit' },
      { id: 3, src: '/images/projects/stone-path-under-construction.jpeg', alt: 'Steinweg und Granitpfosten im Bau an einem Hang', title: 'Steinweg im Bau' },
      { id: 4, src: '/images/projects/stone-retaining-wall.jpeg', alt: 'Geschwungene Stützmauer aus aufgeschichteten Natursteinen', title: 'Stützmauer aus Naturstein' },
      { id: 5, src: '/images/projects/stone-entrance-before.jpeg', alt: 'Steinverkleideter Eingang vor der Fertigstellung der Stufen und des Vorplatzes', title: 'Hauseingang während der Bauphase' }
    ]
  },
  {
    id: 'covered-terrace',
    title: 'Belag für eine überdachte Terrasse',
    category: 'Terrassenbeläge',
    description: 'Großformatige graue Platten unter einem Terrassendach. Eine Detailaufnahme zeigt den Anschluss an eine Stütze.',
    photos: [
      { id: 6, src: '/images/projects/covered-terrace.jpeg', alt: 'Überdachte Terrasse mit großen grauen Platten und dunklen Stützen', title: 'Überdachte Terrasse' },
      { id: 7, src: '/images/projects/covered-terrace-detail.jpeg', alt: 'Nahaufnahme des Plattenbelags an einer dunklen Terrassenstütze', title: 'Detail am Stützenanschluss' }
    ]
  },
  {
    id: 'paved-entrance',
    title: 'Gepflasterter Hauseingang und Stufen',
    category: 'Wege und Stufen',
    description: 'Ein dunkler Weg zum Hauseingang, Stufen mit hellen Trittflächen und eine Terrasse während der Verlegung.',
    photos: [
      { id: 8, src: '/images/projects/paved-entrance-path.jpeg', alt: 'Dunkelgrauer Plattenweg zu einem weißen Hauseingang', title: 'Weg zum Hauseingang' },
      { id: 9, src: '/images/projects/paved-steps.jpeg', alt: 'Außenstufen mit hellen Trittflächen und dunklen Setzstufen an einer weißen Hauswand', title: 'Stufen am Hauseingang' },
      { id: 10, src: '/images/projects/paved-terrace-work.jpeg', alt: 'Helle großformatige Terrassenplatten mit Arbeitern am Rand der Fläche', title: 'Terrasse während der Verlegung' }
    ]
  },
  {
    id: 'brick-home-terrace',
    title: 'Terrasse am Klinkerhaus',
    category: 'Terrassenpflaster',
    description: 'Eine großzügige befestigte Fläche am Klinkerhaus. Weitere Bilder zeigen die Verlegung und ein Detail am Eingang.',
    photos: [
      { id: 11, src: '/images/projects/brick-home-terrace.jpeg', alt: 'Breite gepflasterte Terrasse entlang eines Klinkerhauses', title: 'Terrasse am Klinkerhaus' },
      { id: 12, src: '/images/projects/brick-home-terrace-progress.jpeg', alt: 'Dunkler Terrassenbelag mit Baumaterial neben einem Klinkerhaus', title: 'Terrassenbelag im Bau' },
      { id: 13, src: '/images/projects/brick-home-doorstep.jpeg', alt: 'Dunkle Eingangsstufe unter einer offenen Tür in einer Klinkerwand', title: 'Detail an der Eingangsstufe' },
      { id: 14, src: '/images/projects/brick-home-paving-work.jpeg', alt: 'Großformatige Platten und Werkzeuge während der Verlegung auf einer Terrasse', title: 'Verlegung großformatiger Platten' }
    ]
  }
]
