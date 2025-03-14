import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F1F7EE]">
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-between p-6 pt-12">
        <div className="w-full max-w-md mx-auto text-center space-y-6">
          {/* Logo and App Name */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-24 h-24 bg-[#92AA83] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-4xl font-bold text-white">S</span>
            </div>
            <h1 className="text-4xl font-bold text-[#92AA83]">STAYSPLOR</h1>
            <p className="text-[#B0BEA9] text-lg">Explore. Experimente. Aproveite.</p>
          </div>

          {/* Illustration */}
          <div className="relative h-64 w-full my-8">
            <Image
              src="/placeholder.svg?height=256&width=400&text=Experiência+de+Viagem"
              alt="Experiência de Viagem"
              fill
              className="object-contain"
            />
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#92AA83]">Descubra Sua Estadia</h2>
            <p className="text-[#B0BEA9]">
              Desbloqueie as melhores experiências ao redor do seu hotel. Encontre atrações locais, restaurantes e
              atividades personalizadas para você.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 my-8">
            <div className="flex flex-col items-center p-3 bg-[#E0EDC5] rounded-lg">
              <div className="w-10 h-10 bg-[#92AA83] rounded-full flex items-center justify-center mb-2">
                <span className="text-white font-bold">1</span>
              </div>
              <span className="text-xs text-center text-[#92AA83] font-medium">Encontre Seu Hotel</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-[#E0EDC5] rounded-lg">
              <div className="w-10 h-10 bg-[#92AA83] rounded-full flex items-center justify-center mb-2">
                <span className="text-white font-bold">2</span>
              </div>
              <span className="text-xs text-center text-[#92AA83] font-medium">Descubra Lugares</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-[#E0EDC5] rounded-lg">
              <div className="w-10 h-10 bg-[#92AA83] rounded-full flex items-center justify-center mb-2">
                <span className="text-white font-bold">3</span>
              </div>
              <span className="text-xs text-center text-[#92AA83] font-medium">Planeje Atividades</span>
            </div>
          </div>
        </div>
      </main>

      {/* Login/Register Section */}
      <div className="w-full bg-white rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] p-6 space-y-4">
        <Button className="w-full h-12 bg-[#92AA83] hover:bg-[#92AA83]/90 text-white" asChild>
          <Link href="/login">
            Entrar
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>

        <div className="flex items-center justify-center space-x-2">
          <span className="text-[#B0BEA9]">Não tem uma conta?</span>
          <Button variant="link" className="text-[#92AA83] p-0" asChild>
            <Link href="/register">Registrar</Link>
          </Button>
        </div>

        <Button
          variant="outline"
          className="w-full border-[#92AA83] text-[#92AA83] hover:bg-[#E0EDC5] hover:text-[#92AA83]"
          asChild
        >
          <Link href="/hotels">Continuar como Convidado</Link>
        </Button>
      </div>
    </div>
  )
}

