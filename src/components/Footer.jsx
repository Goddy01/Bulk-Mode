import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Made by <a href='https://toshirothe3rd.vercel.app/' className="font-bold hover:text-blue-300">Toshiro</a>
      </p>
    </footer>
  )
}
