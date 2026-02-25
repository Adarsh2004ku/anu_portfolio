## Kumari Anuradha - Portfolio (Next.js + TypeScript + Tailwind CSS)

Modern, responsive portfolio website for **Kumari Anuradha (Fresher Web Developer)** built with:

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Dark mode** (via `next-themes`)

### 1. Getting Started

#### Install dependencies

From the project root:

```bash
npm install
```

#### Run the development server

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

---

### 2. Project Structure (high level)

- `src/app/layout.tsx` – Root layout and theme provider
- `src/app/page.tsx` – Main single-page portfolio (Hero, About, Skills, Projects, Contact, Footer)
- `src/app/globals.css` – Tailwind base styles and global CSS
- `src/components/ThemeToggle.tsx` – Dark/light mode toggle button
- `src/components/Section.tsx` – Reusable section wrapper with simple animation
- `src/components/ProjectCard.tsx` – Card component for projects
- `data/skills.ts` – Skills data (used by Skills section)
- `data/projects.ts` – Projects data (used by Projects section)

You mainly update **content** inside the `data` folder and a few constants in `page.tsx`.

---

### 3. Updating `skills.ts`

File: `data/skills.ts`

Each skill group has this shape:

```ts
{
  category: "Frontend",
  skills: ["HTML", "CSS", "JavaScript"];
}
```

The exported value is an array:

```ts
export const skillCategories: SkillCategory[] = [/* ... */];
```

#### How to add a new category

1. Open `data/skills.ts`.
2. Add a new object to the `skillCategories` array. For example:

```ts
{
  category: "Backend",
  skills: ["Node.js", "Express", "REST APIs"]
}
```

3. Save the file – the **Skills** section will automatically show the new category and skills.

#### How to add/remove individual skills

- To **add** a skill, push a new string into the `skills` array for the relevant category.
- To **remove** a skill, delete the string from that array.

---

### 4. Updating `projects.ts`

File: `data/projects.ts`

Each project looks like:

```ts
{
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string; // optional
}
```

A concrete example:

```ts
{
  title: "To-Do List",
  description:
    "Interactive to-do list web app to add, complete, and remove daily tasks in the browser.",
  tech: ["JavaScript", "HTML", "CSS"],
  github: "https://github.com/krianuradha/To_do_list",
  live: "https://your-live-url-here.vercel.app" // optional
}
```

#### How to add a new project

1. Open `data/projects.ts`.
2. Add a new object to the `projects` array following the shape above.
3. Make sure `github` is a full URL to the repository.
4. `live` is optional – you can leave it out or set it to an empty string if you don’t have a deployed version yet.

#### How GitHub repos are wired

For the existing projects, the GitHub links are based on:

- Base: `https://github.com/krianuradha`
- Project-specific paths like `/Pizza-bill`, `/To_do_list`, etc.

If repository names change, simply update the `github` URLs accordingly in `projects.ts`.

---

### 5. Updating Contact Info (Email & LinkedIn)

File: `src/app/page.tsx`

At the top of the file you’ll see:

```ts
const GITHUB_URL = "https://github.com/krianuradha";
const LINKEDIN_URL = ""; // TODO: add LinkedIn URL here when available
const EMAIL = "mailto:your-email@example.com"; // TODO: replace with real email
```

#### To update:

- **GitHub**: change `GITHUB_URL` if the username or URL changes.
- **LinkedIn**: paste your profile URL, e.g.

```ts
const LINKEDIN_URL = "https://www.linkedin.com/in/your-profile/";
```

- **Email**: set `EMAIL` to:

```ts
const EMAIL = "mailto:your.email@example.com";
```

The Contact section and footer will automatically use these values.

---

### 6. Tailwind CSS & Styling

- Tailwind is configured in `tailwind.config.mjs`.
- Global styles and Tailwind directives are in `src/app/globals.css`.
- Components use utility classes directly for a **modern, responsive** layout.
- Simple entrance animations are handled via Tailwind-style animation utility classes on the `Section` component.

You can freely tweak colors, spacing, fonts, etc. by editing `tailwind.config.mjs` and the class names in the components.

---

### 7. Dark Mode

- Dark mode is enabled via **`next-themes`**.
- The theme provider is set up in `src/app/layout.tsx`.
- The toggle button is implemented in `src/components/ThemeToggle.tsx`.

Behavior:

- Uses system preference by default.
- Clicking the sun/moon icon toggles between **light** and **dark** modes.

---

### 8. Deploying to Vercel

#### Step 1: Push project to GitHub

1. Create a new GitHub repository (e.g. `anu-portfolio`).
2. Initialize git in the project (if not already):

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/anu-portfolio.git
git push -u origin main
```

#### Step 2: Create a Vercel account

1. Go to `https://vercel.com` and sign in (GitHub is recommended).
2. Click **“New Project”**.
3. Import the GitHub repo you just pushed.

#### Step 3: Configure project (usually automatic)

Vercel will generally auto-detect:

- **Framework**: Next.js
- **Build command**: `npm run build`
- **Output directory**: `.next`

You usually don’t need to change anything here.

Click **“Deploy”**.

#### Step 4: Wait for deployment

- Vercel will install dependencies, run the build, and deploy.
- After it finishes, you’ll get a live URL like:

`https://anu-portfolio.vercel.app`

You can later:

- Set a **custom domain** from the project settings.
- Re-deploy automatically by pushing new commits to the connected GitHub branch.

---

### 9. Quick Checklist to Personalize

- [ ] Replace `EMAIL` in `src/app/page.tsx` with a real email.
- [ ] Add your real LinkedIn URL to `LINKEDIN_URL`.
- [ ] Adjust `About` section text to better match your story.
- [ ] Update `data/skills.ts` with your exact skills.
- [ ] Confirm `data/projects.ts` matches your GitHub repos and add live links if any.

Once those are done, you’ll have a polished, production-ready portfolio for **Kumari Anuradha**. 🎉
