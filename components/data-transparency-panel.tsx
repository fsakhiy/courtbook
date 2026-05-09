'use client';

import { useState } from 'react';
import { ChevronDown, Check, X, Clock, Users, Shield } from 'lucide-react';

interface DataTransparencyPanelProps {
  dataCollected: string[];
  dataNotCollected: string[];
  dataUsage: string[];
  retentionPeriod: string;
  defaultOpen?: boolean;
}

export function DataTransparencyPanel({
  dataCollected,
  dataNotCollected,
  dataUsage,
  retentionPeriod,
  defaultOpen = false,
}: DataTransparencyPanelProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      {/* Toggle Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-accent/50 transition-colors"
        aria-expanded={isOpen}
        aria-controls="transparency-details"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <div className="text-left">
            <span className="font-semibold text-sm">Data Transparency</span>
            <p className="text-xs text-muted-foreground">What data this court collects about you</p>
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Expandable Content */}
      <div
        id="transparency-details"
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 space-y-4 border-t border-border pt-4">
          {/* Data Collected */}
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              This Court Collects
            </h4>
            <div className="space-y-1.5">
              {dataCollected.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Data Not Collected */}
          {dataNotCollected.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Not Collected
              </h4>
              <div className="space-y-1.5">
                {dataNotCollected.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <X className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* How Data is Used */}
          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              How We Use It
            </h4>
            <div className="space-y-1.5">
              {dataUsage.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-0.5 shrink-0">→</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Retention */}
          <div className="flex items-center gap-2 p-3 bg-accent/50 rounded-lg">
            <Clock className="w-4 h-4 text-primary shrink-0" />
            <span className="text-sm">
              Data automatically deleted after <strong>{retentionPeriod}</strong>
            </span>
          </div>

          {/* Who Sees It */}
          <div className="flex items-center gap-2 p-3 bg-accent/50 rounded-lg">
            <Users className="w-4 h-4 text-primary shrink-0" />
            <span className="text-sm">
              Visible to <strong>court staff only</strong> — not shared with third parties
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
