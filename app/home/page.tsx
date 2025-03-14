import { MapPin, Search, Calendar, User, Sun, Navigation } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F1F7EE] pb-16">
      {/* Header */}
      <header className="bg-[#92AA83] text-white p-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">STAYSPLOR</h1>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Usuário" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
          </div>
          <div className="mt-4">
            <h2 className="text-xl">Bom dia, João!</h2>
            <div className="flex items-center mt-1">
              <Sun className="h-4 w-4 mr-1" />
              <span className="text-sm">28°C em São Paulo hoje</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-4">
        {/* For You Today Section */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-[#92AA83]">Para você hoje</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Gastronomy Card */}
            <Card className="overflow-hidden border-[#B0BEA9]">
              <div className="relative h-40">
                <Image
                  src="/placeholder.svg?height=160&width=400&text=Mercado+Municipal"
                  alt="Mercado Municipal"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-2 right-2 bg-[#E7F59E] text-[#92AA83]">Gastronomia</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-[#92AA83]">Mercado Municipal</CardTitle>
                <CardDescription>A 2.5km do seu hotel</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#B0BEA9]">
                  Experimente o tradicional sanduíche de mortadela e outros sabores locais neste mercado histórico.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-[#92AA83] text-[#92AA83] hover:bg-[#E0EDC5]">
                  Ver detalhes
                </Button>
              </CardFooter>
            </Card>

            {/* Cultural Card */}
            <Card className="overflow-hidden border-[#B0BEA9]">
              <div className="relative h-40">
                <Image src="/placeholder.svg?height=160&width=400&text=MASP" alt="MASP" fill className="object-cover" />
                <Badge className="absolute top-2 right-2 bg-[#E0EDC5] text-[#92AA83]">Cultural</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-[#92AA83]">MASP</CardTitle>
                <CardDescription>A 1.8km do seu hotel</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#B0BEA9]">
                  Museu de Arte de São Paulo com entrada gratuita para hóspedes do hotel.
                </p>
                <Badge variant="outline" className="mt-2 text-[#92AA83] border-[#92AA83]">
                  Oferta Especial
                </Badge>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-[#92AA83] text-[#92AA83] hover:bg-[#E0EDC5]">
                  Ver detalhes
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Popular Experiences */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-[#92AA83]">Experiências populares</h3>
          <div className="space-y-4">
            {/* Samba Class */}
            <Card className="border-[#B0BEA9]">
              <div className="flex">
                <div className="relative w-24 h-24">
                  <Image
                    src="/placeholder.svg?height=96&width=96&text=Aula+Samba"
                    alt="Aula de Samba"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-[#92AA83]">Aula de Samba</h4>
                      <p className="text-sm text-[#B0BEA9]">No hotel • Hoje às 19h</p>
                    </div>
                    <Badge className="bg-[#E0EDC5] text-[#92AA83]">Reservado</Badge>
                  </div>
                  <Button variant="link" className="p-0 h-auto mt-2 text-[#92AA83]">
                    Ver detalhes
                  </Button>
                </div>
              </div>
            </Card>

            {/* Graffiti Tour */}
            <Card className="border-[#B0BEA9]">
              <div className="flex">
                <div className="relative w-24 h-24">
                  <Image
                    src="/placeholder.svg?height=96&width=96&text=Tour+Graffiti"
                    alt="Tour de Graffiti"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-[#92AA83]">Tour de Graffiti</h4>
                      <p className="text-sm text-[#B0BEA9]">Vila Madalena • Amanhã às 10h</p>
                    </div>
                    <Button size="sm" className="bg-[#92AA83] hover:bg-[#92AA83]/90 text-white">
                      Reservar
                    </Button>
                  </div>
                  <Button variant="link" className="p-0 h-auto mt-2 text-[#92AA83]">
                    Ver detalhes
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Proximity Map */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-[#92AA83]">Mapa de proximidade</h3>
          <div className="relative h-64 bg-[#E0EDC5] rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image src="/placeholder.svg?height=256&width=600&text=Mapa" alt="Mapa" fill className="object-cover" />

                {/* Hotel Marker */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#92AA83] text-white w-8 h-8 rounded-full flex items-center justify-center">
                  H
                </div>

                {/* POI Markers */}
                <div className="absolute top-1/3 left-1/4 bg-[#E7F59E] text-[#92AA83] w-6 h-6 rounded-full flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="absolute top-2/3 right-1/3 bg-[#E7F59E] text-[#92AA83] w-6 h-6 rounded-full flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="absolute bottom-1/4 left-2/3 bg-[#E7F59E] text-[#92AA83] w-6 h-6 rounded-full flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
              </div>
            </div>
            <Button className="absolute bottom-2 right-2" size="sm">
              <Navigation className="h-4 w-4 mr-1" />
              Ver mapa completo
            </Button>
          </div>
        </section>
      </main>

      {/* Navigation - Fixed at bottom */}
      <nav className="bg-white border-t border-[#B0BEA9] fixed bottom-0 left-0 right-0 z-10">
        <div className="container mx-auto">
          <div className="flex justify-around py-2">
            <Link href="/home" className="flex flex-col items-center p-2 text-[#92AA83]">
              <MapPin className="h-6 w-6" />
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link href="/search" className="flex flex-col items-center p-2 text-[#B0BEA9]">
              <Search className="h-6 w-6" />
              <span className="text-xs mt-1">Busca</span>
            </Link>
            <Link href="/itinerary" className="flex flex-col items-center p-2 text-[#B0BEA9]">
              <Calendar className="h-6 w-6" />
              <span className="text-xs mt-1">Agenda</span>
            </Link>
            <Link href="/profile" className="flex flex-col items-center p-2 text-[#B0BEA9]">
              <User className="h-6 w-6" />
              <span className="text-xs mt-1">Perfil</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

