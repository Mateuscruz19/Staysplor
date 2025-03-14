import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function Register() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F1F7EE]">
      {/* Header */}
      <header className="p-4">
        <Link href="/">
          <Button variant="ghost" size="icon" className="text-[#92AA83]">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-[#92AA83]">Criar Conta</h1>
            <p className="text-[#B0BEA9]">Junte-se ao STAYSPLOR para descobrir experiências incríveis</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-[#92AA83]">
                  Nome
                </Label>
                <Input
                  id="firstName"
                  placeholder="João"
                  className="h-12 border-[#B0BEA9] focus-visible:ring-[#92AA83]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-[#92AA83]">
                  Sobrenome
                </Label>
                <Input
                  id="lastName"
                  placeholder="Silva"
                  className="h-12 border-[#B0BEA9] focus-visible:ring-[#92AA83]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#92AA83]">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className="h-12 border-[#B0BEA9] focus-visible:ring-[#92AA83]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#92AA83]">
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="h-12 border-[#B0BEA9] focus-visible:ring-[#92AA83]"
              />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                className="mt-1 border-[#B0BEA9] data-[state=checked]:bg-[#92AA83] data-[state=checked]:text-white"
              />
              <Label htmlFor="terms" className="text-[#B0BEA9] text-sm">
                Eu concordo com os{" "}
                <Link href="/terms" className="text-[#92AA83] underline">
                  Termos de Serviço
                </Link>{" "}
                e{" "}
                <Link href="/privacy" className="text-[#92AA83] underline">
                  Política de Privacidade
                </Link>
              </Label>
            </div>

            <Button type="submit" className="w-full h-12 bg-[#92AA83] hover:bg-[#92AA83]/90 text-white" asChild>
              <Link href="/hotels">Criar Conta</Link>
            </Button>
          </form>

          <div className="text-center">
            <span className="text-[#B0BEA9]">Já tem uma conta? </span>
            <Button variant="link" className="text-[#92AA83] p-0" asChild>
              <Link href="/login">Entrar</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

