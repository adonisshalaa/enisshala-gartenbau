import type { ProjectCollection } from '~/types/project'

export const projectCollections: ProjectCollection[] = [
  {
    id: 'natural-stone-entrance',
    title: 'Hauseingang und Terrasse aus Stein',
    category: 'Naturstein und Pflaster',
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
    photos: [
      { id: 11, src: '/images/projects/brick-home-terrace.jpeg', alt: 'Breite gepflasterte Terrasse entlang eines Klinkerhauses', title: 'Terrasse am Klinkerhaus' },
      { id: 12, src: '/images/projects/brick-home-terrace-progress.jpeg', alt: 'Dunkler Terrassenbelag mit Baumaterial neben einem Klinkerhaus', title: 'Terrassenbelag im Bau' },
      { id: 13, src: '/images/projects/brick-home-doorstep.jpeg', alt: 'Dunkle Eingangsstufe unter einer offenen Tür in einer Klinkerwand', title: 'Detail an der Eingangsstufe' },
      { id: 14, src: '/images/projects/brick-home-paving-work.jpeg', alt: 'Großformatige Platten und Werkzeuge während der Verlegung auf einer Terrasse', title: 'Verlegung großformatiger Platten' }
    ]
  },
  {
    id: 'paving-at-house',
    title: 'Pflasterfläche am Wohnhaus',
    category: 'Pflasterarbeiten',
    photos: [
      { id: 15, src: '/images/projects/new/house-paving-finish.jpeg', alt: 'Neu gepflasterte Fläche entlang eines gelben Wohnhauses mit noch offenem Erdreich am Rand', title: 'Pflasterfläche am Haus' },
      { id: 16, src: '/images/projects/new/house-paving-base.jpeg', alt: 'Vorbereitete Schotterfläche mit gesetzten Randsteinen neben einem gelben Wohnhaus', title: 'Unterbau und Einfassung' },
      { id: 17, src: '/images/projects/new/house-paving-progress.jpeg', alt: 'Teilweise verlegte Pflastersteine auf einer vorbereiteten Fläche neben einem Wohnhaus', title: 'Pflasterung im Bau' }
    ]
  },
  {
    id: 'garden-path',
    title: 'Geschwungener Gartenweg',
    category: 'Gartenwege',
    photos: [
      { id: 18, src: '/images/projects/new/brick-garden-path.jpeg', alt: 'Geschwungener Gartenweg aus rötlichen Pflastersteinen zwischen Bepflanzung und Rasen', title: 'Gartenweg aus rotem Pflaster' }
    ]
  },
  {
    id: 'courtyard-retaining-walls',
    title: 'Hoffläche mit Stützmauern',
    category: 'Hofflächen und Mauern',
    photos: [
      { id: 19, src: '/images/projects/new/paved-courtyard.jpeg', alt: 'Großzügig gepflasterte Hoffläche vor einem Gebäude mit hellen Stützmauern', title: 'Gepflasterte Hoffläche' },
      { id: 20, src: '/images/projects/new/courtyard-retaining-walls.jpeg', alt: 'Helle Stützmauern und vorbereiteter Untergrund vor der Pflasterung einer Hoffläche', title: 'Stützmauern und Vorbereitung' }
    ]
  },
  {
    id: 'earthworks-drainage',
    title: 'Erdarbeiten und Entwässerung',
    category: 'Erdarbeiten und Entwässerung',
    photos: [
      { id: 21, src: '/images/projects/new/drainage-pipe-trench.jpeg', alt: 'Grünes Rohr in einem ausgehobenen Graben neben einem Minibagger', title: 'Rohrverlegung im Graben' },
      { id: 22, src: '/images/projects/new/shaft-excavation.jpeg', alt: 'Ausgehobene Grube für den Einbau eines Betonschachtrings', title: 'Aushub für einen Schacht' },
      { id: 23, src: '/images/projects/new/drainage-ring-level.jpeg', alt: 'Betonschachtring in einer ausgehobenen Grube mit aufgelegter Wasserwaage', title: 'Einbau des Schachtrings' },
      { id: 24, src: '/images/projects/new/drainage-ring-gravel.jpeg', alt: 'Betonschachtring in einer Grube mit umliegendem Kies', title: 'Schachtring mit Kiesbett' }
    ]
  }
]
