"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import TransitionPage from "@/components/transition-page"

const ContactPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <>
      <TransitionPage />
      <div className="flex items-center justify-center min-h-screen pt-20 px-4">
        <motion.div
          className="max-w-4xl w-full mx-auto p-8 bg-white bg-opacity-5 backdrop-blur-lg rounded-xl shadow-2xl"
          initial="initial"
          animate="animate"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary leading-tight text-center mb-8">
            Contáctame <span className="text-white">.</span>
          </h1>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Información de contacto */}
            <motion.div className="flex flex-col space-y-6" >
              <h2 className="text-2xl font-semibold text-white mb-4">Información de contacto</h2>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-secondary" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-300">Email:</h3>
                  <p className="text-gray-400">arianfabricioaguilar@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-secondary" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-300">Teléfono:</h3>
                  <p className="text-gray-400">+51 998-351-3473</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-secondary" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-300">Ubicación:</h3>
                  <p className="text-gray-400">Cancun, México</p>
                </div>
              </div>
            </motion.div>

            {/* Formulario de contacto */}
            <motion.form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-secondary focus:ring focus:ring-secondary focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-secondary focus:ring focus:ring-secondary focus:ring-opacity-50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-secondary focus:ring focus:ring-secondary focus:ring-opacity-50"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar mensaje
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default ContactPage

