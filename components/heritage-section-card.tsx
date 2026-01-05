import Link from "next/link"
import Image from "next/image"

interface HeritageSectionCardProps {
  title: string
  description: string
  imageUrl: string
  href: string
}

export function HeritageSectionCard({ title, description, imageUrl, href }: HeritageSectionCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white rounded-sm overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-8">
        <h3 className="font-serif text-2xl text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </Link>
  )
}
