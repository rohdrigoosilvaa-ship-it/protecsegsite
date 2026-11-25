import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import "./metodo.css";
import {
  CONTACT,
  DELIVERIES,
  FOUNDER_CONFIRMED,
  MARQUEE_ITEMS,
  PAGE_DESCRIPTION,
  PAGE_TITLE,
  PLAN_CHECKS,
  PLANS,
  PUBLISHED_FAQ,
  ROTATING_WORDS,
  TASKS_AFTER,
  TASKS_BEFORE,
  WHATSAPP_URL,
} from "./content";
import { useMetodoMotion } from "./useMetodoMotion";

const IMG = "/assets/metodo";

function Character({
  name,
  alt,
  className,
  sizes,
  eager = false,
}: {
  name: string;
  alt: string;
  className?: string;
  sizes: string;
  eager?: boolean;
}) {
  return (
    <img
      className={className ? `ch ${className}` : "ch"}
      src={`${IMG}/${name}-1024.webp`}
      srcSet={`${IMG}/${name}-560.webp 560w, ${IMG}/${name}-1024.webp 1024w`}
      sizes={sizes}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
    />
  );
}

function Icon({ id, style, className }: { id: string; style?: CSSProperties; className?: string }) {
  return (
    <svg style={style} className={className} aria-hidden="true">
      <use href={`#${id}`} />
    </svg>
  );
}

function Arrow() {
  return (
    <i>
      <Icon id="arr" />
    </i>
  );
}

function WaButton({ children, className = "btn" }: { children: string; className?: string }) {
  return (
    <a className={className} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
      {children} <Arrow />
    </a>
  );
}

function Check({ green = false }: { green?: boolean }) {
  return (
    <span className="ok">
      <Icon id={green ? "chkg" : "chk"} />
    </span>
  );
}

const pressable = (action: () => void) => ({
  role: "button" as const,
  tabIndex: 0,
  onClick: action,
  onKeyDown: (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      action();
    }
  },
});

function Sprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <symbol id="arr" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="#00994C" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></symbol>
      <symbol id="chk" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" /></symbol>
      <symbol id="chkg" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7" fill="none" stroke="#00994C" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" /></symbol>
      <symbol id="hat" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17h18M5 17v-2a7 7 0 0 1 14 0v2" /><path d="M10 8.5V6h4v2.5" /></g></symbol>
      <symbol id="doc" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7z" /><path d="M14 3v4h4M9 12h6M9 16h6" /></g></symbol>
      <symbol id="chart" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M4 20h16M7 16v-4M12 16V7M17 16v-6" /></g></symbol>
      <symbol id="heart" viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></symbol>
      <symbol id="users" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" /><path d="M16 5a3 3 0 0 1 0 6M18 14.6c1.8.7 3 2.6 3 5.4" /></g></symbol>
      <symbol id="cloud" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.3 9.2 4.5 4.5 0 0 0 7 18z" /><path d="M12 11v5M9.5 13.5L12 11l2.5 2.5" /></g></symbol>
      <symbol id="brain" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a2 2 0 0 0-3-1z" /><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1" /></g></symbol>
      <symbol id="gift" viewBox="0 0 24 24"><g fill="none" stroke="#00994C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="9" width="16" height="11" rx="1.5" /><path d="M3 9h18M12 9v11M12 9S10.5 4 8 5s1 4 4 4zm0 0s1.5-5 4-4-1 4-4 4z" /></g></symbol>
      <symbol id="hand" viewBox="0 0 24 24"><g fill="none" stroke="#4D4D4D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11V4.5a1.5 1.5 0 0 1 3 0V11M12 10V9a1.5 1.5 0 0 1 3 0v2M15 10.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-1a6 6 0 0 1-4.8-2.4L3.6 15a1.5 1.5 0 0 1 2.3-1.9L9 15" /></g></symbol>
    </svg>
  );
}

