import React from "react";
import { motion } from "framer-motion";
import Animate from "../Animate";
export default function Card({ title, content, tag1, tag2, img }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
      }}
    >
      <Animate>
        <div className="flex p-5 justify-center">
          <div class="w-[17rem] bg-white rounded-lg overflow-hidden shadow-lg">
            <img class="w-full" src={img} alt="mountains" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{title}</div>
              <p class="text-gray-700 text-base">{content}</p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {tag1}
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {tag2}
              </span>
            </div>
          </div>
        </div>
      </Animate>
    </motion.div>
  );
}
