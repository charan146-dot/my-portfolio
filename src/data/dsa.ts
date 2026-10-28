import { DsaStep } from '../types';

export const DSA_TOPICS = [
  'Arrays & Strings',
  'Prefix Sums',
  'Sliding Window',
  'Two Pointers',
  'Binary Search',
  'Recursion & Backtracking',
  'Trees & Graphs',
  'Dynamic Programming'
];

export const DSA_APPROACH_STEPS: DsaStep[] = [
  {
    step: '01 · Understand & Constrain',
    desc: 'Analyze input bounds, data distributions, and corner cases before writing code.'
  },
  {
    step: '02 · Pattern Identification',
    desc: 'Map problems to sliding window, monotonic binary search, prefix hashing, or graph traversal.'
  },
  {
    step: '03 · Clean Java Implementation',
    desc: 'Write modular, readable Java using appropriate Collections and clear state transitions.'
  },
  {
    step: '04 · Complexity Verification',
    desc: 'Verify optimal Time and Space Big-O bounds against interview constraints.'
  }
];
