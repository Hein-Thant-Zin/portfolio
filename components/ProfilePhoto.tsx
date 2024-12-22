import Image from "next/image";
import { BlobBackground } from "./BlobBackground";
import { motion } from "framer-motion";

export function ProfilePhoto() {
  return (
    <div className="relative w-80 h-80 mx-auto mb-8">
      <BlobBackground>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-4 z-10"
        >
          <Image
            src="/IMG_20240131_224717 Background Removed.png"
            alt="Your Name"
            width={256}
            height={256}
            className="rounded-full object-cover border-4 border-white/20 outline outline-2 outline-white/40"
            priority
          />

        </motion.div>
      </BlobBackground>
    </div>
  );

}