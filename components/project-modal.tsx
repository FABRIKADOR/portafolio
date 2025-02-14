"use client"

import { Dialog, Transition } from "@headlessui/react"
import { Fragment, forwardRef, useRef } from "react"
import Image from "next/image"
import { X, Github, ExternalLink } from "lucide-react"
import Link from "next/link"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    image: string
    urlGithub: string
    urlDemo: string
    description?: string
    technologies?: string[]
  }
}

export const ProjectModal = forwardRef<HTMLDivElement, ProjectModalProps>(({ isOpen, onClose, project }, ref) => {
  const closeButtonRef = useRef(null)

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose} initialFocus={closeButtonRef}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                ref={ref}
                className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-gray-800"
              >
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  {project.title}
                </Dialog.Title>
                <button
                  ref={closeButtonRef}
                  onClick={onClose}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X size={24} />
                </button>
                <div className="mt-2">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={225}
                    className="rounded-lg"
                  />
                  {project.description && (
                    <p className="text-sm text-gray-500 dark:text-gray-300 mt-4">{project.description}</p>
                  )}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">Technologies:</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full dark:bg-gray-700 dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="mt-4 flex gap-4">
                    <Link
                      href={project.urlGithub}
                      target="_blank"
                      className="inline-flex items-center justify-center rounded-lg bg-secondary px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary/80"
                    >
                      <Github className="mr-2" size={18} />
                      Github
                    </Link>
                    <Link
                      href={project.urlDemo}
                      target="_blank"
                      className="inline-flex items-center justify-center rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                      <ExternalLink className="mr-2" size={18} />
                      Live demo
                    </Link>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
})

ProjectModal.displayName = "ProjectModal"

