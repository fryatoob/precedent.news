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
    id: "mark-kelly-cashing-in-trump-seditious-six-attacks",
    title: "Mark Kelly Keeps Cashing In on Trump's 'Seditious Six' Attacks",
    dek: "The Arizona senator's fundraising surge from Trump's attacks fuels growing speculation about a 2028 presidential run.",
    category: "Politics",
    section: "politics",
    date: "April 25, 2026",
    readTime: "4 min read",
    featured: false,
    developing: false,
    image: "",
    keyPoints: [
    "Sen. Mark Kelly has converted Trump's 'Seditious Six' attacks into a substantial fundraising advantage., The fundraising haul is amplifying speculation that Kelly is positioning for a 2028 presidential bid., Kelly joins a small group of Democrats who have turned Trump criticism into a political and financial asset."
    ],
    body: {
      whatHappened: "Sen. Mark Kelly (D-Ariz.) has continued to raise significant campaign funds following President Trump's labeling of him and other Democrats as the 'Seditious Six.' The fundraising performance has drawn attention from party operatives and donors who see Kelly as a potential 2028 presidential contender. Kelly has not publicly confirmed any interest in a presidential run.",
      analysis: "Trump's attacks on targeted Democrats have repeatedly produced a predictable feedback loop: provocation drives media attention, which drives small-dollar donor activation, which strengthens the attacked politician's national profile. Kelly benefits disproportionately because his biography as a former astronaut and Navy combat veteran insulates him from charges of radicalism, making the 'seditious' label appear especially implausible to persuadable voters. The financial mechanics here are straightforward: email and digital fundraising programs depend on emotional triggers, and a presidential attack from Trump is among the most reliable such triggers available to Democrats. Kelly's Arizona base also gives him credibility in a competitive Sun Belt state that both parties view as central to any 2028 electoral map. The danger for Kelly is that sustained national positioning before 2028 could complicate his standing in Arizona, where independent voters tend to punish politicians who appear too focused on personal advancement. Still, the donor network he builds now converts directly into organizational infrastructure if he does choose to run.",
      whyItMatters: "Democratic donors hungry for a centrist, military-credentialed candidate in 2028 see Kelly's fundraising as a proof-of-concept for his national viability. Republican strategists lose a degree of control over the 'Seditious Six' narrative if the attacks continue to generate money and visibility for their targets. Arizona Democrats gain a higher-profile senator with more resources, but risk a leadership vacuum if Kelly pivots fully toward a presidential campaign. Voters in competitive states get an early look at a potential Democratic standard-bearer whose pitch centers on biography and moderation rather than ideological positioning."
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
    id: "senate-democratic-candidates-posting-huge-fundraising-hauls",
    title: "Senate Democratic Candidates Are Posting Huge Fundraising Hauls",
    dek: "James Talarico leads the pack with a \$27 million haul as Democrats flood Senate battlegrounds with cash.",
    category: "Politics",
    section: "politics",
    date: "April 25, 2026",
    readTime: "3 min read",
    featured: false,
    developing: false,
    image: "",
    keyPoints: [
    "James Talarico raised \$27 million, the top figure among Senate Democratic candidates this cycle., Multiple Democratic Senate candidates are reporting strong fundraising numbers ahead of the 2026 midterms., The hauls signal significant donor enthusiasm for Democratic efforts to contest or flip Senate seats."
    ],
    body: {
      whatHappened: "Senate Democratic candidates reported strong fundraising figures in the latest disclosure period, with Texas candidate James Talarico leading at \$27 million raised. The numbers reflect broad donor engagement across multiple competitive Senate races. Democrats are targeting several seats as they seek to shift the chamber's balance of power in the 2026 midterms.",
      analysis: "Large fundraising totals at this stage of a cycle carry real strategic weight. They signal candidate viability to party committees, which then use the data to decide where to direct independent expenditures. Talarico's \$27 million in Texas is particularly notable because the state has long been considered structurally difficult for Democrats at the statewide level, and that sum suggests donors believe a genuine contest is possible. Across the broader map, coordinated fundraising strength forces Republican incumbents and candidates to spend earlier and more defensively, which can constrain their own strategic flexibility. Money also buys organizational infrastructure, including field staff and data operations, that compounds in value as election day approaches. The scale of these hauls suggests outside Democratic groups will feel more confident co-investing in these races.",
      whyItMatters: "Democratic donors and allied outside groups gain leverage and data to make earlier, larger commitments to competitive Senate races. Republican incumbents facing well-funded challengers must divert resources from offensive opportunities to defensive ones. A strong fundraising environment for Democrats increases the probability that the 2026 Senate map becomes genuinely competitive rather than structurally favorable to Republicans. Voters in states like Texas could see unprecedented levels of campaign advertising and ground activity as a result."
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
    id: "rick-jackson-cannonballed-into-the-governor-race-ripple-effects-across-georgia",
    title: "Rick Jackson Cannonballs Into Georgia Governor Race, Rattling Republicans Statewide",
    dek: "His air war dominance is draining oxygen and donor attention from Republican candidates in races across Georgia.",
    category: "Politics",
    section: "politics",
    date: "April 25, 2026",
    readTime: "4 min read",
    featured: false,
    developing: false,
    image: "",
    keyPoints: [
    "Rick Jackson entered the Georgia governor race and quickly dominated television and digital advertising across the state., His rapid rise is generating frustration among Republican candidates in down-ballot and statewide races who say his spending crowds out their messaging., The spillover effects raise questions about donor bandwidth and voter attention heading into primary season."
    ],
    body: {
      whatHappened: "Rick Jackson entered the Georgia governor race and swiftly established a commanding presence on the airwaves, outspending rivals and drawing statewide attention. His aggressive ad campaign is generating friction among fellow Republicans who say his dominance is disrupting their own races. The ripple effects are being felt across multiple competitive contests in Georgia.",
      analysis: "When a well-funded candidate floods a media market, the externalities extend far beyond the top of the ticket. Advertising inventory tightens, costs rise for other campaigns, and voters become saturated with a single candidate's framing before down-ballot candidates can establish their own identities. Jackson's rapid ascent suggests either significant self-funding capacity or an early consolidation of major donor networks, both of which structurally disadvantage competitors who rely on incremental fundraising. In primary environments, name recognition built through paid media creates compounding advantages: polling improves, earned media follows, and donors gravitate toward perceived frontrunners. The frustration among Georgia Republicans reflects a rational collective action problem where individual self-interest in winning the governorship imposes costs on the broader party ecosystem. If Jackson's spending compresses the competitive field prematurely, it could reduce intraparty accountability while also shaping which candidates survive to compete in November.",
      whyItMatters: "Republican candidates in Georgia legislative and statewide races stand to lose donor attention and media space to Jackson's operation, potentially starving their campaigns of early momentum. Voters in media markets saturated by governor's race advertising may tune out lower-profile races, hurting candidates who lack independent name recognition. Jackson benefits from a self-reinforcing cycle where early spending builds the polling leads that justify further spending. Georgia Democrats could gain if Republican down-ballot candidates are weakened by internal resource competition before the general election."
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
    id: "albanys-influence-wars",
    title: "Albany's Influence Wars",
    dek: "Competing lobbying interests are reshaping the balance of power in New York's state capital.",
    category: "Politics",
    section: "politics",
    date: "April 25, 2026",
    readTime: "4 min read",
    featured: false,
    developing: false,
    image: "",
    keyPoints: [
    "Lobbying activity in Albany has intensified as major industry and advocacy groups compete for legislative access, Key policy battles over housing, healthcare, and energy are drawing record spending from organized interests, Lawmakers face mounting pressure from both corporate donors and grassroots coalitions ahead of the budget cycle"
    ],
    body: {
      whatHappened: "Lobbying expenditures in Albany have surged as competing interest groups seek to shape New York state legislation on housing, healthcare, and energy policy. Industry coalitions and advocacy organizations have deployed lobbyists and campaign contributions to secure access to key committee chairs and leadership offices. The activity intensifies as the state legislature approaches critical budget and policy deadlines.",
      analysis: "Albany has long operated as a three-men-in-a-room system, concentrating power in the governor, the Assembly speaker, and the Senate majority leader, which creates a small number of high-value access points that lobbyists can target efficiently. This structural concentration raises the return on lobbying investment relative to more diffuse legislatures, attracting proportionally higher spending per bill. When budget deadlines compress the legislative calendar, the opportunity cost of inaction rises sharply for interest groups, pushing spending higher still. Corporate interests typically hold an organizational advantage over diffuse public constituencies because they can sustain year-round lobbying operations rather than mobilizing episodically. Disclosure rules in New York require lobbyists to report expenditures above certain thresholds, but coordination through nonprofit intermediaries and coalition front groups can obscure the true origin of influence campaigns. The net effect is a market for political access where well-financed groups extract policy rents at the expense of unorganized taxpayers and consumers.",
      whyItMatters: "Industries with concentrated stakes in Albany decisions, including real estate developers, hospital networks, and utilities, stand to gain or lose hundreds of millions of dollars depending on regulatory and budget outcomes. Tenant advocates, patient groups, and environmental coalitions with smaller war chests face structural disadvantages in sustained influence campaigns. Rank-and-file New Yorkers bear the fiscal and regulatory costs of policies shaped by opaque lobbying battles they cannot easily monitor. Legislators in competitive districts face the sharpest tradeoffs between donor demands and constituent preferences as election cycles approach."
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
    id: "dirk-kempthorne-former-idaho-governor-us-interior-secretary-dies-at-74",
    title: "Dirk Kempthorne, Former Idaho Governor and U.S. Interior Secretary, Dies at 74",
    dek: "The Republican politician served as governor of Idaho and led the Interior Department under President George W. Bush.",
    category: "Politics",
    section: "politics",
    date: "April 25, 2026",
    readTime: "2 min read",
    featured: false,
    developing: false,
    image: "",
    keyPoints: [
    "Dirk Kempthorne died at age 74 after a colon cancer diagnosis last year., Kempthorne served as governor of Idaho and as U.S. Secretary of the Interior under President George W. Bush., He was a prominent Republican figure in Western state politics and federal land management policy."
    ],
    body: {
      whatHappened: "Dirk Kempthorne, a Republican who served as governor of Idaho and as U.S. Secretary of the Interior under President George W. Bush, died at age 74. He had been diagnosed with colon cancer last year. Kempthorne also previously served as a U.S. senator representing Idaho.",
      analysis: "Kempthorne's career traced the arc of Western Republican politics, where tensions between federal land control and state autonomy defined much of the policy landscape. As Interior secretary from 2006 to 2009, he oversaw a department that manages roughly 20 percent of U.S. land, giving him significant influence over energy development, conservation, and Native American affairs. His tenure coincided with growing industry pressure to expand oil and gas extraction on federal lands, a debate that remains central to Interior Department policy today. His background as a Western governor shaped his approach to federalism, favoring greater state input into land-use decisions. The political coalition he represented, fiscally conservative and skeptical of federal overreach, continues to drive Republican energy and environmental policy.",
      whyItMatters: "Kempthorne's death removes a significant voice from the cohort of Republican officials who shaped federal land and energy policy in the post-Clinton era. Western states and energy industry stakeholders lose an experienced advocate who understood both executive branch mechanics and state-level political pressures. Conservation groups, who often clashed with his Interior Department over endangered species and drilling decisions, viewed his legacy as a cautionary example of industry-friendly federal management. His career reflected enduring conflicts over who controls vast stretches of public land in the American West."
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
    id: "iran-paris-weather-prediction-market-violations",
    title: "From Iran to Paris Weather: Alleged Prediction Market Violations Start Stacking Up",
    dek: "]Regulators and frontline Democrats are clashing over jurisdiction as complaints against prediction market platforms multiply.",
    category: "Politics",
    section: "politics",
    date: "April 25, 2026",
    readTime: "5 min read",
    featured: false,
    developing: false,
    image: "https://static.politico.com/6a/91/b4e58f334920ac41b137d78fa60d/prediction-markets-explainer-46186.jpg",
    keyPoints: [

    ],
    body: {
      whatHappened: "Alleged violations by prediction market platforms have begun accumulating, spanning subjects as varied as Iranian political events and Paris weather outcomes. Regulators and lawmakers have not agreed on who holds primary oversight authority. Several frontline Democrats have moved to the forefront of efforts to constrain these companies.",
      analysis: "Prediction markets occupy an awkward regulatory space, touching on both commodity futures law under the CFTC and potential securities frameworks under the SEC, a gap that companies have historically exploited. The accumulation of alleged violations across unrelated subject matters suggests systemic compliance failures rather than isolated incidents. Jurisdictional ambiguity weakens enforcement because each agency can defer to the other, allowing platforms to operate in a gray zone with limited accountability. Democrats targeting the issue from frontline districts likely see political upside in consumer protection framing, particularly as retail participation in these markets has grown. Without a clear congressional mandate designating a lead regulator, enforcement actions risk being challenged on procedural grounds. The pattern mirrors early regulatory struggles with crypto exchanges before Congress eventually moved toward clearer statutory frameworks.",
      whyItMatters: "Prediction market platforms face their first serious coordinated regulatory pressure, which could force operational changes or restrict certain contract types. Investors and users on these platforms face uncertainty about the legal standing of existing contracts. A turf war between agencies benefits the platforms in the short term but invites harsher eventual legislation if Congress steps in to resolve the dispute. Frontline Democrats who succeed in leading this charge gain a policy win ahead of election cycles."
    },
    scenarios: [

    ]
  },
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
