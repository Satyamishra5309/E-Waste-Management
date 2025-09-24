import React from 'react';
import { Recycle } from 'lucide-react';

export default function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className="flex items-center justify-center">
      <Recycle className={`${sizeClasses[size]} text-emerald-600 animate-spin`} />
    </div>
  );
}