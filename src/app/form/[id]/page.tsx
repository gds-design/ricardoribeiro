"use client";

import React, { useState, useEffect } from "react";
import { useDB, Order, FormTemplate, FormField } from "@/context/DBContext";
import { use } from "react";
import { Compass, CheckCircle2, AlertCircle, Sparkles, Send, Upload, Eye } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ClientFormPage({ params }: PageProps) {
  const { id } = use(params);
  const { orders, formTemplates, updateOrder, isLoading } = useDB();

  const [order, setOrder] = useState<Order | null>(null);
  const [template, setTemplate] = useState<FormTemplate | null>(null);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Load order and corresponding form layout on mount
  useEffect(() => {
    if (!isLoading) {
      const foundOrder = orders.find((o) => o.id === id);
      if (foundOrder) {
        setOrder(foundOrder);
        
        // Find template by plan name
        const foundTemplate = formTemplates.find((t) => t.id === foundOrder.plan);
        if (foundTemplate) {
          setTemplate(foundTemplate);
          
          // Pre-populate fields if already partially answered
          const initialAnswers = foundOrder.form_responses || {};
          // Set initial fields if empty
          const populated: Record<string, any> = {};
          foundTemplate.fields.forEach((field) => {
            if (field.active) {
              populated[field.label] = initialAnswers[field.label] || "";
            }
          });
          setAnswers(populated);
        }
      }
    }
  }, [id, orders, formTemplates, isLoading]);

  const handleInputChange = (label: string, value: any) => {
    setAnswers((prev) => ({ ...prev, [label]: value }));
  };

  // Convert uploaded image to base64 string to keep it local storage friendly
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, label: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64Data = event.target?.result as string;
      handleInputChange(label, base64Data);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!order || !template) return;

    // Validation check for active required fields
    const missingFields: string[] = [];
    template.fields.forEach((field) => {
      if (field.active && field.required) {
        const val = answers[field.label];
        if (val === undefined || val === null || String(val).trim() === "") {
          missingFields.push(field.label);
        }
      }
    });

    if (missingFields.length > 0) {
      setErrorMsg(`Por favor, responda aos seguintes campos obrigatórios: ${missingFields.join(", ")}`);
      return;
    }

    setErrorMsg("");
    
    // Save replies and progress the order status to "em_producao"
    updateOrder(order.id, {
      form_responses: answers,
      status: "em_producao"
    });

    setIsSubmitted(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans text-xs font-bold text-slate-500 uppercase tracking-widest">
        Carregando formulário...
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 font-sans px-4">
        <div className="w-full max-w-md bg-white border border-slate-200/60 rounded-3xl p-8 text-center space-y-5 shadow-lg">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
          <h2 className="text-lg font-black text-slate-900 uppercase leading-none">Pedido Não Localizado</h2>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            Não conseguimos localizar este pedido do Mapa Profético no nosso sistema. Por favor, confirme o link com o administrador.
          </p>
          <Link
            href="/"
            className="inline-block px-5 py-3 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors uppercase tracking-wider"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 font-sans px-4">
        <div className="w-full max-w-md bg-white border border-slate-200/60 rounded-3xl p-8 text-center space-y-5 shadow-lg">
          <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
          <h2 className="text-lg font-black text-slate-900 uppercase leading-none">Respostas Enviadas!</h2>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            Seu formulário do Mapa Profético foi registrado com sucesso. 
            O status do seu pedido foi atualizado para <strong>Em Produção</strong> com o Ricardo Ribeiro. 
            O PDF de análise será entregue diretamente no seu WhatsApp dentro do prazo estabelecido.
          </p>
          <Link
            href="/"
            className="inline-block px-5 py-3 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors uppercase tracking-wider"
          >
            Acessar Site
          </Link>
        </div>
      </div>
    );
  }

  const activeFields = template?.fields.filter((f) => f.active) || [];

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 font-sans select-none flex items-center justify-center">
      <div className="w-full max-w-xl bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-10 shadow-premium space-y-8">
        
        {/* Form header details */}
        <div className="text-center space-y-2 border-b border-slate-100 pb-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-600 rounded-full text-[10px] font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Mapa Profético {order.plan === "premium" ? "Premium" : "Standard"}</span>
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-slate-950 uppercase tracking-tight leading-none">Perfil de Direcionamento</h1>
          <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-sm mx-auto">
            Olá, <strong className="text-slate-800">{order.client_name}</strong>. Responda com sinceridade às perguntas abaixo para subsidiar a sua análise profética.
          </p>
        </div>

        {errorMsg && (
          <div className="p-3.5 border border-red-200 bg-red-50 text-red-700 rounded-xl text-xs font-bold leading-normal flex items-start gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Dynamic form field listing */}
        <form onSubmit={handleSubmit} className="space-y-6 text-xs font-bold text-slate-700">
          {activeFields.map((field) => {
            const val = answers[field.label] || "";
            return (
              <div key={field.id} className="space-y-2">
                <label className="text-[10px] uppercase tracking-wider text-slate-500 block">
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </label>

                {field.type === "text" && (
                  <input
                    type="text"
                    required={field.required}
                    value={val}
                    onChange={(e) => handleInputChange(field.label, e.target.value)}
                    placeholder="Sua resposta..."
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 bg-slate-50/50 text-slate-900 font-semibold"
                  />
                )}

                {field.type === "longtext" && (
                  <textarea
                    required={field.required}
                    value={val}
                    onChange={(e) => handleInputChange(field.label, e.target.value)}
                    placeholder="Escreva detalhadamente..."
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 bg-slate-50/50 text-slate-900 font-semibold leading-relaxed"
                  />
                )}

                {field.type === "date" && (
                  <input
                    type="date"
                    required={field.required}
                    value={val}
                    onChange={(e) => handleInputChange(field.label, e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 bg-slate-50/50 text-slate-900 font-semibold"
                  />
                )}

                {field.type === "number" && (
                  <input
                    type="number"
                    required={field.required}
                    value={val}
                    onChange={(e) => handleInputChange(field.label, e.target.value)}
                    placeholder="0"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 bg-slate-50/50 text-slate-900 font-semibold"
                  />
                )}

                {field.type === "boolean" && (
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer font-bold">
                      <input
                        type="radio"
                        name={field.id}
                        required={field.required}
                        checked={val === "Sim"}
                        onChange={() => handleInputChange(field.label, "Sim")}
                        className="w-4 h-4 text-amber-500 focus:ring-0 border-slate-300"
                      />
                      <span>Sim</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer font-bold">
                      <input
                        type="radio"
                        name={field.id}
                        required={field.required}
                        checked={val === "Não"}
                        onChange={() => handleInputChange(field.label, "Não")}
                        className="w-4 h-4 text-amber-500 focus:ring-0 border-slate-300"
                      />
                      <span>Não</span>
                    </label>
                  </div>
                )}

                {field.type === "select" && (
                  <select
                    required={field.required}
                    value={val}
                    onChange={(e) => handleInputChange(field.label, e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 bg-slate-50/50 text-slate-900 font-semibold"
                  >
                    <option value="">Selecione uma opção</option>
                    {field.options?.map((opt, oIdx) => (
                      <option key={oIdx} value={opt}>{opt}</option>
                    ))}
                  </select>
                )}

                {field.type === "image" && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-200 border-dashed rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6 space-y-1">
                          <Upload className="w-6 h-6 text-slate-400" />
                          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Clique para carregar foto</p>
                          <p className="text-[9px] text-slate-400 font-medium">PNG, JPG ou WEBP</p>
                        </div>
                        <input 
                          type="file" 
                          accept="image/*"
                          className="hidden" 
                          onChange={(e) => handleImageUpload(e, field.label)}
                          required={field.required && !val}
                        />
                      </label>
                    </div>
                    {val && (
                      <div className="flex items-center gap-3 bg-slate-50 border border-slate-200/50 p-2.5 rounded-xl">
                        <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 overflow-hidden flex items-center justify-center">
                          <img src={val} alt="Carregado" className="max-w-full max-h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[9px] text-slate-450 uppercase font-black">Imagem Carregada</p>
                          <p className="text-[10px] text-slate-800 font-bold truncate">perfil_cliente.png</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

              </div>
            );
          })}

          <button
            type="submit"
            className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-black uppercase tracking-wider text-xs border-0 shadow-md flex items-center justify-center gap-1.5 cursor-pointer pt-4.5"
          >
            <Send className="w-4 h-4 text-amber-500" />
            <span>Enviar Meu Perfil</span>
          </button>
        </form>

      </div>
    </div>
  );
}
