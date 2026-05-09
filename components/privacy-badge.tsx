'use client';

import { Shield } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

interface PrivacyBadgeProps {
  level: 'minimal' | 'standard' | 'full';
  description?: string;
}

export function PrivacyBadge({ level, description }: PrivacyBadgeProps) {
  const badgeConfig = {
    minimal: {
      label: 'Minimal Data',
      bgColor: 'bg-green-50 dark:bg-green-950',
      textColor: 'text-green-700 dark:text-green-300',
      tooltip: 'This venue collects only essential booking information (name, email, phone)'
    },
    standard: {
      label: 'Standard Data',
      bgColor: 'bg-blue-50 dark:bg-blue-950',
      textColor: 'text-blue-700 dark:text-blue-300',
      tooltip: 'This venue collects basic booking and usage information'
    },
    full: {
      label: 'Full Data',
      bgColor: 'bg-gray-50 dark:bg-gray-900',
      textColor: 'text-gray-700 dark:text-gray-300',
      tooltip: 'This venue may collect additional information for analytics'
    }
  };

  const config = badgeConfig[level];

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${config.bgColor} ${config.textColor} cursor-help`}>
            <Shield className="w-4 h-4" />
            <span>{config.label}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs">{description || config.tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
