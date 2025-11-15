import { Rocket } from "lucide-react";
import { motion } from "framer-motion";

/**
 * @param {{ size?: "normal" | "large" }} param0
 */
export function Logo({ size = "normal" }) {
  const isLarge = size === "large";

  return (
    <motion.div
      className="flex items-center gap-2"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{
          y: [0, -5, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`${
          isLarge
            ? "bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-2xl"
            : "bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-xl"
        }`}
      >
        <Rocket
          className={`${
            isLarge ? "w-8 h-8" : "w-6 h-6"
          } text-white`}
        />
      </motion.div>

      <div className="flex flex-col">
        <span
          className={`${
            isLarge ? "text-3xl" : "text-xl"
          } font-display bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent`}
        >
          RocketTeam
        </span>

        {isLarge && (
          <span className="text-sm text-gray-500 -mt-1">
            Agile Coach
          </span>
        )}
      </div>
    </motion.div>
  );
}
