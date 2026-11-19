export interface Service {
  number: string
  id: string
  title: string
  description: string
  longDescription: string
  details: string[]
  projectId: string
}

export const services: Service[] = [
  {
    number: '01',
    id: 'pflasterarbeiten',
    title: 'Pflasterarbeiten',
    description: 'Belastbare Flächen und Wege, präzise vorbereitet und mit passender Technik verlegt.',
    longDescription: 'Ob Gartenweg, Gehweg, Hauseingang oder Hoffläche: Wir bereiten den Untergrund vor, setzen Einfassungen und verlegen den Belag passend zur Nutzung. In unseren Projektfotos sehen Sie sowohl fertige Pflasterflächen als auch den Aufbau während der Arbeit.',
    details: ['Gehwege und Gartenwege', 'Hofflächen', 'Hauseingänge'],
    projectId: 'courtyard-retaining-walls'
  },
  {
    number: '02',
    id: 'terrassenbau',
    title: 'Terrassenbau',
    description: 'Terrassen mit passenden Belägen und sorgfältig ausgeführten Anschlüssen.',
    longDescription: 'Eine Terrasse soll sich gut an Haus und Garten anschließen. Wir übernehmen den Terrassenbau mit Pflaster oder Platten und achten auf Übergänge, Ränder und die Fläche unter dem Belag. Unsere Galerie zeigt überdachte Terrassen und großformatige Platten während der Verlegung.',
    details: ['Terrassenbeläge', 'Großformatige Platten', 'Übergänge zum Haus'],
    projectId: 'covered-terrace'
  },
  {
    number: '03',
    id: 'naturstein',
    title: 'Naturstein & Einfassungen',
    description: 'Stein und klare Kanten geben Außenanlagen Struktur und Halt.',
    longDescription: 'Naturstein kann Wege, Stufen und Mauern prägen. Für klare Übergänge und Höhenunterschiede arbeiten wir außerdem mit Palisaden und L-Steinen. Welche Ausführung passt, hängt vom Grundstück und der geplanten Nutzung ab.',
    details: ['Natursteinarbeiten', 'Palisaden', 'L-Steine'],
    projectId: 'natural-stone-entrance'
  },
  {
    number: '04',
    id: 'erdarbeiten',
    title: 'Erd- & Rückbauarbeiten',
    description: 'Mit Minibagger, Radlader und Dumper bereiten wir Flächen für neue Außenanlagen vor.',
    longDescription: 'Vor dem neuen Belag steht häufig der Rückbau oder Aushub. Wir übernehmen Erdarbeiten sowie Abriss- und Rückbauarbeiten im Zusammenhang mit Außenanlagen und bereiten die Flächen für die nächsten Schritte vor.',
    details: ['Erdarbeiten', 'Aushub', 'Abriss- und Rückbauarbeiten'],
    projectId: 'earthworks-drainage'
  },
  {
    number: '05',
    id: 'entwaesserung',
    title: 'Entwässerung & Drainage',
    description: 'Auch die Arbeiten unter der Oberfläche gehören zu einer durchdachten Außenanlage.',
    longDescription: 'Bei Arbeiten an der Entwässerung und Drainage kümmern wir uns um die nötigen Erd- und Leitungsarbeiten. In den Projektbildern sind unter anderem Rohrverlegung im Graben und der Einbau eines Schachtrings dokumentiert.',
    details: ['Entwässerung', 'Drainage', 'Rohr- und Schachtarbeiten'],
    projectId: 'earthworks-drainage'
  },
  {
    number: '06',
    id: 'rasenarbeiten',
    title: 'Rasenarbeiten',
    description: 'Mit Rasenmäher und Vertikutierer kümmern wir uns um die Rasenfläche als Teil des Gartens.',
    longDescription: 'Auch Grünflächen gehören zum Außenbereich. Zu unseren Rasenarbeiten zählen das Mähen und Vertikutieren. Wenn Sie Pflasterflächen und Rasen gemeinsam planen, können Wege und Grünbereiche aufeinander abgestimmt werden.',
    details: ['Rasenflächen', 'Rasenmähen', 'Vertikutieren'],
    projectId: 'garden-path'
  }
]
