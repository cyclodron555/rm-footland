import Link from "next/link"

export function HeritageSupport() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900">Support This Project</h2>

        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
          This project is free to explore and share. If you'd like to own print-quality versions or support future
          documentation work, you can download high-resolution files below.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Link
            href="#"
            className="inline-block px-8 py-4 bg-gray-900 text-white rounded-sm hover:bg-gray-800 transition-colors font-medium"
          >
            Download Print-Quality Photos
          </Link>
          <Link
            href="#"
            className="inline-block px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-sm hover:bg-gray-50 transition-colors font-medium"
          >
            Support the Project
          </Link>
        </div>

        <p className="text-sm text-gray-500 italic pt-8">
          Free to explore. Print-quality downloads support future work.
        </p>
      </div>
    </section>
  )
}
