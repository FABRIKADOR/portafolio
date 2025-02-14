"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useRef } from "react"
import { ProjectModal } from "./project-modal"
import { Github, ExternalLink } from "lucide-react"

interface PortfolioBoxProps {
  data: {
    id: number
    title: string
    image: string
    urlGithub: string
    urlDemo: string
    description?: string
    technologies?: string[]
  }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props
  const { id, title, image, urlDemo, urlGithub } = data
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalRef = useRef(null)

  return (
    <div
      key={id}
      className="group relative flex flex-col gap-4 overflow-hidden rounded-xl bg-card p-4 transition-all hover:shadow-lg md:p-6"
    >
      <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{title}</h3>

      <div
        className="relative aspect-[16/9] overflow-hidden rounded-lg cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src={image || "/placeholder.svg"}
          alt={`${title} preview`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(min-width: 1280px) 800px, (min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
          <p className="text-center text-white px-4">Click to view details</p>
        </div>
      </div>

      <div className="flex gap-3 md:gap-4">
        <Link
          href={urlGithub}
          target="_blank"
          className="inline-flex flex-1 items-center justify-center rounded-lg bg-secondary px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary/80 md:px-4 md:py-2.5"
        >
          <Github className="mr-2" size={18} />
          Github
        </Link>

        <Link
          href={urlDemo}
          target="_blank"
          className="inline-flex flex-1 items-center justify-center rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 md:px-4 md:py-2.5"
        >
          <ExternalLink className="mr-2" size={18} />
          Live demo
        </Link>
      </div>

      <ProjectModal ref={modalRef} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={data} />
    </div>
  )
}

export default PortfolioBox