const NAV_LINKS: [string, string][] = [
  ["O método", "#metodo"],
  ["Como funciona", "#como-funciona"],
  ["O que você recebe", "#entregas"],
  ["Planos", "#planos"],
  ["Dúvidas", "#duvidas"],
];

function Hero({ navFixed, word, wordOut }: { navFixed: boolean; word: string; wordOut: boolean }) {
  return (
    <section className="hero" id="inicio">
      <div className="wrap">
        <nav className={navFixed ? "fix" : undefined} style={{ position: "absolute", top: 0, left: 40, right: 40 }} aria-label="Navegação da página">
          <a href="#inicio" aria-label="ProtecSeg, voltar ao início">
            <img src={`${IMG}/logo-color.webp`} alt="ProtecSeg Segurança do Trabalho" />
          </a>
          <ul>
            {NAV_LINKS.map(([label, href]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
          <WaButton>Falar no WhatsApp</WaButton>
        </nav>
        <div style={{ paddingTop: 90 }}>
          <div className="kick">Método ProtecSeg · Segurança do Trabalho</div>
          <h1>
            O jeito mais simples de deixar a{" "}
            <em className={`k rot${wordOut ? " out" : ""}`} aria-live="off">
              {word}
            </em>{" "}
            da sua empresa em dia.
          </h1>
          <p>
            PGR, PCMSO, NR-01, treinamentos e eSocial organizados em um só lugar, com uma equipe técnica do seu lado e
            uma plataforma que avisa antes de vencer. Para empresas de 1 a 150+ colaboradores.
          </p>
          <WaButton>Quero um diagnóstico da minha empresa</WaButton>
          <div className="proof">
            <div>
              <b>4 passos</b>do diagnóstico à gestão
            </div>
            <div>
              <b>NRs + eSocial</b>no mesmo plano
            </div>
            <div>
              <b>Preço fechado</b>sem letras miúdas
            </div>
          </div>
        </div>
        <div className="art">
          <svg className="brush" viewBox="0 0 600 640" preserveAspectRatio="none" aria-hidden="true">
            <path className="draw" pathLength={1} d="M140 640 C 120 380, 190 120, 330 110 S 560 260, 470 470 S 300 640, 560 620" fill="none" stroke="#00994C" strokeWidth="95" strokeLinecap="round" opacity=".95" />
            <path d="M60 300 C 140 200, 200 240, 170 330" fill="none" stroke="#A6E3C2" strokeWidth="40" strokeLinecap="round" />
          </svg>
          <Character
            className="char"
            name="lara-segurando-uma-prancheta"
            alt="Lara, técnica de segurança do trabalho da ProtecSeg, segurando uma prancheta"
            sizes="(max-width: 760px) 320px, 427px"
            eager
          />
          <div className="chip c1">
            <Check />
            <span>
              <small>Documento</small>PGR atualizado
            </span>
          </div>
          <div className="chip c2">
            <svg width="22" height="22" style={{ color: "#00994C" }} aria-hidden="true">
              <use href="#hat" />
            </svg>
            <span>
              <small>Equipe técnica</small>Visita no local
            </span>
          </div>
          <div className="chip c3">
            <div className="row">
              <span>Painel ProtecOne</span>
              <span className="st okk">hoje</span>
            </div>
            <b>NR-01 = riscos psicossociais no PGR</b>
          </div>
        </div>
      </div>
      <svg className="skyline" viewBox="0 0 800 160" fill="none" stroke="#00663D" strokeWidth="1.4" aria-hidden="true">
        <path d="M0 158h800" />
        <path d="M20 158V90h60v68M30 90V70h40v20M100 158V60h30v98M110 60V40h10v20M150 158v-50l40-20v20l40-20v20l40-20v70M290 158V80h80v78M300 80l20-22 20 22 20-22M390 158V30h14v128M384 30h26M420 158v-60h70v60M430 98v-14h50v14M510 158V70h24v88M520 70V50M550 158v-40l30-16 30 16v40M630 158V96h90v62M640 96V80h20v16M700 96V60h10v36M740 158V110h50v48" />
        <circle cx="397" cy="22" r="5" />
      </svg>
    </section>
  );
}

function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="marq" aria-label="Normas atendidas: NR-01, NR-05, NR-06, NR-07, NR-10, NR-12, NR-17, NR-35, eSocial e LTCAT">
      <div className="track" aria-hidden="true">
        {items.map(([code, label], index) => (
          <span key={index}>
            <b>{code}</b> {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function Guide() {
  return (
    <section className="guia" id="proposta">
      <div className="wrap">
        <div className="kick">Método ProtecSeg</div>
        <h2 className="rv">
          Seu guia para uma SST <em className="k">sem complicação</em>
        </h2>
        <div className="bento">
          <div className="b b1 rv">
            <h3>Segurança do Trabalho de forma prática</h3>
            <Character name="lara-explicando" alt="Lara, técnica de segurança do trabalho, explicando" sizes="(max-width: 760px) 200px, 315px" />
            <span className="ic">
              <Icon id="hat" style={{ color: "#fff" }} />
            </span>
          </div>
          <div className="b b2 rv">
            <h3>Gestão com dados, não com planilhas soltas</h3>
            <Character name="theo-explicando" alt="Theo, da equipe ProtecSeg, explicando a gestão com dados" sizes="(max-width: 760px) 200px, 315px" />
            <span className="ic">
              <Icon id="chart" style={{ color: "#fff" }} />
            </span>
          </div>
          <div className="b b3 rv">
            <h3>
              Fique em dia com as NRs e o eSocial e tenha resposta pronta para fiscalização, auditoria de cliente e
              licitação.
            </h3>
            <Character name="helena" alt="Helena, enfermeira do trabalho da equipe ProtecSeg" sizes="(max-width: 760px) 200px, 320px" />
            <span className="ic">
              <Icon id="doc" style={{ color: "#00994C" }} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tasks({ rows, ok }: { rows: [string, string, string][]; ok: boolean }) {
  return (
    <>
      {rows.map(([title, detail, status]) => (
        <div className="task" key={title}>
          <span>
            {title}
            <small>{detail}</small>
          </span>
          <span className={ok ? "st okk" : "st"}>{status}</span>
        </div>
      ))}
    </>
  );
}

function Pain({ after, revealed, onChoose }: { after: boolean; revealed: boolean; onChoose: (after: boolean) => void }) {
  const before = pressable(() => onChoose(false));
  const withUs = pressable(() => onChoose(true));
  return (
    <section className="dor" id="dor">
      <div className="wrap">
        <div>
          <div className="kick">Isso parece com você?</div>
          <h2 className="rv">Você tem os documentos, mas não sabe dizer se a empresa está em dia?</h2>
          <p className="rv">
            O PGR foi feito há anos e ninguém revisou. Os exames vencem e só alguém percebe quando o cliente pede o
            ASO. O eSocial manda evento de SST e a dúvida é quem envia. Aí chega uma auditoria, uma fiscalização ou um
            acidente, e a corrida começa.
          </p>
          <p className="rv">Muitas empresas pagam por SST e mesmo assim não têm gestão: têm papel na gaveta.</p>
          <div className="note rv">
            <span className="tog" aria-hidden="true" />
            Isso acontece porque SST vai muito além de ter o documento pronto. Precisa de rotina, prazo e alguém
            acompanhando.
          </div>
        </div>
        <div className={`ba rv${revealed ? " in" : ""}${after ? " depois" : ""}`} data-rv-key="ba">
          <div className="hint">
            <Icon id="hand" />
            Clique nos botões abaixo e veja a diferença na prática
          </div>
          <div className="phone">
            <div className="sticker v-antes">e agora?</div>
            <div className="sticker v-depois" style={{ background: "#00994C" }}>
              tudo em dia
            </div>
            <div className="seg">
              <span className="on v-antes" aria-pressed={!after} {...before}>
                Antes
              </span>
              <span className="v-antes" aria-pressed={after} {...withUs}>
                Com a ProtecSeg
              </span>
              <span className="v-depois" aria-pressed={!after} {...before}>
                Antes
              </span>
              <span className="on v-depois" style={{ background: "#00994C" }} aria-pressed={after} {...withUs}>
                Com a ProtecSeg
              </span>
            </div>
            <div className="who">
              <div className="av">SST</div>
              <div>
                <b>Pendências da empresa</b>
                <small>Metalúrgica exemplo · 28 colaboradores</small>
              </div>
            </div>
            <div className="v-antes">
              <Tasks rows={TASKS_BEFORE} ok={false} />
              <div className="foot">Auditoria do cliente: amanhã, 08h</div>
            </div>
            <div className="v-depois">
              <Tasks rows={TASKS_AFTER} ok />
              <div className="foot">Auditoria do cliente: relatório pronto em 1 clique</div>
            </div>
          </div>
          <div className="cap">Toque em "Com a ProtecSeg" para ver a mesma empresa organizada</div>
        </div>
      </div>
    </section>
  );
}

const FLOATS: { cls: string; style: CSSProperties; icon: string; small: string; title: string }[] = [
  { cls: "f1", style: { left: "calc(50% - 640px)", top: 40 }, icon: "doc", small: "Programa", title: "PGR e inventário de riscos" },
  { cls: "f2", style: { left: "calc(50% - 600px)", top: 170 }, icon: "heart", small: "Saúde", title: "PCMSO e ASOs" },
  { cls: "f3", style: { left: "calc(50% - 650px)", top: 300 }, icon: "brain", small: "NR-01", title: "Riscos psicossociais" },
  { cls: "f4", style: { left: "calc(50% + 360px)", top: 40 }, icon: "cloud", small: "Governo", title: "Eventos SST no eSocial" },
  { cls: "f5", style: { left: "calc(50% + 400px)", top: 170 }, icon: "users", small: "Equipe", title: "CIPA e treinamentos" },
  { cls: "f6", style: { left: "calc(50% + 350px)", top: 300 }, icon: "hat", small: "Campo", title: "EPIs e inspeções" },
];

function Method() {
  return (
    <section className="metodo" id="metodo">
      <div className="wrap">
        <div className="kick">Sobre o método</div>
        <h2 className="rv">
          O objetivo não é só ter o documento. É ter uma SST que <em>funciona no dia a dia.</em>
        </h2>
        <p>
          Por isso juntamos consultoria técnica e tecnologia própria: a equipe da ProtecSeg faz e acompanha, e a
          plataforma ProtecOne mostra tudo o que está em dia e o que vence.
        </p>
      </div>
      <div className="stage">
        <svg className="stroke" viewBox="0 0 1400 520" preserveAspectRatio="none" aria-hidden="true">
          <path d="M-40 420 C 180 200, 330 520, 480 330 S 600 80, 760 260 S 1100 520, 1440 200" fill="none" stroke="#fff" strokeOpacity=".14" strokeWidth="80" strokeLinecap="round" />
        </svg>
        {FLOATS.map((f) => (
          <div key={f.cls} className={`fl ${f.cls}`} style={f.style}>
            <span className="ico">
              <Icon id={f.icon} style={{ color: "#00994C" }} />
            </span>
            <span>
              <small>{f.small}</small>
              <b>{f.title}</b>
            </span>
          </div>
        ))}
        <div className="laptop">
          <div className="scr rv" role="img" aria-label="Painel da plataforma ProtecOne com conformidade de 96%, ASOs a vencer e treinamentos válidos">
            <div className="in">
              <div className="side">
                <img src={`${IMG}/logo-reverse.webp`} alt="" />
                <span className="on">Visão geral</span>
                <span>PGR</span>
                <span>PCMSO / ASOs</span>
                <span>Treinamentos</span>
                <span>EPIs</span>
                <span>eSocial</span>
                <span>Documentos</span>
              </div>
              <div className="dash">
                <h4>Visão geral · ProtecOne</h4>
                <div className="kpis">
                  <div className="kpi">
                    <small>Conformidade</small>
                    <b data-to="96" data-suf="%">96%</b>
                  </div>
                  <div className="kpi">
                    <small>ASOs a vencer (30 dias)</small>
                    <b>3</b>
                  </div>
                  <div className="kpi">
                    <small>Treinamentos válidos</small>
                    <b data-to="28" data-suf="/28">28/28</b>
                  </div>
                </div>
                <div className="bars">
                  {[40, 52, 60, 68, 80].map((h) => (
                    <i key={h} style={{ height: `${h}%` }} />
                  ))}
                  <i className="h" style={{ height: "96%" }} />
                </div>
                <div className="list2">
                  <div>
                    S-2220 Monitoramento de saúde <b>enviado</b>
                  </div>
                  <div>
                    S-2240 Condições ambientais <b>enviado</b>
                  </div>
                  <div>
                    PGR revisão <b>mar/2027</b>
                  </div>
                  <div>
                    LTCAT <b>vigente</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="base" />
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="como" id="como-funciona">
      <div className="wrap">
        <div className="top">
          <div>
            <div className="kick">Como funciona o Método ProtecSeg?</div>
            <h2 className="rv">Do diagnóstico à gestão, com a gente do seu lado.</h2>
          </div>
          <p>
            Funciona como ter um setor de Segurança do Trabalho dentro da empresa, sem precisar montar um. Primeiro a
            gente entende onde você está, depois organiza, assume a rotina e acompanha mês a mês. São 4 passos:
          </p>
        </div>
        <div className="sline rv" aria-hidden="true">
          <i />
          <span />
          <span />
          <span />
          <span />
        </div>
        <ol className="steps" style={{ listStyle: "none" }}>
          <li className="step rv">
            <span className="pill l">Passo 1</span>
            <h3>Diagnóstico</h3>
            <p>Visita e levantamento do que a empresa já tem, do que falta e do que está vencido.</p>
            <div className="mini">
              <div className="r">
                <span>Documentos</span>
                <b>7 de 12</b>
              </div>
              <div className="bar">
                <i style={{ width: "58%" }} />
              </div>
              <div className="r">
                <span>Pendências críticas</span>
                <span className="st">5</span>
              </div>
            </div>
          </li>
          <li className="step rv">
            <span className="pill l">Passo 2</span>
            <h3>Regularização</h3>
            <p>PGR, PCMSO, LTCAT, laudos e treinamentos feitos ou revisados, com prioridade no que é urgente.</p>
            <div className="mini">
              <div className="r">
                <span>PGR + inventário</span>
                <Check />
              </div>
              <div className="r">
                <span>PCMSO</span>
                <Check />
              </div>
              <div className="r">
                <span>LTCAT</span>
                <span className="st okk">em andamento</span>
              </div>
            </div>
          </li>
          <li className="step rv">
            <span className="pill l">Passo 3</span>
            <h3>Gestão</h3>
            <p>A rotina passa para a ProtecOne: exames, EPIs, CIPA, treinamentos e eSocial com prazo e responsável.</p>
            <div className="mini">
              <div className="r">
                <span>ASO · João P.</span>
                <span className="st">vence em 12 dias</span>
              </div>
              <div className="r">
                <span>NR-35 · turma 2</span>
                <span className="st okk">agendado</span>
              </div>
              <div className="r">
                <span>S-2240</span>
                <span className="st okk">enviado</span>
              </div>
            </div>
          </li>
          <li className="step rv">
            <span className="pill">Passo 4</span>
            <h3>Acompanhamento</h3>
            <p>Visitas, indicadores e relatório mensal. Mudou algo na empresa ou na norma, a gente atualiza.</p>
            <div className="tags">
              <span>Visita técnica</span>
              <span className="on">Relatório do mês</span>
              <span>Inspeção</span>
              <span>Nova função</span>
              <span className="on">Mudança na NR</span>
              <span>Acidente</span>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

function Deliveries() {
  return (
    <section className="entregas" id="entregas">
      <div className="wrap">
        <div className="kick">Você vai receber</div>
        <h2 className="rv">O que entra no Método ProtecSeg?</h2>
        <p className="sub">10 entregas para a sua empresa cumprir as NRs e provar que cumpre.</p>
        <div className="grid10">
          {DELIVERIES.map((d) => (
            <div key={d.n} className={`t rv${d.cls ? ` ${d.cls}` : ""}`}>
              <div className="n">{d.n}</div>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Included() {
  return (
    <section className="inc" id="diferenciais">
      <div className="wrap">
        <div className="head">
          <svg className="stroke2" viewBox="0 0 760 420" aria-hidden="true">
            <path className="draw" pathLength={1} d="M60 380 C 120 120, 300 60, 380 200 S 520 420, 600 220 S 700 40, 740 120" fill="none" stroke="#00994C" strokeWidth="70" strokeLinecap="round" opacity=".9" />
          </svg>
          <div style={{ position: "relative" }}>
            <div className="kick">Em todos os planos</div>
            <h2 className="rv">Além dos documentos, você leva mais.</h2>
            <p>O que muda o jogo é o que vem junto com a consultoria.</p>
          </div>
        </div>
        <div className="cards5">
          <div className="ic5 w rv">
            <div className="gift">
              <Icon id="gift" />
              <span className="pill">Tecnologia própria</span>
            </div>
            <h3>Plataforma ProtecOne</h3>
            <p>PGR digital com laudo em PDF, ASOs, CIPA, LTCAT e eSocial em um painel, para uma ou várias empresas.</p>
            <Character className="c" name="theo-segurando-uma-prancheta" alt="Theo, da equipe ProtecSeg, segurando uma prancheta" sizes="(max-width: 760px) 270px, 270px" />
          </div>
          <div className="ic5 w rv">
            <div className="gift">
              <Icon id="gift" />
              <span className="pill">Prazo</span>
            </div>
            <h3>Aviso antes de vencer</h3>
            <p>Exames, treinamentos e documentos com alerta, para nada pegar a empresa de surpresa.</p>
            <div className="mock" style={{ left: "auto", width: 250 }} aria-hidden="true">
              <div className="cal">
                {Array.from({ length: 21 }, (_, i) => i + 1).map((d) => (
                  <i key={d} className={d === 4 || d === 12 ? "d" : d === 9 || d === 17 ? "a" : undefined}>
                    {d}
                  </i>
                ))}
              </div>
            </div>
          </div>
          <div className="ic5 rv">
            <div className="gift">
              <Icon id="gift" />
              <span className="pill">Dados</span>
            </div>
            <h3>Indicadores e relatório mensal</h3>
            <p>Painel para o dono e o RH verem a SST em números.</p>
            <div className="mock" aria-hidden="true">
              <div className="bars" style={{ height: 90 }}>
                {[35, 50, 62, 74].map((h) => (
                  <i key={h} style={{ height: `${h}%` }} />
                ))}
                <i className="h" style={{ height: "92%" }} />
              </div>
            </div>
          </div>
          <div className="ic5 rv">
            <div className="gift">
              <Icon id="gift" />
              <span className="pill">Atendimento</span>
            </div>
            <h3>Técnico de verdade no WhatsApp</h3>
            <p>Dúvida do dia a dia respondida por quem entende de SST.</p>
            <div className="mock" aria-hidden="true">
              <div className="wa">
                <div className="me">Contratei um funcionário novo. O que preciso fazer?</div>
                <div>Já agendei o admissional e te mando a ficha de EPI hoje.</div>
              </div>
            </div>
          </div>
          <div className="ic5 rv">
            <div className="gift">
              <Icon id="gift" />
              <span className="pill">Transparência</span>
            </div>
            <h3>Escopo e preço fechados</h3>
            <p>Você sabe o que está incluso antes de assinar. Sem letras miúdas.</p>
            <div className="mock" aria-hidden="true">
              <div className="price">
                <div className="r">
                  <span>Mensalidade</span>
                  <b>fixa</b>
                </div>
                <div className="r">
                  <span>Implantação</span>
                  <b>única</b>
                </div>
                <div className="r">
                  <span>Taxa surpresa</span>
                  <b style={{ color: "#00994C" }}>nenhuma</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Seção do fundador. NÃO PUBLICADA (FOUNDER_CONFIRMED = false): os trechos em
 * .ph e a foto dependem de confirmação do Rodrigo.
 */
function Founder() {
  return (
    <section className="fund" id="fundador">
      <div className="wrap">
        <div className="photo rv">
          <span>
            Foto do fundador
            <br />
            <small style={{ fontWeight: 500 }}>retrato real, fundo neutro, em campo ou com EPI</small>
          </span>
          <div className="chip" style={{ right: -20, top: 40 }}>
            <svg width="22" height="22" style={{ color: "#00994C" }} aria-hidden="true">
              <use href="#hat" />
            </svg>
            [X] anos em SST
          </div>
          <div className="chip" style={{ left: -20, bottom: 50 }}>
            <Check />
            [N] empresas atendidas
          </div>
        </div>
        <div>
          <div className="kick">Quem criou a ProtecSeg?</div>
          <h2 className="rv">
            Sou Rodrigo Silva, <span className="ph">[cargo / formação]</span> e fundador da ProtecSeg.
          </h2>
          <p>
            A ProtecSeg nasceu da experiência prática em Segurança do Trabalho e de uma percepção: muitas empresas ainda
            tratam a SST só como obrigação de papel.{" "}
            <span className="ph">[1 frase sobre sua trajetória: onde trabalhou, que tipo de operação conhece por dentro]</span>
          </p>
          <p>
            Ao longo da carreira,{" "}
            <span className="ph">[exemplos reais: indústrias, obras, logística, número de trabalhadores, certificações]</span>.
            Foi dessa vivência que nasceu o Método ProtecSeg: conhecimento técnico, gestão, dados e tecnologia para
            tornar a SST simples, preventiva e estratégica.
          </p>
          <div className="creds rv">
            <span>[Registro profissional]</span>
            <span>[Especialização]</span>
            <span>[Certificação]</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Plans() {
  return (
    <section className="oferta" id="planos">
      <div className="wrap">
        <div className="box rv">
          <div className="l">
            <div className="hd">
              <img src={`${IMG}/logo-color.webp`} alt="ProtecSeg" loading="lazy" />
              <span>Planos mensais</span>
            </div>
            <h2>
              Segurança do Trabalho não é só uma obrigação. É o que mantém sua empresa <em className="k">rodando.</em>
            </h2>
            <div className="plans">
              {PLANS.map((plan) => (
                <div key={plan.name} className={plan.hot ? "plan hot" : "plan"}>
                  {plan.hot ? <span className="tag">Mais contratado</span> : null}
                  <b>{plan.name}</b>
                  <small>{plan.size}</small>
                  <div className="v">
                    {plan.price}
                    <span>/mês</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="checks">
              {PLAN_CHECKS.map((item) => (
                <div key={item}>
                  <Check green />
                  {item}
                </div>
              ))}
            </div>
            <div className="bot">
              <div>
                <div className="from">Planos a partir de</div>
                <div className="val">
                  R$ 1.000<small>/mês + implantação</small>
                </div>
              </div>
              <WaButton>Quero meu plano</WaButton>
            </div>
          </div>
          <div className="r">
            <div className="lab">
              MAIS DE 150 COLABORADORES<b>Proposta sob medida</b>
            </div>
            <div className="num" aria-hidden="true">
              04
            </div>
            <h3>4 passos para sair do papel.</h3>
            <p>
              Diagnóstico, regularização, gestão e acompanhamento. Você começa pelo diagnóstico e só segue se fizer
              sentido para a sua empresa.
            </p>
            <div className="flow">
              <span>01 · Diagnóstico</span>
              <span>02 · Regularização</span>
              <span>03 · Gestão</span>
              <span>04 · Acompanhamento</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq({ open, revealed, onToggle }: { open: Set<number>; revealed: Set<string>; onToggle: (i: number) => void }) {
  return (
    <section className="faq" id="duvidas">
      <div className="wrap">
        <div>
          <div className="kick">Dúvidas frequentes</div>
          <h2 className="rv">Ainda tem alguma dúvida?</h2>
          <p style={{ color: "#4D4D4D" }}>Se a sua não estiver aqui, chama no WhatsApp que um técnico responde.</p>
        </div>
        <div>
          {PUBLISHED_FAQ.map((item, index) => {
            const isOpen = open.has(index);
            const key = `q${index}`;
            return (
              <div
                key={item.q}
                data-rv-key={key}
                className={`q rv${revealed.has(key) ? " in" : ""}${isOpen ? " open" : ""}`}
                aria-expanded={isOpen}
                {...pressable(() => onToggle(index))}
              >
                {item.q}
                <span aria-hidden="true">+</span>
                <p>{item.a}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="cta" id="contato">
      <div className="wrap">
        <div>
          <h2 className="rv">Vamos ver como está a SST da sua empresa?</h2>
          <p>
            Conte quantos colaboradores você tem e o que já existe de documentação. A gente responde com o próximo
            passo.
          </p>
          <WaButton className="btn rv">Falar com um técnico no WhatsApp</WaButton>
        </div>
      </div>
      <Character name="lara-acenando" alt="Lara, técnica de segurança do trabalho, acenando" sizes="400px" />
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <img src={`${IMG}/logo-color.webp`} alt="ProtecSeg" loading="lazy" />
        <span>
          São Paulo · SP · WhatsApp{" "}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            {CONTACT.phoneDisplay}
          </a>{" "}
          · <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> ·{" "}
          <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer">
            {CONTACT.instagramHandle}
          </a>
        </span>
        <span>ProtecSeg Consultoria em Segurança do Trabalho</span>
      </div>
    </footer>
  );
}

export function MetodoPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [navFixed, setNavFixed] = useState(false);
  const [after, setAfter] = useState(false);
  const [autoToggle, setAutoToggle] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [wordOut, setWordOut] = useState(false);
  const [openFaq, setOpenFaq] = useState<Set<number>>(() => new Set([0]));
  const revealed = useMetodoMotion(rootRef);

  useEffect(() => {
    const previousTitle = document.title;
    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute("content") ?? "";
    document.title = PAGE_TITLE;
    meta?.setAttribute("content", PAGE_DESCRIPTION);
    if (!window.location.hash) window.scrollTo(0, 0);
    return () => {
      document.title = previousTitle;
      meta?.setAttribute("content", previousDescription);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setNavFixed(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let swap: number | undefined;
    const id = window.setInterval(() => {
      setWordOut(true);
      swap = window.setTimeout(() => {
        setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
        setWordOut(false);
      }, 300);
    }, 2400);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(swap);
    };
  }, []);

  useEffect(() => {
    if (!autoToggle || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setAfter((v) => !v), 3800);
    return () => window.clearInterval(id);
  }, [autoToggle]);

  const choose = (value: boolean) => {
    setAutoToggle(false);
    setAfter(value);
  };

  const toggleFaq = (index: number) =>
    setOpenFaq((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  return (
    <div className="mp" ref={rootRef}>
      <Sprite />
      <Hero navFixed={navFixed} word={ROTATING_WORDS[wordIndex]} wordOut={wordOut} />
      <Marquee />
      <Guide />
      <Pain after={after} revealed={revealed.has("ba")} onChoose={choose} />
      <Method />
      <HowItWorks />
      <Deliveries />
      <Included />
      {FOUNDER_CONFIRMED ? <Founder /> : null}
      <Plans />
      <Faq open={openFaq} revealed={revealed} onToggle={toggleFaq} />
      <FinalCta />
      <Footer />
      <a className="wa-float" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5z" />
          <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.6-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2z" />
        </svg>
      </a>
    </div>
  );
}
