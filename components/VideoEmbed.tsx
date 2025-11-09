'use client'

import { motion } from 'framer-motion'

interface VideoEmbedProps {
  videoId: string
  title?: string
}

export default function VideoEmbed({ videoId, title = 'Video' }: VideoEmbedProps) {
  return (
    <motion.div
      className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </motion.div>
  )
}
