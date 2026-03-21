import React from "react"
import { ShoppingCart, Package, Users, Calculator, ShoppingBag, Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const modules = [
  { name: "VENTE", icon: ShoppingCart },
  { name: "STOCK", icon: Package },
  { name: "CLIENT", icon: Users },
  { name: "COMPTA", icon: Calculator },
  { name: "ACHAT", icon: ShoppingBag },
  { name: "RH", icon: Briefcase },
]

export function Modules() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl mb-4">
            Une suite logicielle, des possibilités infinies
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl">
            Activez uniquement les modules dont vous avez besoin. Une flexibilité totale pour votre structure.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {modules.map((module) => (
            <Card key={module.name} className="hover:shadow-md transition-shadow border-zinc-200">
              <CardContent className="p-8 flex flex-col items-center justify-center text-center gap-4">
                <module.icon className="h-8 w-8 text-brand" />
                <span className="text-xs font-semibold tracking-wider text-zinc-900">{module.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
