import Image from "next/image"
import { Shield, Users, BarChart3, Percent, Search, PiggyBank, CheckCircle2, FileText, Building2, Zap } from "lucide-react"
import { WhatsAppButton } from "./components/WhatsAppButton"
import { Footer } from "./components/Footer"

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-white p-8 md:p-16 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A3B1D] leading-tight mb-6">
              Reduza até 35% da sua conta de luz com energia livre e inteligente
            </h1>
            <p className="text-gray-700 mb-8">
              A Neoenergia cuida de todo o processo para sua empresa economizar com segurança e previsibilidade no Mercado
              Livre de Energia.
            </p>
            <WhatsAppButton />
          </div>
          <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
            <Image
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=600&w=800&auto="
              alt="Painéis solares"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="py-16 px-8 md:px-16 bg-gray-50">
          <h2 className="text-3xl font-bold text-[#0A3B1D] mb-12 text-center">
            Para quem é o Mercado Livre de Energia?
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[#0A3B1D] mb-4 flex items-center gap-2">
                  <Building2 className="h-6 w-6" />
                  Perfil Ideal
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0A3B1D] mt-0.5" />
                    <span>Empresas com contas acima de R$ 5.000/mês</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0A3B1D] mt-0.5" />
                    <span>Consumidores em média ou alta tensão</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[#0A3B1D] mb-4 flex items-center gap-2">
                  <Zap className="h-6 w-6" />
                  Objetivos
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0A3B1D] mt-0.5" />
                    <span>Redução de custos operacionais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0A3B1D] mt-0.5" />
                    <span>Previsibilidade financeira</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0A3B1D] mt-0.5" />
                    <span>Certificação de energia renovável (I-REC)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-8 md:px-16">
          <h2 className="text-3xl font-bold text-[#0A3B1D] mb-12 text-center">
            Benefícios Estratégicos do Mercado Livre
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-6">
                <div className="h-16 w-16 rounded-full bg-[#f0f7f0] flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-8 w-8 text-[#0A3B1D]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A3B1D] mb-2">Economia comprovada</h3>
                  <p className="text-gray-700">
                    Reduza até 35% dos custos com energia contratando diretamente com os fornecedores.
                    A Neoenergia oferece análise personalizada do seu perfil de consumo.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="h-16 w-16 rounded-full bg-[#f0f7f0] flex items-center justify-center flex-shrink-0">
                  <Shield className="h-8 w-8 text-[#0A3B1D]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A3B1D] mb-2">Previsibilidade e planejamento</h3>
                  <p className="text-gray-700">
                    Controle total sobre contratos personalizados e a energia contratada a longo prazo.
                    Melhor organização e planejamento financeiro com contratos de 3 a 5 anos.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="h-16 w-16 rounded-full bg-[#f0f7f0] flex items-center justify-center flex-shrink-0">
                  <FileText className="h-8 w-8 text-[#0A3B1D]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A3B1D] mb-2">Energia limpa e certificada</h3>
                  <p className="text-gray-700">
                    Proveniente de energia renovável, certificado I-REC e melhore seus indicadores ESG.
                    Contribua para um futuro mais sustentável e redução de gases de efeito estufa.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="h-16 w-16 rounded-full bg-[#f0f7f0] flex items-center justify-center flex-shrink-0">
                  <Percent className="h-8 w-8 text-[#0A3B1D]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A3B1D] mb-2">Descontos na tarifa TUSD</h3>
                  <p className="text-gray-700">
                    Aproveite incentivos fiscais e regulatórios disponíveis no Mercado Livre.
                    Descontos especiais para energias alternativas e incentivadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-8 md:px-16 bg-gray-50">
          <h2 className="text-3xl font-bold text-[#0A3B1D] mb-12 text-center">
            Como funciona o processo de migração?
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-[#0A3B1D] text-white flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A3B1D]">Análise de viabilidade</h3>
                    <p className="text-gray-700">Avaliação técnica e econômica do seu caso, incluindo análise de consumo e demanda</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-[#0A3B1D] text-white flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A3B1D]">Escolha do modelo</h3>
                    <p className="text-gray-700">Definição entre modelo Varejista (mais simples) ou Atacadista (mais controle)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-[#0A3B1D] text-white flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A3B1D]">Contratação</h3>
                    <p className="text-gray-700">Negociação e assinatura do contrato de energia (3 a 5 anos)</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-[#0A3B1D] text-white flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A3B1D]">Adequação técnica</h3>
                    <p className="text-gray-700">Implementação do sistema de medição e faturamento (SMF)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-[#0A3B1D] text-white flex items-center justify-center flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A3B1D]">Habilitação</h3>
                    <p className="text-gray-700">Processo junto à CCEE (se modelo Atacadista)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-[#0A3B1D] text-white flex items-center justify-center flex-shrink-0">
                    6
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A3B1D]">Migração</h3>
                    <p className="text-gray-700">Transição para o Mercado Livre com suporte especializado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Models Section */}
        <section className="py-16 px-8 md:px-16">
          <h2 className="text-3xl font-bold text-[#0A3B1D] mb-12 text-center">
            Modelos de Participação
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[#0A3B1D] mb-4">Modelo Varejista</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0A3B1D] mt-0.5" />
                    <span>Representação pela comercializadora</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0A3B1D] mt-0.5" />
                    <span>Processo mais simples</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0A3B1D] mt-0.5" />
                    <span>Sem necessidade de adesão à CCEE</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0A3B1D] mt-0.5" />
                    <span>Pagamento apenas da energia consumida</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[#0A3B1D] mb-4">Modelo Atacadista</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0A3B1D] mt-0.5" />
                    <span>Adesão direta à CCEE</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0A3B1D] mt-0.5" />
                    <span>Maior controle sobre contratos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0A3B1D] mt-0.5" />
                    <span>Participação na liquidação financeira</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0A3B1D] mt-0.5" />
                    <span>Contratação de volume fixo de energia</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 px-8 md:px-16 bg-gray-50">
          <h2 className="text-3xl font-bold text-[#0A3B1D] mb-12 text-center">
            Descubra quanto sua empresa pode economizar
          </h2>

          <div className="max-w-2xl mx-auto">
            <form action="/api/leads" method="POST" className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Nome" 
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required 
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="E-mail" 
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required 
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Telefone" 
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required 
                />
                <input 
                  type="text" 
                  name="company"
                  placeholder="Nome da empresa" 
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required 
                />
                <input
                  type="text"
                  name="consumption"
                  placeholder="Consumo médio mensal (kWh ou valor da fatura)"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    name="terms"
                    className="h-5 w-5 rounded"
                    required 
                  />
                  <label htmlFor="terms" className="text-gray-700">
                    Estou de acordo com os termos e a política de privacidade
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0A3B1D] text-white py-3 px-6 rounded-md hover:bg-[#082a15] transition-colors"
                >
                  Enviar
                </button>
                <div className="flex justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-[#0A3B1D]" />
                    <span className="text-gray-700 text-sm">Dados protegidos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-[#0A3B1D]" />
                    <span className="text-gray-700 text-sm">Suporte dedicado</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* Neoenergia Diferentials */}
        <section className="py-16 px-8 md:px-16 bg-gray-50">
          <h2 className="text-3xl font-bold text-[#0A3B1D] mb-12 text-center">
            Por que escolher a Neoenergia?
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[#0A3B1D] mb-4">Grupo Forte e Completo</h3>
                <p className="text-gray-700 mb-4">
                  Atuamos em todo o segmento de energia: Geração {'>'} Transmissão {'>'} Distribuição {'>'} Comercialização
                </p>
                <div className="flex items-center gap-2 text-[#0A3B1D]">
                  <Shield className="h-5 w-5" />
                  <span className="font-medium">93% de satisfação dos clientes</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[#0A3B1D] mb-4">Suporte Especializado</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0A3B1D] mt-0.5" />
                    <span>Monitoramento diário dos dados de medição</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0A3B1D] mt-0.5" />
                    <span>Estimativa mensal de economia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0A3B1D] mt-0.5" />
                    <span>Informativos semanais do mercado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0A3B1D] mt-0.5" />
                    <span>Planejamento energético personalizado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-8 md:px-16">
          <h2 className="text-3xl font-bold text-[#0A3B1D] mb-12 text-center">
            Dúvidas Frequentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#0A3B1D] mb-3">Quais são os pré-requisitos para migrar?</h3>
              <p className="text-gray-700">
                É necessário estar conectado em média ou alta tensão, com consumo mensal mínimo de R$ 5.000, 
                estar adimplente com a distribuidora e não estar em processo de recuperação judicial.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#0A3B1D] mb-3">Qual a diferença entre modelo Varejista e Atacadista?</h3>
              <p className="text-gray-700">
                No modelo Varejista, uma comercializadora representa o cliente (mais simples). No Atacadista, 
                o cliente se torna agente da CCEE (mais controle, mas mais burocracia).
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#0A3B1D] mb-3">Quanto tempo leva o processo de migração?</h3>
              <p className="text-gray-700">
                O processo completo pode levar alguns meses, incluindo análise de viabilidade, adequações técnicas 
                e processo junto à CCEE. É necessário aviso com 180 dias de antecedência para migração.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

