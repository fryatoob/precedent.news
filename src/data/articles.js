/**
 * articles.js
 * Precedent.news — Article Data Store
 *
 * Fields:
 * - id:        URL slug (kebab-case, unique)
 * - title:     Full headline
 * - dek:       Subheadline
 * - category:  Display label
 * - section:   law | politics | courts | congress | business | ai-policy
 * - date:      Date string
 * - readTime:  e.g. "6 min read"
 * - featured:  true = hero story
 * - developing: true = show Developing badge
 * - image:     Article image URL from source
 * - keyPoints: Array of strings
 * - body:      { whatHappened, analysis, whyItMatters }
 * - scenarios: Array of { type, label, body }
 */

export const articles = [
  {
    id: "the-nations-cartoonists-on-the-week-in-politics",
    title: "The Nation's Cartoonists on the Week in Politics",
    dek: "]Political cartoonists from across the spectrum capture the defining moments of the week in Washington and beyond.",
    category: "Politics",
    section: "politics",
    date: "April 25, 2026",
    readTime: "5 min read",
    featured: false,
    developing: false,
    image: "",
    keyPoints: [

    ],
    body: {
      whatHappened: "Political cartoonists from around the country submitted illustrations this week capturing major political events, controversies and personalities. The collection, edited by Politico's Matt Wuerker, pulls from artists representing liberal, conservative and centrist perspectives. The roundup reflects the dominant political stories and public figures that defined the news cycle.",
      analysis: "Editorial cartooning occupies a distinct role in American political discourse, functioning simultaneously as journalism, art and advocacy. The format compresses complex policy arguments into single images, forcing artists to identify the sharpest angle on any given controversy. Historically, cartoons have shaped public perception of political figures in ways that straight news coverage cannot, leveraging exaggeration and symbolism to cut through information saturation. The inclusion of cartoonists across the political spectrum signals an editorial commitment to ideological balance, though the selection process itself inevitably reflects editorial judgment. Aggregated cartoon roundups also function as a barometer of which stories dominated the national conversation during any given week. The medium remains one of the few forms of political commentary with constitutional protections rooted directly in landmark Supreme Court precedent.",
      whyItMatters: "Readers across the political spectrum engage with cartoon commentary in ways that differ from traditional news consumption, often sharing images that confirm existing viewpoints. Politicians and their communications teams monitor editorial cartoon coverage as a gauge of how their public image is being shaped. Cartoonists themselves wield meaningful soft power, and sustained satirical attention on a political figure can cement negative narratives that persist beyond the news cycle. The weekly format ensures ongoing accountability for public figures regardless of the dominant news story."
    },
    scenarios: [

    ]
  },
  {
    id: "dirk-kempthorne-former-idaho-governor-interior-secretary-dies",
    title: "Dirk Kempthorne, Former Idaho Governor and U.S. Interior Secretary, Dies at 74",
    dek: "]The Republican statesman, who served under President George W. Bush, died after a battle with colon cancer.",
    category: "Politics",
    section: "politics",
    date: "April 25, 2026",
    readTime: "5 min read",
    featured: false,
    developing: false,
    image: "",
    keyPoints: [

    ],
    body: {
      whatHappened: "Dirk Kempthorne, a Republican who served as Idaho governor, U.S. senator, and Secretary of the Interior under President George W. Bush, died at age 74. He had been diagnosed with colon cancer last year. Kempthorne held the Interior post from 2006 to 2009, overseeing federal land and natural resource policy.",
      analysis: "Kempthorne's career reflected the political trajectory of Western Republicans who built their brands on resource development and limited federal intervention in state land management. As Interior secretary, he faced persistent criticism from environmental groups over decisions affecting endangered species listings and energy extraction on federal lands. His tenure coincided with rising debates over climate policy and public lands use that have only intensified since. Kempthorne also navigated the complex relationship between the federal government and Western states, a tension that remains central to Republican politics in the region. His death removes one of the more prominent figures from the Bush-era Republican establishment in the Mountain West.",
      whyItMatters: "Kempthorne's passing closes a chapter on a brand of Western Republicanism that emphasized resource development and state authority over federal land management. Conservation advocates who clashed with him during his Interior tenure are unlikely to mourn his policy legacy, while industry groups and Western land-use advocates lose a longtime ally. His career also illustrates how Idaho has evolved from a state that produced prominent moderate Republicans to one now defined by its hard-right faction."
    },
    scenarios: [

    ]
  },
  {
    id: "iran-ship-seizure",
    title: "The US Navy Seizes an Iranian Cargo Ship in the Gulf. The Legal and Strategic Fallout Is Just Beginning.",
    dek: "The boarding operation marks the first publicly confirmed enforcement action under Trump's stated naval blockade of Iran. But the word blockade carries legal obligations the administration may not intend.",
    category: "Law",
    section: "law",
    date: "April 23, 2026",
    readTime: "8 min read",
    featured: true,
    developing: false,
    image: "",
    keyPoints: [
      "US naval forces boarded and seized an Iranian-flagged cargo vessel in the Gulf of Oman, releasing video footage.",
      "President Trump described the seizure as enforcement of a naval blockade, a term with demanding legal meaning under international law.",
      "The release of video footage is a deliberate signaling act designed for Iranian, regional, and domestic audiences simultaneously.",
      "The seizure occurs against the backdrop of active US-Iran nuclear negotiations in Oman, creating direct tension between diplomatic and military tracks."
    ],
    body: {
      whatHappened: "US Navy forces intercepted and boarded an Iranian-flagged cargo ship in the Gulf, seizing the vessel and releasing video documentation of the operation. President Trump announced the action, characterizing it as enforcement of a naval blockade against Iran. The footage showed armed US personnel conducting a shipboarding in contested waters.",
      analysis: "The word blockade is doing enormous legal and political work here. Under international law, a blockade is an act of war that requires formal declaration, notification to neutral states, and consistent enforcement without discrimination. None of those conditions have been publicly established. What the US is more likely conducting is a pattern of interdictions under existing executive authority and UN Security Council sanctions resolutions targeting Iranian arms transfers. Trump's use of the blockade framing is designed to maximize deterrent pressure on Tehran, not to establish a formal legal posture.",
      whyItMatters: "For Iran, this demonstrates the US is willing to impose costs on Iranian commerce and prestige without waiting for a diplomatic resolution. For US allies in Europe and Asia who depend on Gulf shipping lanes, the seizure raises questions about whether American naval operations could trigger broader disruptions to commercial traffic."
    },
    scenarios: [
      {
        type: "likely",
        label: "Most Likely Outcome",
        body: "Iran files formal protests through the International Maritime Organization and the UN Security Council while avoiding military escalation. The nuclear talks in Oman continue but with reduced Iranian flexibility. Gulf shipping insurance premiums rise 15 to 25 percent within the month."
      },
      {
        type: "alternative",
        label: "Alternative Path",
        body: "Iran suspends nuclear negotiations in Oman, citing the seizure as evidence of American bad faith. European mediators intervene to restart talks under modified terms that include a naval de-escalation framework."
      },
      {
        type: "wildcard",
        label: "Wildcard Risk",
        body: "An Iranian Revolutionary Guard Corps naval unit engages a US vessel during a future interdiction attempt, triggering a limited military exchange in the Strait of Hormuz. Oil prices spike 20 percent within 48 hours."
      }
    ]
  },
  {
    id: "kuwait-journalist",
    title: "Kuwaiti Court Acquits US-Kuwaiti Journalist Charged Over Social Media Reposts",
    dek: "The ruling narrows the government's room to treat reposted political commentary as original criminal speech.",
    category: "Courts",
    section: "courts",
    date: "April 23, 2026",
    readTime: "4 min read",
    featured: false,
    developing: true,
    image: "",
    keyPoints: [
      "A Kuwaiti court acquitted journalist Ahmed Shihab-Eldin on charges of spreading false information via social media reposts.",
      "The case drew international attention because Shihab-Eldin holds dual US-Kuwaiti citizenship.",
      "Press freedom organizations had called the charges an overreach of Kuwait's cybercrime statutes."
    ],
    body: {
      whatHappened: "A Kuwaiti court acquitted US-Kuwaiti journalist Ahmed Shihab-Eldin on charges that included spreading false information. Authorities had detained Shihab-Eldin after he reposted images on social media related to the conflict involving Iran.",
      analysis: "Kuwait criminalizes the spread of false information and content deemed harmful to national security under its cybercrime and press laws. The case drew attention from press freedom organizations and US officials because Shihab-Eldin held dual citizenship. The acquittal does not alter the statutes under which he was charged.",
      whyItMatters: "Press freedom organizations had called for Shihab-Eldin's release, arguing the charges targeted legitimate journalistic activity. The case carried implications for other journalists and dual nationals operating in Gulf states under similar legal frameworks."
    },
    scenarios: [
      {
        type: "likely",
        label: "Most Likely Outcome",
        body: "Prosecutors decline to appeal. The case becomes a reference point in future cybercrime prosecutions involving reposted content, marginally raising the evidentiary bar for similar charges."
      },
      {
        type: "alternative",
        label: "Alternative Path",
        body: "Kuwait's parliament uses the case to debate revisions to its cybercrime statutes, with international pressure from the US State Department contributing to legislative reform."
      }
    ]
  },
  {
    id: "cannabis-rescheduling",
    title: "Cannabis Rescheduling Clears Federal Hurdle as DEA Finalizes Schedule III Rule",
    dek: "The policy change shifts federal treatment of marijuana without creating full legalization and leaves a tangle of legal questions for businesses and prosecutors.",
    category: "Congress",
    section: "congress",
    date: "April 23, 2026",
    readTime: "6 min read",
    featured: false,
    developing: false,
    image: "",
    keyPoints: [
      "The DEA finalized a rule reclassifying cannabis from Schedule I to Schedule III under the Controlled Substances Act.",
      "The change does not legalize recreational marijuana at the federal level.",
      "Cannabis businesses operating legally under state law may gain access to standard federal tax deductions previously blocked by a tax code provision targeting Schedule I drug traffickers."
    ],
    body: {
      whatHappened: "The Trump administration moved to reschedule cannabis from Schedule I to Schedule III under the Controlled Substances Act. The Drug Enforcement Administration finalized the rule following a recommendation from the Department of Health and Human Services.",
      analysis: "Under the Controlled Substances Act of 1970, Schedule I drugs are defined as having no accepted medical use and a high potential for abuse. Marijuana has held that classification for over 50 years. Schedule III drugs, which now include cannabis, are defined as having moderate to low potential for dependence. The rescheduling does not affect the legal status of recreational cannabis in states where it remains prohibited.",
      whyItMatters: "Researchers will face fewer federal barriers to studying cannabis. Marijuana businesses operating legally under state law may gain access to standard federal tax deductions previously blocked by the tax code provision targeting Schedule I drug traffickers."
    },
    scenarios: [
      {
        type: "likely",
        label: "Most Likely Outcome",
        body: "Congress moves to further codify cannabis protections or push for full descheduling through legislation. Federal prosecutors update enforcement guidance to reflect the new classification."
      },
      {
        type: "alternative",
        label: "Alternative Path",
        body: "The rescheduling survives legal challenges from opponents of expanded cannabis access, but state-level prohibition remains unchanged in roughly a dozen states."
      }
    ]
  }
];

export function getFeatured() {
  return articles.find(a => a.featured) || articles[0];
}

export function getDeveloping() {
  return articles.filter(a => !a.featured).slice(0, 4);
}

export function getLatest(limit = 6) {
  return articles.slice(0, limit);
}

export function getBySection(section, limit = 10) {
  return articles.filter(a => a.section === section).slice(0, limit);
}

export function getById(id) {
  return articles.find(a => a.id === id);
}
