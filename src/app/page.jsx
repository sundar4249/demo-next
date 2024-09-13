"use client"

import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div className="text-2xl font-bold bg-amber-500 w-20 py-1 ml-2 px-2 rounded-lg">
   <Link href="/auth/login">login</Link>
    </div>
  )
}
