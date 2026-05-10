import type { Category } from '../types/game'

export const mockCategories: Category[] = [
  {
    id: 'musikk',
    title: 'Musikk',
    clues: [
      { id: 'm200', value: 200, question: 'Sangtittel og artist', answer: 'Party In The USA - Miley Cyrus' },
      { id: 'm400', value: 400, question: 'Sangtittel og artist', answer: 'Glow - Madcon' },
      { id: 'm600', value: 600, question: 'Sangtittel og artist', answer: 'Ambition - Donkyboy' },
      { id: 'm800', value: 800, question: 'Sangtittel og artist', answer: 'Forever Alone - Kakkmaddafakka' },
      { id: 'm1000', value: 1000, question: 'Sangtittel og artist', answer: 'Salsa Tequila - Anders Nilsen' },
    ],
  },
  {
    id: 'tallrekke',
    title: 'Tallrekke',
    clues: [
      { id: 't200', value: 200, question: '0-15-30-40', answer: 'Tennispoeng' },
      { id: 't400', value: 400, question: '240-850-P1800-V70', answer: 'Volvo-modeller' },
      { id: 't600', value: 600, question: '1415926535', answer: 'Pi (π)' },
      { id: 't800', value: 800, question: '707-757-737-787', answer: 'Boeing-flymodeller' },
      { id: 't1000', value: 1000, question: '1-5-10-20', answer: 'Norske mynter' },
    ],
  },
  {
    id: 'nyheter',
    title: 'Nyheter/Politikk',
    clues: [
      { id: 'n200', value: 200, question: 'Hvilket land er NATOs nyeste medlem?', answer: 'Sverige' },
      { id: 'n400', value: 400, question: 'Hvilket land skøt ned et amerikans fly (friendly-fire)', answer: 'Kuwait' },
      { id: 'n600', value: 600, question: 'Hvilket KI selskap bannet Trump?', answer: 'Anthropic' },
      { id: 'n800', value: 800, question: 'Hvilket år avbrøt Mette Marit kontakten med Epstein?', answer: '2014' },
      { id: 'n1000', value: 1000, question: 'Hvor mange land har USA gjennomført militære angrep siden Trump kom tilbake i 2025', answer: '7' },
    ],
  },
  {
    id: 'geografi',
    title: 'Geografi',
    clues: [
      { id: 'g200', value: 200, question: 'Hva er verdens minste land?', answer: 'Vatikanstaten' },
      { id: 'g400', value: 400, question: 'Nevn 5 land på P', answer: 'Peru, Poland, Portugal, Pakistan, Panama, Palau, Papua New Guinea, Paraguay' },
      { id: 'g600', value: 600, question: 'Nevn alle fargene i flagget til Sør-Afrika', answer: 'Rød, hvit, svart, blå, grønn og gul' },
      { id: 'g800', value: 800, question: 'Hvilket land har flest innsjøer?', answer: 'Canada' },
      { id: 'g1000', value: 1000, question: 'Hvor mange tidssoner i russland?', answer: '11' },
    ],
  },
  {
    id: 'ifi',
    title: 'IFI',
    clues: [
      { id: 'i200', value: 200, question: 'Hvor mye koster en øl(tap) på Escape?', answer: '65kr' },
      { id: 'i400', value: 400, question: 'Hvilket obligatorisk fag har PROSA som DigØk ikke har?', answer: 'IN1150-logiske metoder' },
      { id: 'i600', value: 600, question: 'Hvor mange bachleorprogrammer hadde IFI i 2022?', answer: '5' },
      { id: 'i800', value: 800, question: 'Hva står SQL for?', answer: 'Structured Query Language' },
      { id: 'i1000', value: 1000, question: 'Nevn 4 programmeringsspråk som begynner på C', answer: 'C, C++, C#, COBOL, Crystal' },
    ],
  },
]
