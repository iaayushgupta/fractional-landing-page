export default function LandingPage() {
  // Updated nav to match the new sections (mobile-safe: hides on small screens)
  const nav = [
    { href: "#data-eng", label: "Data Engineering" },
    { href: "#ai-eng", label: "AI Engineering" },
    { href: "#agentic", label: "Agentic AI" },
    { href: "#operations", label: "Operations" },
    { href: "#packages", label: "Packages" },
    { href: "#case-studies", label: "Case Studies" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ];

  // Packages: replaced Forecasts-in-a-Box with a broader DS offer
  const packages = [
    {
      name: "Data Foundation Sprint",
      tag: "4–6 weeks • Go-live",
      price: "US$8k–12k",
      bullets: [
        "Ingest → dbt models → warehouse (BQ/Snowflake/Postgres)",
        "Data quality tests (Great Expectations) + CI",
        "1 KPI dashboard (Power BI / Looker / Metabase)",
        "Basic alerting & on-call runbook",
      ],
      cta: "Book discovery",
    },
    {
      name: "Data Science Accelerator",
      tag: "4–6 weeks • End-to-end DS",
      price: "US$10k–18k",
      bullets: [
        "Scope: classification, regression, forecasting, recommendations",
        "Experimentation & evaluation framework; champion/challenger",
        "Productionization: retraining hooks, drift & bias monitors",
        "Serving: FastAPI microservice or batch pipelines",
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
      q: "What does kick-off look like?",
      a: "Access & environment setup, success metrics, data mapping, and a day-4 check-in with first dashboards or model baselines.",
    },
    {
      q: "Do you replace our team?",
      a: "No. We’re a fractional data team: we stand things up fast, then hand off with docs, training, and support.",
    },
    {
      q: "How do we measure success?",
      a: "Clear KPIs: low pipeline failure rate, model metrics agreed up-front, and weekly notes tied to outcomes.",
    },
  ];

  return (
    // LIGHT THEME + better mobile rendering
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/30 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <path d="M4 17l6-10 4 7 6-9" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span className="font-semibold tracking-tight">DataHarness</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="hover:text-emerald-600 transition">
                  {n.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(16,185,129,0.15),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-semibold leading-[1.1] tracking-tight">DataHarness</h1>
            <p className="mt-5 text-lg text-slate-600">
              We harness your data into pipelines, dashboards, and AI—live in <span className="text-emerald-600">4 weeks</span>.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#packages" className="rounded-xl bg-emerald-500 text-white px-5 py-3 font-semibold">
                View Packages
              </a>
              {/* Removed the “Get the 4-week plan” button per your request */}
            </div>

            {/* KPIs — stacks nicely on mobile */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-sm">
              <Stat kpi="<1%" label="Pipeline failure" />
              <Stat kpi="8–20%" label="Typical forecast error (MAPE)" />
              <Stat kpi="30–90d" label="Time-to-impact" />
              <Stat kpi="3x" label="ROI target on data spend" />
            </div>
          </div>
        </div>
      </section>

      {/* Data Engineering */}
      <section id="data-eng" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Data Engineering</h2>
        <p className="mt-3 text-slate-600 max-w-3xl">
          Build a durable data foundation—so your dashboards and AI don’t crumble.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SolutionCard title="Data Silos → Unified" desc="Merge fragmented data for clear decisions (silos mgmt, dedup, identity)." />
          <SolutionCard title="From Raw → Ready" desc="Wrangling, validation, and documentation for trustworthy analytics." />
          <SolutionCard title="Lake & Warehouse" desc="Datalake architectures (Lambda/Kappa/Medallion) and modern warehousing." />
        </div>
      </section>

      {/* AI Engineering */}
      <section id="ai-eng" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">AI Engineering</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SolutionCard title="Predictive Modelling" desc="Classification & regression with robust evals and monitoring." />
          <SolutionCard title="Forecasting" desc="Demand / revenue / price forecasting with backtests & drift alerts." />
          <SolutionCard title="Recommendations" desc="Personalized ranking and recommendation systems." />
        </div>
      </section>

      {/* Agentic AI Solutions */}
      <section id="agentic" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Agentic AI Solutions</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SolutionCard title="Brand & Support Chatbots" desc="Grounded, source-cited answers from your docs & policies (RAG + guardrails)." />
          <SolutionCard title="Custom LLMs" desc="Fine-tuned / instruction-tuned models tailored to your data & tone." />
          <SolutionCard title="Task Agents" desc="Agents that call your tools (APIs/DB/Sheets) with budgets, retries, and human-in-the-loop." />
        </div>
      </section>

      {/* Operations */}
      <section id="operations" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Operations</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SolutionCard title="MLOps" desc="MLflow registry, CI/CD, feature stores, monitoring, rollback playbooks." />
          <SolutionCard title="Data Reliability" desc="Great Expectations tests, SLAs, alerting, incident runbooks." />
          <SolutionCard title="Dashboards that last" desc="Power BI / Looker setups with ownership and documentation." />
        </div>
      </section>

      {/* Packages (unchanged section id; content updated above) */}
      <section id="packages" className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Productized packages</h2>
            <p className="text-sm text-slate-500">Fixed scope • Fixed timeline • Clear outcomes</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {packages.map((p) => (
              <div key={p.name} className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <span className="text-xs rounded-full bg-emerald-500/10 text-emerald-700 px-2 py-1 border border-emerald-500/20">
                    {p.tag}
                  </span>
                </div>
                <p className="mt-1 text-slate-600 text-sm">{p.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <CheckIcon /> <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <a
                    href="#contact"
                    className="inline-flex justify-center rounded-xl bg-emerald-500 text-white px-4 py-2 font-semibold w-full"
                  >
                    {p.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Removed the “4-week delivery plan” section as requested */}

      {/* Case Studies */}
      <section id="case-studies" className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Case studies</h2>
            <p className="text-sm text-slate-500">Brief, outcome-first, code-backed</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Case
              title="D2C brand • Demand forecast"
              metric="MAPE 22% → 9%"
              blurb="Reduced stock-outs, improved cash-flow planning."
            />
            <Case title="Fintech MSME • Lead scoring" metric="+18% CVR" blurb="Better triage of inbound leads, faster TAT." />
            <Case
              title="Hospitality • Ops dashboard"
              metric="-35% ops MTTR"
              blurb="Alerting + runbooks cut incident times."
            />
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Stack we use</h2>
        <p className="mt-3 text-slate-600">
          dbt • Airflow/Prefect • BigQuery/Snowflake/Postgres • Great Expectations • MLflow • LangChain/LlamaIndex •
          Qdrant/Weaviate/pgvector • Rerankers (bge/Cohere) • Power BI/Looker/Metabase • FastAPI
        </p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 text-xs text-slate-600">
          {[
            "dbt",
            "Airflow",
            "Prefect",
            "BigQuery",
            "Snowflake",
            "Postgres",
            "Great Expectations",
            "MLflow",
            "Power BI",
            "Looker",
            "Metabase",
            "FastAPI",
          ].map((t) => (
            <div key={t} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-center">
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Team</h2>
          <p className="mt-3 text-slate-600 max-w-3xl">
            Three builders with complementary skills. We ship. We document. We own outcomes.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Member
              name="Aayush Gupta"
              role="Data Scientist"
              url="https://www.linkedin.com/in/aayush-gupta-925442190/"
            />
            <Member name="Manish" role="Data Engineer" url="https://www.linkedin.com/in/manish004/" />
            <Member
              name="Ankit Yadav"
              role="ETL & Model QA"
              url="https://www.linkedin.com/in/ankit-yadav-bb7352103/"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Request a 30-minute roadmap</h2>
              <p className="mt-2 text-slate-600">
                Tell us your goal and current data reality. We’ll map the fastest path and a fixed-scope offer.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:hello@yourcompany.com?subject=Roadmap%20Call"
                className="rounded-xl bg-emerald-500 text-white px-5 py-3 font-semibold text-center"
              >
                Email us
              </a>
              {/* Calendly button removed per your request */}
            </div>
          </div>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          By contacting us you agree to our <a className="underline hover:text-emerald-600" href="#">Privacy Policy</a>{" "}
          and <a className="underline hover:text-emerald-600" href="#">Terms</a>.
        </p>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
              <div className="font-semibold">{f.q}</div>
              <div className="mt-2 text-slate-600 text-sm">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} DataHarness</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-emerald-600">
              Privacy
            </a>
            <a href="#" className="hover:text-emerald-600">
              Terms
            </a>
            <a href="#team" className="hover:text-emerald-600">
              Team
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="text-2xl font-semibold text-emerald-700">{kpi}</div>
      <div className="text-xs text-slate-500">{label}</div>
    </div>
  );
}

function SolutionCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="h-5 w-5">
            <path d="M4 12h8l4 6 4-12" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-slate-600 text-sm">{desc}</p>
    </div>
  );
}

function Case({ title, metric, blurb }: { title: string; metric: string; blurb: string }) {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-5">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="mt-2 text-xl font-semibold text-emerald-700">{metric}</div>
      <p className="mt-2 text-slate-600 text-sm">{blurb}</p>
      <a href="#" className="mt-4 inline-flex items-center gap-2 text-emerald-700 hover:underline text-sm">
        Read more{" "}
        <svg viewBox="0 0 24 24" className="h-4 w-4">
          <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </a>
    </div>
  );
}

function Member({ name, role, url }: { name: string; role: string; url: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 flex items-center gap-4">
      <div className="h-12 w-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 font-semibold">
        {name
          .split(" ")
          .map((w) => w[0])
          .join("")
          .slice(0, 2)}
      </div>
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-slate-500">{role}</div>
        <a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-emerald-700 hover:underline text-sm mt-1">
          LinkedIn
          <svg viewBox="0 0 24 24" className="h-4 w-4">
            <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 flex-none text-emerald-700">
      <path d="M4 12l6 6L20 6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
