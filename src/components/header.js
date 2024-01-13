"use client";
import MenuIcon from '@heroicons/react/outline/MenuIcon';
import XIcon from '@heroicons/react/outline/XIcon'; 
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white rounded-lg mt-4 shadow max-w-5xl mx-auto">
      <div className=" w-full p-4 md:py-5   flex justify-between">
        <div className="flex gap-6">
          <Link href={"/"} className="text-2xl font-bold" passHref>
            <>
              Lista
              <span className="text-blue-500">Link</span>
            </>
          </Link>
          <nav className="hidden md:flex items-center pb-1 gap-4 text-gray-500 text-sm">
            <Link href={"/about"}>Sobre</Link>
            <Link href={"/pricing"}>Preçario</Link>
            <Link href={"/politic"}>Políticas</Link>
            <Link href={"/contact"}>Contato</Link>
          </nav>
        </div>
        <nav className="hidden md:flex gap-4 text-sm text-slate-500">
          <Link
            href={"/login"}
            className="px-3 py-1 border border-gray-300 rounded-md"
          >
            Entrar
          </Link>
          <Link
            href={"/register"}
            className="px-3 py-1 border border-gray-300 rounded-md"
          >
            Criar Conta
          </Link>
        </nav>

        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <XIcon className="h-6 w-6 text-gray-500" />
            ) : (
              <MenuIcon className="h-6 w-6 text-gray-500" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-y-0 left-0 bg-white z-50 p-4 w-1/2">
            <nav className="flex flex-col items-start text-black-500 font-bold text-lg space-y-4 mt-10">
              <Link href={"/"} className="text-2xl">
                Lista
                <span className="text-blue-500">Link</span>
              </Link>
              <Link href={"/about"}>Sobre</Link>
              <Link href={"/pricing"}>Preçario</Link>
              <Link href={"/politic"}>Políticas</Link>
              <Link href={"/contact"}>Contato</Link>
            </nav>
            <nav className="flex flex-col gap-4 text-sm mt-5 text-center text-slate-500">
              <Link
                href={"/login"}
                className="px-3 py-2 border border-gray-300 rounded-md"
              >
                Entrar
              </Link>
              <Link
                href={"/register"}
                className="px-3 py-2 border border-gray-300 rounded-md"
              >
                Criar Conta
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
