import { HeartSoundClass, PipelineNode, CaseStudyPoint } from '../types';

export const CRYSTAL_PIPELINE: PipelineNode[] = [
  { step: '1. CIF Files', sub: 'Crystallographic Data' },
  { step: '2. Structure Parsing', sub: 'pymatgen · mp-api' },
  { step: '3. Text Descriptions', sub: 'Robocrystallographer' },
  { step: '4. Transformer Encoder', sub: 'T5-Small Embeddings' },
  { step: '5. Regression Head', sub: 'Dense MLP Projection' },
  { step: '6. Predicted Property', sub: 'Continuous Target' }
];

export const CRYSTAL_TAGS = [
  'CIF Files',
  'Robocrystallographer',
  'Transformer Representations',
  'T5-Small Encoder',
  'Regression Heads',
  'TextEdge Dataset Exploration',
  'Materials Project API',
  'pymatgen',
  'mp-api'
];

export const CRYSTAL_CASE_STUDY: CaseStudyPoint[] = [
  {
    title: '1. Scientific Problem & Role of Crystal Structure',
    content:
      'Investigates whether standardized natural-language descriptions capturing space group symmetry, Wyckoff positions, coordination polyhedra, and bond lengths can effectively drive continuous material-property prediction.'
  },
  {
    title: '2. CIF Processing & Text Generation Workflow',
    content:
      'Explores retrieving crystallographic data via the Materials Project API (mp-api), validating lattices with pymatgen, and generating structural descriptions using Robocrystallographer aligned with the TextEdge direction.'
  },
  {
    title: '3. Transformer Encoder & Regression Architecture',
    content:
      'Uses a pretrained Transformer encoder (T5-small) to map tokenized structural text into contextual embeddings, followed by a regression head trained against continuous numerical property targets.'
  },
  {
    title: '4. Evaluation Scope & Individual Contributions',
    content:
      'Formulated around standard regression metrics (MAE / RMSE). My contribution focuses on the CIF-to-text preprocessing workflow, pymatgen/mp-api integration, and designing the encoder-regression pipeline (no fabricated accuracy claims).'
  }
];

export const HEART_CLASSES: HeartSoundClass[] = [
  {
    code: 'N',
    name: 'Normal (N)',
    pattern: 'Clean S1 and S2 heart sounds without pathological murmur turbulence.',
    bars: [22, 78, 28, 12, 14, 12, 68, 24, 10, 12, 10, 20, 76, 26, 12, 12, 65, 22]
  },
  {
    code: 'AS',
    name: 'Aortic Stenosis (AS)',
    pattern: 'Diamond-shaped crescendo-decrescendo systolic murmur between S1 and S2.',
    bars: [25, 80, 42, 68, 86, 64, 72, 24, 14, 12, 14, 24, 82, 46, 70, 88, 62, 70]
  },
  {
    code: 'AR',
    name: 'Aortic Regurgitation (AR)',
    pattern: 'High-frequency early diastolic decrescendo murmur immediately following S2.',
    bars: [22, 76, 20, 16, 16, 20, 74, 66, 52, 38, 24, 22, 78, 20, 16, 18, 72, 64]
  },
  {
    code: 'MR',
    name: 'Mitral Regurgitation (MR)',
    pattern: 'Holosystolic (pansystolic) plateau murmur extending uniformly from S1 to S2.',
    bars: [26, 82, 70, 72, 74, 70, 76, 22, 14, 14, 12, 26, 80, 72, 74, 72, 70, 74]
  },
  {
    code: 'MS',
    name: 'Mitral Stenosis (MS)',
    pattern: 'Opening snap followed by a low-pitched mid-diastolic rumbling murmur.',
    bars: [22, 75, 20, 14, 14, 18, 70, 32, 62, 68, 58, 24, 76, 20, 14, 16, 72, 35]
  }
];

export const ROSANET_TAGS = [
  'WAV Audio Preprocessing',
  'Log-Mel Spectrograms (64, 626, 1)',
  'RosaNet Architecture',
  '3×3, 5×5, 7×7, 1×1 Kernels',
  'Split-Self-Attention',
  'Cardiac Spatial-Temporal Attention',
  '8-Branch Gating Fusion',
  'Explainable AI (XAI)',
  'RAG · LangChain · ChromaDB',
  'BMD-HS · BUET · CirCor Datasets'
];

export const ROSANET_CASE_STUDY: CaseStudyPoint[] = [
  {
    title: '1. Multi-Posture Auscultation & Datasets',
    content:
      'Explores the BMD-HS, BUET, and CirCor DigiScope datasets. Each subject input comprises 8 Log-Mel spectrograms of shape (64, 626, 1) representing 4 auscultation locations across sitting and supine postures.'
  },
  {
    title: '2. RosaNet Feature Learning & Attention',
    content:
      'Combines parallel multi-scale convolutional paths (3×3, 5×5, 7×7, and 1×1 kernels) with Split-Self-Attention and Cardiac Spatial-Temporal Attention to capture both sharp valve closures and broader systolic/diastolic murmurs.'
  },
  {
    title: '3. Gating Decision Fusion & 5 Target Classes',
    content:
      'Fuses eight branch predictions via a gating network trained with weighted multi-label Binary Cross-Entropy across Normal (N), Aortic Stenosis (AS), Aortic Regurgitation (AR), Mitral Regurgitation (MR), and Mitral Stenosis (MS).'
  },
  {
    title: '4. Explainable AI, Agentic RAG & Ethical Scope',
    content:
      'Integrates XAI attribution concepts with a proposed LangChain + ChromaDB retrieval workflow for evidence-grounded explanations. Strictly presented as an academic research concept without fabricated clinical accuracy claims.'
  }
];
