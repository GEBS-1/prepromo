import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  MessageSquare, Bell, FileEdit, CheckCircle2, Sparkles, Send,
  Shield, Users, Briefcase, Rocket, ArrowRight, Bot, Search,
  Calendar, FileText, Target, Inbox, Globe, LayoutDashboard,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero.png";

export const Route = createFileRoute("/")({ component: Index });

const TG = "PLACEHOLDER_TELEGRAM_BOT_LINK";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-primary grid place-items-center shadow-soft">
            <Bot className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg">Comrade AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition">Возможности</a>
          <a href="#how" className="hover:text-foreground transition">Как работает</a>
          <a href="#roadmap" className="hover:text-foreground transition">Развитие</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a href={TG} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium shadow-soft hover:shadow-glow transition-all">
          <Send className="w-4 h-4" /> Telegram
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeUp}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border shadow-soft text-xs font-medium text-muted-foreground mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            ИИ-помощник для коммуникаций
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            <span className="text-gradient">Comrade AI</span>
            <br />
            <span className="text-foreground">помощник для переписок и задач</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Создавайте заметки, ставьте напоминания, ведите задачи по людям и не теряйте важное в сообщениях, постах и рабочих коммуникациях.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={TG} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5">
              <Send className="w-4 h-4" /> Попробовать в Telegram
            </a>
            <a href="#features" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-card border border-border font-medium hover:border-primary transition">
              Посмотреть возможности <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
          <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
          <img src={heroImg} alt="Comrade AI интерфейс" width={1280} height={1280} className="relative w-full max-w-lg mx-auto animate-float" />
        </motion.div>
      </div>
    </section>
  );
}

function SectionTitle({ kicker, title, subtitle }: { kicker?: string; title: string; subtitle?: string }) {
  return (
    <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-14">
      {kicker && <div className="text-sm font-medium text-primary mb-3">{kicker}</div>}
      <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}

function Card({ icon: Icon, title, desc, badge }: any) {
  return (
    <motion.div {...fadeUp} className="group p-7 rounded-3xl bg-card border border-border shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1">
      <div className="w-12 h-12 rounded-2xl bg-gradient-soft grid place-items-center mb-5 group-hover:bg-gradient-primary transition-all">
        <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <h3 className="font-display font-semibold text-lg">{title}</h3>
        {badge && <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">{badge}</span>}
      </div>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function Features() {
  const items = [
    { icon: FileText, title: "Заметки за вас", desc: "Фиксируйте важные мысли, договорённости, идеи и рабочие детали прямо через чат." },
    { icon: Bell, title: "Напоминания", desc: "Ставьте напоминания по времени, людям или задачам, чтобы не забывать важные действия." },
    { icon: FileEdit, title: "Черновики сообщений", desc: "Помощник готовит текст сообщения, а вы сами подтверждаете отправку." },
    { icon: CheckCircle2, title: "Контроль договорённостей", desc: "Следите за тем, кто что обещал, когда вернуться к вопросу и какой следующий шаг." },
    { icon: Search, title: "Поиск главного", desc: "Comrade AI читает посты, сообщения и обновления, выделяя главное в краткие выводы.", badge: "В разработке" },
  ];
  return (
    <section id="features" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle kicker="Что такое Comrade AI" title="Один помощник для ежедневных коммуникаций" subtitle="Comrade AI помогает превращать хаос сообщений, задач и напоминаний в понятную систему действий." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => <Card key={i} {...it} />)}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Пишете задачу боту", desc: "«Напомни завтра написать клиенту» или «сохрани заметку по проекту»." },
    { n: "02", title: "Получаете план или черновик", desc: "Бот помогает оформить задачу, создать напоминание или подготовить текст сообщения." },
    { n: "03", title: "Подтверждаете действие", desc: "Ничего не отправляется без вашего подтверждения. Вы контролируете результат." },
  ];
  return (
    <section id="how" className="py-28 px-6 bg-gradient-soft">
      <div className="max-w-7xl mx-auto">
        <SectionTitle kicker="Как это работает сейчас" title="Начните пользоваться в Telegram" subtitle="Первый MVP работает через Telegram-бота. Это быстрый способ протестировать основную ценность." />
        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }} className="relative p-8 rounded-3xl bg-card shadow-soft">
              <div className="text-5xl font-display font-bold text-gradient mb-4">{s.n}</div>
              <h3 className="font-display font-semibold text-xl mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeUp} className="mt-12 p-8 rounded-3xl bg-card border border-border shadow-elegant text-center text-muted-foreground">
          <MessageSquare className="w-10 h-10 mx-auto mb-3 text-primary" />
          PLACEHOLDER_TELEGRAM_SCREENSHOT
        </motion.div>
      </div>
    </section>
  );
}

function UseCases() {
  const items = [
    { icon: Bell, title: "Напомнить о договорённости", desc: "Вернуться к человеку завтра и не забыть, что он обещал." },
    { icon: MessageSquare, title: "Уточнить статус", desc: "Подготовить сообщение: узнать, готов ли документ, задача или ответ." },
    { icon: Calendar, title: "Назначить созвон", desc: "Сформулировать сообщение и зафиксировать время встречи." },
    { icon: Inbox, title: "Собрать документы", desc: "Напомнить контакту прислать файл, ссылку или недостающую информацию." },
    { icon: Target, title: "Сопровождать дедлайн", desc: "Держать задачу под контролем до выполнения." },
    { icon: Search, title: "Найти главное в потоке", desc: "Выделять важные посты, новости, сообщения и делать краткую сводку.", badge: "В разработке" },
  ];
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Где Comrade AI помогает каждый день" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => <Card key={i} {...it} />)}
        </div>
      </div>
    </section>
  );
}

