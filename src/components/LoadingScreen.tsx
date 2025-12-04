import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type LoadingProps = {
  isLoading?: boolean;
  onComplete?: () => void;
};

const LoadingScreen = ({ isLoading, onComplete }: LoadingProps) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  // Internal timer only if parent doesn't control isLoading
  useEffect(() => {
    if (typeof isLoading !== 'undefined') return;

    const id = window.setInterval(() => {
      setProgress((prev) => Math.min(100, prev + 2));
    }, 30);

    return () => window.clearInterval(id);
  }, [isLoading]);

  // When parent-controlled loading changes, react accordingly
  useEffect(() => {
    if (typeof isLoading === 'undefined') return;

    if (!isLoading) {
      // jump progress to 100 and hide after a short delay for animation
      setProgress(100);
      const t1 = window.setTimeout(() => setVisible(false), 400);
      const t2 = window.setTimeout(() => onComplete && onComplete(), 800);
      return () => {
        window.clearTimeout(t1);
        window.clearTimeout(t2);
      };
    }
    // if it becomes true again, ensure visible and reset progress
    setVisible(true);
    setProgress(0);
    return;
  }, [isLoading, onComplete]);

  // If uncontrolled and progress reaches 100, hide and call onComplete
  useEffect(() => {
    if (typeof isLoading !== 'undefined') return;
    if (progress >= 100) {
      const t1 = window.setTimeout(() => setVisible(false), 300);
      const t2 = window.setTimeout(() => onComplete && onComplete(), 800);
      return () => {
        window.clearTimeout(t1);
        window.clearTimeout(t2);
      };
    }
  }, [progress, isLoading, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          role="status"
          aria-label="Loading"
        >
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-cyan/10 blur-[100px]"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-neon-magenta/10 blur-[80px]"
            />
          </div>

          {/* Logo Monogram */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'backOut' }}
            className="relative mb-8"
          >
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              className="relative z-10"
            >
              {/* Outer ring */}
              <motion.circle
                cx="60"
                cy="60"
                r="55"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeDasharray="345"
                initial={{ strokeDashoffset: 345 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />

              {/* J letter */}
              <motion.path
                d="M45 30 L45 70 Q45 85 60 85"
                fill="none"
                stroke="hsl(var(--neon-cyan))"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              />

              {/* A letter */}
              <motion.path
                d="M55 85 L75 35 L95 85 M62 65 L88 65"
                fill="none"
                stroke="hsl(var(--neon-magenta))"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />

              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--neon-cyan))" />
                  <stop offset="100%" stopColor="hsl(var(--neon-magenta))" />
                </linearGradient>
              </defs>
            </svg>

            {/* Glow effect */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 blur-xl bg-gradient-neon opacity-30"
            />
          </motion.div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground font-body text-sm tracking-widest uppercase mb-6"
          >
            Loading Experience
          </motion.p>

          {/* Progress bar */}
          <div className="w-48 h-1 bg-muted rounded-full overflow-hidden" aria-hidden>
            <motion.div
              className="h-full bg-gradient-neon"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Progress number */}
          <motion.p className="mt-4 text-neon-cyan font-display text-lg font-medium">
            {progress}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
