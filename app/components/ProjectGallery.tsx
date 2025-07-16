"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Zap } from "lucide-react"

interface Project {
  id: number
  title: string
  location: string
  date: string
  industry: string
  power: string
  savings: string
  description: string
  image: string
  beforeImage?: string
  afterImage?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Complexo Industrial Metalúrgico",
    location: "São Paulo, SP",
    date: "2024",
    industry: "Metalurgia",
    power: "2.5 MW",
    savings: "35% redução",
    description: "Migração completa para o Mercado Livre com implementação de sistema de monitoramento em tempo real.",
    image: "/placeholder.jpg",
    beforeImage: "/placeholder.jpg",
    afterImage: "/placeholder.jpg"
  },
  {
    id: 2,
    title: "Shopping Center Regional",
    location: "Belo Horizonte, MG",
    date: "2024",
    industry: "Varejo",
    power: "1.8 MW",
    savings: "28% redução",
    description: "Projeto de eficiência energética com contrato de energia incentivada e certificação I-REC.",
    image: "/placeholder.jpg",
    beforeImage: "/placeholder.jpg",
    afterImage: "/placeholder.jpg"
  },
  {
    id: 3,
    title: "Indústria Alimentícia",
    location: "Campinas, SP",
    date: "2023",
    industry: "Alimentícia",
    power: "3.2 MW",
    savings: "42% redução",
    description: "Implementação de energia renovável com processo de migração em tempo recorde.",
    image: "/placeholder.jpg",
    beforeImage: "/placeholder.jpg",
    afterImage: "/placeholder.jpg"
  },
  {
    id: 4,
    title: "Complexo Hospitalar",
    location: "Rio de Janeiro, RJ",
    date: "2023",
    industry: "Saúde",
    power: "1.5 MW",
    savings: "31% redução",
    description: "Migração com foco em estabilidade e continuidade para área crítica de saúde.",
    image: "/placeholder.jpg",
    beforeImage: "/placeholder.jpg",
    afterImage: "/placeholder.jpg"
  },
  {
    id: 5,
    title: "Parque Tecnológico",
    location: "Florianópolis, SC",
    date: "2023",
    industry: "Tecnologia",
    power: "2.1 MW",
    savings: "38% redução",
    description: "Solução integrada com energia limpa e monitoramento inteligente para startups.",
    image: "/placeholder.jpg",
    beforeImage: "/placeholder.jpg",
    afterImage: "/placeholder.jpg"
  },
  {
    id: 6,
    title: "Indústria Têxtil",
    location: "Fortaleza, CE",
    date: "2022",
    industry: "Têxtil",
    power: "2.8 MW",
    savings: "33% redução",
    description: "Migração com energia incentivada e implementação de práticas ESG.",
    image: "/placeholder.jpg",
    beforeImage: "/placeholder.jpg",
    afterImage: "/placeholder.jpg"
  }
]

export function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % 3)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + 3) % 3)
  }

  const getImageSrc = (project: Project, index: number) => {
    switch (index) {
      case 0: return project.image
      case 1: return project.beforeImage || project.image
      case 2: return project.afterImage || project.image
      default: return project.image
    }
  }

  const getImageLabel = (index: number) => {
    switch (index) {
      case 0: return "Visão Geral"
      case 1: return "Antes"
      case 2: return "Depois"
      default: return "Imagem"
    }
  }

  return (
    <section className="py-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0A3B1D] mb-4">
            Projetos Realizados
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos projetos que transformaram a gestão energética 
            de empresas em todo o Brasil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => openModal(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-[#0A3B1D] text-white px-3 py-1 rounded-full text-sm">
                  {project.savings}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>{project.location}</span>
                  <span>•</span>
                  <Calendar className="h-4 w-4" />
                  <span>{project.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#0A3B1D] mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-[#0A3B1D]" />
                    <span className="text-sm font-medium">{project.power}</span>
                  </div>
                  <span className="text-sm text-gray-500">{project.industry}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
                >
                  <X className="h-5 w-5" />
                </button>
                
                <div className="relative h-96">
                  <Image
                    src={getImageSrc(selectedProject, currentImageIndex)}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                    {getImageLabel(currentImageIndex)}
                  </div>
                  
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[#0A3B1D] mb-2">
                        {selectedProject.title}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{selectedProject.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{selectedProject.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#0A3B1D] mb-1">
                        {selectedProject.savings}
                      </div>
                      <div className="text-sm text-gray-500">economia obtida</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-[#0A3B1D] mb-2">
                        Detalhes do Projeto
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li><strong>Setor:</strong> {selectedProject.industry}</li>
                        <li><strong>Potência:</strong> {selectedProject.power}</li>
                        <li><strong>Economia:</strong> {selectedProject.savings}</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[#0A3B1D] mb-2">
                        Resultados
                      </h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>✓ Redução significativa de custos</li>
                        <li>✓ Maior previsibilidade energética</li>
                        <li>✓ Energia limpa certificada</li>
                        <li>✓ Melhoria nos indicadores ESG</li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}