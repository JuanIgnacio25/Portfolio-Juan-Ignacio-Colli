"use client"

import { useAppStore } from "@/store/useAppStore"
import { notFoundContent } from "@/constants/notFoundContent"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const NotFound = () => {
  const language = useAppStore((state) => state.language)
  const { title, message, button } = notFoundContent[language]

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-foreground mb-4">{message}</p>
        <Link href="/">
          <Button>{button}</Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound