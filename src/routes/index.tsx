import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowDown, ArrowRight, BrainCircuit, BriefcaseBusiness, Check,
  Code2, Download, ExternalLink, Github, GraduationCap, HeartHandshake,
  Mail, MapPin, Menu, Phone, Sparkles, Users, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import cvAsset from "@/assets/cv.pdf.asset.json";
import fnbCertificate from "@/assets/fnb-certificate.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Refilwe Thando Tladi | Technology Portfolio" },
    { name: "description", content: "Explore Refilwe Thando Tladi's technology skills, projects, education, certifications, and career interests." },
    { property: "og:title", content: "Refilwe Thando Tladi | Technology Portfolio" },
    { property: "og:description", content: "A motivated emerging professional building a career through technology, creativity, and continuous learning." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

const navItems = [
  ["Home", "home"], ["About Me", "about"], ["Skills", "skills"], ["Projects", "projects"],
  ["Education", "education"], ["Certifications", "certifications"], ["Experience", "experience"], ["Contact", "contact"],
];
const technicalSkills = ["Full-Stack Development", "HTML", "CSS", "JavaScript", "Web Development", "AI Development", "Computer Literacy", "Digital Literacy", "Technical Troubleshooting", "Problem-Solving"];
const softSkills = ["Communication", "Customer Service", "Critical Thinking", "Attention to Detail", "Time Management", "Teamwork", "Adaptability", "Organisation", "Conflict Resolution", "Creativity", "Willingness to Learn"];
const interests = ["Junior Full-Stack Developer", "AI / AI Development", "Web Development", "Technical Support", "Customer Support", "Content Moderation", "Digital and Technology Roles", "Entry-Level Technology Opportunities"];
const strengths = [
  ["A learning mindset", "I approach new tools and responsibilities with curiosity, patience and a genuine willingness to improve."],
  ["People-first communication", "I value clear communication, thoughtful service and understanding what people need."],
  ["Adaptable problem-solving", "I bring attention to detail, creativity and a calm approach to working through challenges."],
  ["Dependable collaboration", "I am comfortable contributing independently while also supporting and learning from a team."],
];
const projects = [
  { title: "Personal Portfolio Website", description: "A responsive personal portfolio website created to showcase my skills, qualifications, projects and professional background to recruiters.", technologies: "HTML, CSS, JavaScript, AI-assisted development tools", features: "Responsive design, navigation, skills section, project showcase, contact section", status: "Current project", available: false },
  { title: "AI-Assisted Web Development Project", description: "An editable placeholder for a website or application I create using AI-assisted development tools during my AI Development Skills programme.", technologies: "To be updated", features: "To be updated", status: "Editable placeholder", available: false },
  { title: "Future Technology Project", description: "An editable placeholder for another website, application, or digital project I create as I continue developing my technical skills.", technologies: "To be updated", features: "To be updated", status: "Editable placeholder", available: false },
];

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return <div className="mb-10 max-w-2xl"><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p><h2 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">{title}</h2>{intro && <p className="mt-4 leading-7 text-muted-foreground">{intro}</p>}</div>;
}

function CvButton({ compact = false }: { compact?: boolean }) {
  return <Button asChild variant="portfolio" size={compact ? "default" : "lg"}><a href={cvAsset.url} target="_blank" rel="noopener noreferrer" download="Refilwe-Thando-Tladi-CV.pdf"><Download /> Download My CV</a></Button>;
}

