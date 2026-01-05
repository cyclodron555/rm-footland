"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeritageChapterDownloadProps {
  downloadLink?: string
  chapterName: string
}

export function HeritageChapterDownload({ downloadLink, chapterName }: HeritageChapterDownloadProps) {
  if (!downloadLink) return null

  return (
    <div className="mt-16 py-12 px-8 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 text-center">
      <h3 className="font-serif text-2xl text-gray-900 mb-3">Preserve the History</h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Download high-resolution, print-quality versions of all {chapterName} photos for your collection or research.
      </p>
      <Button
        size="lg"
        className="bg-accent text-accent-foreground hover:bg-accent/90"
        onClick={() => window.open(downloadLink, "_blank")}
      >
        <Download className="w-5 h-5 mr-2" />
        Download print-quality photos
      </Button>
      <p className="text-xs text-gray-500 mt-4">Hosted on Gumroad • Pay what you want</p>
    </div>
  )
}
