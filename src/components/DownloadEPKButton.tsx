'use client';

/**
 * DownloadEPKButton.tsx
 *
 * Reusable button that triggers a download of the generated EPK PDF.
 *
 * Usage:
 *   <DownloadEPKButton />
 *   <DownloadEPKButton variant="ghost" size="sm" className="mt-4" />
 *
 * How it works:
 *   - Calls GET /api/epk
 *   - Creates a temporary blob URL and auto-clicks it
 *   - Shows loading spinner during generation (~1-2s)
 *   - Shows error toast if generation fails
 */

import { motion, AnimatePresence } from 'framer-motion';
import { Download, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useState, useCallback } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface DownloadEPKButtonProps {
  /** Visual style variant */
  variant?: Variant;
  /** Button size */
  size?: Size;
  /** Additional CSS classes */
  className?: string;
  /** Custom label (defaults to "Download EPK") */
  label?: string;
}

// ── Variant styles ────────────────────────────────────────────────────────────
const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg hover:shadow-purple-500/25',
  secondary:
    'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white shadow-lg',
  ghost:
    'border border-gray-600 hover:border-purple-500 text-white hover:bg-purple-600/10',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-2',
};

// ── Component ─────────────────────────────────────────────────────────────────
export default function DownloadEPKButton({
  variant = 'secondary',
  size = 'md',
  className = '',
  label = 'Download EPK',
}: DownloadEPKButtonProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleDownload = useCallback(async () => {
    if (status === 'loading') return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const response = await fetch('/api/epk');

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.details || `Server error ${response.status}`);
      }

      // Create blob URL and trigger browser download
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = 'Linarex-EPK-2026.pdf';
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);

      // Clean up blob URL after short delay
      setTimeout(() => URL.revokeObjectURL(url), 1000);

      setStatus('success');

      // Reset to idle after 2.5s
      setTimeout(() => setStatus('idle'), 2500);
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : 'Download failed. Try again.';
      setErrorMsg(msg);
      setStatus('error');

      // Reset to idle after 4s
      setTimeout(() => setStatus('idle'), 4000);
    }
  }, [status]);

  const isLoading = status === 'loading';
  const isSuccess = status === 'success';
  const isError = status === 'error';

  const currentVariant = isError ? 'ghost' : variant;

  return (
    <div className='relative inline-flex flex-col items-center gap-2'>
      <motion.button
        onClick={handleDownload}
        disabled={isLoading}
        className={`
          inline-flex items-center justify-center
          font-semibold rounded-xl
          transition-all duration-300
          disabled:opacity-60 disabled:cursor-not-allowed
          ${variantClasses[currentVariant]}
          ${sizeClasses[size]}
          ${isError ? 'border-red-500/50 text-red-400' : ''}
          ${className}
        `}
        whileHover={{ scale: isLoading ? 1 : 1.03, y: isLoading ? 0 : -1 }}
        whileTap={{ scale: isLoading ? 1 : 0.97 }}
      >
        {/* Icon */}
        <AnimatePresence mode='wait'>
          {isLoading && (
            <motion.span
              key='loading'
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0 }}
            >
              <Loader2 size={16} className='animate-spin' />
            </motion.span>
          )}
          {isSuccess && (
            <motion.span
              key='success'
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <CheckCircle2 size={16} className='text-green-300' />
            </motion.span>
          )}
          {isError && (
            <motion.span
              key='error'
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <AlertCircle size={16} />
            </motion.span>
          )}
          {status === 'idle' && (
            <motion.span
              key='idle'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Download size={16} />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Label */}
        <span>
          {isLoading
            ? 'Generating PDF...'
            : isSuccess
              ? 'Downloaded!'
              : isError
                ? 'Try Again'
                : label}
        </span>
      </motion.button>

      {/* Error message */}
      <AnimatePresence>
        {isError && errorMsg && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className='text-xs text-red-400 text-center max-w-[200px]'
          >
            {errorMsg}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