function Pill({ children }: { children: ReactNode }) {
  return <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm"><span className="size-1.5 rounded-full bg-primary" />{children}</span>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formNote, setFormNote] = useState("");
  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormNote("This form is ready to connect once a real email service is added.");
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <nav aria-label="Main navigation" className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
          <a href="#home" className="flex min-w-0 items-center gap-3" onClick={() => setMenuOpen(false)}><span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">RT</span><span className="truncate text-sm font-bold sm:text-base">Refilwe Thando Tladi</span></a>
          <div className="hidden items-center gap-5 xl:flex">{navItems.map(([label,id]) => <a key={id} href={`#${id}`} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">{label}</a>)}<CvButton compact /></div>
          <Button variant="ghost" size="icon" className="xl:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </nav>
        {menuOpen && <div className="border-t border-border bg-background px-5 py-5 xl:hidden"><div className="mx-auto grid max-w-7xl gap-1">{navItems.map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-3 text-sm font-semibold hover:bg-accent">{label}</a>)}<div className="pt-3"><CvButton compact /></div></div></div>}
      </header>

      <main>
        <section id="home" className="relative min-h-[calc(100vh-4.5rem)] border-b border-border">
          <div className="mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blush px-4 py-2 text-sm font-semibold text-primary"><Sparkles className="size-4" /> Hi, I’m Refilwe Thando Tladi</p>
              <h1 className="font-display text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">Building My Future Through <span className="text-primary">Technology, Creativity</span> &amp; Continuous Learning</h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">I’m a motivated and adaptable professional with a growing background in technology, full-stack development and AI development. I’m passionate about learning new skills, solving problems and creating meaningful digital experiences. I’m currently developing my technical abilities while building a career where technology, communication and creativity come together.</p>
              <p className="mt-5 border-l-2 border-primary pl-4 text-sm font-semibold leading-6 text-foreground">Open to opportunities in technology, digital support, customer-focused roles and entry-level development.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button asChild variant="portfolio" size="lg"><a href="#certifications">View Certificates <ArrowDown /></a></Button><CvButton /></div>
            </div>
            <div className="relative mx-auto w-full max-w-md" aria-label="Initials-based profile graphic for Refilwe Thando Tladi">
              <div className="profile-glow relative aspect-square overflow-hidden rounded-[2rem] border border-primary/20 shadow-2xl">
                <div className="absolute left-[12%] top-[14%] size-16 rounded-full border border-primary/25" /><div className="absolute right-[9%] top-[22%] h-px w-24 bg-primary/35" /><div className="absolute bottom-[16%] left-[8%] h-24 w-px bg-primary/35" /><div className="absolute bottom-[10%] right-[14%] grid grid-cols-3 gap-2">{Array.from({length:9}).map((_,i)=><span key={i} className="size-1.5 rounded-full bg-primary/45" />)}</div>
                <div className="absolute inset-[15%] grid place-items-center rounded-full border border-background/70 bg-card/75 shadow-xl backdrop-blur"><span className="font-display text-7xl font-bold text-primary sm:text-8xl">RT</span></div>
                <Code2 className="absolute bottom-[18%] left-[16%] size-8 text-primary/70" /><BrainCircuit className="absolute right-[15%] top-[16%] size-9 text-primary/70" />
              </div>
              <p className="mt-4 text-center text-xs text-muted-foreground">Initials artwork — ready to replace with your real photograph</p>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"><SectionHeading eyebrow="About me" title="Curious by nature. Growing with purpose." /><div className="space-y-5 text-base leading-8 text-muted-foreground"><p>I’m passionate about technology, AI development and full-stack development, and I’m motivated by the possibilities that come from continuous learning. I enjoy solving problems, bringing creativity to my work, and growing both personally and professionally.</p><p>I have completed a <strong className="text-foreground">Full-Stack Development certificate through FNB App Academy</strong> and I’m currently developing my skills through an <strong className="text-foreground">AI Development Skills programme accredited with Google and SETA</strong>.</p><p>Alongside my technical interests, I care about helping people and providing good service. I’m building a career that brings together technology, communication and creativity—while staying open to feedback, new responsibilities and opportunities to learn.</p></div></div></section>

        <section id="skills" className="section-rose border-y border-border"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><SectionHeading eyebrow="Capabilities" title="Skills I’m actively developing" intro="An honest view of the technical and people skills I bring to my learning journey and future workplace." /><div className="grid gap-6 lg:grid-cols-2"><div className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8"><div className="mb-6 flex items-center gap-3"><Code2 className="text-primary" /><h3 className="font-display text-2xl font-bold">Technical Skills</h3></div><div className="flex flex-wrap gap-2.5">{technicalSkills.map(skill=><Pill key={skill}>{skill}</Pill>)}</div></div><div className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8"><div className="mb-6 flex items-center gap-3"><Users className="text-primary" /><h3 className="font-display text-2xl font-bold">Soft Skills</h3></div><div className="flex flex-wrap gap-2.5">{softSkills.map(skill=><Pill key={skill}>{skill}</Pill>)}</div></div></div></div></section>

        <section id="projects" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><SectionHeading eyebrow="Selected work" title="Projects & learning in practice" intro="A transparent record of what I’m building now, with room to add completed work as my portfolio grows." /><div className="grid gap-6 lg:grid-cols-3">{projects.map((project,index)=><article key={project.title} className="group flex min-h-[32rem] flex-col rounded-lg border border-border bg-card p-6 shadow-sm transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-xl"><div className="mb-6 flex items-start justify-between"><span className="font-display text-5xl font-bold text-rose-soft">0{index+1}</span><span className="rounded-full bg-blush px-3 py-1 text-xs font-bold text-primary">{project.status}</span></div><h3 className="font-display text-2xl font-bold">{project.title}</h3><p className="mt-4 flex-1 leading-7 text-muted-foreground">{project.description}</p><dl className="mt-6 space-y-4 border-t border-border pt-5 text-sm"><div><dt className="font-bold text-foreground">Technologies used</dt><dd className="mt-1 leading-6 text-muted-foreground">{project.technologies}</dd></div><div><dt className="font-bold text-foreground">Features</dt><dd className="mt-1 leading-6 text-muted-foreground">{project.features}</dd></div></dl><div className="mt-6 grid grid-cols-2 gap-3"><Button variant="portfolioOutline" disabled={!project.available}><ExternalLink /> View Project</Button><Button variant="ghost" disabled={!project.available}><Github /> View Code</Button></div></article>)}</div></section>

        <section id="education" className="section-rose border-y border-border"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><SectionHeading eyebrow="Learning journey" title="Education" /><div className="relative ml-3 max-w-4xl border-l border-primary/30 pl-8 sm:pl-12"><div className="relative pb-12"><span className="absolute -left-[2.6rem] top-1 size-6 rounded-full border-[6px] border-primary bg-background sm:-left-[3.8rem]" /><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">In development</p><h3 className="mt-2 font-display text-2xl font-bold">AI Development Skills Programme</h3><p className="mt-2 leading-7 text-muted-foreground">Currently developing my skills through an AI Development Skills programme accredited with Google and SETA.</p></div><div className="relative pb-12"><span className="absolute -left-[2.6rem] top-1 grid size-6 place-items-center rounded-full bg-primary text-primary-foreground sm:-left-[3.8rem]"><Check className="size-3.5" /></span><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Completed — 2025</p><h3 className="mt-2 font-display text-2xl font-bold">Certificate in Full-Stack Development</h3><p className="mt-2 text-muted-foreground">FNB App Academy · issued by ITVarsity · 32 credits</p></div><div className="relative"><span className="absolute -left-[2.6rem] top-1 grid size-6 place-items-center rounded-full bg-primary text-primary-foreground sm:-left-[3.8rem]"><Check className="size-3.5" /></span><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Completed — 2016</p><h3 className="mt-2 font-display text-2xl font-bold">National Senior Certificate (Grade 12)</h3><p className="mt-2 text-muted-foreground">Mondeor High School</p></div></div></div></section>

        <section id="certifications" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><SectionHeading eyebrow="Credentials" title="Certifications" intro="Certificates are available to view and download directly." /><div className="grid gap-6 md:grid-cols-2"><article className="flex flex-col rounded-lg border border-border bg-card p-7 shadow-sm"><div className="mb-7 h-1 w-16 rounded-full bg-primary" /><GraduationCap className="size-9 text-primary" /><h3 className="mt-5 font-display text-2xl font-bold">Certificate in Full-Stack Development</h3><p className="mt-2 text-muted-foreground">FNB App Academy 2025 · issued by ITVarsity</p><p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">32 credits covering HTML, UX design, APIs, data management, backend development and AI in development.</p><div className="mt-6 border-t border-border pt-5"><Button asChild variant="portfolioOutline"><a href={fnbCertificate.url} target="_blank" rel="noopener noreferrer"><ExternalLink /> View Certificate</a></Button></div></article><article className="flex flex-col rounded-lg border border-border bg-card p-7 shadow-sm"><div className="mb-7 h-1 w-16 rounded-full bg-primary" /><BrainCircuit className="size-9 text-primary" /><h3 className="mt-5 font-display text-2xl font-bold">AI Development Skills Programme</h3><p className="mt-2 text-muted-foreground">Google and SETA accredited</p><p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">In progress — the certificate will be added here once the programme is completed.</p><div className="mt-6 border-t border-border pt-5"><Button variant="portfolioOutline" disabled><ExternalLink /> Certificate pending</Button></div></article></div></section>

        <section id="experience" className="section-rose border-y border-border"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><SectionHeading eyebrow="Professional journey" title="Work Experience" intro="Customer-focused roles that built my communication, accuracy and digital skills." /><div className="grid gap-6 lg:grid-cols-3">{experience.map(job=><article key={job.title+job.company} className="flex flex-col rounded-lg border border-border bg-card p-6 shadow-sm sm:p-7"><BriefcaseBusiness className="size-8 text-primary" /><p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-primary">{job.dates}</p><h3 className="mt-2 font-display text-xl font-bold">{job.title}</h3><p className="mt-1 text-sm font-semibold text-muted-foreground">{job.company}</p><p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{job.summary}</p></article>)}</div><div className="mt-8"><CvButton /></div></div></section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><SectionHeading eyebrow="Career direction" title="What I’m Looking For" intro="I’m interested in opportunities where I can apply my existing skills, continue learning and grow professionally. I’m open to developing into new technology-focused roles rather than limiting myself to one career path." /><div className="flex flex-wrap gap-3">{interests.map(item=><Pill key={item}>{item}</Pill>)}</div></section>

        <section className="border-y border-border bg-foreground text-background"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><SectionHeading eyebrow="The value I bring" title="Why work with me" intro="I bring a grounded, growth-focused approach—combining people skills with an active commitment to building my technical capability." /><div className="grid gap-px overflow-hidden rounded-lg bg-background/15 sm:grid-cols-2">{strengths.map(([title,description])=><article key={title} className="bg-foreground p-6 sm:p-8"><HeartHandshake className="mb-5 text-rose-soft" /><h3 className="font-display text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-background/70">{description}</p></article>)}</div></div></section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]"><div><SectionHeading eyebrow="Let’s connect" title="Contact Me" intro="Recruiters and teams are welcome to get in touch about suitable opportunities and conversations." /><div className="space-y-3 text-sm">{contactDetails.map(([Icon,label,href])=>{const C=Icon as typeof Mail; return <div key={label as string} className="flex items-center gap-3 rounded-md border border-border bg-card p-3 text-muted-foreground"><C className="size-4 shrink-0 text-primary" />{href ? <a href={href as string} target={String(href).startsWith("http")?"_blank":undefined} rel="noopener noreferrer" className="break-all font-medium text-foreground hover:text-primary">{label as string}</a> : <span>{label as string}</span>}</div>})}</div><div className="mt-7"><CvButton /></div></div><form onSubmit={submitForm} className="rounded-lg border border-border bg-card p-6 shadow-lg sm:p-8"><div className="grid gap-5"><label className="grid gap-2 text-sm font-bold">Name<Input required name="name" placeholder="Your name" className="h-11" /></label><label className="grid gap-2 text-sm font-bold">Email<Input required name="email" type="email" placeholder="you@example.com" className="h-11" /></label><label className="grid gap-2 text-sm font-bold">Message<Textarea required name="message" placeholder="Write your message here" className="min-h-36 resize-y" /></label><Button type="submit" variant="portfolio" size="lg"><Mail /> Send Message</Button>{formNote && <p role="status" className="rounded-md bg-blush p-3 text-sm text-primary">{formNote}</p>}<p className="text-xs leading-5 text-muted-foreground">This form is an editable presentation placeholder and does not send messages yet.</p></div></form></div></section>
      </main>

      <footer className="border-t border-border bg-warm"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8"><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-full bg-primary font-display text-xs font-bold text-primary-foreground">RT</span><div><p className="font-bold">Refilwe Thando Tladi</p><p className="text-xs text-muted-foreground">Technology · Creativity · Continuous learning</p></div></div><a href="#home" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-strong">Back to top <ArrowRight className="size-4 -rotate-90" /></a></div></footer>
    </div>
  );
}
