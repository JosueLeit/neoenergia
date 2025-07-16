"use client"

import { useState } from "react"
import { Calculator, TrendingDown, Zap, DollarSign } from "lucide-react"

interface CalculatorResult {
  currentCost: number
  potentialSavings: number
  annualSavings: number
  paybackPeriod: number
  savingsPercentage: number
}

export function EnergyCalculator() {
  const [consumption, setConsumption] = useState<string>("")
  const [currentRate, setCurrentRate] = useState<string>("")
  const [result, setResult] = useState<CalculatorResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateSavings = () => {
    if (!consumption || !currentRate) return

    setIsCalculating(true)
    
    // Simulate calculation delay
    setTimeout(() => {
      const monthlyConsumption = parseFloat(consumption)
      const ratePerKWh = parseFloat(currentRate)
      const currentMonthlyCost = monthlyConsumption * ratePerKWh
      
      // Average savings in free market (20-35%)
      const savingsPercentage = 25 // Conservative estimate
      const monthlySavings = currentMonthlyCost * (savingsPercentage / 100)
      const annualSavings = monthlySavings * 12
      
      setResult({
        currentCost: currentMonthlyCost,
        potentialSavings: monthlySavings,
        annualSavings: annualSavings,
        paybackPeriod: 6, // Average migration time in months
        savingsPercentage: savingsPercentage
      })
      
      setIsCalculating(false)
    }, 1500)
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="h-16 w-16 rounded-full bg-[#f0f7f0] flex items-center justify-center mx-auto mb-4">
          <Calculator className="h-8 w-8 text-[#0A3B1D]" />
        </div>
        <h3 className="text-2xl font-bold text-[#0A3B1D] mb-2">
          Calculadora de Economia
        </h3>
        <p className="text-gray-600">
          Descubra quanto sua empresa pode economizar no Mercado Livre
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Consumo mensal (kWh)
          </label>
          <input
            type="number"
            value={consumption}
            onChange={(e) => setConsumption(e.target.value)}
            placeholder="Ex: 15000"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0A3B1D] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tarifa atual (R$/kWh)
          </label>
          <input
            type="number"
            step="0.01"
            value={currentRate}
            onChange={(e) => setCurrentRate(e.target.value)}
            placeholder="Ex: 0.65"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0A3B1D] focus:border-transparent"
          />
        </div>
      </div>

      <button
        onClick={calculateSavings}
        disabled={!consumption || !currentRate || isCalculating}
        className="w-full bg-[#0A3B1D] text-white py-3 px-6 rounded-md hover:bg-[#082a15] disabled:opacity-50 disabled:cursor-not-allowed transition-colors mb-8"
      >
        {isCalculating ? (
          <div className="flex items-center justify-center gap-2">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            Calculando...
          </div>
        ) : (
          "Calcular Economia"
        )}
      </button>

      {result && (
        <div className="bg-gradient-to-r from-[#f0f7f0] to-[#e8f5e8] rounded-lg p-6">
          <h4 className="text-xl font-bold text-[#0A3B1D] mb-6 text-center">
            Suas Economias Projetadas
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 text-center">
              <DollarSign className="h-8 w-8 text-[#0A3B1D] mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-1">Economia Mensal</p>
              <p className="text-2xl font-bold text-[#0A3B1D]">
                {formatCurrency(result.potentialSavings)}
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 text-center">
              <TrendingDown className="h-8 w-8 text-[#0A3B1D] mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-1">Economia Anual</p>
              <p className="text-2xl font-bold text-[#0A3B1D]">
                {formatCurrency(result.annualSavings)}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <Zap className="h-8 w-8 text-[#0A3B1D] mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-1">Redução de Custos</p>
              <p className="text-2xl font-bold text-[#0A3B1D]">
                {result.savingsPercentage}%
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 text-center">
              <Calculator className="h-8 w-8 text-[#0A3B1D] mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-1">Tempo de Migração</p>
              <p className="text-2xl font-bold text-[#0A3B1D]">
                {result.paybackPeriod} meses
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Aviso:</strong> Esta é uma estimativa baseada em dados médios do mercado. 
              A economia real pode variar conforme perfil de consumo e condições do contrato.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}