function Security() {
  const points = [
    "Исходящие сообщения не отправляются без подтверждения.",
    "Подключение Telegram нужно только для работы с вашими контактами.",
    "Вы управляете сохранёнными данными.",
    "Можно удалять заметки, задачи и историю в любой момент.",
    "Автоматизация строится вокруг безопасности и прозрачности.",
  ];
  return (
    <section className="py-28 px-6 bg-gradient-soft">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeUp}>
          <div className="w-20 h-20 rounded-3xl bg-gradient-primary grid place-items-center shadow-glow mb-6">
            <Shield className="w-10 h-10 text-primary-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Пользователь всегда сохраняет контроль</h2>
          <p className="text-lg text-muted-foreground">Comrade AI не действует скрыто. Помощник предлагает, напоминает и готовит черновики, но важные действия подтверждает пользователь.</p>
        </motion.div>
        <motion.ul {...fadeUp} className="space-y-3">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-3 p-5 rounded-2xl bg-card border border-border shadow-soft">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-foreground/90">{p}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

function Roadmap() {
  const steps = [
    { icon: Send, title: "Telegram MVP", desc: "Заметки, напоминания, задачи, черновики сообщений." },
    { icon: Globe, title: "WhatsApp, MAX, Avito", desc: "Подключение новых каналов общения и задач." },
    { icon: Inbox, title: "Email и посты", desc: "Работа с письмами, обновлениями, постами и информационным потоком." },
    { icon: LayoutDashboard, title: "Единый web-интерфейс", desc: "Один кабинет для всех коммуникаций, задач, заметок и отчётов." },
  ];
  return (
    <section id="roadmap" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle kicker="Куда развивается продукт" title="От Telegram-бота к единому центру коммуникаций" subtitle="Telegram — первый канал запуска. Далее Comrade AI расширится в другие мессенджеры и единый web-интерфейс." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }} className="relative p-6 rounded-3xl bg-card border border-border shadow-soft">
              <div className="text-xs font-medium text-muted-foreground mb-3">Шаг {i + 1}</div>
              <div className="w-11 h-11 rounded-2xl bg-gradient-primary grid place-items-center mb-4">
                <s.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForWhom() {
  const items = [
    { icon: Rocket, label: "Предприниматели" },
    { icon: Briefcase, label: "Руководители" },
    { icon: Target, label: "Продажи" },
    { icon: Users, label: "Проектные команды" },
    { icon: Sparkles, label: "Фрилансеры" },
    { icon: CheckCircle2, label: "Занятые специалисты" },
  ];
  return (
    <section className="py-28 px-6 bg-gradient-soft">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Для тех, кто много общается и не хочет терять важное" subtitle="Comrade AI особенно полезен тем, у кого каждый день много сообщений, договорённостей, задач и напоминаний." />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }} className="p-6 rounded-2xl bg-card border border-border shadow-soft flex items-center gap-3 hover:border-primary transition">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary grid place-items-center">
                <it.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-medium">{it.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const qa = [
    { q: "Что можно делать уже сейчас?", a: "Сейчас можно тестировать Telegram-версию: заметки, напоминания, задачи и черновики сообщений." },
    { q: "Comrade AI сам пишет людям?", a: "Нет. Помощник может подготовить черновик, но отправка происходит только после подтверждения пользователя." },
    { q: "Это только Telegram-бот?", a: "Нет. Telegram — первый этап. Далее планируется WhatsApp, MAX, Avito, Email и единый web-интерфейс." },
    { q: "Можно ли удалять данные?", a: "Да. Вы можете управлять своими заметками, задачами и сохранённой информацией." },
    { q: "Что будет дальше?", a: "Развитие мультиплатформенности, web-кабинет, обработка постов и сообщений, выделение главного и персональные отчёты." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionTitle title="Частые вопросы" />
        <div className="space-y-3">
          {qa.map((item, i) => (
            <motion.div key={i} {...fadeUp} className="rounded-2xl bg-card border border-border shadow-soft overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full p-6 flex items-center justify-between gap-4 text-left">
                <span className="font-display font-semibold">{item.q}</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform shrink-0 ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-6 text-muted-foreground animate-fade-up">{item.a}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-28 px-6">
      <motion.div {...fadeUp} className="max-w-5xl mx-auto rounded-[2.5rem] bg-gradient-primary p-12 md:p-20 text-center shadow-elegant relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 30%, white, transparent 50%)" }} />
        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-5">Попробуйте Comrade AI уже сейчас</h2>
          <p className="text-lg text-primary-foreground/90 max-w-xl mx-auto mb-8">Начните с Telegram-бота: создайте первую заметку, напоминание или задачу.</p>
          <a href={TG} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-card text-foreground font-semibold shadow-elegant hover:scale-105 transition-transform">
            <Send className="w-5 h-5" /> Попробовать в Telegram
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-primary grid place-items-center">
            <Bot className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-semibold text-foreground">Comrade AI</span>
        </div>
        <div>© {new Date().getFullYear()} Comrade AI. Все права защищены.</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <UseCases />
        <Security />
        <Roadmap />
        <ForWhom />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
