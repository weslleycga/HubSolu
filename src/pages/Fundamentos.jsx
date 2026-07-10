import React from 'react';

export default function Fundamentos() {
  return (
    <div className="min-h-screen bg-background text-on-background p-space-5 font-body">
      <h1 className="text-h1 mb-space-5 font-headline">Design Tokens (Fundamentos)</h1>

      <section className="mb-space-6">
        <h2 className="text-h2 mb-space-3 font-headline border-b border-outline-variant pb-space-2">Tipografia</h2>
        <div className="space-y-space-3 bg-surface p-space-4 rounded-md shadow-sm">
          <div><span className="text-h1">Heading 1 (text-h1)</span></div>
          <div><span className="text-h2">Heading 2 (text-h2)</span></div>
          <div><span className="text-h3">Heading 3 (text-h3)</span></div>
          <div><span className="text-h4">Heading 4 (text-h4)</span></div>
          <div><span className="text-h5">Heading 5 (text-h5)</span></div>
          <div><span className="text-h6">Heading 6 (text-h6)</span></div>
          <div><span className="text-body-1">Body 1 (text-body-1) - Texto padrão de corpo.</span></div>
          <div><span className="text-body-2">Body 2 (text-body-2) - Texto menor.</span></div>
          <div><span className="text-button text-primary">Button (text-button)</span></div>
        </div>
      </section>

      <section className="mb-space-6">
        <h2 className="text-h2 mb-space-3 font-headline border-b border-outline-variant pb-space-2">Cores (Principais)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-4">
          <div className="bg-primary text-on-primary p-space-4 rounded-md shadow-sm font-semibold">Primary</div>
          <div className="bg-secondary text-on-secondary p-space-4 rounded-md shadow-sm font-semibold">Secondary</div>
          <div className="bg-tertiary text-on-tertiary p-space-4 rounded-md shadow-sm font-semibold">Tertiary</div>
          <div className="bg-error text-on-error p-space-4 rounded-md shadow-sm font-semibold">Error</div>
          <div className="bg-surface text-on-surface p-space-4 rounded-md shadow-md font-semibold">Surface</div>
          <div className="bg-surface-variant text-on-surface-variant p-space-4 rounded-md shadow-md font-semibold">Surface Variant</div>
          <div className="bg-background text-on-background p-space-4 rounded-md border border-outline font-semibold">Background</div>
        </div>
      </section>

      <section className="mb-space-6">
        <h2 className="text-h2 mb-space-3 font-headline border-b border-outline-variant pb-space-2">Espaçamento</h2>
        <div className="space-y-space-2">
          <div className="flex items-center gap-space-2"><div className="bg-primary h-4 w-space-1"></div><span>space-1 (4px)</span></div>
          <div className="flex items-center gap-space-2"><div className="bg-primary h-4 w-space-2"></div><span>space-2 (8px)</span></div>
          <div className="flex items-center gap-space-2"><div className="bg-primary h-4 w-space-3"></div><span>space-3 (16px)</span></div>
          <div className="flex items-center gap-space-2"><div className="bg-primary h-4 w-space-4"></div><span>space-4 (24px)</span></div>
          <div className="flex items-center gap-space-2"><div className="bg-primary h-4 w-space-5"></div><span>space-5 (32px)</span></div>
          <div className="flex items-center gap-space-2"><div className="bg-primary h-4 w-space-6"></div><span>space-6 (48px)</span></div>
        </div>
      </section>

      <section className="mb-space-6">
        <h2 className="text-h2 mb-space-3 font-headline border-b border-outline-variant pb-space-2">Elevação (Sombras)</h2>
        <div className="flex gap-space-4">
          <div className="bg-surface p-space-5 rounded-md shadow-sm">shadow-sm</div>
          <div className="bg-surface p-space-5 rounded-md shadow-md">shadow-md</div>
          <div className="bg-surface p-space-5 rounded-md shadow-lg">shadow-lg</div>
        </div>
      </section>

      <section className="mb-space-6">
        <h2 className="text-h2 mb-space-3 font-headline border-b border-outline-variant pb-space-2">Formas (Border Radius)</h2>
        <div className="flex gap-space-4 flex-wrap">
          <div className="bg-primary text-on-primary p-space-4 rounded-sm">rounded-sm</div>
          <div className="bg-primary text-on-primary p-space-4 rounded-md">rounded-md</div>
          <div className="bg-primary text-on-primary p-space-4 rounded-lg">rounded-lg</div>
          <div className="bg-primary text-on-primary p-space-4 rounded-pill">rounded-pill</div>
        </div>
      </section>

    </div>
  );
}
