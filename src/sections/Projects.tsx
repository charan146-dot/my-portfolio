import React, { useState } from 'react';
import { AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { CleanCrystalPreview } from '../components/projects/CleanCrystalPreview';
import { CleanHeartSignalPreview } from '../components/projects/CleanHeartSignalPreview';
import {
  CRYSTAL_PIPELINE,
  CRYSTAL_TAGS,
  CRYSTAL_CASE_STUDY,
  ROSANET_TAGS,
  ROSANET_CASE_STUDY,
} from '../data/projects';

export const Projects: React.FC = () => {
  const [crystalMode, setCrystalMode] = useState<'perovskite' | 'tetragonal'>('perovskite');
  const [showProj1Details, setShowProj1Details] = useState<boolean>(false);

  const [heartClass, setHeartClass] = useState<string>('AS');
  const [showProj2Details, setShowProj2Details] = useState<boolean>(false);

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="mb-10">
        <span className="text-xs font-mono uppercase tracking-wider text-yellow-400 font-semibold block">
          03 · Featured Research & Engineering Case Studies
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
          Deep-Dive Technical Projects
        </h2>
        <p className="text-sm text-zinc-400 mt-1">
          Presented with clean architecture pipelines, interactive previews, and expandable
          case-study details.
        </p>
      </div>

      <div className="space-y-8">
        {/* =================================================================
            FEATURED PROJECT 01: CRYSTALLINE MATERIAL PROPERTIES
        ================================================================= */}
        <div className="bg-zinc-950/90 border border-yellow-500/25 rounded-3xl p-6 sm:p-8 shadow-xl shadow-black/60">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className="text-xs font-mono font-bold bg-yellow-400 text-black px-3 py-1 rounded-full">
              FEATURED PROJECT 01 · COMPUTATIONAL MATERIALS SCIENCE & NLP
            </span>
            <span className="text-xs font-mono text-yellow-300 bg-zinc-900 border border-yellow-500/30 px-3 py-1 rounded-full">
              Status: Conceptual & Experimental Research Pipeline
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Cols: Overview, Pipeline & Tech Stack */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                LLM-Based Prediction of Crystalline Material Properties
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Explores predicting crystalline material properties using crystallographic
                structure files (<code className="text-yellow-400 font-mono bg-zinc-900 px-1 py-0.5 rounded border border-yellow-500/20">.cif</code>),
                natural-language descriptions of crystal structures generated via{' '}
                <code className="text-yellow-400 font-mono bg-zinc-900 px-1 py-0.5 rounded border border-yellow-500/20">Robocrystallographer</code>, and
                Transformer-based deep learning (<code className="text-yellow-400 font-mono bg-zinc-900 px-1 py-0.5 rounded border border-yellow-500/20">T5-small</code>{' '}
                encoder + numerical regression head).
              </p>

              {/* Step-by-Step Visual Pipeline in Yellow/Dark Theme */}
              <div className="bg-zinc-900/80 border border-yellow-500/20 rounded-2xl p-4">
                <div className="text-[11px] font-mono uppercase tracking-wider text-yellow-400 font-semibold mb-2.5">
                  Conceptual Prediction Pipeline
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {CRYSTAL_PIPELINE.map((node) => (
                    <div
                      key={node.step}
                      className="bg-black border border-yellow-500/25 rounded-xl p-2.5"
                    >
                      <div className="text-xs font-bold text-white">{node.step}</div>
                      <div className="text-[11px] font-mono text-yellow-400">{node.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {CRYSTAL_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono bg-zinc-900 border border-yellow-500/30 text-yellow-200 px-2.5 py-1 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Toggle Button for Full Case Study */}
              <div className="pt-2">
                <button
                  onClick={() => setShowProj1Details(!showProj1Details)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-yellow-300 hover:text-black bg-zinc-900 hover:bg-yellow-400 border border-yellow-500/40 px-4 py-2.5 rounded-xl transition-all cursor-pointer"
                >
                  <span>
                    {showProj1Details
                      ? 'Hide Detailed Case Study Breakdown'
                      : 'Read Full Case Study (Motivation, Architecture & Contributions)'}
                  </span>
                  {showProj1Details ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Right 5 Cols: Interactive Crystal Unit Cell Preview */}
            <div className="lg:col-span-5">
              <CleanCrystalPreview mode={crystalMode} setMode={setCrystalMode} />
            </div>
          </div>

          {/* Expandable Case Study Details */}
          {showProj1Details && (
            <div className="mt-6 pt-6 border-t border-zinc-800 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              {CRYSTAL_CASE_STUDY.map((item) => (
                <div key={item.title} className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4">
                  <h4 className="font-bold text-yellow-300 mb-1">{item.title}</h4>
                  <p className="text-zinc-300 leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* =================================================================
            FEATURED PROJECT 02: ROSANET HEART DISEASE & AGENTIC AI
        ================================================================= */}
        <div className="bg-zinc-950/90 border border-yellow-500/25 rounded-3xl p-6 sm:p-8 shadow-xl shadow-black/60">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <span className="text-xs font-mono font-bold bg-yellow-400 text-black px-3 py-1 rounded-full">
              FEATURED PROJECT 02 · MEDICAL AUDIO AI, XAI & AGENTIC RAG
            </span>
            <span className="text-xs font-mono text-amber-300 bg-amber-950/60 border border-amber-500/40 px-3 py-1 rounded-full flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Research & Decision-Support Concept (Not Clinically Validated)</span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Cols: Overview, RosaNet + RAG Pipelines & Tech Stack */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Heart Disease Classification and Patient-Specific Risk Stratification Using
                RosaNet and Agentic AI
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Investigates multi-channel heart-sound classification across five valvular
                targets (<span className="font-semibold text-yellow-300">N, AS, AR, MR, MS</span>)
                using the <span className="font-semibold text-yellow-300">RosaNet</span> deep
                learning architecture over eight <code className="font-mono text-yellow-400 bg-zinc-900 px-1 py-0.5 rounded border border-yellow-500/20">(64, 626, 1)</code>{' '}
                Log-Mel spectrogram inputs, paired with Explainable AI (XAI) and an experimental{' '}
                <span className="font-semibold text-yellow-300">ChromaDB + LangChain Agentic RAG</span>{' '}
                explanation workflow.
              </p>

              {/* Dual Pipeline Overview */}
              <div className="bg-zinc-900/80 border border-yellow-500/20 rounded-2xl p-4 space-y-3">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-yellow-400 font-semibold mb-1.5">
                    Pipeline A · RosaNet Acoustic Classification Architecture
                  </div>
                  <div className="text-xs text-zinc-300 bg-black border border-yellow-500/20 rounded-xl p-2.5 font-mono leading-relaxed">
                    WAV Recordings (BMD-HS / BUET / CirCor) → Audio Preprocessing → 8× Log-Mel
                    Spectrograms (64, 626, 1) → Parallel Conv (3×3, 5×5, 7×7, 1×1) → Split-Self &
                    Cardiac Spatial-Temporal Attention → 8 Branch Predictions → Gating Fusion →
                    5 Classes (Weighted BCE)
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-yellow-400 font-semibold mb-1.5">
                    Pipeline B · Conceptual RAG & Agentic Explanation Workflow
                  </div>
                  <div className="text-xs text-zinc-300 bg-black border border-yellow-500/20 rounded-xl p-2.5 font-mono leading-relaxed">
                    Verified Medical Sources → Document Chunking → Vector Embeddings → ChromaDB
                    Retrieval → LangChain Agentic Explanation → Evidence-Grounded Summary
                  </div>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {ROSANET_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono bg-zinc-900 border border-yellow-500/30 text-yellow-200 px-2.5 py-1 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Expand Toggle */}
              <div className="pt-2">
                <button
                  onClick={() => setShowProj2Details(!showProj2Details)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-yellow-300 hover:text-black bg-zinc-900 hover:bg-yellow-400 border border-yellow-500/40 px-4 py-2.5 rounded-xl transition-all cursor-pointer"
                >
                  <span>
                    {showProj2Details
                      ? 'Hide Detailed RosaNet & RAG Case Study'
                      : 'Read Full Case Study (RosaNet Specs, Datasets & XAI/RAG Scope)'}
                  </span>
                  {showProj2Details ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Right 5 Cols: Interactive Heart-Sound Class Envelope Preview */}
            <div className="lg:col-span-5">
              <CleanHeartSignalPreview
                selectedClass={heartClass}
                setSelectedClass={setHeartClass}
              />
            </div>
          </div>

          {/* Expandable Case Study Details */}
          {showProj2Details && (
            <div className="mt-6 pt-6 border-t border-zinc-800 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              {ROSANET_CASE_STUDY.map((item) => (
                <div key={item.title} className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4">
                  <h4 className="font-bold text-yellow-300 mb-1">{item.title}</h4>
                  <p className="text-zinc-300 leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
