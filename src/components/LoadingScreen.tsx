import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center">
            {/* Animated JA Monogram */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Outer glow ring */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"
                style={{ width: 200, height: 200, top: -50, left: -50 }}
              />
              
              {/* Main monogram container */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative w-24 h-24 rounded-full border-2 border-primary/30"
              >
                {/* Rotating accent */}
                <motion.div
                  className="absolute w-3 h-3 bg-primary rounded-full shadow-neon"
                  style={{ top: -6, left: "50%", marginLeft: -6 }}
                />
              </motion.div>
              
              {/* JA Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 20px hsl(199 89% 48% / 0.5)",
                      "0 0 40px hsl(199 89% 48% / 0.8)",
                      "0 0 20px hsl(199 89% 48% / 0.5)",
                    ],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-4xl font-display font-bold text-primary"
                >
                  AJ
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-muted-foreground text-sm tracking-widest uppercase"
            >
              Loading
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ...
              </motion.span>
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 120, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-4 h-0.5 bg-muted rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
