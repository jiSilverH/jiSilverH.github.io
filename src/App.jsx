import { useState } from "react";
import { awards, education, experience, internationalExperience, news, profile, publications, sections } from "./content.js";

const labels = { about: "About", news: "News", publications: "Publications", experience: "Research", education: "Education", international: "International", awards: "Awards", cv: "CV" };

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#about">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#about">JH<span>.</span></a>
        <nav className={menuOpen ? "open" : ""} aria-label="Primary navigation">
          {sections.map((id) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{labels[id]}</a>)}
        </nav>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? "Close" : "Menu"}</button>
      </header>

      <main className="layout">
        <aside className="profile-card">
          <div className="portrait">
            <img src={profile.photo} alt={`${profile.name} avatar`} />
          </div>
          <p className="eyebrow">{profile.role}</p>
          <h1>{profile.name}</h1>
          <p className="native-name">{profile.nativeName}</p>
          <p className="affiliation">{profile.organization}<br />{profile.location}</p>
          <div className="profile-links">
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={`mailto:${profile.workEmail}`}>KT Email</a>
            {profile.linkedin && <a href={profile.linkedin}>LinkedIn</a>}
            {profile.cv && <a href={profile.cv} download>Download CV</a>}
          </div>
          <div className="focus-list">{profile.focus.map((item) => <span key={item}>{item}</span>)}</div>
        </aside>

        <div className="content">
          <Section id="about" title="About Me">
            <div className="intro">
              <p className="lead">Building language models that reason <em>reliably</em>.</p>
              {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </Section>

          <Section id="news" title="News">
            <div className="news-list">{news.map((item) => <div className="news-item" key={`${item.date}-${item.text}`}><time>{item.date}</time><p>{item.text}</p></div>)}</div>
          </Section>

          <Section id="publications" title="Publications" kicker="Selected and recent work">
            <div className="publication-list">{publications.map((paper, index) => <Publication paper={paper} index={index + 1} key={paper.title} />)}</div>
          </Section>

          <Section id="experience" title="Research Experience">
            <div className="timeline">{experience.map((item) => <Experience item={item} key={`${item.institution}-${item.period}`} />)}</div>
          </Section>

          <Section id="education" title="Education">
            <div className="institution-grid">{education.map((item) => <Institution item={item} key={`${item.degree}-${item.period}`} />)}</div>
          </Section>

          <Section id="international" title="International Academic Experience">
            <div className="institution-grid">{internationalExperience.map((item) => <Institution item={item} key={item.institution} />)}</div>
          </Section>

          <Section id="awards" title="Honors & Awards">
            <div className="award-list">{awards.map((award) => <article className="award" key={award.title}><div><span>{award.year}</span><h3>{award.title}</h3></div><p>{award.issuer}<br /><small>{award.detail}</small></p></article>)}</div>
          </Section>

          <Section id="cv" title="Academic CV">
            <div className="cv-card"><div><p className="eyebrow">Curriculum Vitae</p><h3>Education, research, publications, and awards</h3><p>Updated October 2026 · PDF, 2 pages</p></div><a className="button" href={profile.cv} download>Download CV <span>↓</span></a></div>
          </Section>
        </div>
      </main>
      <footer><p>© 2026 Ji-Eun Han. Built with the <a href="https://github.com/AaronZ345/Athena-personal-academic-page">Athena</a> design system.</p></footer>
    </>
  );
}

function Section({ id, title, kicker, children }) {
  return <section id={id}><header className="section-heading"><div><span>{String(sections.indexOf(id) + 1).padStart(2, "0")}</span><h2>{title}</h2></div>{kicker && <p>{kicker}</p>}</header>{children}</section>;
}

function highlightName(authors) {
  return authors.split("Ji-Eun Han").flatMap((part, index, list) => index < list.length - 1 ? [part, <strong className="author-me" key={index}>Ji-Eun Han</strong>] : [part]);
}

function Publication({ paper, index }) {
  const pending = paper.paper === "#";
  return <article className="publication"><span className="publication-index">{String(index).padStart(2, "0")}</span><div><p className="pub-year">{paper.year}</p><h3>{paper.title}</h3><p className="authors">{highlightName(paper.authors)}</p><p className="venue">{paper.venue}</p>{paper.contribution && <p className="contribution">Contribution: {paper.contribution}</p>}{paper.note && <p className="note">{paper.note}</p>}<div className="pub-links"><a href={paper.paper} aria-disabled={pending} onClick={pending ? (event) => event.preventDefault() : undefined} target={pending ? undefined : "_blank"} rel="noreferrer">Paper {pending ? "— pending" : "↗"}</a></div></div></article>;
}

function Mark({ children, logo, institution }) {
  return <div className={`institution-mark mark-${children.toLowerCase()}`}>{logo ? <img src={logo} alt={`${institution} logo`} /> : children}</div>;
}

function Experience({ item }) {
  return <article className="experience"><Mark logo={item.logo} institution={item.institution}>{item.mark}</Mark><div className="experience-body"><div className="entry-head"><div><h3>{item.institution}</h3><p>{item.role} · {item.location}</p></div><time>{item.period}</time></div>{item.groups?.map((group) => <div className={`project${group.current ? " current" : ""}`} key={group.title}><div><h4>{group.title}</h4><time>{group.period}</time></div><ul>{group.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>)}{item.details && <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}</div></article>;
}

function Institution({ item }) {
  return <article className="institution"><Mark logo={item.logo} institution={item.institution}>{item.mark}</Mark><div><time>{item.period}</time><h3>{item.institution}</h3><p>{item.degree}</p><small>{item.details}</small></div></article>;
}

export default App;
