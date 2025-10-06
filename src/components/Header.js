// 'use client'
// import Link from 'next/link'

// export default function Header() {
//   return (
//     <header className="w-full h-full bg-[#a4bb79] shadow-md px-6 py-4 flex justify-between items-center">
//       <h1 className="text-2xl font-bold cursor-pointer hover:text-[#b4631c] text-[#8c4c14]">Semeia</h1>
//       <nav className="hover:underline hover:text-[#b4631c] flex gap-6 text-[#b4631c] font-medium">
//         <Link href="/"><strong>Início</strong></Link>
//         <Link href="/QueroDoar"><strong>Quero Doar</strong></Link>
//       </nav>
//     </header>
//   )
// }


'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full h-full bg-[#a4bb79] shadow-md px-6 py-4 flex justify-between items-center">
      
      {/* Logo + Nome */}
      <div className="flex items-center gap-2 cursor-pointer hover:text-[#a66d3c]">
        <Image
          src="/logo.png"       // Coloque sua logo na pasta public
          alt="Logo Semeia"
          width={40}            // Ajuste conforme necessário
          height={40}
        />
        <h1 className="text-2xl font-bold text-[#8c4c14]">Semeia</h1>
      </div>

      {/* Navegação */}
      <nav className="flex gap-6 text-[#b4631c] font-medium">
        <Link href="/" className="hover:underline hover:text-[#b4631c]">
          <strong>Início</strong>
        </Link>
        <Link href="/QueroDoar" className="hover:underline hover:text-[#b4631c]">
          <strong>Quero Doar</strong>
        </Link>
      </nav>
    </header>
  )
}

