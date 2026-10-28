import React from 'react';

interface SectionHeadingProps {
  number: string;
  category: string;
  title: string;
  description?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  category,
  title,
  description,
}) => {
  return (
    <div className="mb-8">
      <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-semibold block">
        {number} · {category}
      </span>
      <h2 className="text-2xl sm:text-3xl font-bold text-emerald-950 mt-1">
        {title}
      </h2>
      {description && (
        <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
