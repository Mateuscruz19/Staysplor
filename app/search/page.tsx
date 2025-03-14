import { ArrowLeft, SearchIcon } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Search() {
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
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Buscar experiências, locais..." className="pl-9" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-4">
        <Tabs defaultValue="all">
          <TabsList className="w-full justify-start mb-6 overflow-x-auto">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="gastronomy">Gastronomia</TabsTrigger>
            <TabsTrigger value="culture">Cultural</TabsTrigger>
            <TabsTrigger value="nature">Natureza</TabsTrigger>
            <TabsTrigger value="nightlife">Vida Noturna</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Populares perto de você</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* Sample Cards */}
              {[
                { title: "Mercado Municipal", type: "Gastronomia", distance: "2.5km" },
                { title: "MASP", type: "Cultural", distance: "1.8km" },
                { title: "Parque Ibirapuera", type: "Natureza", distance: "3.2km" },
                { title: "Avenida Paulista", type: "Passeio", distance: "1.5km" },
                { title: "Beco do Batman", type: "Cultural", distance: "4.1km" },
                { title: "Bar do Juarez", type: "Gastronomia", distance: "0.8km" },
              ].map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-32">
                    <Image
                      src={`/placeholder.svg?height=128&width=300&text=${item.title}`}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-3">
                    <h4 className="font-medium">{item.title}</h4>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-muted-foreground">{item.type}</span>
                      <span className="text-xs">{item.distance}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Other tab contents would be similar */}
          <TabsContent value="gastronomy">
            <h3 className="text-lg font-semibold mb-4">Gastronomia</h3>
            <p className="text-muted-foreground">Conteúdo de gastronomia aqui...</p>
          </TabsContent>
        </Tabs>
      </main>

      {/* Navigation would be included here, same as in home page */}
    </div>
  )
}

