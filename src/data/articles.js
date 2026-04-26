/**
 * articles.js
 * Precedent.news — Article Data Store
 *
 * Structure:
 * - id:        URL slug (kebab-case, unique)
 * - title:     Full headline
 * - dek:       Subheadline / deck text
 * - category:  Display category label
 * - section:   URL section (law | politics | courts | congress | business | ai-policy)
 * - date:      ISO date string
 * - readTime:  Estimated read time
 * - featured:  true = hero story
 * - developing: true = show "Developing" badge
 * - keyPoints: Array of bullet strings (3-5)
 * - body:      Object with section content
 * - scenarios: Array of scenario objects
 */

export const articles = [
  {
    id: "poll-trump-immigration-message-changed-voters-opinions-have-not",
    title: "Poll: Half of Americans Call Trump Mass Deportation Campaign Too Aggressive",
    dek: "A new POLITICO poll finds public opposition to Trump's immigration crackdown runs deep, including among a quarter of his own 2024 voters.",
    category: "Politics",
    section: "politics",
    date: "April 25, 2026",
    readTime: "4 min read",
    featured: false,
    developing: false,
    image: "",
    keyPoints: [
    "Fifty percent of Americans said Trump's mass deportation campaign is too aggressive, according to a new POLITICO poll., One quarter of Trump's own 2024 voters agreed the deportation effort has gone too far., The findings suggest the administration's shift in immigration messaging has not moved public opinion in its favor."
    ],
    body: {
      whatHappened: "A new POLITICO poll finds that half of Americans believe Trump's mass deportation campaign is too aggressive. The skepticism extends to the president's own coalition, with one in four Trump 2024 voters sharing that view. The results come as the administration has adjusted its public messaging around immigration enforcement.",
      analysis: "The poll data exposes a tension at the core of Trump's second-term immigration strategy. Winning coalitions rarely require unanimous support, but erosion among a quarter of core supporters signals meaningful political risk, particularly in midterm environments where base turnout is decisive. The administration has framed mass deportations through shifting rationales, including public safety, economic competition, and national sovereignty, yet none of those frames appears to have expanded the policy's appeal beyond its original ceiling. This pattern is consistent with research showing that policy attitudes on immigration are sticky and resistant to elite messaging once formed. The legal apparatus underpinning the deportation campaign, including expanded use of expedited removal and third-country deportation agreements, has also drawn sustained court challenges, which may reinforce public unease by keeping high-profile cases in the news cycle. Historically, enforcement-heavy immigration policies generate short-term political energy but face diminishing returns as human-interest stories accumulate.",
      whyItMatters: "Republican strategists face a narrowing path if the deportation campaign continues to alienate a measurable share of Trump voters ahead of the 2026 midterms. Immigrant communities and civil liberties advocates gain political credibility as polling validates their claims of overreach. Democrats, who have struggled to unify around an immigration counter-message, now have independent data to anchor their criticism. The White House faces pressure to either moderate enforcement visibly or double down and accept elevated political costs."
    },
    scenarios: [
    {
      type: "",
      label: "",
      body: ""
    }
    ]
  },
  {
    id: "why-steve-hilton-thinks-he-can-turn-california-red",
    title: "Why Steve Hilton Thinks He Can Turn California Red",
    dek: "The former Fox News host is betting that voter frustration with progressive governance can flip the nation's bluest large state.",
    category: "Politics",
    section: "politics",
    date: "July 25, 2025",
    readTime: "3 min read",
    featured: false,
    developing: false,
    keyPoints: [
      "Steve Hilton, a British-born conservative commentator and former Fox News host, is considering a run for governor of California.",
      "Hilton argues that rising homelessness, high costs of living, and chronic mismanagement have made California voters more open to a Republican candidate than at any point in decades.",
      "California has not elected a Republican governor since Arnold Schwarzenegger won re-election in 2006, making any GOP path to victory an uphill structural challenge."
    ],
    body: {
      whatHappened: "Steve Hilton, a British-born conservative strategist and former Fox News host, has signaled interest in running for governor of California, arguing the state is ripe for a Republican turnaround. Hilton has promoted his case through media appearances and online content, pointing to voter dissatisfaction with homelessness, crime, and the high cost of living under Democratic leadership. No formal campaign announcement has been made.",
      analysis: "Hilton's theory of the case rests on the assumption that policy failure, rather than partisan identity, now drives California voter behavior. Polling has shown modest Republican gains among Latino and working-class voters in the state, a trend that accelerated during the 2024 cycle when Donald Trump outperformed prior GOP nominees in several Southern California counties. However, California's registered Democratic voter advantage exceeds five million, and statewide Republicans have repeatedly failed to recruit candidates capable of consolidating that latent discontent into a winning coalition. Hilton's profile as a media figure rather than an elected official cuts both ways: he carries no legislative baggage but also lacks a donor network and ground infrastructure that a serious statewide campaign requires. The 2026 primary field is expected to be crowded, and California's top-two primary system means a fractured GOP vote could produce a general election matchup between two Democrats, rendering Hilton's candidacy irrelevant before November.",
      whyItMatters: "A credible Republican gubernatorial campaign in California would force Democrats to spend resources defending territory they have long taken for granted. Business groups frustrated by regulation and taxation could provide Hilton with an unusual funding base if he enters the race formally. Conversely, a poorly organized campaign risks reinforcing the narrative that the California GOP cannot field serious candidates, further demoralizing the state party ahead of future cycles."
    },
    scenarios: []
  },
  {
    id: "democrats-fifa-affordability-cost-of-living",
    title: "Democrats Target FIFA as Their New Affordability Villain",
    dek: "Congressional Democrats are folding FIFA's ticket and hospitality pricing into a broader cost-of-living campaign ahead of the 2026 World Cup.",
    category: "Politics",
    section: "politics",
    date: "July 25, 2025",
    readTime: "3 min read",
    featured: false,
    developing: false,
    keyPoints: [
      "Democrats are targeting FIFA alongside groceries, utilities, and landlords in their emerging cost-of-living messaging strategy.",
      "The 2026 FIFA World Cup, hosted across the United States, Canada, and Mexico, has given lawmakers a concrete and timely hook for affordability arguments.",
      "Progressive and moderate Democrats alike see FIFA pricing practices as a politically safe target that resonates with working-class voters."
    ],
    body: {
      whatHappened: "Democratic lawmakers and strategists are incorporating FIFA into their cost-of-living messaging, framing the world soccer governing body as another corporate actor squeezing American consumers. The push comes ahead of the 2026 FIFA World Cup, which will be hosted in part by American cities. Complaints center on ticket prices, hospitality packages, and ancillary costs that critics say put the tournament out of reach for ordinary fans.",
      analysis: "Democrats are broadening their affordability coalition by adding a culturally resonant target to a list that already includes supermarkets, energy companies, and landlords. The FIFA angle offers a rare opportunity to criticize a foreign-headquartered organization on domestic consumer grounds without triggering traditional free-trade sensitivities. FIFA operates as a nonprofit under Swiss law but generates billions in commercial revenue, a structure that gives politicians room to argue that consumer protections and antitrust scrutiny should apply to its U.S. market activities. The political mechanics are straightforward: attaching a globally recognized villain to a price-gouging narrative reinforces a populist economic frame that party strategists believe drives turnout among lower- and middle-income voters. Whether lawmakers pursue actual legislation, such as ticketing transparency requirements or antitrust referrals, or keep the campaign rhetorical remains the central unresolved question.",
      whyItMatters: "Fans in host cities including New York, Los Angeles, Dallas, and Miami face a direct cost impact if ticket and ancillary pricing remains at current levels. Local small businesses that expected a tourism windfall could find themselves undercut if high prices suppress attendance or fan spending. Democrats in competitive suburban districts gain a low-risk populist message that does not require a floor vote or committee action to land with voters. FIFA and its commercial partners, including sponsors and broadcasters, face reputational pressure that could complicate negotiations over future U.S. hosting rights."
    },
    scenarios: []
  },
  {
    id: "pappas-holds-cash-advantage-over-gop-rivals-new-hampshire",
    title: "Pappas Holds Cash Advantage Over GOP Rivals in New Hampshire",
    dek: "The Democratic candidate has out-raised and out-banked his Republican opponents ahead of the Senate race.",
    category: "Politics",
    section: "politics",
    date: "April 25, 2026",
    readTime: "6 min read",
    featured: false,
    developing: false,
    keyPoints: [
      "Democrat Chris Pappas has raised more money than each of his Republican competitors in the New Hampshire Senate race.",
      "Pappas holds a larger cash-on-hand balance than his GOP rivals, giving him a structural advantage heading into the campaign.",
      "The fundraising gap signals differing levels of donor enthusiasm and organizational strength between the two parties in New Hampshire."
    ],
    body: {
      whatHappened: "Democrat Chris Pappas has out-raised his Republican competitors in the New Hampshire Senate race and holds more cash on hand than any of his GOP rivals. The fundraising figures reflect the most recent campaign finance reporting period. Pappas is running for the Senate seat in a state that has trended competitive in recent election cycles.",
      analysis: "A cash advantage at this stage of a Senate race carries compounding benefits. Candidates with larger war chests can lock in advertising rates earlier, build ground operations sooner, and deter potential donors from giving to opponents. Republican rivals who trail in fundraising face a harder path to viability, as donor networks often consolidate around candidates who demonstrate financial momentum. In competitive states like New Hampshire, early money also influences how party committees and outside groups allocate resources, creating a feedback loop that can widen initial gaps. The Democratic advantage here may reflect stronger small-dollar donor infrastructure built during previous Pappas congressional campaigns.",
      whyItMatters: "A sustained cash gap benefits Pappas by allowing earlier and heavier investment in voter contact and media. Republican candidates who cannot close the fundraising deficit risk being passed over by national party committees focused on winnable races. New Hampshire is a perennial battleground, and control of the Senate could hinge on outcomes in states like this. Voters in the state will likely see an asymmetric air war if the financial disparity persists through the summer."
    },
    scenarios: []
  },
  {
    id: "barr-keeps-cash-lead-kentucky-senate-gop-primary",
    title: "Barr Keeps Cash Lead in Kentucky Senate GOP Primary",
    dek: "Rep. Andy Barr holds a nearly $4.2 million war chest as the Kentucky Senate Republican primary heats up.",
    category: "Politics",
    section: "politics",
    date: "April 25, 2026",
    readTime: "6 min read",
    featured: false,
    developing: false,
    keyPoints: [
      "Rep. Andy Barr leads Kentucky Senate GOP primary rivals in cash on hand with nearly $4.2 million.",
      "The fundraising advantage gives Barr a structural edge in paid media and ground operations heading into the primary.",
      "Rivals will need to close the financial gap quickly or rely on outside spending to remain competitive."
    ],
    body: {
      whatHappened: "Rep. Andy Barr holds a cash-on-hand lead of nearly $4.2 million in the Kentucky Republican Senate primary. The fundraising figures reflect the most recent filing period and place Barr ahead of his primary competitors. The seat is open following Sen. Mitch McConnell's announcement that he would not seek another term.",
      analysis: "Money does not guarantee primary victories, but it creates compounding advantages that are difficult for rivals to overcome. Barr can lock in early advertising rates, build a professional field operation, and weather unexpected attacks without scrambling for emergency fundraising. In Senate primaries with crowded fields, candidates who trail badly in cash often depend on super PAC intervention or earned media from controversy, both of which are unreliable substitutes. Kentucky's GOP primary electorate leans heavily toward candidates with institutional credibility, and a strong war chest signals exactly that to donors, party operatives, and voters who read endorsement cues from financial momentum. The open seat dynamic also raises the stakes considerably, as the winner is heavily favored in a general election in a state Donald Trump carried by wide margins. Barr's incumbency as a House member gives him a donor network that challengers without federal fundraising experience will struggle to replicate.",
      whyItMatters: "A well-funded primary frontrunner can define rivals before those rivals define themselves, a decisive advantage in a low-information primary race. Voters who lack strong candidate preferences often default to the candidate they recognize, and name recognition is purchased largely through advertising. Outside groups backing underfunded challengers will face pressure to spend early and heavily just to keep the race competitive. The eventual Republican nominee is widely expected to win the general election, making the primary the decisive contest for who represents Kentucky in the Senate."
    },
    scenarios: []
  },
  {
    id: "iran-ship-seizure",
    title: "The US Navy Seizes an Iranian Cargo Ship in the Gulf. The Legal and Strategic Fallout Is Just Beginning.",
    dek: "The boarding operation marks the first publicly confirmed enforcement action under Trump's stated naval blockade of Iran. But the word 'blockade' carries legal obligations the administration may not intend.",
    category: "Law",
    section: "law",
    date: "April 23, 2026",
    readTime: "8 min read",
    featured: true,
    developing: false,
    keyPoints: [
      "US naval forces boarded and seized an Iranian-flagged cargo vessel in the Gulf of Oman, releasing video footage.",
      "President Trump described the seizure as enforcement of a naval blockade — a term with demanding legal meaning under international law.",
      "The release of video footage is a deliberate signaling act designed for Iranian, regional, and domestic audiences.",
      "The seizure occurs against the backdrop of active US-Iran nuclear negotiations in Oman, creating tension between diplomatic and military tracks."
    ],
    body: {
      whatHappened: "US Navy forces intercepted and boarded an Iranian-flagged cargo ship in the Gulf, seizing the vessel and releasing video documentation of the operation. President Trump announced the action, characterizing it as enforcement of a naval blockade against Iran. The footage showed armed US personnel conducting a shipboarding in contested waters.",
      analysis: "The word 'blockade' is doing enormous legal and political work here. Under international law, a blockade is an act of war that requires formal declaration, notification to neutral states, and consistent enforcement without discrimination. None of those conditions have been publicly established. What the US is more likely conducting is a pattern of interdictions under existing executive authority and UN Security Council sanctions resolutions targeting Iranian arms transfers. Trump's use of the blockade framing is designed to maximize deterrent pressure on Tehran, not to establish a formal legal posture.",
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
    keyPoints: [
      "A Kuwaiti court acquitted journalist Ahmed Shihab-Eldin on charges of spreading false information via social media reposts.",
      "The case drew international attention because Shihab-Eldin holds dual US-Kuwaiti citizenship.",
      "Press freedom organizations had called the charges an overreach of Kuwait's cybercrime statutes."
    ],
    body: {
      whatHappened: "A Kuwaiti court acquitted US-Kuwaiti journalist Ahmed Shihab-Eldin on charges that included spreading false information. Authorities had detained Shihab-Eldin after he reposted images on social media related to the conflict involving Iran.",
      analysis: "Kuwait criminalizes the spread of false information and content deemed harmful to national security under its cybercrime and press laws. The case drew attention from press freedom organizations and US officials because Shihab-Eldin held dual citizenship. The acquittal does not alter the statutes under which he was charged — it only establishes that reposting content does not automatically constitute original criminal speech under the specific facts presented.",
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
    dek: "The policy change shifts federal treatment of marijuana without creating full legalization — and leaves a tangle of legal questions for businesses and prosecutors.",
    category: "Congress",
    section: "congress",
    date: "April 23, 2026",
    readTime: "6 min read",
    featured: false,
    developing: false,
    keyPoints: [
      "The DEA finalized a rule reclassifying cannabis from Schedule I to Schedule III under the Controlled Substances Act.",
      "The change does not legalize recreational marijuana at the federal level.",
      "Cannabis businesses operating legally under state law may gain access to standard federal tax deductions previously blocked by a tax code provision targeting Schedule I drug traffickers."
    ],
    body: {
      whatHappened: "The Trump administration moved to reschedule cannabis from Schedule I to Schedule III under the Controlled Substances Act. The Drug Enforcement Administration finalized the rule following a recommendation from the Department of Health and Human Services.",
      analysis: "Under the Controlled Substances Act of 1970, Schedule I drugs are defined as having no accepted medical use and a high potential for abuse. Marijuana has held that classification for over 50 years. Schedule III drugs, which now include cannabis, are defined as having moderate to low potential for dependence. The Biden administration initiated this rescheduling process in 2024. The Trump administration continued and completed that process. The rescheduling does not affect the legal status of recreational cannabis in states where it remains prohibited.",
      whyItMatters: "Researchers will face fewer federal barriers to studying cannabis, which scientists have long cited as an obstacle to clinical trials. Marijuana businesses operating legally under state law may gain access to standard federal tax deductions previously blocked by the tax code provision targeting Schedule I drug traffickers."
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
