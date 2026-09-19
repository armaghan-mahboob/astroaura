// Full 78-card Rider-Waite-Smith deck. `image` expects a matching file at
// /public/tarot/<slug>.jpg — see audit page to confirm all 78 are present.
const tarotCards = [
  // Major Arcana
  {
    name: "The Fool",
    slug: "the-fool",
    meaning: "New beginnings, a leap of faith",
  },
  {
    name: "The Magician",
    slug: "the-magician",
    meaning: "Willpower, resourcefulness, manifestation",
  },
  {
    name: "The High Priestess",
    slug: "the-high-priestess",
    meaning: "Intuition, mystery, inner knowing",
  },
  {
    name: "The Empress",
    slug: "the-empress",
    meaning: "Abundance, nurturing, creativity",
  },
  {
    name: "The Emperor",
    slug: "the-emperor",
    meaning: "Structure, authority, stability",
  },
  {
    name: "The Hierophant",
    slug: "the-hierophant",
    meaning: "Tradition, guidance, belief systems",
  },
  {
    name: "The Lovers",
    slug: "the-lovers",
    meaning: "Connection, choice, aligned values",
  },
  {
    name: "The Chariot",
    slug: "the-chariot",
    meaning: "Willpower, drive, victory through control",
  },
  {
    name: "Strength",
    slug: "strength",
    meaning: "Courage, patience, quiet resolve",
  },
  {
    name: "The Hermit",
    slug: "the-hermit",
    meaning: "Introspection, solitude, inner guidance",
  },
  {
    name: "Wheel of Fortune",
    slug: "wheel-of-fortune",
    meaning: "Change, cycles, turning points",
  },
  {
    name: "Justice",
    slug: "justice",
    meaning: "Fairness, truth, cause and effect",
  },
  {
    name: "The Hanged Man",
    slug: "the-hanged-man",
    meaning: "Surrender, new perspective, a pause",
  },
  {
    name: "Death",
    slug: "death",
    meaning: "Transformation, endings that open new paths",
  },
  {
    name: "Temperance",
    slug: "temperance",
    meaning: "Balance, patience, blending opposites",
  },
  {
    name: "The Devil",
    slug: "the-devil",
    meaning: "Attachment, restriction, old patterns",
  },
  {
    name: "The Tower",
    slug: "the-tower",
    meaning: "Sudden upheaval, revelation, breaking free",
  },
  { name: "The Star", slug: "the-star", meaning: "Hope, renewal, quiet faith" },
  {
    name: "The Moon",
    slug: "the-moon",
    meaning: "Uncertainty, intuition, hidden truths",
  },
  { name: "The Sun", slug: "the-sun", meaning: "Joy, clarity, success" },
  {
    name: "Judgement",
    slug: "judgement",
    meaning: "Reckoning, awakening, a turning point",
  },
  {
    name: "The World",
    slug: "the-world",
    meaning: "Completion, wholeness, fulfillment",
  },

  // Wands
  {
    name: "Ace of Wands",
    slug: "ace-of-wands",
    meaning: "A fresh spark of inspiration",
  },
  {
    name: "Two of Wands",
    slug: "two-of-wands",
    meaning: "Planning, first steps beyond comfort",
  },
  {
    name: "Three of Wands",
    slug: "three-of-wands",
    meaning: "Expansion, looking ahead",
  },
  {
    name: "Four of Wands",
    slug: "four-of-wands",
    meaning: "Celebration, homecoming, stability",
  },
  {
    name: "Five of Wands",
    slug: "five-of-wands",
    meaning: "Friction, competing ideas",
  },
  {
    name: "Six of Wands",
    slug: "six-of-wands",
    meaning: "Recognition, a well-earned win",
  },
  {
    name: "Seven of Wands",
    slug: "seven-of-wands",
    meaning: "Standing your ground",
  },
  {
    name: "Eight of Wands",
    slug: "eight-of-wands",
    meaning: "Things move fast now; keep up",
  },
  {
    name: "Nine of Wands",
    slug: "nine-of-wands",
    meaning: "Resilience after a long push",
  },
  {
    name: "Ten of Wands",
    slug: "ten-of-wands",
    meaning: "Carrying too much alone",
  },
  {
    name: "Page of Wands",
    slug: "page-of-wands",
    meaning: "Curiosity, an eager new idea",
  },
  {
    name: "Knight of Wands",
    slug: "knight-of-wands",
    meaning: "Bold action, restless energy",
  },
  {
    name: "Queen of Wands",
    slug: "queen-of-wands",
    meaning: "Confidence, warmth, magnetism",
  },
  {
    name: "King of Wands",
    slug: "king-of-wands",
    meaning: "Vision, leadership, bold direction",
  },

  // Cups
  {
    name: "Ace of Cups",
    slug: "ace-of-cups",
    meaning: "A new emotional beginning, open heart",
  },
  {
    name: "Two of Cups",
    slug: "two-of-cups",
    meaning: "Mutual connection, partnership",
  },
  {
    name: "Three of Cups",
    slug: "three-of-cups",
    meaning: "Friendship, celebration together",
  },
  {
    name: "Four of Cups",
    slug: "four-of-cups",
    meaning: "Apathy, missing what's in front of you",
  },
  {
    name: "Five of Cups",
    slug: "five-of-cups",
    meaning: "Grief, focusing on what's lost",
  },
  {
    name: "Six of Cups",
    slug: "six-of-cups",
    meaning: "Nostalgia, innocence, old memories",
  },
  {
    name: "Seven of Cups",
    slug: "seven-of-cups",
    meaning: "Choices, illusions, too many options",
  },
  {
    name: "Eight of Cups",
    slug: "eight-of-cups",
    meaning: "Walking away to seek something deeper",
  },
  {
    name: "Nine of Cups",
    slug: "nine-of-cups",
    meaning: "Contentment, wishes fulfilled",
  },
  {
    name: "Ten of Cups",
    slug: "ten-of-cups",
    meaning: "Lasting happiness, harmony at home",
  },
  {
    name: "Page of Cups",
    slug: "page-of-cups",
    meaning: "A gentle emotional message or idea",
  },
  {
    name: "Knight of Cups",
    slug: "knight-of-cups",
    meaning: "Romance, following the heart",
  },
  {
    name: "Queen of Cups",
    slug: "queen-of-cups",
    meaning: "Compassion, emotional depth",
  },
  {
    name: "King of Cups",
    slug: "king-of-cups",
    meaning: "Calm mastery over emotion",
  },

  // Swords
  {
    name: "Ace of Swords",
    slug: "ace-of-swords",
    meaning: "Clarity, a breakthrough idea",
  },
  {
    name: "Two of Swords",
    slug: "two-of-swords",
    meaning: "Indecision, a standoff within",
  },
  {
    name: "Three of Swords",
    slug: "three-of-swords",
    meaning: "Heartbreak, painful truth",
  },
  {
    name: "Four of Swords",
    slug: "four-of-swords",
    meaning: "Rest, recovery, stepping back",
  },
  {
    name: "Five of Swords",
    slug: "five-of-swords",
    meaning: "Conflict, a hollow victory",
  },
  {
    name: "Six of Swords",
    slug: "six-of-swords",
    meaning: "Moving on to calmer waters",
  },
  {
    name: "Seven of Swords",
    slug: "seven-of-swords",
    meaning: "Strategy, deception, acting alone",
  },
  {
    name: "Eight of Swords",
    slug: "eight-of-swords",
    meaning: "Feeling trapped by your own thoughts",
  },
  {
    name: "Nine of Swords",
    slug: "nine-of-swords",
    meaning: "Anxiety, sleepless worry",
  },
  {
    name: "Ten of Swords",
    slug: "ten-of-swords",
    meaning: "A definitive, painful ending",
  },
  {
    name: "Page of Swords",
    slug: "page-of-swords",
    meaning: "Curiosity, a sharp new perspective",
  },
  {
    name: "Knight of Swords",
    slug: "knight-of-swords",
    meaning: "Fast action, driven by conviction",
  },
  {
    name: "Queen of Swords",
    slug: "queen-of-swords",
    meaning: "Clear-eyed honesty, independence",
  },
  {
    name: "King of Swords",
    slug: "king-of-swords",
    meaning: "Logic, authority, clear judgment",
  },

  // Pentacles
  {
    name: "Ace of Pentacles",
    slug: "ace-of-pentacles",
    meaning: "A new opportunity, a practical beginning",
  },
  {
    name: "Two of Pentacles",
    slug: "two-of-pentacles",
    meaning: "Balancing priorities, adapting",
  },
  {
    name: "Three of Pentacles",
    slug: "three-of-pentacles",
    meaning: "Teamwork, skilled collaboration",
  },
  {
    name: "Four of Pentacles",
    slug: "four-of-pentacles",
    meaning: "Holding tight, security or stinginess",
  },
  {
    name: "Five of Pentacles",
    slug: "five-of-pentacles",
    meaning: "Hardship, feeling left out in the cold",
  },
  {
    name: "Six of Pentacles",
    slug: "six-of-pentacles",
    meaning: "Generosity, giving and receiving",
  },
  {
    name: "Seven of Pentacles",
    slug: "seven-of-pentacles",
    meaning: "Patience, assessing your investment",
  },
  {
    name: "Eight of Pentacles",
    slug: "eight-of-pentacles",
    meaning: "Diligence, mastering a craft",
  },
  {
    name: "Nine of Pentacles",
    slug: "nine-of-pentacles",
    meaning: "Self-sufficiency, enjoying your success",
  },
  {
    name: "Ten of Pentacles",
    slug: "ten-of-pentacles",
    meaning: "Legacy, long-term security",
  },
  {
    name: "Page of Pentacles",
    slug: "page-of-pentacles",
    meaning: "A practical new opportunity",
  },
  {
    name: "Knight of Pentacles",
    slug: "knight-of-pentacles",
    meaning: "Steady, methodical progress",
  },
  {
    name: "Queen of Pentacles",
    slug: "queen-of-pentacles",
    meaning: "Nurturing, practical abundance",
  },
  {
    name: "King of Pentacles",
    slug: "king-of-pentacles",
    meaning: "Mastery, financial security",
  },
];

export function getCardById(id) {
  const card = tarotCards[id];
  return { ...card, image: `/public/tarots/${card.slug}.jpg` };
}

export default tarotCards;
