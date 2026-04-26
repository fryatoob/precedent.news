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
    id: "from-iran-to-paris-weather-alleged-prediction-market-violations-start-stacking-up",
    title: "Alleged Prediction Market Violations Start Stacking Up, From Iran to Paris Weather",
    dek: "Regulatory fault lines are emerging as frontline Democrats push to rein in prediction market companies facing mounting accusations of violations.",
    category: "Law",
    section: "law",
    date: "April 25, 2026",
    readTime: "4 min read",
    featured: false,
    developing: false,
    image: "https://static.politico.com/6a/91/b4e58f334920ac41b137d78fa60d/prediction-markets-explainer-46186.jpg",
    keyPoints: [
    "Multiple alleged regulatory violations are accumulating against prediction market operators, spanning geopolitical and weather-related contracts., Jurisdictional disputes over which agency holds regulatory authority are fracturing the oversight landscape., Frontline Democrats are emerging as the primary political force pushing for stricter enforcement and clearer rules."
    ],
    body: {
      whatHappened: "Prediction market companies face a growing list of alleged regulatory violations covering contracts tied to events ranging from Iranian geopolitics to Paris weather outcomes. Regulators and lawmakers are clashing over which agency holds primary jurisdiction over these platforms. Several frontline Democratic lawmakers have stepped forward to lead the push for tighter oversight and enforcement action.",
      analysis: "The jurisdictional dispute at the center of this fight reflects a structural gap in U.S. financial regulation, where the Commodity Futures Trading Commission and other bodies have overlapping and contested claims over event-based contracts. Prediction markets occupy a legal gray zone because their contracts can be characterized as either futures instruments or gambling products depending on the regulator doing the characterizing. This ambiguity has allowed platforms to scale rapidly while enforcement has lagged, creating a first-mover advantage that now makes aggressive regulatory action politically and legally complicated. The accumulation of alleged violations across unrelated subject matter suggests either systemic compliance failures or deliberate boundary-testing by operators. Democrats pushing hardest on this issue tend to represent competitive districts where consumer protection messaging carries electoral weight, giving them both policy and political incentives to act. The stacking of cases also raises the question of whether regulators will pursue enforcement piecemeal or seek a broader rulemaking that settles the jurisdictional question once and for all.",
      whyItMatters: "Prediction market platforms stand to lose significant operational freedom if Congress or regulators impose new restrictions or clarify jurisdiction in ways that require costly compliance infrastructure. Retail participants who use these platforms for hedging or speculation face uncertainty about the legal standing of their contracts. Federal agencies including the CFTC risk institutional embarrassment if courts or Congress determine they failed to act on clear violations within their existing authority. A regulatory crackdown could also chill a market that some economists argue improves information aggregation on issues of genuine public interest."
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
    id: "nations-cartoonists-on-the-week-in-politics",
    title: "The Nation's Cartoonists on the Week in Politics",
    dek: "Political cartoonists from across the spectrum capture the defining moments of the week in Washington and beyond.",
    category: "Politics",
    section: "politics",
    date: "April 25, 2026",
    readTime: "2 min read",
    featured: false,
    developing: false,
    image: "",
    keyPoints: [
    "Weekly political cartoons from artists across the ideological spectrum highlight key events in American politics, Cartoonists target hypocrisy, irony, and notable political moments from the past week, The collection is curated and edited by Politico cartoonist Matt Wuerker"
    ],
    body: {
      whatHappened: "Political cartoonists from across the country submitted work this week satirizing the latest events in American politics. The collection, edited by Matt Wuerker, draws from artists representing a wide range of political viewpoints. The cartoons address recurring themes including political hypocrisy, policy failures, and prominent public figures.",
      analysis: "Political cartoons function as a distinct form of public accountability, compressing complex policy debates into single images that reach audiences who may not read traditional news coverage. The diversity of ideological perspectives in a curated collection like this signals an effort to reflect national political tensions rather than advocate for one side. Cartoonists operate with fewer legal and editorial constraints than reporters, allowing sharper commentary on political behavior. The weekly format creates a running record of which stories generated the strongest public reaction, offering a useful barometer of political salience. Editors like Wuerker wield influence over which narratives receive visual amplification, a curatorial role that carries its own editorial weight.",
      whyItMatters: "Readers across the political spectrum consume cartoon commentary differently than written analysis, making this format an unusually broad-reaching form of political communication. Politicians and their communications teams monitor satirical coverage closely, as cartoons can crystallize negative narratives in ways that persist in public memory. Media organizations that publish these collections benefit from engagement driven by both agreement and outrage. Independent cartoonists gain platform exposure, while readers get a condensed visual summary of the week's political flashpoints."
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
    id: "tammy-haddad-barbra-streisand-trump-dc-alist-weekend",
    title: "Tammy Haddad on Barbra Streisand, Trump and DC's A-List Weekend",
    dek: "Washington power broker Tammy Haddad navigates the intersection of celebrity culture and political influence in the capital.",
    category: "Politics",
    section: "politics",
    date: "April 25, 2026",
    readTime: "3 min read",
    featured: false,
    developing: false,
    image: "",
    keyPoints: [
    "Tammy Haddad remains a central figure connecting Hollywood celebrities and Washington political insiders, Barbra Streisand's relationship with Democratic politics continues to draw attention amid the Trump era, DC social circuits reflect shifting alliances and power dynamics in the current political climate"
    ],
    body: {
      whatHappened: "Tammy Haddad, a prominent Washington media consultant and event organizer, discussed the overlap of celebrity influence and political power in Washington. Her comments touched on Barbra Streisand's continued engagement with Democratic circles and the social landscape of the capital during the Trump era. Haddad has long served as a connector between entertainment figures and political power brokers in Washington.",
      analysis: "Washington's social infrastructure has historically functioned as an informal lobbying mechanism, where access to influential figures carries tangible political value. Haddad's role as a convener reflects how soft power operates at the margins of formal policy processes, shaping relationships that later influence decisions. Celebrity alignment with political figures such as Streisand signals donor network activation and public opinion framing rather than direct policy input. The Trump era has sharpened partisan sorting even within social settings, making cross-aisle gatherings rarer and more strategically significant. Events that bring together media, entertainment, and political figures serve as temperature gauges for elite consensus building. The willingness of Hollywood figures to engage with Washington signals continued interest in cultural and regulatory issues affecting the entertainment industry.",
      whyItMatters: "Washington's social elite use gatherings to build coalitions that precede formal political action, meaning these networks carry real influence over fundraising and legislative priorities. Democratic-aligned celebrities such as Streisand provide both financial resources and cultural legitimacy to political figures who court them. Political operatives who control access to these networks, as Haddad does, hold leverage over both media coverage and donor relations. Republicans risk ceding cultural narrative space if Hollywood remains uniformly aligned with Democratic causes."
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
    id: "he-wants-muslims-out-of-the-us-and-hes-blakemans-opener",
    title: "Anti-Muslim Activist Tapped as Opening Speaker at Blakeman Event",
    dek: "Nassau County Executive Bruce Blakeman chose a speaker who has publicly called for removing Muslims from the United States.",
    category: "Politics",
    section: "politics",
    date: "April 25, 2026",
    readTime: "3 min read",
    featured: false,
    developing: false,
    image: "",
    keyPoints: [
    "Nassau County Executive Bruce Blakeman selected a speaker who advocates expelling Muslims from the U.S. to open a public event., The choice raises questions about the political calculations of an elected official with statewide ambitions in New York., Civil liberties groups and Muslim advocacy organizations have condemned the selection."
    ],
    body: {
      whatHappened: "Nassau County Executive Bruce Blakeman selected an activist who has publicly and repeatedly called for the removal of Muslims from the United States as the opening speaker at a county-affiliated event. The activist has a documented record of anti-Muslim statements across public platforms. The selection drew immediate criticism from civil liberties organizations and elected officials in the region.",
      analysis: "Blakeman's decision to platform an openly anti-Muslim voice is not incidental. It signals an attempt to consolidate a base that responds to nativist rhetoric, a strategy that carries short-term political rewards in certain Republican primary environments but significant legal and reputational exposure for a county executive. Nassau County has a substantial Muslim population, and government officials who associate with voices calling for religious-based expulsion invite scrutiny under the First and Fourteenth Amendments, not because the speech itself is unlawful, but because government endorsement of discriminatory viewpoints can expose public bodies to civil rights challenges. The move also tests how far Republican officials in blue-leaning states can drift toward ethnonationalist positioning before institutional backlash becomes a binding constraint. Blakeman has shown a pattern of provocative cultural-war positioning, suggesting this is a deliberate brand choice rather than an oversight.",
      whyItMatters: "Muslim residents of Nassau County face a direct signal from their county executive that their exclusion from the country is a welcome topic on government-adjacent platforms. Advocacy groups gain a concrete and high-profile rallying point that can drive fundraising and voter mobilization. Blakeman consolidates support among a nativist faction of the Republican base but narrows his coalition for any future run in a general election. The episode tests whether New York Republicans face meaningful accountability for platforming explicitly discriminatory voices."
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
    id: "grindr-is-on-the-political-rise",
    title: "Grindr Expands Political Presence Under Trump's Second Term",
    dek: "The LGBTQ+ dating app is building out its lobbying and advocacy footprint as federal policy shifts threaten its user base.",
    category: "Politics",
    section: "politics",
    date: "April 25, 2026",
    readTime: "4 min read",
    featured: false,
    developing: false,
    image: "https://static.politico.com/20/9e/b40922ed429eaf927790c9c885a8/https-delivery-gettyimages.com/downloads/2270287844",
    keyPoints: [
    "Grindr has increased its political and lobbying activity since Donald Trump returned to the White House in January 2025., The company is targeting a range of policy priorities that affect LGBTQ+ users, including nondiscrimination protections and data privacy., Grindr's expanded influence campaign marks a shift from its historically low-profile approach to Washington politics."
    ],
    body: {
      whatHappened: "Grindr, the LGBTQ+ dating and social networking app, has stepped up its political engagement in Washington since President Donald Trump began his second term. The company has broadened its lobbying efforts and public advocacy on policy issues that directly affect its users. Grindr is pushing on multiple fronts including data privacy, LGBTQ+ nondiscrimination rules, and federal civil rights enforcement.",
      analysis: "Grindr's political pivot reflects a calculated response to a federal policy environment that many LGBTQ+ advocates view as increasingly hostile. Companies with concentrated, identifiable user bases face acute regulatory risk when the political climate shifts against those users, creating strong incentives to invest in direct lobbying rather than rely on coalition advocacy alone. Grindr also holds sensitive personal data on millions of users, making data privacy legislation a core commercial interest as much as a civil rights concern. The company's move mirrors a broader pattern in which tech platforms with politically vulnerable user communities build Washington infrastructure to hedge against regulatory and enforcement risk. Grindr's ownership structure, which includes a significant stake held by a San Vicente Acquisition vehicle with ties to investors scrutinized for national security reasons, adds another layer of political complexity to its Washington strategy. By raising its profile now, Grindr may also be positioning itself to shape any future legislative debates over digital privacy or LGBTQ+ civil rights rather than react to them.",
      whyItMatters: "LGBTQ+ users of the platform stand to benefit if Grindr successfully lobbies to maintain or strengthen data privacy protections that shield their identities and location data from government access or commercial misuse. Civil rights organizations gain a well-resourced corporate ally at a moment when federal enforcement of LGBTQ+ nondiscrimination rules has weakened. Competing platforms and advertisers will watch closely to see whether Grindr's political strategy attracts regulatory scrutiny or backlash that affects its business. Conservative advocacy groups are likely to push back against Grindr's influence campaign, framing it as a corporate attempt to resist legitimate federal policy changes."
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
    id: "gop-virginia-gerrymandering-loss-finger-pointing",
    title: "Virginia Republicans Point Fingers After Gerrymandering Loss",
    dek: "GOP insiders fault the party for underinvesting in the redistricting fight and are now leaning on Florida to recover lost ground.",
    category: "Politics",
    section: "politics",
    date: "April 25, 2026",
    readTime: "4 min read",
    featured: false,
    developing: false,
    image: "https://static.politico.com/61/6b/9bf0614d4ffe8bfdab86960268a2/election-2-26-redistricting-virginia-88177.jpg",
    keyPoints: [
    "Virginia Republicans say the party failed to spend adequately to defend favorable district maps in the state., GOP strategists are now pressuring Florida Republicans to redraw congressional maps to offset Virginia losses., The redistricting defeat could shift the House majority calculus ahead of the next election cycle."
    ],
    body: {
      whatHappened: "Virginia Republicans lost a redistricting fight they believe was winnable, and party members are now publicly blaming leadership for failing to commit sufficient resources to the effort. Frustrated operatives say the spending gap allowed Democrats to secure more favorable maps. The GOP is now pressing Florida to redraw its congressional districts to compensate for the lost advantage.",
      analysis: "Redistricting battles are essentially asset allocation contests, and Virginia Republicans are arguing their side showed up underfunded to a high-stakes auction. When one party declines to spend aggressively on map litigation or legislative lobbying, it cedes a structural advantage that compounds across multiple election cycles, not just one. The push to engage Florida as a counterweight reflects a broader Republican strategy of treating redistricting as a national portfolio rather than a state-by-state fight, which is a rational response given that House majority control often turns on a handful of seats. Florida's Republican-controlled legislature has the legal authority to initiate a new round of redistricting, though doing so invites litigation and could generate a backlash that energizes Democratic donors and organizers. The internal blame game in Virginia also signals a fracture between national party committees and state-level actors over who bears responsibility for funding these fights. If Republicans succeed in pressuring Florida to act, they may neutralize the Virginia loss, but they risk extending a cycle of retaliatory redistricting that courts have grown increasingly skeptical of.",
      whyItMatters: "A less favorable Virginia map directly reduces Republican seat opportunities in a state where the party has been competitive in federal races. If Florida redraws its maps aggressively, Democrats there face a harder path to holding or gaining congressional seats, shifting the House battlefield. Voters in both states could see their representation restructured not by electoral outcomes but by partisan legislative decisions made under political pressure. National Democratic groups will likely respond with litigation and increased fundraising, raising the cost of the Republican counterstrategy."
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
    id: "virginia-voters-dems-big-win-gerrymandering-wars",
    title: "Virginia Voters Give Democrats a Big Win in the Gerrymandering Wars",
    dek: "A new court-ordered map in Virginia could erase Republican congressional gains sparked by Texas redistricting last summer.",
    category: "Politics",
    section: "politics",
    date: "April 25, 2026",
    readTime: "4 min read",
    featured: false,
    developing: false,
    image: "https://static.politico.com/eb/0a/f2b4479d42c4b4bbfd2950cb55e0/https-delivery-gettyimages.com/downloads/2272377502",
    keyPoints: [
    "Virginia voters or courts approved a new congressional map favoring Democrats in a major redistricting decision., The new map threatens to offset Republican seat gains that emerged from President Trump's Texas redistricting push last summer., The outcome shifts the calculus in the national battle over House control ahead of upcoming elections."
    ],
    body: {
      whatHappened: "Virginia delivered a significant redistricting victory for Democrats, approving a new congressional map that redraws district lines in their favor. The decision comes in direct response to Republican gains generated by the Trump-backed redistricting effort in Texas that began last summer. The new Virginia map stands to neutralize some or all of the seats Republicans picked up through the Texas process.",
      analysis: "Redistricting battles have become a zero-sum national competition, where each state-level map shift ripples through the overall House majority math. Texas Republicans, emboldened by Trump, redrew lines to maximize GOP seats, prompting Democratic-leaning states to respond aggressively with their own favorable maps. Virginia's new map reflects a broader Democratic counter-strategy: use state-level leverage wherever available to claw back lost ground. Courts and state commissions serve as the main arenas, and outcomes hinge on the composition of state judiciaries and the specific legal standards they apply. The net effect of dueling gerrymanders across multiple states is a nationalized redistricting arms race that makes individual district lines less stable and House control harder to predict. Whichever party successfully locks in more favorable maps before the next election cycle gains a structural advantage that independent voter sentiment alone cannot easily overcome.",
      whyItMatters: "House Republicans entered this cycle with a narrow majority, and the Texas remap was designed to pad that margin against electoral headwinds. Virginia's counter-map directly threatens to cancel those gains, leaving Republicans with fewer safe seats than they anticipated. Democratic incumbents and candidates in Virginia now face friendlier terrain, while Republican incumbents may find their districts more competitive. The broader national House majority could hinge on how courts in Virginia and other contested states ultimately rule on map challenges still working through the legal system."
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
    id: "trumps-pick-to-replace-stefanik",
    title: "Trump's Pick to Replace Stefanik in Congress",
    dek: "President Trump has selected a candidate to fill the House seat vacated by Elise Stefanik following her confirmation as UN Ambassador.",
    category: "Politics",
    section: "politics",
    date: "April 25, 2026",
    readTime: "3 min read",
    featured: false,
    developing: false,
    image: "",
    keyPoints: [
    "Trump has named his preferred candidate to contest the special election for New York's 21st Congressional District, The seat opened after Elise Stefanik resigned to serve as U.S. Ambassador to the United Nations, The special election will test Republican strength in a district Trump has carried by wide margins"
    ],
    body: {
      whatHappened: "President Trump announced his pick to fill the House seat left vacant by Elise Stefanik after she was confirmed as U.S. Ambassador to the United Nations. Stefanik represented New York's 21st Congressional District for over a decade before departing for the diplomatic post. A special election will determine her successor.",
      analysis: "Trump's endorsement in a special election carries significant weight, historically boosting primary turnout and donor enthusiasm for the chosen candidate. New York's 21st District leans heavily Republican, making the general election less competitive than the process of consolidating party support behind a single nominee. The seat holds symbolic importance for House Republicans, whose slim majority makes every vacancy a potential vulnerability. A Trump-backed candidate who wins decisively would reinforce the former president's continued grip on candidate recruitment within the House Republican conference. Conversely, any stumble in a safe district would invite questions about the durability of his political influence heading into the next election cycle.",
      whyItMatters: "House Republicans hold a narrow majority, so the vacancy creates short-term procedural risk on close votes until the seat is filled. A swift special election benefits Republicans by limiting the window of exposure. Democratic outside groups may invest in the race to test Trump's endorsement strength even in unfavorable terrain. Local New York Republicans who back a candidate other than Trump's pick risk losing access and support from the national party apparatus."
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
    id: "dems-brace-for-close-finish-on-virginia-redistricting-effort",
    title: "Democrats Brace for Close Finish on Virginia Redistricting Effort",
    dek: "A successful redistricting push could give Democrats a 10-1 House seat advantage in Virginia and a net gain of up to four seats.",
    category: "Politics",
    section: "politics",
    date: "April 25, 2026",
    readTime: "3 min read",
    featured: false,
    developing: false,
    image: "https://static.politico.com/cf/57/9f94e6c54268a2d7da9dabc19725/https-delivery-gettyimages.com/downloads/2271849972",
    keyPoints: [
    "Virginia Democrats are pushing a redistricting plan that could reshape the state's congressional map significantly., If approved, the new map would give Democrats a 10-1 seat advantage in Virginia's House delegation., The effort could result in a net pickup of as many as four House seats for Democrats nationally."
    ],
    body: {
      whatHappened: "Virginia Democrats are working to advance a redistricting plan that would redraw the state's congressional districts in their favor. If the effort succeeds, Democrats could hold 10 of the state's 11 congressional seats. The push represents one of the more aggressive redistricting maneuvers ahead of the next election cycle.",
      analysis: "Redistricting is one of the most direct levers a party can pull to shift House seat totals without winning a single additional vote share nationally. A 10-1 Democratic delegation in Virginia would represent a dramatic reversal from more competitive maps and reflects a broader Democratic strategy to use state-level power to offset gerrymandering in Republican-controlled legislatures elsewhere. The net four-seat pickup potential is significant given that House majorities in recent cycles have been decided by margins in the single digits. Virginia's redistricting process involves judicial oversight and legislative action, meaning the outcome depends on both political will and legal scrutiny. Courts have historically intervened when maps appear to subordinate traditional districting criteria to partisan advantage, giving opponents a viable litigation path. The close finish Democrats anticipate signals that the votes needed for approval remain uncertain, and even a narrow failure would leave the current map intact.",
      whyItMatters: "House Republicans stand to lose as many as four seats if the Virginia map is redrawn, a consequential shift in a chamber where the majority is razor-thin. Virginia voters in redrawn districts could find their representation altered substantially, with some communities moved into newly configured seats. Democratic leaders see the effort as a counterweight to Republican gerrymanders in states like Texas and North Carolina. A failed push would reinforce the status quo and deny Democrats a key structural advantage heading into the next election."
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
    id: "rival-pacs-line-up-to-target-gop-cosponsors-of-immigration-bill",
    title: "Rival PACs Line Up to Target GOP Cosponsors of Immigration Bill",
    dek: "The Dignity Act, a bipartisan immigration reform bill, has ignited a conservative backlash with outside groups threatening Republican supporters.",
    category: "Politics",
    section: "politics",
    date: "April 25, 2026",
    readTime: "4 min read",
    featured: false,
    developing: false,
    image: "https://static.politico.com/7a/dc/3ff1a8a04647a14339f74901e0ae/immigration-venezuelan-doctors-1-372.jpg",
    keyPoints: [
    "Multiple right-wing PACs are organizing campaign efforts against Republican lawmakers who cosponsor the Dignity Act., The Dignity Act proposes a bipartisan path to immigration reform, drawing support from some GOP members and fierce opposition from others., The political pressure campaign signals that immigration remains one of the sharpest fault lines inside the Republican Party."
    ],
    body: {
      whatHappened: "Several conservative PACs have announced plans to run opposition campaigns against Republican cosponsors of the Dignity Act, a bipartisan immigration reform bill. The groups argue the bill amounts to amnesty and violates the party's hardline stance on border security. The organizing effort reflects a broader revolt on the political right against any legislation perceived as softening immigration enforcement.",
      analysis: "The PAC pressure campaign follows a well-worn playbook in primary politics: use outside spending to shift the cost-benefit calculus for incumbents who stray from base preferences. Republican cosponsors of the Dignity Act face a classic collective action problem. Individual members may privately support compromise but cannot afford to be the visible target of a primary challenge funded by ideologically motivated outside groups. The Dignity Act itself attempts to thread a narrow needle by pairing enforcement provisions with legal status pathways, a structure designed to attract centrist Republicans but one that provides little cover against bad-faith characterizations of amnesty. PAC involvement raises the electoral stakes considerably because even the threat of a well-funded primary challenger can suppress cosponsor recruitment and force existing supporters to publicly distance themselves. The dynamic illustrates how outside money can effectively veto legislative coalition-building before a bill ever reaches the floor.",
      whyItMatters: "Republican cosponsors face direct electoral risk, particularly those in competitive or right-leaning districts where primary turnout skews toward base voters. Immigrant communities and advocacy groups that backed the Dignity Act stand to lose a rare legislative vehicle that included legal status provisions. Democrats who co-authored the bill may gain a short-term messaging advantage but lose a functional bipartisan partner if GOP support collapses. The episode reinforces that immigration reform legislation faces structural obstacles that go beyond congressional vote counts."
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
    id: "former-aide-suing-eric-adams-joins-mamdani-administration",
    title: "Former Aide Suing Eric Adams Joins Mamdani Administration",
    dek: "A former Adams staffer who filed a lawsuit against the ex-mayor is taking a role in the incoming Mamdani city government.",
    category: "Politics",
    section: "politics",
    date: "April 25, 2026",
    readTime: "3 min read",
    featured: false,
    developing: false,
    image: "",
    keyPoints: [
    "A former aide to Eric Adams who sued him is joining the Mamdani administration in New York City., The move signals a sharp political break between Adams-era personnel and the new Mamdani government., The lawsuit against Adams remains active as the aide transitions into a city role."
    ],
    body: {
      whatHappened: "A former aide to ex-New York City Mayor Eric Adams who filed a civil lawsuit against him has accepted a position in the administration of incoming Mayor Zohran Mamdani. The aide's lawsuit against Adams is ongoing. The appointment marks one of the more pointed personnel signals from the Mamdani transition team.",
      analysis: "The hire carries both political and legal significance. By bringing on a plaintiff in an active suit against his predecessor, Mamdani sends a clear message about the distance his administration intends to keep from Adams and his allies. For the aide, the appointment strengthens their public credibility and institutional footing while the litigation proceeds, though it also raises questions about whether a city salary could complicate settlement dynamics or perceived leverage. Defendants in civil suits often argue that plaintiffs who land favorable outcomes elsewhere face reduced damages calculations, a dynamic that Adams' legal team may attempt to exploit. The Mamdani team likely calculated that the political symbolism of the hire outweighs any legal friction it introduces.",
      whyItMatters: "The appointment signals that the Mamdani administration is willing to make personnel choices that function as implicit rebukes of Adams. Former Adams allies lose a potential back-channel into the new city government. The aide gains a platform and institutional resources, which could shift the power balance in the ongoing litigation. New York City taxpayers and watchdog groups will watch closely to see whether the hire influences how the city handles any related legal exposure."
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
    id: "dems-have-made-up-ground-in-nearly-every-election-since-trump-took-office",
    title: "Democrats Have Made Up Ground in Nearly Every Election Since Trump Took Office",
    dek: "A POLITICO analysis finds consistent Democratic overperformance across red and blue districts in every special election since January 2025.",
    category: "Politics",
    section: "politics",
    date: "April 25, 2026",
    readTime: "4 min read",
    featured: false,
    developing: false,
    image: "[9.jsonResponse.image]",
    keyPoints: [
    "Democrats have outperformed their 2024 baseline in nearly every special election held since Trump returned to office., The trend holds across both reliably Republican and reliably Democratic districts, suggesting broad national sentiment rather than local factors., Analysts say the pattern poses a structural warning for Republicans heading into the 2026 midterm cycle."
    ],
    body: {
      whatHappened: "A POLITICO analysis of special elections held since President Trump took office in January 2025 shows Democrats have improved on their 2024 vote share in nearly every contest. The trend spans geographically and politically diverse districts, from deep-red rural seats to competitive suburban ones. No single race has reversed the pattern.",
      analysis: "Consistent overperformance across divergent districts is a leading indicator political scientists treat seriously because it strips out local candidate quality and fundraising advantages. When the shift appears in both safe Republican and safe Democratic seats, it points to a nationalized environment driven by presidential approval and party brand rather than local conditions. Historical precedent from 2009 to 2010 and 2017 to 2018 shows that sustained special-election swings of this magnitude reliably translate into midterm seat losses for the party holding the White House. The magnitude matters as much as direction: small but consistent shifts compound across hundreds of competitive districts and can flip chamber control even without a single dramatic wave race. Republicans currently hold thin House and Senate margins, meaning even a modest uniform swing could realign both chambers. Democrats face their own structural challenge in converting enthusiasm into turnout operations and candidate recruitment before November 2026.",
      whyItMatters: "Republican incumbents in districts Trump carried by single digits face a measurably higher re-election risk if the trend holds through 2026. Democratic campaign committees gain leverage in recruiting higher-quality challengers and attracting donor capital when they can point to a sustained data pattern. Voters in competitive districts who have drifted toward Democrats in low-turnout special elections may prove even more decisive in a high-turnout midterm environment. The White House and congressional Republican leadership must now weigh whether policy adjustments or candidate support can arrest a trend that has persisted across multiple independent electoral tests."
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
    id: "forced-out-of-the-military-and-into-the-redistricting-wars",
    title: "Forced Out of the Military and Into the Redistricting Wars",
    dek: "Bree Fram's Virginia congressional campaign depends heavily on whether voters approve a redistricting referendum that could reshape her district's political landscape.",
    category: "Politics",
    section: "politics",
    date: "April 25, 2026",
    readTime: "4 min read",
    featured: false,
    developing: false,
    image: "",
    keyPoints: [
    "Bree Fram, a transgender veteran and rocket scientist, was discharged from the military under Trump administration policy and is now running for Congress in Virginia., A Virginia redistricting referendum could redraw district lines in ways that significantly affect the competitiveness of her race., The outcome of the referendum may determine whether Fram has a viable path to victory in what is currently considered a long-shot bid."
    ],
    body: {
      whatHappened: "Bree Fram, a transgender rocket scientist and military veteran discharged under Trump administration policy, is running for Congress in Virginia. Her campaign faces steep odds, but a pending state redistricting referendum could redraw district boundaries in ways that alter the race's competitiveness. The referendum puts the power to reshape Virginia's congressional map before voters rather than the Republican-controlled legislature.",
      analysis: "Redistricting referendums shift map-drawing authority from partisan legislatures to independent or citizen commissions, a structural change that historically produces more competitive districts. For candidates like Fram who lack institutional party backing, fairer maps lower the baseline partisan advantage that incumbents and party-favored nominees typically enjoy. Virginia's political geography clusters Democratic voters in urban corridors, meaning current maps likely dilute their influence in surrounding suburban and exurban districts. If the referendum passes and produces a less gerrymandered map, swing districts become more numerous, expanding the universe of seats where a candidate's personal narrative and crossover appeal can overcome party registration gaps. Fram's profile, a decorated veteran running on competence and personal adversity, is precisely the kind of candidate who performs best when district composition is heterogeneous rather than heavily sorted. The referendum therefore functions less as a legal question and more as a structural prerequisite for her campaign's viability.",
      whyItMatters: "Republican incumbents and party organizations in Virginia stand to lose safe seats if independent redistricting produces more competitive maps. Democratic candidates in previously unwinnable districts, including Fram, gain measurable electoral opportunities. Transgender candidates specifically benefit when districts are drawn on population rather than partisan criteria, because their base of support skews toward younger urban voters who are often packed into single districts under partisan maps. Voters who support competitive elections broadly have a direct stake in the referendum's outcome regardless of their views on any individual candidate."
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
    image: "https://static.politico.com/95/a2/5af4212547925e0bacb1a89c4c57/GettyImages-123456.jpg",
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
