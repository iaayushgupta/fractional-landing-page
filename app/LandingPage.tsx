export default function LandingPage() {
  const nav = [
    { href: "#solutions", label: "Solutions" },
    { href: "#agents", label: "AI Copilots" },
    { href: "#packages", label: "Packages" },
    { href: "#process", label: "Process" },
    { href: "#case-studies", label: "Case Studies" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ];

  const packages = [
    {
      name: "Data Foundation Sprint",
      tag: "4 weeks • Go-live",
      price: "US$8k–12k",
      bullets: [
        "Ingest → dbt models → warehouse (BQ/Snowflake/Postgres)",
        "Great Expectations data tests + CI",
        "1 KPI dashboard (Power BI / Looker / Metabase)",
        "Basic alerting & on-call runbook",
      ],
      cta: "Book discovery",
    },
    {
      name: "Forecasts-in-a-Box",
      tag: "4 weeks • MAPE target",
      price: "US$10k–18k",
      bullets: [
        "Baseline + advanced model (Prophet / N-BEATS / TFT)",
        "Champion/Challenger backtests & error dashboard",
        "Retraining hooks + drift monitors",
        "Optional FastAPI inference endpoint",
      ],
      cta: "See a demo",
    },
    {
      name: "Quality & Reliability Audit",
      tag: "2 weeks • Quick wins",
      price: "US$2k–5k",
      bullets: [
        "Pipeline & schema review, SLAs, failure modes",
        "Data quality heatmap (Green/Yellow/Red)",
        "Top 10 fixes prioritized by ROI",
        "1-day workshop with your team",
      ],
      cta: "Start the audit",
    },
  ];

  const faqs = [
    {
      q: "What size companies do you work with?",
      a: "MSMEs and mid-market (10–250 employees). If you’re earlier or later stage, we can still scope a pilot.",
    },
    {
      q: "What does week 1 look like?",
      a: "Access + environment setup, success metrics, data mapping, and a day-4 check-in with first dashboards or model baselines.",
    },
    {
      q: "Do you replace our team?",
      a: "No. We’re a fractional data team: we stand things up fast, then hand off with docs, training, and support.",
    },
    {
      q: "How do we measure success?",
      a: "Clear KPIs: pipeline failure rate <1%, MAPE target agreed up-front, and weekly progress notes tied to outcomes.",
    },
  ];

  return (
    // CLASSIC BLUE (background), TURQUOISE (CTAs), GOLD (accents)
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-blue-950/70 border-b border-blue-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-amber-400/10 ring-1 ring-amber-400/40 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-amber-300"><path d="M4 17l6-10 4 7 6-9" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
              </div>
              <span className="font-semibold tracking-tight text-amber-200">DataHarness</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="hover:text-cyan-300 transition">{n.label}</a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-blue-950 px-4 py-2 font-semibold">
                <span>Book a roadmap call</span>
                <svg viewBox="0 0 24 24" className="h-4 w-4"><path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* soft turquoise glow */}
        <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(34,211,238,0.28),transparent)]"/>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-semibold leading-[1.1] tracking-tight text-amber-200">DataHarness</h1>
            <p className="mt-5 text-lg text-blue-200">We harness your data into pipelines, dashboards, and AI—live in <span className="text-amber-300">4 weeks</span>.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#packages" className="rounded-xl bg-cyan-400 hover:bg-cyan-300 text-blue-950 px-5 py-3 font-semibold">View Packages</a>
              <a href="#contact" className="rounded-xl border border-blue-800 px-5 py-3 font-semibold">Get the 4-week plan</a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-blue-100/90">
              <Stat kpi="<1%" label="Pipeline failure"/>
              <Stat kpi="8–20%" label="Typical forecast error (MAPE)"/>
              <Stat kpi="30–90d" label="Time-to-impact"/>
              <Stat kpi="3x" label="ROI target on data spend"/>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-amber-200">Solutions that ship</h2>
        <p className="mt-3 text-blue-200 max-w-3xl">
          We focus on a few outcomes and do them well. Fixed-scope, predictable delivery, code-first. No endless slides.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SolutionCard title="Data Foundation Sprint" desc="Ingest → dbt → warehouse → dashboard with tests and alerts. Ship in 4 weeks."/>
          <SolutionCard title="Forecasts-in-a-Box" desc="Demand/revenue/price forecasts with backtests, Drift & accuracy monitors, retraining hooks."/>
          <SolutionCard title="Quality & Reliability Audit" desc="Pipeline reliability review, data quality heatmap, and a top-10 fix list."/>
        </div>
      </section>

      {/* AI Copilots & Agentic Automation */}
      <section id="agents" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-amber-200">AI Copilots & Agentic Automation</h2>
        <p className="mt-3 text-blue-200 max-w-3xl">Real work, not chat toys. We build task-focused agents and RAG assistants with guardrails, evals, and clear KPIs.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl border border-blue-800 bg-blue-950/60 p-5">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-cyan-400/10 ring-1 ring-cyan-400/30 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-cyan-300"><path d="M4 12h16M8 6l-4 6 4 6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-50">Knowledge Assistant (RAG)</h3>
            </div>
            <p className="mt-3 text-blue-100/90 text-sm">Company-doc QA with sources. Hybrid retrieval, reranking, chunking tuned to your corpus. Admin & analytics.</p>
            <ul className="mt-3 space-y-2 text-sm text-blue-100/90">
              <li className="flex gap-2"><svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 text-cyan-300"><path d="M4 12l6 6L20 6" fill="none" stroke="currentColor" strokeWidth="2"/></svg> Faithfulness ≥ 0.9, Hit@k ≥ 0.9 on eval set</li>
              <li className="flex gap-2"><svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 text-cyan-300"><path d="M4 12l6 6L20 6" fill="none" stroke="currentColor" strokeWidth="2"/></svg> Source citations & fallback to “don’t know”</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-blue-800 bg-blue-950/60 p-5">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-cyan-400/10 ring-1 ring-cyan-400/30 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-cyan-300"><path d="M12 3v6m0 6v6M3 12h6m6 0h6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-50">Support Copilot</h3>
            </div>
            <p className="mt-3 text-blue-100/90 text-sm">Drafts and triages tickets in Zendesk/Intercom with policy and product docs as ground truth.</p>
            <ul className="mt-3 space-y-2 text-sm text-blue-100/90">
              <li className="flex gap-2"><svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 text-cyan-300"><path d="M4 12l6 6L20 6" fill="none" stroke="currentColor" strokeWidth="2"/></svg> First-response time ↓, CSAT ↑</li>
              <li className="flex gap-2"><svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 text-cyan-300"><path d="M4 12l6 6L20 6" fill="none" stroke="currentColor" strokeWidth="2"/></svg> Hallucination budget & escalation rules</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-blue-800 bg-blue-950/60 p-5">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-cyan-400/10 ring-1 ring-cyan-400/30 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-cyan-300"><path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-50">Sales Ops Copilot</h3>
            </div>
            <p className="mt-3 text-blue-100/90 text-sm">Lead enrichment, proposal drafts, follow-ups with CRM guardrails (HubSpot/Pipedrive).</p>
            <ul className="mt-3 space-y-2 text-sm text-blue-100/90">
              <li className="flex gap-2"><svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 text-cyan-300"><path d="M4 12l6 6L20 6" fill="none" stroke="currentColor" strokeWidth="2"/></svg> Meeting/booked rate ↑</li>
              <li className="flex gap-2"><svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 text-cyan-300"><path d="M4 12l6 6L20 6" fill="none" stroke="currentColor" strokeWidth="2"/></svg> PII redaction & action logs</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-blue-800 bg-blue-950/60 p-5">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-cyan-400/10 ring-1 ring-cyan-400/30 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-cyan-300"><path d="M4 17l6-10 4 7 6-9" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-50">Agent Automation Sprint</h3>
            </div>
            <p className="mt-3 text-blue-100/90 text-sm">Task-focused agents that call your tools (APIs/DB/Sheets), with budgets, retries, and human-in-the-loop.</p>
            <ul className="mt-3 space-y-2 text-sm text-blue-100/90">
              <li className="flex gap-2"><svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 text-cyan-300"><path d="M4 12l6 6L20 6" fill="none" stroke="currentColor" strokeWidth="2"/></svg> Success rate ≥ 80% on scripted tasks</li>
              <li className="flex gap-2"><svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 text-cyan-300"><path d="M4 12l6 6L20 6" fill="none" stroke="currentColor" strokeWidth="2"/></svg> Step/latency budgets & audit logs</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="packages" className="bg-blue-950/40 border-y border-blue-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-amber-200">Productized packages</h2>
            <p className="text-sm text-blue-200">Fixed scope • Fixed timeline • Clear outcomes</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {packages.map((p) => (
              <div key={p.name} className="rounded-2xl bg-blue-950/60 border border-blue-800 p-6 flex flex-col">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-blue-50">{p.name}</h3>
                  <span className="text-xs rounded-full bg-amber-400/15 text-amber-200 px-2 py-1 border border-amber-400/30">{p.tag}</span>
                </div>
                <p className="mt-1 text-blue-200 text-sm">{p.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-blue-100/90">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2"><CheckIcon/> <span>{b}</span></li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-blue-800">
                  <a href="#contact" className="inline-flex justify-center rounded-xl bg-cyan-400 hover:bg-cyan-300 text-blue-950 px-4 py-2 font-semibold w-full">{p.cta}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-amber-200">4-week delivery plan</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-4 text-sm">
          {[
            {step: "Week 1", text: "Access, success metrics, data mapping, first baseline or dashboard stub."},
            {step: "Week 2", text: "ETL/dbt models, initial tests, first visuals or model iteration."},
            {step: "Week 3", text: "QA harness, alerts, backtests, sign-offs on KPIs."},
            {step: "Week 4", text: "Productionize, docs, handover session, option to continue on retainer."},
          ].map((s) => (
            <li key={s.step} className="rounded-2xl bg-blue-950/50 border border-blue-800 p-4">
              <div className="text-cyan-300 font-semibold">{s.step}</div>
              <div className="mt-2 text-blue-100/90">{s.text}</div>
            </li>
          ))}
        </ol>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="bg-blue-950/40 border-y border-blue-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-amber-200">Case studies</h2>
            <p className="text-sm text-blue-200">Brief, outcome-first, code-backed</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Case title="D2C brand • Demand forecast" metric="MAPE 22% → 9%" blurb="Reduced stock-outs, improved cash-flow planning."/>
            <Case title="Fintech MSME • Lead scoring" metric="+18% CVR" blurb="Better triage of inbound leads, faster TAT."/>
            <Case title="Hospitality • Ops dashboard" metric="-35% ops MTTR" blurb="Alerting + runbooks cut incident times."/>
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-amber-200">Stack we use</h2>
        <p className="mt-3 text-blue-200">dbt • Airflow/Prefect • BigQuery/Snowflake/Postgres • Great Expectations • MLflow • LangChain/LlamaIndex • Qdrant/Weaviate/pgvector • Rerankers (bge/Cohere) • Power BI/Looker/Metabase • FastAPI</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 text-xs text-blue-100/90">
          {["dbt","Airflow","Prefect","BigQuery","Snowflake","Postgres","Great Expectations","MLflow","Power BI","Looker","Metabase","FastAPI"].map((t)=> (
            <div key={t} className="rounded-xl border border-blue-800 bg-blue-950/40 px-3 py-2 text-center">{t}</div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-blue-950/40 border-y border-blue-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-amber-200">Team</h2>
          <p className="mt-3 text-blue-200 max-w-3xl">Three builders with complementary skills. We ship. We document. We own outcomes.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Member name="Aayush Gupta" role="Data Scientist" url="https://www.linkedin.com/in/aayush-gupta-925442190/"/>
            <Member name="Manish" role="Data Engineer" url="https://www.linkedin.com/in/manish004/"/>
            <Member name="Ankit Rajput" role="ETL & Model QA" url="https://www.linkedin.com/in/ankit-rajput-6178b6203/"/>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl border border-blue-800 bg-blue-950/50 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-amber-200">Request a 30-minute roadmap</h2>
              <p className="mt-2 text-blue-200">Tell us your goal and current data reality. We’ll map the fastest path and a fixed-scope offer.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="mailto:hello@yourcompany.com?subject=Roadmap%20Call" className="rounded-xl bg-cyan-400 hover:bg-cyan-300 text-blue-950 px-5 py-3 font-semibold text-center">Email us</a>
              <a href="#" className="rounded-xl border border-blue-800 px-5 py-3 font-semibold text-center">Book on Calendly</a>
            </div>
          </div>
        </div>
        <p className="mt-4 text-xs text-blue-200">By contacting us you agree to our <a className="underline hover:text-cyan-300" href="#">Privacy Policy</a> and <a className="underline hover:text-cyan-300" href="#">Terms</a>.</p>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-amber-200">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl bg-blue-950/50 border border-blue-800 p-5">
              <div className="font-semibold text-blue-50">{f.q}</div>
              <div className="mt-2 text-blue-200 text-sm">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} DataHarness</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-cyan-300">Privacy</a>
            <a href="#" className="hover:text-cyan-300">Terms</a>
            <a href="#team" className="hover:text-cyan-300">Team</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="rounded-2xl border border-blue-800 bg-blue-950/50 p-4">
      <div className="text-2xl font-semibold text-amber-300">{kpi}</div>
      <div className="text-xs text-blue-200">{label}</div>
    </div>
  );
}

function SolutionCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-blue-800 bg-blue-950/60 p-5">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-cyan-400/10 ring-1 ring-cyan-400/30 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-cyan-300"><path d="M4 12h8l4 6 4-12" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
        </div>
        <h3 className="text-lg font-semibold text-blue-50">{title}</h3>
      </div>
      <p className="mt-3 text-blue-100/90 text-sm">{desc}</p>
    </div>
  );
}

function Case({ title, metric, blurb }: { title: string; metric: string; blurb: string }) {
  return (
    <div className="rounded-2xl bg-blue-950/60 border border-blue-800 p-5">
      <div className="text-sm text-blue-200">{title}</div>
      <div className="mt-2 text-xl font-semibold text-amber-300">{metric}</div>
      <p className="mt-2 text-blue-100/90 text-sm">{blurb}</p>
      <a href="#" className="mt-4 inline-flex items-center gap-2 text-cyan-300 hover:underline text-sm">Read more <svg viewBox="0 0 24 24" className="h-4 w-4"><path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2"/></svg></a>
    </div>
  );
}

function Member({ name, role, url }: { name: string; role: string; url: string }) {
  return (
    <div className="rounded-2xl border border-blue-800 bg-blue-950/60 p-5 flex items-center gap-4">
      <div className="h-12 w-12 rounded-xl bg-blue-900 flex items-center justify-center text-blue-200 font-semibold">
        {name.split(' ').map(w => w[0]).join('').slice(0,2)}
      </div>
      <div>
        <div className="font-semibold text-blue-50">{name}</div>
        <div className="text-sm text-blue-200">{role}</div>
        <a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-300 hover:underline text-sm mt-1">
          LinkedIn
          <svg viewBox="0 0 24 24" className="h-4 w-4"><path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
        </a>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 flex-none text-cyan-300"><path d="M4 12l6 6L20 6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
  );
}
