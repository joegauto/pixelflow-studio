'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react'

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

interface ChatBotProps {
  companyName?: string
}

export function ChatBot({ companyName = "FlujoPy Consultor" }: ChatBotProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Mensaje de bienvenida inicial
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: "¡Hola! 👋 Soy el asistente virtual de FlujoPy. ¿En qué puedo ayudarte hoy?",
        isBot: true,
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen, messages.length])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const getBotResponse = async (userMessage: string): Promise<string> => {
    const message = userMessage.toLowerCase()
    
    // Respuestas predefinidas basadas en palabras clave
    if (message.includes('precio') || message.includes('costo') || message.includes('cuanto')) {
      return "Nuestros servicios se adaptan a cada proyecto. Te invito a agendar una consulta gratuita donde evaluaremos tus necesidades específicas y te daremos una cotización personalizada. ¿Te gustaría que te contactemos?"
    }
    
    if (message.includes('desarrollo web') || message.includes('pagina web') || message.includes('sitio web')) {
      return "¡Excelente! Desarrollamos sitios web modernos y optimizados para SEO. Incluimos diseño responsive, formularios de contacto y hosting. ¿Qué tipo de sitio web necesitas para tu negocio?"
    }
    
    if (message.includes('automatizacion') || message.includes('automatizar') || message.includes('procesos')) {
      return "Las automatizaciones pueden transformar tu negocio. Conectamos tus sistemas, automatizamos tareas repetitivas y creamos workflows inteligentes. ¿Qué procesos te gustaría automatizar?"
    }
    
    if (message.includes('inteligencia artificial') || message.includes('chatbot') || message.includes('ia')) {
      return "Implementamos soluciones de IA como chatbots inteligentes, análisis predictivo y automatización con machine learning. ¿Te interesa un chatbot para atención al cliente o algo más específico?"
    }
    
    if (message.includes('ciberseguridad') || message.includes('seguridad') || message.includes('auditoria')) {
      return "La ciberseguridad es fundamental hoy en día. Ofrecemos auditorías de seguridad, hardening de sistemas y formación para tu equipo. ¿Has tenido algún incidente de seguridad recientemente?"
    }
    
    if (message.includes('criptomoneda') || message.includes('bitcoin') || message.includes('blockchain')) {
      return "Ayudamos a integrar pagos con criptomonedas y desarrollar soluciones blockchain. Paraguay tiene un marco regulatorio favorable para cripto. ¿Te interesa aceptar pagos en Bitcoin o Ethereum?"
    }
    
    if (message.includes('soporte') || message.includes('mantenimiento') || message.includes('ayuda')) {
      return "Ofrecemos soporte técnico especializado con diferentes niveles de servicio. Incluye monitoreo proactivo y mantenimiento preventivo. ¿Qué tipo de sistemas necesitas que monitoreemos?"
    }
    
    if (message.includes('tiempo') || message.includes('cuando') || message.includes('duracion')) {
      return "Los tiempos varían según el proyecto: sitios web básicos (2-3 semanas), automatizaciones (1-4 semanas), IA (3-6 semanas). ¿Qué tipo de proyecto tienes en mente?"
    }
    
    if (message.includes('contacto') || message.includes('reunion') || message.includes('consulta')) {
      return "¡Perfecto! Puedes contactarnos de varias formas: WhatsApp (+595 981 234 567), email (info@flujopy.com) o completando nuestro formulario de contacto. ¿Prefieres que te llamemos o una reunión virtual?"
    }
    
    if (message.includes('hola') || message.includes('buenos dias') || message.includes('buenas tardes')) {
      return "¡Hola! Es un gusto saludarte. Soy el asistente de FlujoPy y estoy aquí para ayudarte con información sobre nuestros servicios. ¿En qué proyecto estás trabajando?"
    }
    
    if (message.includes('gracias') || message.includes('perfecto') || message.includes('excelente')) {
      return "¡De nada! Me alegra poder ayudarte. Si tienes más preguntas o quieres agendar una consulta, no dudes en decírmelo. ¿Hay algo más en lo que pueda asistirte?"
    }

    // Respuesta por defecto
    return "Entiendo tu consulta. Para brindarte la mejor respuesta personalizada, te recomiendo que hables directamente con nuestro equipo. Puedes contactarnos por WhatsApp al +595 981 234 567 o agendar una consulta gratuita. ¿Te gustaría que te contactemos?"
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simular tiempo de respuesta del bot
    setTimeout(async () => {
      const botResponse = await getBotResponse(inputValue)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000) // 1-2 segundos de respuesta
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickQuestions = [
    "¿Qué servicios ofrecen?",
    "¿Cuánto tiempo toma un proyecto?",
    "¿Hacen sitios web?",
    "¿Qué es automatización?",
    "Quiero una consulta"
  ]

  const handleQuickQuestion = (question: string) => {
    setInputValue(question)
    setTimeout(() => handleSendMessage(), 100)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-600/50 w-96 max-w-[calc(100vw-3rem)] h-[500px] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-sky-500 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{companyName}</h3>
                  <p className="text-sm text-green-400 font-medium">Asistente Virtual</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
                aria-label="Cerrar chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.isBot 
                        ? 'bg-gradient-to-r from-green-500 to-sky-500' 
                        : 'bg-slate-600'
                    }`}>
                      {message.isBot ? (
                        <Bot className="w-4 h-4 text-white" />
                      ) : (
                        <User className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className={`rounded-2xl px-4 py-3 ${
                      message.isBot
                        ? 'bg-slate-700/50 text-gray-200'
                        : 'bg-green-500 text-slate-900'
                    }`}>
                      <p className="text-sm font-medium leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2 max-w-[80%]">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-sky-500 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-slate-700/50 rounded-2xl px-4 py-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-200"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-400"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length <= 1 && !isTyping && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-400 mb-2">Preguntas frecuentes:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="text-xs bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 hover:text-white px-3 py-2 rounded-full transition-all duration-200 border border-slate-600/30"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-slate-700/50">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe tu pregunta..."
                  className="flex-1 bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-green-500 hover:bg-green-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-slate-900 p-3 rounded-xl transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
                  aria-label="Enviar mensaje"
                >
                  {isTyping ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-r from-green-500 to-sky-500 hover:from-green-400 hover:to-sky-400 text-white rounded-full shadow-2xl hover:shadow-green-500/50 flex items-center justify-center transition-all duration-200 relative"
        aria-label="Abrir chat con asistente virtual"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-7 h-7" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Notification dot */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">•</span>
          </div>
        )}
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
      </motion.button>
    </div>
  )
}