# Precedent.news

Law, politics, and policy intelligence. Analysis and outcomes, not summaries.

---

## Project Structure

```
precedent-news/
├── api/
│   └── publish.js          # Vercel serverless endpoint — receives articles from Make
├── pages/
│   ├── article.html         # Article page template
│   └── section.html         # Section/category page
├── src/
│   ├── data/
│   │   └── articles.js      # Article data store — all articles live here
│   ├── scripts/
│   │   ├── render.js        # DOM rendering engine
│   │   ├── main.js          # Homepage script
│   │   └── article.js       # Article page script
│   └── styles/
│       ├── tokens.css       # Design tokens (colors, spacing, typography)
│       ├── base.css         # Reset and global styles
│       └── main.css         # All layout and component styles
├── index.html               # Homepage
├── vercel.json              # Vercel configuration
└── README.md
```

---

## Setup

### 1. Deploy to Vercel

Connect your GitHub repo to Vercel. It auto-deploys on every push to `main`.

### 2. Set Environment Variables in Vercel

Go to Vercel Dashboard → Your Project → Settings → Environment Variables. Add:

| Variable | Value |
|---|---|
| `GITHUB_TOKEN` | Your GitHub personal access token (repo write access) |
| `GITHUB_OWNER` | Your GitHub username (e.g. `fryatoob`) |
| `GITHUB_REPO` | Your repo name (e.g. `precedent-news`) |
| `PUBLISH_SECRET` | A random secret string you create (e.g. `prc_xK9mL2...`) |

To generate a GitHub token: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate → check `repo`.

To generate a publish secret: go to [random.org/passwords](https://www.random.org/passwords/) or just type a long random string.

### 3. Connect Custom Domain

Vercel Dashboard → Your Project → Settings → Domains → Add `precedent.news`.

---

## Automated Publishing via Make

### How it works

1. Make scenario runs — Claude writes a full article
2. Make sends a POST request to `https://precedent.news/api/publish`
3. The API endpoint commits the new article to `src/data/articles.js` on GitHub
4. Vercel detects the commit and redeploys in ~30 seconds
5. Article is live at `https://precedent.news/pages/article.html?id=ARTICLE-SLUG`
6. A second Make module writes the X post with the article URL and posts via Buffer

### Make HTTP Module Setup

**Module type:** HTTP → Make a request

**URL:** `https://precedent.news/api/publish`

**Method:** POST

**Headers:**
- `Authorization`: `Bearer YOUR_PUBLISH_SECRET` (the value you set in Vercel)
- `Content-Type`: `application/json`

**Body type:** Raw / JSON

**Body content:** Map Claude's output variables into this JSON structure:

```json
{
  "id": "{{slug from title}}",
  "title": "{{article title}}",
  "dek": "{{article subheadline}}",
  "category": "{{category}}",
  "section": "{{section}}",
  "date": "{{formatted date}}",
  "readTime": "{{read time}}",
  "featured": false,
  "developing": true,
  "keyPoints": ["{{point 1}}", "{{point 2}}", "{{point 3}}"],
  "body": {
    "whatHappened": "{{what happened section}}",
    "analysis": "{{analysis section}}",
    "whyItMatters": "{{why it matters section}}"
  },
  "scenarios": [
    {
      "type": "likely",
      "label": "Most Likely Outcome",
      "body": "{{scenario 1}}"
    },
    {
      "type": "alternative",
      "label": "Alternative Path",
      "body": "{{scenario 2}}"
    }
  ]
}
```

### Response

Success:
```json
{
  "success": true,
  "id": "article-slug",
  "url": "https://precedent.news/pages/article.html?id=article-slug",
  "message": "Article published. Vercel will redeploy in ~30 seconds."
}
```

The `url` field is what you pass to the X post Claude module — it generates the thread and includes this exact link.

---

## Adding Articles Manually

Open `src/data/articles.js` and add a new object to the top of the `articles` array following the existing structure. Push to GitHub — Vercel redeploys automatically.

---

## X Post Automation (Scenario 2 in Make)

After the publish API returns success, add a Claude module that writes the X post:

**Prompt:**
```
Write one X post for Precedent.news about this article. Under 220 characters including hashtags.

Title: [article title]
Summary: [article dek]
URL: [article url from API response]

Never say BREAKING. Never use em dashes. Write the counterintuitive angle. End with the URL on its own line. Then #Law #Politics on the last line.
```

Map Buffer's Text field to Claude's Text Response. That's the full automated pipeline.
