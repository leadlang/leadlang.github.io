---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: The Lead Programming Language Foundation

sidebar: true

hero:
  name: "The Lead"
  text: "Programming Language Foundation"
  image:
    src: /icon.svg
    alt: Icon

  tagline: Experimenting to create what might work

  actions:
    - theme: brand
      text: The Lead Programming Language
      link: /lead
    - theme: alt
      text: Lead Runtime (LRT)
      link: /lrtexec
---

> [!NOTE]
> You might be looking for [LeadLang](/lead) home page. We've moved to [here](/lead)!

---

<style module>
  .projects {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .mx {
    margin-left: auto;
    margin-right: auto;
  }

  .proj {
    width: 100%;
    height: 100%;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-bottom: 1rem;
    align-items: center;
  }

  @media (min-width: 786px) {
    .proj {
      flex-direction: row;
      justify-content: center;
    }
  }

    /* New styles for the project cards/buttons */
  .project-card {
    background-color: var(--vp-c-bg-soft); /* Use VitePress theme background for cards */
    border-radius: 8px; /* Rounded corners */
    padding: 2rem;
    text-align: center;
    transition: background-color 0.3s ease, border-color 0.3s ease;
    border: 1px solid var(--vp-c-border); /* A subtle border */
    display: flex; /* Use flexbox for content alignment inside card */
    flex-direction: column;
    justify-content: center; /* Center content vertically */
    align-items: center; /* Center content horizontally */
    
    min-height: 120px; /* Ensure a minimum height for uniformity */
    text-decoration: none !important; /* Remove underline from link */
    color: var(--vp-c-text-1); /* Use primary text color */
    flex: 1; /* Allow cards to grow and shrink in flex container */
    max-width: 400px; /* Max width for individual cards */
  }

  .project-card:hover {
    background-color: var(--vp-c-bg-mute); /* Lighter background on hover */
    border-color: var(--vp-c-brand-1); /* Brand color border on hover */
    cursor: pointer;
  }

  .project-card h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--vp-c-text-1);
  }

  .project-card p {
    font-size: 1rem;
    color: var(--vp-c-text-2); /* Secondary text color */
  }
</style>

<div :class="$style.projects">
  <h1 :class="$style.mx">Our projects</h1>

  <div :class="$style.proj">
    <a href="/lead" :class="$style['project-card']">
      <img src="/icon.svg" style="border-radius:7px;height:5rem;" />
      <h2>LeadLang</h2>
      <p>The experimental programming language itself.</p>
    </a>
    <a href="/lrtexec" :class="$style['project-card']">
      <img src="/icon.svg" style="border-radius:7px;height:5rem;" />
      <h2><strong>L</strong>ead <strong>R</strong>un<strong>t</strong>ime (LRT)</h2>
      <p>The executable environment for Lead programs.</p>
    </a>

  </div>
</div>

---

# What is Lead?

> What is _Lead?_ Is it a programming langauge? or a _foundation?_ What does it aim to _achieve?_

Lead refers to both

- The Foundation
- The Language

Initially, "Lead" was the name of the programming language that was developed. Subsequently, the foundation was also named "Lead". Now, **Lead Foundation** maintains both **Lead Language** and **Lead RunTime**

---

# Why Lead?

Just as the tagline mentions, **Lead Foundation** is experimenting on how to create a programming language within these objectives

- **Simplicity:** A relatively simple bytecode **interpreter**
- **Evolutionary Modularity:** A design that allows `main.lrt` to be written in **v1** of the **syntax** and `module.lrt` to be in **v2** of the **syntax** or **language** or **specification**.
- **Native Interoperability:** The Foundation works to create a **language** and **contained interpretable executable file** that treats native libraries as packages itself
