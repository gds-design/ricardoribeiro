"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Check, 
  MessageSquare, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  ChevronLeft,
  ChevronRight,
  Lock, 
  HelpCircle,
  FileText,
  PlayCircle,
  TrendingUp,
  Infinity,
  AlertTriangle,
  Award,
  Link as LinkIcon,
  Compass,
  Users,
  Brain,
  Heart,
  DollarSign,
  Briefcase,
  Star
} from "lucide-react";

export default function LibertacaoCativeirosPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const testimonials = [
    {
      text: "A ida inteira participei do ministério de libertação, acreditando que se tratava apenas de expulsar demônios. O ensino de cativeiros pelo Apóstolo Ricardo me fez entender duas coisas: eu precisava ser liberta, e eu podia ajudar pessoas de forma mais eficiente.",
      author: "Camila Santos – MG"
    },
    {
      text: "De todos os os cativeiros, o que mais me confrontou foi a “terra do esquecimento”. Como eu não avia visto na Bíblia. Este cativeiro me fazia não ser percebida. Eu sofri abandono, rejeição, meus professores não me notavam, até mesmo o pastor e as pessoas da igreja.",
      author: "Regina Celia – Fortalez"
    },
    {
      text: "O apóstolo Ricardo é um dos homens de Deus mais sérios que eu já vi. Seus ensinos são validados pelos resultados na vida de seus discípulos e alunos. Eu já ouvi pregando sobre o assunto, e o impacto foi tão grande, que desbloqueou minhas finanças.",
      author: "André Felipe – RJ"
    }
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans select-none text-slate-900">

      {/* 1. Hero Section */}
      <section className="relative bg-slate-950 text-white py-16 sm:py-20 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 bg-no-repeat" style={{ backgroundImage: "url('/hero-bg.png')" }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(15,23,42,0.85),#020617)] z-0" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="space-y-6 flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-full text-[10px] font-black uppercase tracking-widest transition-transform duration-300 hover:scale-105">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              <span>Curso 100% Online</span>
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight uppercase max-w-3xl">
              CURSO AVANÇADO DE <span className="text-amber-500 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">CATIVEIROS ESPIRITUAIS</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed max-w-2xl">
              Descubra as áreas invisíveis que podem estar impedindo seu crescimento espiritual e aprenda princípios bíblicos para viver em liberdade.
            </p>

            {/* List with check icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 pt-2 max-w-lg text-left">
              {[
                "Identifique fortalezas espirituais",
                "Aprenda princípios bíblicos",
                "Estudos profundos",
                "Acesso imediato"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-200">
                  <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                  <span className="uppercase tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <a 
                href="https://chk.eduzz.com/o4ygtvo4"
                target="_blank"
                rel="noreferrer"
                className="px-10 py-4.5 bg-amber-500 hover:bg-amber-455 text-slate-955 font-black text-xs rounded-xl uppercase tracking-wider transition-all duration-300 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 hover:scale-105 border-0 flex items-center justify-center gap-2 cursor-pointer relative overflow-hidden group"
              >
                <Lock className="w-4 h-4 fill-slate-955 stroke-none" />
                <span>QUERO ME LIBERTAR</span>
              </a>
              <span className="text-[10px] text-slate-400 font-bold block mt-3">
                Mais de 1600 pessoas já iniciaram esta jornada.
              </span>
            </div>
          </div>
        </div>
      </section>      {/* 2. Seção Problema */}
      <section className="py-20 bg-white border-b border-slate-100 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col items-center space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-500/10 border border-red-500/25 text-red-650 rounded-full text-[10px] font-black uppercase tracking-widest animate-pulse">
              Talvez o problema não seja natural.
            </span>
            <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight uppercase leading-none">🔥 SUA VIDA NÃO AVANÇA…</h2>
            <p className="text-xs text-slate-500 font-bold max-w-md mx-auto">Observe se sua caminhada tem sido marcada por barreiras invisíveis.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { text: "Projetos não vão pra frente", icon: AlertTriangle },
              { text: "Problemas aparecem do nada", icon: AlertTriangle },
              { text: "Ciclos se repetem", icon: AlertTriangle },
              { text: "Cansaço emocional constante", icon: AlertTriangle },
              { text: "Sensação de estar preso", icon: AlertTriangle }
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-50 border border-slate-150 rounded-2xl p-6 text-left space-y-4 shadow-sm hover:shadow-md hover:border-red-500/30 hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-red-550/10 text-red-600 rounded-lg flex items-center justify-center font-bold">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-wide leading-snug">{item.text}</h4>
                </div>
              );
            })}
          </div>

          <div className="pt-2">
            <div className="bg-red-550/5 border border-red-550/20 rounded-2xl py-3 px-6 inline-block">
              <span className="text-xs font-black text-red-700 uppercase tracking-wider flex items-center gap-1.5 justify-center">
                <AlertTriangle className="w-4 h-4 text-red-650" />
                <span>Isso pode ser indício de uma barreira espiritual atuante</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Seção Cativeiros */}
      <section className="py-20 bg-slate-50 border-b border-slate-100 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-3">
            <span className="text-xs font-black uppercase text-amber-600 tracking-wider">A Realidade Oculta</span>
            <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight uppercase leading-none">⛓️ EXISTEM CATIVEIROS ESPIRITUAIS</h2>
            <p className="text-xs text-slate-505 font-bold max-w-xl mx-auto">
              Prisões espirituais de legalidades jurídicas operam limitando áreas cruciais de quem foi chamado por Deus.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { title: "Sua mente", icon: Brain },
              { title: "Emoções", icon: Heart },
              { title: "Vida financeira", icon: DollarSign },
              { title: "Vida espiritual", icon: Sparkles },
              { title: "Relacionamentos", icon: Users },
              { title: "Propósito", icon: Compass }
            ].map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200/60 rounded-2xl p-5 text-center space-y-3 hover:border-amber-500/45 hover:scale-105 hover:shadow-md transition-all duration-300 shadow-sm cursor-default"
                >
                  <div className="w-9 h-9 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center mx-auto">
                    <IconComp className="w-4.5 h-4.5" />
                  </div>
                  <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider">{cat.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Seção Você pode estar preso */}
      <section className="py-20 bg-white border-b border-slate-100 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-3">
            <span className="text-xs font-black uppercase text-red-650 tracking-wider">Mapeamento de Prisões</span>
            <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight uppercase leading-none">🚨 VOCÊ PODE ESTAR PRESO SEM PERCEBER</h2>
            <p className="text-xs text-slate-500 font-bold max-w-md mx-auto">Aprenda a reconhecer as amarras jurídicas atuando sobre você.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Laços espirituais",
                icon: LinkIcon,
                desc: "Relacionamentos e alianças do passado podem criar vínculos invisíveis que influenciam sua caminhada espiritual."
              },
              {
                title: "Confusão mental",
                icon: Brain,
                desc: "Pensamentos desordenados, dúvidas e bloqueios mentais constantes que impedem você de discernir a vontade de Deus."
              },
              {
                title: "Depressão espiritual",
                icon: Heart,
                desc: "Uma sensação crônica de desânimo, frieza espiritual e apatia que drena suas forças e enfraquece sua fé."
              },
              {
                title: "Atrasos constantes",
                icon: Infinity,
                desc: "Barreiras invisíveis que parecem adiar indefinidamente as suas conquistas, mantendo sua vida em ciclos de espera."
              },
              {
                title: "Terra do Esquecimento",
                icon: Users,
                desc: "A sensação dolorosa de ser invisível, rejeitado ou esquecido pelas pessoas e líderes, anulando sua influência."
              },
              {
                title: "Bloqueios espirituais",
                icon: Lock,
                desc: "Impedimentos recorrentes e portas que se fecham inexplicavelmente diante de grandes oportunidades."
              }
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-50/50 border border-slate-200/60 rounded-2xl p-6 text-left space-y-4 hover:border-red-500/20 hover:scale-[1.02] hover:shadow-md transition-all duration-300 shadow-sm"
                >
                  <div className="w-10 h-10 bg-red-550/10 text-red-650 rounded-xl flex items-center justify-center font-bold">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide">{item.title}</h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Seção Curso */}
      <section className="py-20 bg-slate-50 border-b border-slate-100 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-3">
            <span className="text-xs font-black uppercase text-amber-600 tracking-wider">Conteúdo Programático</span>
            <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight uppercase leading-none">🔓 CURSO AVANÇADO DE CATIVEIROS ESPIRITUAIS</h2>
            <p className="text-xs text-slate-505 font-bold max-w-md mx-auto">Conheça o que será estudado nas aulas de libertação jurídica.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "Módulo 01",
                title: "O que trava sua vida",
                desc: "Descubra a raiz das amarras invisíveis que barram o seu crescimento e prosperidade nos negócios e na família."
              },
              {
                num: "Módulo 02",
                title: "Identificar cativeiros",
                desc: "Como discernir e mapear exatamente quais áreas espirituais da sua alma ou chamado estão sob cativeiro."
              },
              {
                num: "Módulo 03",
                title: "Tipos de prisões",
                desc: "Estudo profundo sobre as legalidades jurídicas que criam as prisões na mente, finanças e relacionamentos."
              },
              {
                num: "Módulo 04",
                title: "Libertação prática",
                desc: "Chaves bíblicas e orações direcionadas para revogar direitos do adversário e consolidar sua libertação definitiva."
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/60 rounded-2xl p-6 text-left space-y-4 hover:border-amber-500/40 hover:scale-[1.02] hover:shadow-md transition-all duration-300 shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest bg-amber-500/10 px-2 py-0.5 rounded-md">{item.num}</span>
                  <div className="w-6 h-6 bg-amber-500/10 text-amber-600 rounded-full flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 font-bold" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-wide leading-snug">{item.title}</h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Seção Benefícios */}
      <section className="py-20 bg-white border-b border-slate-100 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-3">
            <span className="text-xs font-black uppercase text-amber-600 tracking-wider">Diferenciais do Treinamento</span>
            <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight uppercase leading-none">Diferenciais e Benefícios</h2>
            <p className="text-xs text-slate-500 font-bold max-w-md mx-auto">Vantagens exclusivas ao se matricular nesta coletânea avançada.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Diagnóstico espiritual",
                desc: "Aprenda a mapear e diagnosticar o estado da sua alma e as prisões invisíveis que cercam a sua caminhada.",
                icon: Brain
              },
              {
                title: "Revelações profundas",
                desc: "Acesso a ensinamentos teológicos ricos e revelações profundas e validadas sobre a batalha no mundo espiritual.",
                icon: Sparkles
              },
              {
                title: "Direcionamento prático",
                desc: "Passos claros e orações jurídicas direcionadas para quebrar legalidades de cada cativeiro identificado.",
                icon: Compass
              },
              {
                title: "Conteúdo organizado",
                desc: "Aulas estruturadas em módulos passo a passo, facilitando o entendimento lógico e a aplicação diária.",
                icon: FileText
              },
              {
                title: "Certificado",
                desc: "Certificado digital oficial assinado pelo Ministério Ap. Ricardo Ribeiro, atestando a sua capacitação avançada.",
                icon: Award
              }
            ].map((benefit, idx) => {
              const IconComp = benefit.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 text-left space-y-4 hover:border-amber-500/40 hover:scale-[1.02] transition-all duration-300 shadow-sm"
                >
                  <div className="w-10 h-10 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center font-bold">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-xs font-black text-slate-900 uppercase tracking-wide leading-snug">{benefit.title}</h3>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Seção Transformação */}
      <section className="py-20 bg-slate-50 border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-3">
            <span className="text-xs font-black uppercase text-amber-600 tracking-wider">Resultados Práticos</span>
            <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight uppercase leading-none font-sans">🔥 O QUE MUDA NA PRÁTICA?</h2>
            <p className="text-xs text-slate-500 font-bold max-w-md mx-auto">Compare o estado de opressão com a liberdade conquistada através do curso.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              { before: "Mente Opressa e Pesada", after: "Mente Leve e Serena" },
              { before: "Ansiedade, Medo e Angústia", after: "Paz Profunda e Sobrenatural" },
              { before: "Caminhos Travados e Sem Avanço", after: "Vida Fluindo e Portas Abertas" },
              { before: "Ciclos Repetitivos de Fracasso", after: "Ciclos Quebrados Definitivamente" },
              { before: "Oração Fraca e Bloqueada", after: "Oração Fortalecida e Ouvida" },
              { before: "Confusão e Cegueira Espiritual", after: "Clareza e Discernimento Espiritual" }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/60 rounded-2xl p-5 flex items-center justify-between gap-4 shadow-sm hover:scale-[1.01] hover:shadow-md transition-all duration-300"
              >
                {/* Before side */}
                <div className="flex-1 space-y-1">
                  <span className="text-[9px] font-black text-red-500 uppercase tracking-widest block">Antes</span>
                  <p className="text-xs font-black text-slate-700 uppercase leading-tight">{item.before}</p>
                </div>
                
                            {/* After side */}
                <div className="flex-1 space-y-1 text-right">
                  <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest block">Depois</span>
                  <p className="text-xs font-black text-slate-900 uppercase leading-tight">{item.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Seção Depoimentos (Carousel) */}
      <section className="py-20 bg-white border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-3">
            <span className="text-xs font-black uppercase text-amber-600 tracking-wider">Testemunhos Reais</span>
            <h2 className="text-3xl font-extrabold text-slate-955 tracking-tight uppercase leading-none">Depoimentos de Alunos</h2>
          </div>

          {/* Testimonial slider card */}
          <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8 sm:p-12 relative min-h-[260px] flex flex-col justify-between shadow-premium transition-all duration-500">
            <div>
              <div className="flex gap-1 justify-center sm:justify-start mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-slate-700 italic font-medium leading-relaxed text-left">
                "{testimonials[activeSlide].text}"
              </p>
            </div>
            <div className="pt-6 border-t border-slate-200/60 mt-6 flex justify-between items-center">
              <span className="text-xs font-black text-slate-950 uppercase tracking-wider">{testimonials[activeSlide].author}</span>
              
              {/* Manual navigation controls */}
              <div className="flex gap-1.5">
                <button 
                  onClick={() => setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="p-2 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl text-slate-655 hover:text-slate-900 cursor-pointer shadow-sm active:scale-95 transition-all"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setActiveSlide((prev) => (prev + 1) % testimonials.length)}
                  className="p-2 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl text-slate-655 hover:text-slate-900 cursor-pointer shadow-sm active:scale-95 transition-all"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Seção Para Quem é */}
      <section className="py-20 bg-slate-50 border-b border-slate-100 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-3">
            <span className="text-xs font-black uppercase text-amber-600 tracking-wider">Público-Alvo</span>
            <h2 className="text-3xl font-extrabold text-slate-950 tracking-tight uppercase leading-none">Para Quem é Indicado?</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { text: "Pessoas que vivem ciclos repetitivos", icon: Infinity },
              { text: "Quem deseja crescimento espiritual", icon: TrendingUp },
              { text: "Líderes", icon: Users },
              { text: "Pastores", icon: Compass },
              { text: "Obreiros", icon: ShieldCheck },
              { text: "Cristãos", icon: Heart }
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200/60 rounded-2xl p-5 text-center space-y-3 hover:border-amber-500/40 hover:scale-[1.02] transition-all duration-300 shadow-sm flex flex-col items-center justify-center min-h-[140px]"
                >
                  <div className="w-8 h-8 bg-amber-500/10 text-amber-600 rounded-lg flex items-center justify-center">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-wider leading-relaxed">{item.text}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Seção Certificado */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-16 h-16 bg-amber-500/10 text-amber-600 rounded-2xl flex items-center justify-center shadow-md border border-amber-500/20 shrink-0">
              <Award className="w-8 h-8 text-amber-500 animate-pulse" />
            </div>
            <div className="space-y-2 text-center sm:text-left flex-1">
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight uppercase leading-tight">🚀 CURSO COM CERTIFICADO</h2>
              <p className="text-xs text-slate-505 font-bold leading-relaxed">
                Ao concluir todas as aulas da coletânea avançada, receba em sua conta de aluno o certificado oficial assinado pelo Ministério Ricardo Ribeiro.
              </p>
              <span className="inline-block text-[10px] text-amber-600 bg-amber-500/10 font-black uppercase tracking-widest px-2 py-0.5 rounded-md mt-1">
                Certificado de conclusão incluso.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CTA Final */}
      <section className="py-20 bg-slate-955 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,0.8),#020617)] z-0" />
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[500px] h-[250px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center space-y-8">
          <div className="space-y-4 flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-full text-[10px] font-black uppercase tracking-widest mx-auto animate-pulse">
              <Lock className="w-3.5 h-3.5" />
              <span>Decida Agora</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight uppercase font-sans animate-fade-in">
              Sua decisão começa agora.
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-medium max-w-xl mx-auto leading-relaxed">
              Você pode continuar carregando as mesmas prisões ou iniciar hoje sua jornada de transformação.
            </p>
          </div>

          <div className="pt-4 flex flex-col items-center">
            <a
              href="https://chk.eduzz.com/o4ygtvo4"
              target="_blank"
              rel="noreferrer"
              className="px-10 py-4.5 bg-amber-500 hover:bg-amber-455 text-slate-955 font-black text-xs rounded-xl uppercase tracking-wider inline-flex items-center gap-2 shadow-lg shadow-amber-500/10 border-0 transition-all duration-300 hover:scale-105"
            >
              <Lock className="w-4 h-4 fill-slate-955 stroke-none" />
              <span>QUERO COMEÇAR AGORA</span>
            </a>
            <span className="text-[10px] text-slate-450 font-bold block mt-3">
              Acesso imediato após confirmação do pagamento.
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
