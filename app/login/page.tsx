import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function Login() {
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
            <h1 className="text-3xl font-bold text-[#92AA83]">Bem-vindo de Volta</h1>
            <p className="text-[#B0BEA9]">Entre para continuar sua exploração</p>
          </div>

          <form className="space-y-6">
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
              <div className="flex justify-between">
                <Label htmlFor="password" className="text-[#92AA83]">
                  Senha
                </Label>
                <Button variant="link" className="text-[#92AA83] p-0" asChild>
                  <Link href="/forgot-password">Esqueceu a senha?</Link>
                </Button>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="h-12 border-[#B0BEA9] focus-visible:ring-[#92AA83]"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                className="border-[#B0BEA9] data-[state=checked]:bg-[#92AA83] data-[state=checked]:text-white"
              />
              <Label htmlFor="remember" className="text-[#B0BEA9]">
                Lembrar de mim
              </Label>
            </div>

            <Button type="submit" className="w-full h-12 bg-[#92AA83] hover:bg-[#92AA83]/90 text-white" asChild>
              <Link href="/hotels">Entrar</Link>
            </Button>
          </form>

          <div className="text-center">
            <span className="text-[#B0BEA9]">Não tem uma conta? </span>
            <Button variant="link" className="text-[#92AA83] p-0" asChild>
              <Link href="/register">Registrar</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

