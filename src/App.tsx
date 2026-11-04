import { useEffect, useRef, useState, type ReactNode } from "react"

const WHATSAPP_URL =
  "https://wa.me/5516994339648?text=Ol%C3%A1%2C%20Carolina!%20Conheci%20seu%20trabalho%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20RH."

const menuLinks: ReadonlyArray<readonly [label: string, href: string]> = [
  ["Serviços", "#servicos"],
  ["Como trabalho", "#metodo"],
  ["Sobre", "#sobre"],
]

type MethodStep = {
  number: string
  title: string
  text: string
}

const methodSteps: MethodStep[] = [
  {
    number: "01",
    title: "Escuta & diagnóstico",
    text: "Entendimento do negócio, da cultura e das necessidades prioritárias.",
  },
  {
    number: "02",
    title: "Estratégia sob medida",
    text: "Desenho das soluções, processos e indicadores mais adequados.",
  },
  {
    number: "03",
    title: "Implementação próxima",
    text: "Execução colaborativa, com comunicação clara e suporte às lideranças.",
  },
  {
    number: "04",
    title: "Evolução contínua",
    text: "Acompanhamento de resultados e aprimoramento dos processos.",
  },
]

function ArrowUpRight({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17 17 7M8 7h9v9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowUp({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 19V5M6.5 10.5 12 5l5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {open ? (
        <path
          d="m6 6 12 12M18 6 6 18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      )}
    </svg>
  )
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.4-4.2a8.5 8.5 0 1 1 15.6-4.6Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.2 7.8c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.8c-.2.2-.1.4 0 .6.7 1.2 1.6 2.1 2.9 2.7.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.3.4.5 0 .3-.2 1.6-1.1 2.1-.5.3-1.2.5-2 .3-1-.2-2.4-.7-4.1-2.2-1.4-1.3-2.4-2.8-2.7-3.8-.3-.8-.3-1.5-.1-2.1l.8-.9Z"
        fill="currentColor"
      />
    </svg>
  )
}

function ServiceIcon({ children }: { children: ReactNode }) {
  return <div className="service-icon">{children}</div>
}

function OrganicMark({ light = false }: { light?: boolean }) {
  return (
    <svg
      className="organic-mark"
      viewBox="0 0 130 88"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 76C25 44 49 22 83 11M34 65c13-1 25 3 34 13M49 43c-1-12 2-23 9-32M70 27c12 0 23 4 33 13M81 14c11 1 22 5 34 13"
        stroke={light ? "#fff7e9" : "#d77a5f"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 71c7-4 14-4 21-1-5 7-12 10-21 1ZM43 49c-2-8 0-15 5-21 5 7 4 15-5 21ZM67 31c7-5 15-6 23-2-6 7-13 9-23 2ZM85 16c7-4 14-4 21 0-5 6-12 8-21 0Z"
        fill={light ? "#fff7e9" : "#f1c78e"}
      />
    </svg>
  )
}

const services = [
  {
    number: "01",
    title: "Recrutamento & Seleção",
    text: "Processos seletivos mais humanos e assertivos, da definição do perfil ao onboarding.",
    tags: ["Hunting", "Entrevistas", "Onboarding"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M3.5 19c.4-3.4 2.2-5 5.5-5s5.1 1.6 5.5 5M16 9h5M18.5 6.5v5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Desenvolvimento Humano",
    text: "Estratégias que fortalecem lideranças, competências e o crescimento de cada profissional.",
    tags: ["PDI", "Lideranças", "Treinamentos"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M5 19V9M12 19V5M19 19v-7M3 19h18"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="m4.5 8.5 6-5 7 5 3-3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Cultura & Clima",
    text: "Diagnósticos e ações para criar ambientes mais saudáveis, conectados e produtivos.",
    tags: ["eNPS", "Pesquisas", "Comunicação"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 20s-7-3.8-7-9.2C5 7.6 7.1 6 9.2 6c1.5 0 2.4.8 2.8 1.6.4-.8 1.3-1.6 2.8-1.6 2.1 0 4.2 1.6 4.2 4.8C19 16.2 12 20 12 20Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "RH Estratégico",
    text: "Indicadores, políticas e processos organizados para decisões mais seguras e eficientes.",
    tags: ["KPIs", "Processos", "Cargos & salários"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M8 15v-3M12 15V8M16 15v-5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Departamento Pessoal",
    text: "Apoio às rotinas trabalhistas com organização, conformidade e cuidado em cada etapa.",
    tags: ["Admissões", "Benefícios", "Compliance"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M8 5h8M9 3h6v4H9V3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M7 5H5v16h14V5h-2M8 11h8M8 15h8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Desempenho & Carreira",
    text: "Ciclos de avaliação e planos de desenvolvimento que transformam potencial em resultado.",
    tags: ["Avaliação", "Feedback", "Carreira"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="m4 17 5-5 3 3 7-8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 7h5v5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(true)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setShowBackToTop(currentScrollY > 400)

      if (currentScrollY <= 8) {
        setHeaderVisible(true)
      } else if (currentScrollY > lastScrollY.current) {
        setHeaderVisible(false)
        setMenuOpen(false)
      } else {
        setHeaderVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen overflow-hidden bg-[#fbf7ef] text-[#2d3a32]">
      <header
        className={`fixed inset-x-0 top-0 z-50 px-4 pt-3 transition-transform duration-300 md:px-8 ${
          headerVisible || menuOpen
            ? "translate-y-0"
            : "-translate-y-[calc(100%+1rem)]"
        }`}
      >
        <div className="mx-auto flex max-w-360 items-center justify-between rounded-full border border-white/55 bg-[#fbf7ef]/75 px-4 py-2.5 shadow-[0_8px_35px_rgba(45,58,50,.07)] backdrop-blur-xl md:px-6">
          <a
            href="#inicio"
            className="flex items-center gap-3"
            aria-label="Carolina Donizete - início"
          >
            <span className="grid size-8 place-items-center rounded-full bg-[#2d4438] text-xs font-semibold text-white">
              CD
            </span>
            <span className="leading-none">
              <strong className="block text-sm tracking-[-0.02em]">
                Carolina Donizete
              </strong>
              <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#657771]">
                Recursos Humanos
              </span>
            </span>
          </a>

          <nav
            className="hidden items-center gap-8 text-sm font-medium lg:flex"
            aria-label="Navegação principal"
          >
            <a href="#servicos">Serviços</a>
            <a href="#metodo">Como trabalho</a>
            <a href="#sobre">Sobre</a>
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="button button-dark hidden sm:inline-flex"
          >
            Vamos conversar <ArrowUpRight />
          </a>

          <button
            className="grid size-10 place-items-center rounded-full border border-[#2d4438]/15 lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
        {menuOpen && (
          <nav className="mx-auto mt-2 flex max-w-360 flex-col gap-1 rounded-3xl border border-white/70 bg-[#fbf7ef] p-4 shadow-xl lg:hidden">
            {menuLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 font-medium hover:bg-white"
              >
                {label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="button button-dark mt-2 justify-center sm:hidden"
            >
              Vamos conversar <ArrowUpRight />
            </a>
          </nav>
        )}
      </header>

      <main>
        <section
          id="inicio"
          className="relative min-h-225 px-5 pb-20 pt-32 md:px-10 md:pt-40"
        >
          <div className="hero-glow" />
          <div className="mx-auto grid max-w-340 items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
            <div className="relative z-10">
              <div className="eyebrow reveal">
                <span className="size-2 rounded-full bg-[#d77a5f]" />
                Cuidado com pessoas. Clareza para negócios.
              </div>
              <h1 className="mt-8 max-w-212.5 text-[clamp(3.4rem,7.5vw,7.8rem)] font-medium leading-[.86] tracking-[-0.075em] reveal reveal-delay-1">
                Toda empresa começa pelas <em>pessoas.</em>
                <br />E cresce com{" "}
                <span className="relative whitespace-nowrap">
                  propósito.
                  <span className="title-mark" />
                </span>
              </h1>
              <p className="mt-9 max-w-xl text-lg leading-8 text-[#52645e] reveal reveal-delay-2">
                Eu ajudo empresas a cuidarem melhor de quem faz tudo acontecer,
                transformando desafios de RH em relações mais saudáveis,
                processos mais claros e equipes que caminham juntas.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row reveal reveal-delay-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-primary justify-center"
                >
                  <WhatsAppIcon /> Falar com a Carolina <ArrowUpRight />
                </a>
                <a
                  href="#servicos"
                  className="button button-light justify-center"
                >
                  Conhecer soluções
                </a>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#2d4438]/15 pt-6 text-xs font-semibold uppercase tracking-[.15em] text-[#667771]">
                <span>Ribeirão Preto • SP</span>
                <span>Atendimento personalizado</span>
                <span>Visão estratégica</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-155 pb-12 lg:ml-auto">
              <OrganicMark />
              <div className="relative ml-auto aspect-4/5 w-[88%] overflow-hidden rounded-[46%_46%_2.5rem_2.5rem] bg-[#eadbc9]">
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1200&q=88"
                  alt="Mãos de uma equipe unidas em um gesto de parceria"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#263d33]/35 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 w-[54%] -rotate-3 rounded-[1.8rem] bg-[#f1c78e] p-5 shadow-xl md:p-7">
                <p className="font-serif text-2xl italic leading-tight text-[#2d4438] md:text-3xl">
                  “Escutar primeiro. Construir juntos.”
                </p>
                <p className="mt-3 text-[10px] font-bold uppercase tracking-[.18em] text-[#2d4438]/65">
                  Minha forma de trabalhar
                </p>
              </div>
              <div className="absolute -right-3 top-16 hidden aspect-square w-32 rotate-[5deg] overflow-hidden rounded-3xl border-8 border-[#fbf7ef] md:block">
                <img
                  src="https://images.unsplash.com/photo-1646671357082-c05f07b9b45d?auto=format&fit=crop&w=500&q=85"
                  alt="Sombras de pessoas de mãos dadas"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#2d4438]/10 bg-[#2d4438] py-5 text-white">
          <div className="marquee">
            <div className="marquee-track">
              {[...Array(2)].flatMap((_, group) =>
                [
                  "DHO",
                  "Gestão de talentos",
                  "Cultura & clima",
                  "RH estratégico",
                  "Desenvolvimento de lideranças",
                ].map((item) => (
                  <span
                    key={`${group}-${item}`}
                    className="flex items-center gap-8 whitespace-nowrap text-sm font-semibold uppercase tracking-[.16em]"
                  >
                    {item} <i className="size-2 rounded-full bg-[#f1c78e]" />
                  </span>
                )),
              )}
            </div>
          </div>
        </section>

        <section id="servicos" className="section-space px-5 md:px-10">
          <div className="mx-auto max-w-340">
            <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
              <div>
                <span className="section-label">Áreas de atuação</span>
                <h2 className="section-title mt-5">
                  RH que entende de <em>gente</em> e de negócio.
                </h2>
              </div>
              <p className="max-w-xl text-lg leading-8 text-[#62716c] lg:ml-auto lg:pb-2">
                Da atração ao desenvolvimento, soluções pensadas para o momento
                e os desafios reais da sua empresa.
              </p>
            </div>

            <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.number} className="service-card group">
                  <div className="flex items-start justify-between">
                    <ServiceIcon>{service.icon}</ServiceIcon>
                    <span className="text-xs font-bold tracking-[.15em] text-[#87948f]">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="mt-10 text-2xl font-medium tracking-[-.035em]">
                    {service.title}
                  </h3>
                  <p className="mt-4 min-h-18 leading-6 text-[#64736e]">
                    {service.text}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#2d4438]/12 px-3 py-1.5 text-[11px] font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="metodo" className="px-5 pb-8 md:px-10">
          <div className="mx-auto max-w-340 overflow-hidden rounded-[2.5rem] bg-[#d77a5f] text-white">
            <div className="grid lg:grid-cols-[.9fr_1.1fr]">
              <div className="p-8 md:p-14 lg:p-20">
                <span className="section-label border-white/25 text-white/75">
                  Como funciona
                </span>
                <h2 className="mt-6 text-[clamp(2.8rem,5vw,5.5rem)] font-medium leading-[.95] tracking-[-.06em]">
                  Um caminho claro, do desafio à <em>evolução.</em>
                </h2>
                <p className="mt-7 max-w-md text-lg leading-8 text-white/75">
                  Cada empresa é única. Por isso, o trabalho começa pela escuta
                  e termina com soluções que fazem sentido na prática.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="button mt-9 bg-[#fff1d8] text-[#2d4438] hover:bg-white"
                >
                  Conte seu desafio <ArrowUpRight />
                </a>
              </div>
              <div className="grid border-t border-white/20 lg:border-l lg:border-t-0">
                {methodSteps.map(({ number, title, text }) => (
                  <div key={number} className="method-row">
                    <span className="text-xs font-bold tracking-[.15em] text-[#fff1d8]">
                      {number}
                    </span>
                    <div>
                      <h3 className="text-xl font-medium">{title}</h3>
                      <p className="mt-2 max-w-md leading-6 text-white/65">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="section-space px-5 md:px-10">
          <div className="mx-auto grid max-w-315 gap-14 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
            <div className="relative">
              <OrganicMark />
              <div className="aspect-4/4.5 overflow-hidden rounded-[48%_48%_2rem_2rem] bg-[#eadbc9]">
                <img
                  src="https://images.unsplash.com/photo-1630510590497-e69fac21bfbd?auto=format&fit=crop&w=1100&q=88"
                  alt="Pessoas apoiando as mãos umas sobre as outras"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-7 -right-3 max-w-60 rounded-3xl bg-[#f1c78e] p-6 text-[#2d4438] shadow-xl md:-right-7">
                <p className="text-4xl font-medium tracking-tighter">360º</p>
                <p className="mt-2 text-sm font-semibold leading-5">
                  Visão integrada de pessoas, processos e resultados.
                </p>
              </div>
            </div>
            <div className="lg:pl-16">
              <span className="section-label">Quem está por trás</span>
              <h2 className="section-title mt-6">Prazer, Carolina.</h2>
              <p className="mt-8 text-xl leading-9 text-[#4f625c]">
                Profissional de Recursos Humanos com experiência generalista e
                atuação próxima a lideranças e diretoria.
              </p>
              <p className="mt-5 leading-8 text-[#697771]">
                Minha trajetória passa pela estruturação de processos,
                desenvolvimento organizacional, recrutamento e seleção, gestão
                de clima e apoio à tomada de decisão. Combino um olhar analítico
                com uma atuação colaborativa, sempre conectando as necessidades
                das pessoas aos objetivos do negócio.
              </p>
              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {[
                  "Supervisora de RH",
                  "Especialista em DHO",
                  "Gestão de Talentos",
                  "Ciências Contábeis",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-t border-[#2d4438]/15 py-4 text-sm font-semibold"
                  >
                    <span className="size-2 rounded-full bg-[#d77a5f]" />
                    {item}
                  </div>
                ))}
              </div>
              <a
                href="https://www.linkedin.com/in/caroldonizete"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 border-b border-[#2d4438] pb-1 text-sm font-bold"
              >
                Ver perfil no LinkedIn <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="px-5 pb-8 md:px-10">
          <div className="cta-grid mx-auto max-w-340 overflow-hidden rounded-[2.5rem] bg-[#2d4438] p-8 text-white md:p-14 lg:p-20">
            <div className="relative z-10 max-w-4xl">
              <span className="section-label border-white/20 text-white/65">
                Vamos conversar?
              </span>
              <h2 className="mt-7 text-[clamp(3rem,7vw,7rem)] font-medium leading-[.9] tracking-[-.065em]">
                Sua empresa pode crescer com pessoas mais <em>conectadas.</em>
              </h2>
              <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">
                Conte o momento da sua empresa. Juntos, podemos transformar
                desafios de pessoas em caminhos de evolução.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="button mt-9 bg-[#f1c78e] text-[#2d4438] hover:bg-white"
              >
                <WhatsAppIcon /> Chamar no WhatsApp <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative mt-20 overflow-hidden bg-[#f1c78e] px-5 pb-8 pt-20 md:px-10 md:pt-28">
        <div className="footer-sun" />
        <div className="mx-auto max-w-340">
          <div className="relative z-10 grid gap-12 border-b border-[#2d4438]/20 pb-16 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[.2em] text-[#2d4438]/60">
                Um convite para começar
              </span>
              <h2 className="mt-5 max-w-4xl text-[clamp(3.5rem,8vw,8.5rem)] font-medium leading-[.82] tracking-[-.075em]">
                Vamos cuidar de quem faz sua empresa <em>acontecer?</em>
              </h2>
            </div>
            <div className="lg:pb-2">
              <p className="max-w-sm text-lg leading-8 text-[#2d4438]/70">
                Me conte sobre o momento da sua equipe. A primeira conversa é
                simples, humana e sem compromisso.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="button mt-7 bg-[#2d4438] text-white hover:bg-[#d77a5f]"
              >
                <WhatsAppIcon /> Vamos conversar <ArrowUpRight />
              </a>
            </div>
          </div>

          <div className="relative z-10 grid gap-10 py-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-[#2d4438] text-sm font-semibold text-white">
                  CD
                </span>
                <div>
                  <strong className="block">Carolina Donizete</strong>
                  <span className="text-xs text-[#2d4438]/60">
                    RH estratégico & DHO
                  </span>
                </div>
              </div>
              <p className="mt-5 max-w-xs font-serif text-xl italic leading-7">
                Pessoas bem cuidadas constroem negócios mais fortes.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#2d4438]/55">
                Onde me encontrar
              </p>
              <div className="mt-4 flex flex-col items-start gap-3 text-sm font-semibold">
                <a href="mailto:carolinna.donizete@outlook.com">
                  carolinna.donizete@outlook.com
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  (16) 99433-9648
                </a>
                <span>Ribeirão Preto • SP</span>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#2d4438]/55">
                Continue por aqui
              </p>
              <div className="mt-4 flex items-center gap-5 text-sm font-semibold">
                <a href="#servicos">Serviços</a>
                <a href="#sobre">Sobre</a>
                <a
                  href="https://www.linkedin.com/in/caroldonizete"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col gap-2 border-t border-[#2d4438]/20 pt-6 text-[11px] font-medium text-[#2d4438]/60 sm:flex-row sm:justify-between">
            <p>
              © {new Date().getFullYear()} Carolina Donizete | Todos os direitos
              reservados.
            </p>
            <p>Feito com carinho, escuta e cuidado.</p>
          </div>
        </div>
      </footer>

      {showBackToTop && (
        <button
          type="button"
          className="fixed right-5 bottom-24 z-40 grid size-12 place-items-center rounded-full border border-[#2d4438]/15 bg-[#fffdf8] text-[#2d4438] shadow-[0_10px_30px_rgba(45,58,50,.15)] transition-transform hover:scale-105 hover:bg-[#f1c78e]"
          aria-label="Voltar ao topo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp />
        </button>
      )}

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="fixed right-5 bottom-5 z-40 grid size-14 place-items-center rounded-full bg-[#2d4438] text-[#fff7e9] shadow-[0_10px_30px_rgba(45,68,56,.3)] transition-transform hover:scale-105 hover:bg-[#d77a5f]"
        aria-label="Falar com Carolina pelo WhatsApp"
      >
        <WhatsAppIcon size={25} />
      </a>
    </div>
  )
}

export default App
