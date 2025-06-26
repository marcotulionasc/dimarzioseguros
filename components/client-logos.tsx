'use client'

import { motion } from 'framer-motion'

export function ClientLogos() {
  const clients = [
    { name: 'Empresa 1', width: 120, height: 60 },
    { name: 'Empresa 2', width: 120, height: 60 },
    { name: 'Empresa 3', width: 120, height: 60 },
    { name: 'Empresa 4', width: 120, height: 60 },
    { name: 'Empresa 5', width: 120, height: 60 },
    { name: 'Empresa 6', width: 120, height: 60 },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-lg text-gray-600 font-medium">
            Mais de 20.000 clientes protegidos em todo o Brasil
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group"
            >
              <div 
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-200 group-hover:border-primary/20"
                style={{ width: client.width, height: client.height }}
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500 text-sm font-medium">{client.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                >
                  {i}
                </div>
              ))}
            </div>
            <span className="text-gray-700 font-medium">
              Junte-se a milhares de clientes satisfeitos
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 