import { PrismaClient } from '@prisma/client';
import { Category } from '@prisma/client';
const prisma = new PrismaClient();

const vocabularyData = [
  // ─── IDIOMS ───────────────────────────────────────────────────────────────
  {
    expression: 'Break the ice',
    translation: 'Briser la glace',
    contextSentence: 'He told a joke to break the ice at the meeting.',
    category: Category.Idiom,
    status: 'New',
  },
  {
    expression: 'Hit the nail on the head',
    translation: 'Mettre le doigt dessus / Toucher juste',
    contextSentence: 'You hit the nail on the head with that analysis.',
    category: Category.Idiom,
    status: 'New',
  },
  {
    expression: 'Bite the bullet',
    translation: 'Serrer les dents / Faire contre mauvaise fortune bon cœur',
    contextSentence: 'Just bite the bullet and get it done.',
    category: Category.Idiom,
    status: 'New',
  },
  {
    expression: 'Burn the midnight oil',
    translation: 'Travailler tard dans la nuit',
    contextSentence: 'She burned the midnight oil to finish her thesis.',
    category: Category.Idiom,
    status: 'New',
  },
  {
    expression: 'Spill the beans',
    translation: 'Vendre la mèche / Divulguer un secret',
    contextSentence: "Don't spill the beans about the surprise party.",
    category: Category.Idiom,
    status: 'New',
  },
  {
    expression: 'Under the weather',
    translation: 'Ne pas se sentir bien / Être patraque',
    contextSentence: "I'm feeling a bit under the weather today.",
    category: Category.Idiom,
    status: 'New',
  },
  {
    expression: 'Once in a blue moon',
    translation: 'Tous les trente-six du mois / Très rarement',
    contextSentence: 'He only calls once in a blue moon.',
    category: Category.Idiom,
    status: 'New',
  },
  {
    expression: 'Cost an arm and a leg',
    translation: 'Coûter les yeux de la tête',
    contextSentence: 'That new phone costs an arm and a leg.',
    category: Category.Idiom,
    status: 'New',
  },
  {
    expression: 'Let the cat out of the bag',
    translation: 'Vendre la mèche',
    contextSentence: 'He let the cat out of the bag about the merger.',
    category: Category.Idiom,
    status: 'New',
  },
  {
    expression: 'Beat around the bush',
    translation: 'Tourner autour du pot',
    contextSentence: 'Stop beating around the bush and tell me the truth.',
    category: Category.Idiom,
    status: 'New',
  },
  {
    expression: 'The ball is in your court',
    translation: "C'est à toi de jouer",
    contextSentence: "I've done my part — the ball is in your court now.",
    category: Category.Idiom,
    status: 'New',
  },
  {
    expression: 'Kill two birds with one stone',
    translation: "Faire d'une pierre deux coups",
    contextSentence: 'By cycling to work, I kill two birds with one stone.',
    category: Category.Idiom,
    status: 'New',
  },

  // ─── EXPRESSIONS COURANTES ────────────────────────────────────────────────
  {
    expression: 'As far as I know',
    translation: 'Pour autant que je sache',
    contextSentence: 'As far as I know, the meeting is still on.',
    category: Category.Expression,
    status: 'New',
  },
  {
    expression: 'That being said',
    translation: 'Cela dit / Ceci étant dit',
    contextSentence: "It's a tough job. That being said, it's rewarding.",
    category: Category.Expression,
    status: 'New',
  },
  {
    expression: 'At the end of the day',
    translation: 'En fin de compte',
    contextSentence: 'At the end of the day, what matters is your health.',
    category: Category.Expression,
    status: 'New',
  },
  {
    expression: 'On the fence',
    translation: 'Hésitant / Indécis',
    contextSentence: "I'm still on the fence about accepting the offer.",
    category: Category.Expression,
    status: 'New',
  },
  {
    expression: 'Go the extra mile',
    translation: 'Faire un effort supplémentaire / Se surpasser',
    contextSentence: 'She always goes the extra mile for her clients.',
    category: Category.Expression,
    status: 'New',
  },
  {
    expression: 'Get the hang of it',
    translation: 'Attraper le coup / Comprendre comment ça marche',
    contextSentence: "Don't worry, you'll get the hang of it quickly.",
    category: Category.Expression,
    status: 'New',
  },
  {
    expression: 'Bring to the table',
    translation: 'Apporter quelque chose / Contribuer',
    contextSentence: 'What skills can you bring to the table?',
    category: Category.Expression,
    status: 'New',
  },
  {
    expression: 'Keep in mind',
    translation: "Garder à l'esprit / Ne pas oublier",
    contextSentence: 'Keep in mind that the deadline is Friday.',
    category: Category.Expression,
    status: 'New',
  },
  {
    expression: 'On second thought',
    translation: 'À la réflexion / Finalement',
    contextSentence: "On second thought, I'll stay home tonight.",
    category: Category.Expression,
    status: 'New',
  },
  {
    expression: "Make up one's mind",
    translation: 'Se décider / Prendre une décision',
    contextSentence: "I can't make up my mind between the two options.",
    category: Category.Expression,
    status: 'New',
  },

  // ─── PhrasalVerbS (Verbe + Particule) ──────────────────────────────────────
  {
    expression: 'Carry on',
    translation: 'Continuer',
    contextSentence: 'Sorry for the interruption, please carry on.',
    category: Category.PhrasalVerb,
    status: 'New',
  },
  {
    expression: 'Find out',
    translation: 'Découvrir / Apprendre (une info)',
    contextSentence: "I need to find out what time the train leaves.",
    category: Category.PhrasalVerb,
    status: 'New',
  },
  {
    expression: 'Give up',
    translation: 'Abandonner / Arrêter',
    contextSentence: "Don't give up on your dreams.",
    category: Category.PhrasalVerb,
    status: 'New',
  },
  {
    expression: 'Look forward to',
    translation: 'Avoir hâte de',
    contextSentence: "I look forward to meeting you next week.",
    category: Category.PhrasalVerb,
    status: 'New',
  },
  {
    expression: 'Run out of',
    translation: 'Manquer de / Ne plus avoir de',
    contextSentence: "We have run out of milk, I need to go to the store.",
    category: Category.PhrasalVerb,
    status: 'New',
  },

  // ─── VOCABULARY (Mots isolés "High-Level") ────────────────────────────────
  {
    expression: 'Insightful',
    translation: 'Pertinent / Perspicace',
    contextSentence: 'Thank you for your insightful comments.',
    category: Category.Vocabulary,
    status: 'New',
  },
  {
    expression: 'Overwhelmed',
    translation: 'Submergé / Dépassé',
    contextSentence: "I'm feeling a bit overwhelmed with work lately.",
    category: Category.Vocabulary,
    status: 'New',
  },
  {
    expression: 'Reluctant',
    translation: 'Réticent / Hésitant',
    contextSentence: 'He was reluctant to share his secret.',
    category: Category.Vocabulary,
    status: 'New',
  },
  {
    expression: 'Thrive',
    translation: 'Prospérer / S’épanouir',
    contextSentence: 'Some plants thrive in the shade.',
    category: Category.Vocabulary,
    status: 'New',
  },
  {
    expression: 'Straightforward',
    translation: 'Simple / Direct',
    contextSentence: 'The instructions were very straightforward.',
    category: Category.Vocabulary,
    status: 'New',
  }
];


async function main() {
  console.log('🌱 Seeding vocabulary data...');

  await prisma.vocabulary.createMany({
    data: vocabularyData,
    skipDuplicates: true,
  });

  console.log({ message: '✅ Vocabulary data seeded successfully!' });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
