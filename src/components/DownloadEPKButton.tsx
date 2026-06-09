'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Download, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useState, useCallback } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';
type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface DownloadEPKButtonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  label?: string;
}

// Inline styles en lugar de clases para mantener la paleta fría centralizada
const variantStyles: Record<Variant, React.CSSProperties> = {
  primary: {
    background: '#1d4a72',
    border: '1px solid #378add',
    color: '#c8dcea',
    boxShadow: '0 4px 14px rgba(24,95,165,0.25)',
  },
  secondary: {
    background: 'rgba(24,95,165,0.15)',
    border: '1px solid rgba(55,138,221,0.35)',
    color: '#85b7eb',
  },
  ghost: {
    background: 'transparent',
    border: '1px solid rgba(55,138,221,0.25)',
    color: '#5a7a8e',
  },
};

const errorStyle: React.CSSProperties = {
  background: 'rgba(162,45,45,0.1)',
  border: '1px solid rgba(162,45,45,0.35)',
  color: '#f09595',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-2',
};

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

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = 'Linarex-EPK-2026.pdf';
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);

      setTimeout(() => URL.revokeObjectURL(url), 1000);

      setStatus('success');
      setTimeout(() => setStatus('idle'), 2500);
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : 'Download failed. Try again.';
      setErrorMsg(msg);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  }, [status]);

  const isLoading = status === 'loading';
  const isSuccess = status === 'success';
  const isError = status === 'error';

  const buttonStyle = isError ? errorStyle : variantStyles[variant];

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
          ${sizeClasses[size]}
          ${className}
        `}
        style={buttonStyle}
        whileHover={{ scale: isLoading ? 1 : 1.03, y: isLoading ? 0 : -1 }}
        whileTap={{ scale: isLoading ? 1 : 0.97 }}
      >
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
              <CheckCircle2 size={16} style={{ color: '#5dcaa5' }} />
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

      <AnimatePresence>
        {isError && errorMsg && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className='text-xs text-center max-w-[200px]'
            style={{ color: '#f09595' }}
          >
            {errorMsg}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
