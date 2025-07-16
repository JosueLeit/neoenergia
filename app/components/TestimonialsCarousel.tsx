"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Building2 } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  company: string
  role: string
  content: string
  savings: string
  rating: number
  industry: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Silva",
    company: "TechCorp Soluções",
    role: "Diretor Financeiro",
    content: "A migração para o Mercado Livre foi fundamental para nossa empresa. Reduzimos 28% dos custos com energia e conseguimos maior previsibilidade no orçamento.",
    savings: "R$ 45.000/mês",
    rating: 5,
    industry: "Tecnologia"
  },
  {
    id: 2,
    name: "Ana Costa",
    company: "Metalúrgica Moderna",
    role: "Gerente de Operações",
    content: "Com a Neoenergia, todo o processo foi transparente e profissional. O suporte técnico é excepcional e estamos muito satisfeitos com os resultados.",
    savings: "R$ 78.000/mês",
    rating: 5,
    industry: "Metalurgia"
  },
  {
    id: 3,
    name: "Roberto Oliveira",
    company: "Indústria Alimentícia do Norte",
    role: "CEO",
    content: "Excelente parceria! A economia obtida nos permitiu investir em novas tecnologias e expandir nossa capacidade produtiva.",
    savings: "R$ 92.000/mês",
    rating: 5,
    industry: "Alimentícia"
  },
  {
    id: 4,
    name: "Maria Santos",
    company: "Shopping Center Plaza",
    role: "Diretora Administrativa",
    content: "O processo de migração foi muito bem conduzido. A equipe da Neoenergia nos acompanhou em cada etapa e os resultados superaram nossas expectativas.",
    savings: "R$ 156.000/mês",
    rating: 5,
    industry: "Varejo"
  }
]

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    )
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 px-8 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0A3B1D] mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empresas que já migraram para o Mercado Livre compartilham suas experiências
            e os resultados obtidos com a Neoenergia
          </p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-[#f0f7f0] flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-[#0A3B1D]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A3B1D]">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-gray-600">
                    {currentTestimonial.role} • {currentTestimonial.company}
                  </p>
                  <p className="text-sm text-gray-500">
                    {currentTestimonial.industry}
                  </p>
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < currentTestimonial.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-[#0A3B1D]">
                    Economia: {currentTestimonial.savings}
                  </span>
                </div>
              </div>
            </div>

            <blockquote className="text-lg text-gray-700 mb-8 italic">
              "{currentTestimonial.content}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-3 w-3 rounded-full transition-colors ${
                      index === currentIndex
                        ? "bg-[#0A3B1D]"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={goToPrevious}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <button
                  onClick={goToNext}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0A3B1D] mb-2">500+</div>
            <p className="text-gray-600">Empresas migradas</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0A3B1D] mb-2">R$ 50M+</div>
            <p className="text-gray-600">Economia gerada</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0A3B1D] mb-2">98%</div>
            <p className="text-gray-600">Satisfação dos clientes</p>
          </div>
        </div>
      </div>
    </section>
  )
}