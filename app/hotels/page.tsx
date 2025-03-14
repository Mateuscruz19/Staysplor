import { ArrowLeft, MapPin, Search, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Hotels() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F1F7EE]">
      {/* Header */}
      <header className="bg-[#92AA83] text-white p-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Button variant="ghost" size="icon" className="text-white hover:bg-[#92AA83]/90">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-xl font-semibold">Selecione Seu Hotel</h1>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="sticky top-0 z-10 bg-[#F1F7EE] p-4 shadow-sm">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#B0BEA9]" />
          <Input
            placeholder="Buscar hotéis por nome ou localização..."
            className="pl-9 border-[#B0BEA9] focus-visible:ring-[#92AA83]"
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-4">
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-[#92AA83]">Vistos Recentemente</h2>

          <div className="grid gap-4">
            {/* Hotel Cards */}
            {[
              {
                name: "Grand Plaza Hotel",
                location: "São Paulo, Brasil",
                rating: 4.8,
                image: "/placeholder.svg?height=120&width=300&text=Grand+Plaza",
                partner: true,
              },
              {
                name: "Resort à Beira-Mar",
                location: "Rio de Janeiro, Brasil",
                rating: 4.5,
                image: "/placeholder.svg?height=120&width=300&text=Resort+Beira+Mar",
                partner: true,
              },
              {
                name: "Pousada Vista da Montanha",
                location: "Campos do Jordão, Brasil",
                rating: 4.7,
                image: "/placeholder.svg?height=120&width=300&text=Vista+Montanha",
                partner: false,
              },
            ].map((hotel, index) => (
              <Link href="/home" key={index}>
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                      <Image src={hotel.image || "/placeholder.svg"} alt={hotel.name} fill className="object-cover" />
                    </div>
                    <CardContent className="flex-1 p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-[#92AA83]">{hotel.name}</h3>
                          <div className="flex items-center text-xs text-[#B0BEA9] mt-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span>{hotel.location}</span>
                          </div>
                          <div className="flex items-center mt-2">
                            <div className="flex items-center">
                              <Star className="h-3 w-3 text-[#E7F59E] fill-[#E7F59E]" />
                              <span className="text-xs ml-1 font-medium">{hotel.rating}</span>
                            </div>
                            {hotel.partner && (
                              <Badge className="ml-2 bg-[#E0EDC5] text-[#92AA83] text-xs">Parceiro</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <h2 className="text-lg font-semibold text-[#92AA83] pt-4">Hotéis Populares</h2>

          <div className="grid gap-4">
            {/* More Hotel Cards */}
            {[
              {
                name: "Suítes de Luxo",
                location: "Brasília, Brasil",
                rating: 4.9,
                image: "/placeholder.svg?height=120&width=300&text=Suites+Luxo",
                partner: true,
              },
              {
                name: "Resort Frente ao Mar",
                location: "Florianópolis, Brasil",
                rating: 4.6,
                image: "/placeholder.svg?height=120&width=300&text=Frente+Mar",
                partner: false,
              },
              {
                name: "Hotel Centro da Cidade",
                location: "Curitiba, Brasil",
                rating: 4.4,
                image: "/placeholder.svg?height=120&width=300&text=Centro+Cidade",
                partner: true,
              },
            ].map((hotel, index) => (
              <Link href="/home" key={index}>
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                      <Image src={hotel.image || "/placeholder.svg"} alt={hotel.name} fill className="object-cover" />
                    </div>
                    <CardContent className="flex-1 p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-[#92AA83]">{hotel.name}</h3>
                          <div className="flex items-center text-xs text-[#B0BEA9] mt-1">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span>{hotel.location}</span>
                          </div>
                          <div className="flex items-center mt-2">
                            <div className="flex items-center">
                              <Star className="h-3 w-3 text-[#E7F59E] fill-[#E7F59E]" />
                              <span className="text-xs ml-1 font-medium">{hotel.rating}</span>
                            </div>
                            {hotel.partner && (
                              <Badge className="ml-2 bg-[#E0EDC5] text-[#92AA83] text-xs">Parceiro</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

