'use client';

import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface WhyTooltipProps {
  reason: string;
  children?: React.ReactNode;
}

export function WhyTooltip({ reason, children }: WhyTooltipProps) {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors cursor-help"
            aria-label="Why do we ask for this?"
          >
            {children || (
              <>
                <Info className="w-3.5 h-3.5" />
                <span>Why?</span>
              </>
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent side="top" className="max-w-xs">
          <p className="text-xs leading-relaxed">{reason}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
