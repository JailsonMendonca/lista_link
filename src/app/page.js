import Header from '@/components/header'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section className="p-6 pt-30 sm:pt-5 md:pt-20 max-w-4xl mx-auto flex flex-col md:flex-row">

        <div className="flex flex-col md:flex-row">
          <div className="w-full mb-4">
            <div className="max-w-xl mb-8">
              <h1 className="text-5xl font-bold">
                Seu único <br/> link para tudo
              </h1>
              <h2 className="text-gray-500 text-xl mt-6">
                Partilhe seus links, perfis de redes sociais,
                informação de contato e mais em uma só página
              </h2>
              <form className="flex mt-5 flex-col md:flex-row items-center md:items-stretch shadow-gray-500/20">
                <span className="bg-white py-4 pl-4 mb-2 pr-1 md:mb-0">
                  ListaLink.to/
                </span>
                <input  
                  type='text'
                  className="py-4 px-4 mb-2 md:mb-0 
                   focus:outline-none"
                  placeholder="Nome do utilizador"
                />
                <button
                  type='submit'
                  className="bg-blue-500 text-white p-4 px-6 whitespace-nowrap" 
                >
                  Inscreva-se grátis
                </button>
              </form>
            </div>
          </div>
    
          <div className="w-full ">
            <div className="flex items-center md:ml-3 lg:ml-5"> 
              <img
                src="consultation-img.jpg"
                alt="Sua Imagem"
                className="w-full h-auto md:w-full md:h-auto" 
              />
            </div>
          </div>
        </div>
  
      </section>


    </main>
  )
}
