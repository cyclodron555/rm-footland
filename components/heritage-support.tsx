import Link from "next/link"

export function HeritageSupport() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900">Support This Project</h2>

        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
          This is a complete photo book, available as a downloadable PDF. Print it if you choose, or keep it as a
          digital archive. Your support helps me continue documenting Grand Forks, quietly and independently.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <a
            href="/downloads/grand-forks-heritage.pdf"
            download="grand-forks-heritage.pdf"
            className="inline-block px-8 py-4 bg-gray-900 text-white rounded-sm hover:bg-gray-800 transition-colors font-medium"
          >
            Download Full Album (PDF)
          </a>
          <Link
            href="https://cyclodron.gumroad.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-sm hover:bg-gray-50 transition-colors font-medium"
          >
            Support the Project
          </Link>
        </div>

        <p className="text-sm text-gray-500 italic pt-8">Free to download • Support via Gumroad</p>
      </div>
    </section>
  )
}
