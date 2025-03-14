import { ArrowLeft, Clock, MapPin, Plus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function Itinerary() {
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
            <h1 className="text-xl font-semibold">Sua Agenda</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-4">
        <Tabs defaultValue="today">
          <TabsList className="w-full justify-start mb-6 overflow-x-auto">
            <TabsTrigger value="today">Hoje</TabsTrigger>
            <TabsTrigger value="tomorrow">Amanhã</TabsTrigger>
            <TabsTrigger value="week">Esta Semana</TabsTrigger>
            <TabsTrigger value="all">Todas</TabsTrigger>
          </TabsList>

          <TabsContent value="today" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Segunda-feira, 15 de Julho</h3>
              <Button size="sm" variant="outline" className="gap-1">
                <Plus className="h-4 w-4" />
                Adicionar
              </Button>
            </div>

            <div className="space-y-4">
              {/* Timeline */}
              <div className="relative pl-6 border-l-2 border-primary space-y-8">
                {/* Morning */}
                <div className="relative">
                  <div className="absolute -left-[25px] w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs">
                    AM
                  </div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-4">Manhã</h4>

                  <Card className="mb-4">
                    <CardContent className="p-4">
                      <div className="flex gap-3">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src="/placeholder.svg?height=64&width=64"
                            alt="Café da manhã"
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h5 className="font-medium">Café da manhã</h5>
                            <Badge variant="outline">Incluído</Badge>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                            <Clock className="h-3 w-3" />
                            <span>7:00 - 10:00</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span>Restaurante do Hotel</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex gap-3">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src="/placeholder.svg?height=64&width=64"
                            alt="MASP"
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h5 className="font-medium">Visita ao MASP</h5>
                            <Badge>Confirmado</Badge>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                            <Clock className="h-3 w-3" />
                            <span>11:00 - 13:00</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span>Av. Paulista, 1578</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Afternoon */}
                <div className="relative">
                  <div className="absolute -left-[25px] w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs">
                    PM
                  </div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-4">Tarde</h4>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex gap-3">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src="/placeholder.svg?height=64&width=64"
                            alt="Mercado Municipal"
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h5 className="font-medium">Mercado Municipal</h5>
                            <Badge variant="secondary">Sugerido</Badge>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                            <Clock className="h-3 w-3" />
                            <span>15:00 - 17:00</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span>R. da Cantareira, 306</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Evening */}
                <div className="relative">
                  <div className="absolute -left-[25px] w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs">
                    EV
                  </div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-4">Noite</h4>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex gap-3">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src="/placeholder.svg?height=64&width=64"
                            alt="Aula de Samba"
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h5 className="font-medium">Aula de Samba</h5>
                            <Badge>Confirmado</Badge>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                            <Clock className="h-3 w-3" />
                            <span>19:00 - 20:30</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span>Salão de Eventos do Hotel</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tomorrow">
            <h3 className="text-lg font-semibold mb-4">Terça-feira, 16 de Julho</h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=64&width=64"
                        alt="Tour de Graffiti"
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h5 className="font-medium">Tour de Graffiti</h5>
                        <Badge variant="outline">Pendente</Badge>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <Clock className="h-3 w-3" />
                        <span>10:00 - 12:00</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>Vila Madalena</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="week">
            <p className="text-muted-foreground">Atividades para esta semana...</p>
          </TabsContent>

          <TabsContent value="all">
            <p className="text-muted-foreground">Todas as atividades...</p>
          </TabsContent>
        </Tabs>
      </main>

      {/* Navigation would be included here, same as in home page */}
    </div>
  )
}

