import { ArrowLeft, Bell, Globe, HelpCircle, LogOut, Settings, UserIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function Profile() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-semibold">Perfil</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-4">
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg?height=64&width=64" alt="João" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold">João Dias</h2>
                <p className="text-sm text-muted-foreground">joao.dias@email.com</p>
                <p className="text-sm text-muted-foreground">Quarto 507</p>
              </div>
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full">
                Editar perfil
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Preferências</CardTitle>
            <CardDescription>Personalize sua experiência</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <Label htmlFor="notifications">Notificações</Label>
              </div>
              <Switch id="notifications" defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-muted-foreground" />
                <Label htmlFor="language">Idioma</Label>
              </div>
              <Button variant="outline" size="sm">
                Português
              </Button>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-muted-foreground" />
                <Label htmlFor="preferences">Preferências de atividades</Label>
              </div>
              <Button variant="outline" size="sm">
                Configurar
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              <Link href="/help" className="flex items-center justify-between p-4 hover:bg-gray-50">
                <div className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-muted-foreground" />
                  <span>Ajuda e Suporte</span>
                </div>
                <ArrowLeft className="h-4 w-4 rotate-180 text-muted-foreground" />
              </Link>

              <Link href="/terms" className="flex items-center justify-between p-4 hover:bg-gray-50">
                <div className="flex items-center gap-2">
                  <UserIcon className="h-5 w-5 text-muted-foreground" />
                  <span>Termos e Privacidade</span>
                </div>
                <ArrowLeft className="h-4 w-4 rotate-180 text-muted-foreground" />
              </Link>

              <button className="flex items-center justify-between p-4 w-full text-left hover:bg-gray-50 text-red-500">
                <div className="flex items-center gap-2">
                  <LogOut className="h-5 w-5" />
                  <span>Sair</span>
                </div>
              </button>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Navigation would be included here, same as in home page */}
    </div>
  )
}

