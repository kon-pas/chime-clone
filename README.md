> **Note**
> Because nothing lasts forever, here is the
> [archived Chime page](/assets/comparison).

<p align="center">
  <br />
  <a href="https://chime-clone.vercel.app/" target="_blank">
    <img
      alt="Chime Clone"
      title="Chime Clone"
      src="/assets/chime-clone-logo.svg"
      width="300"
      style="max-width: 100%;"
    />
  </a>
  <br /><br />
  <b align="center">
    <a href="https://chime-clone.vercel.app/">Clone</a> of the
    <a href="https://www.chime.com/">Chime</a> website;
  </b>
  <br />
  <span>as the name might suggest.</span>
</p>

---

## Table of Contents 📖 <!-- omit in toc -->

- [Introduction 👀](#introduction-)
- [Comparison 🔎](#comparison-)
- [Tech Stack 💻](#tech-stack-)
- [Thoughts 💭](#thoughts-)
- [Credits 👥](#credits-)
- [License 📝](#license-)

## Introduction 👀

Chime Clone is a clone of the [Chime](https://www.chime.com/) website developed
solely by [kon-pas](https://github.com/kon-pas) with the purpose of
**self-learning web development**.

Chime&apos;s original website is generally well done, but I had to make few
minor adjustments, mostly spacing-related. Nothing's perfect, certainly not a
_WordPress_ website.

## Comparison 🔎

**Head to [comparison.md](/assets/comparison.md) for the comparison index,
including archived Chime website.**

Alternatively, visit [Chime Clone](https://chime-clone.vercel.app/) &
[Chime Originial](https://www.chime.com/).

## Tech Stack 💻

- **Scripting**

  - `TypeScript`@`4.8.0` &ndash; static typing with pleasure

- **Backend**

  - `Next.js`@`12.3.1` &ndash; data fetching, routing & plenty of features
    Next.js has to offer
  - `Prisma`@`4.8.0` &ndash; data mapping, modeling & typing, database client

- **Frontend**

  - `React`@`18.2.0` &ndash; on which Next.js is built
  - `styled-components`@`5.3.6` &ndash; writing styles

- **Deployment**

  - `MongoDB Atlas` &ndash; database deployment
  - `Vercel` &ndash; frontend & backend deployment

- **Design**

  - `Adobe Photoshop` &ndash; fixing scrapped raster graphics
  - `Adobe Illustrator` &ndash; minor adjustments to SVGs

- **Code Quality**

  - `ESLint`@`8.22.0` &ndash; static code analysis
  - `Prettier`@`2.8.3` &ndash; code formatting
  - `Lighthouse` &ndash; performance, quality & correctness

- **Utils**

  - `bcrypt`@`5.1.0` &ndash; hashing passwords
  - `nanoid`@`4.0.0` &ndash; generating IDs
  - `usehooks-ts`@`2.9.1` &ndash; handling session & hover event
  - `react-hook-form`@`7.38.0` &ndash; login & registration form

## Thoughts 💭

Tech stack is pretty much similar to the
[Kolor-Dev](https://github.com/kon-pas/kolor-dev)&apos;s one.

_Next.js_ with _TypeScript_ is great.

I definitely prefer _CSS-in-JSS_ over other approaches, including _Sass_, but I
do regret not using _TailwindCSS_.

I should write boilerplate code less often and use third party libraries
instead. `usehooks-ts` & `react-hook-form` was a good choice. Maybe I should
have used `axios`, too.

Even though, writing all components by myself was a great exercise.

## Credits 👥

All credits go to the original [Chime](https://www.chime.com/) website.

## License 📝

This project is [MIT](/LICENSE.md) licensed.
