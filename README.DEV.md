## 🚀 Project Techcare

### 1. Project description

Repository: https://github.com/techcare-net-ua/techcare-project

**Сore technology stack:**

- Next.js
- Tailwind CSS
- TypeScript based

**Useful links to familiarize yourself with:**

- [Next.js Docs](https://nextjs.org/)

- [Tailwind CSS Docs](https://tailwindcss.com/docs/installation)

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### 2. Conventional Commits

**Branch titles:**

**Example**: `PS_feat_form`,

- `PS` - your first and last name (JD - John Doe etc.)
- `_feat_` - designation of what will be done in the branch
- `form` - name of feature.

**Variants**:

- `_feat_` - add new feature (feature);
- `_fix_` - bug fixing;
- `_ref_` - code refactoring
- `_docs_` - work with docs, comments.
- `_test_` - testing.

**Commit description:**

Сommit answers the question: what does this commit do?

The prefixes are the same as for branch names. You can use the `!` sign to
indicate that this is an important commit and worth paying attention to.

**Пример**

```powershell
git commit -m "feat: add callback form markup"
```

```powershell
git commit -m "fix!: fix trouble with form validation. Value - name"
```

**Pull requests:**

Pull requests only to the `dev` branch. It's currently configured as the default
branch branch, so there should be no problems with this.

Make the description of the pull requester a bit more detailed than the commits.
If you think it is necessary to pay attention to some point, point it out.
Language use a language that is convenient for you.

### 3. Work with Git via terminal

[Flow instruction](https://docs.google.com/document/d/1CFrp2cKnu9g94Oouw6-vY26ChWK6T_sUixHytXXJYLw/edit?usp=sharing)

### 4. Get started

1. Clone repository
2. Install packages
3. Configure environment variables (ask TL). `.env.template` file contains a
   list of key.
4. Development

### 5. Conventions with project structure

1. Головна директорія - `src/`
2. В структурі папки `src/` виділені наступні сутності:

- `components`
- `lib`
- `providers`
- `styles`
- `types`;

3. Кожна папка має index-ний файл, в якому потрібно робити реекспорт
4. Налаштовані аліаси для кожної сутності, див. `tsconfig.json`

### 6. Робота з ui-компонентами

[Документація](https://ui.shadcn.com/)

- встановлюємо компонент через cli
- виконуємо реекспорт компоненту в `ui/index.js`
-
