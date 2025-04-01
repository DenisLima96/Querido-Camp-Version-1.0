"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Home() {
  
  const [openFaqs, setOpenFaqs] = useState<number[]>([])

 
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  
  const toggleFaq = (index: number) => {
    if (openFaqs.includes(index)) {
      setOpenFaqs(openFaqs.filter((item) => item !== index))
    } else {
      setOpenFaqs([...openFaqs, index])
    }
  }

 
  useEffect(() => {
    
    const targetDate = new Date("2025-05-15T19:00:00")

    const updateCountdown = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    
    updateCountdown()

    
    const interval = setInterval(updateCountdown, 1000)

    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white">
      {}
      <header className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto py-4 px-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter">
                <span className="text-white">QUERIDO</span>
                <span className="text-red-500">CAMP</span>
              </h1>
            </div>

            <nav className="hidden md:block">
              <ul className="flex gap-8">
                {[
                  { name: "Início", path: "/" },
                  { name: "Sobre", path: "/about" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      className="text-white/80 hover:text-white transition-colors uppercase text-sm font-medium tracking-wider relative group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="md:hidden">
              <button className="text-white p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-16">
        {}
        <section className="relative h-screen flex items-center overflow-hidden">
          {/* Background com efeito de partículas */}
          <div className="absolute inset-0 bg-[#0a0a0a]">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3Ccircle cx='25' cy='25' r='1'/%3E%3Ccircle cx='75' cy='25' r='1'/%3E%3Ccircle cx='25' cy='75' r='1'/%3E%3Ccircle cx='75' cy='75' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "30px 30px",
              }}
            ></div>
          </div>

          {}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div
                className="h-full w-full border-[1px] border-white/20 border-t-0 border-l-0"
                style={{
                  backgroundSize: "50px 50px",
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
                }}
              ></div>
            </div>
          </div>

          {}
          <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[150%] bg-gradient-to-br from-red-500/20 via-red-500/5 to-transparent transform rotate-12 blur-3xl"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <div className="inline-block mb-3 bg-red-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                    Inscrições Abertas
                  </span>
                </div>

                <h2 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                    DOMINE O
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">
                    SERVIDOR
                  </span>
                </h2>

                <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-lg">
                  Junte-se ao Querido Camp e mostre suas habilidades em um ambiente competitivo e divertido. Concorra a
                  uma premiação de <span className="font-bold text-white">R$ 1.500</span> e viva a experiência de um
                  campeonato profissional!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href="https://forms.gle/o7uFFnW4LnNPzMZx9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-md transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-[0_10px_25px_-5px_rgba(220,38,38,0.5)] inline-flex items-center justify-center"
                  >
                    <span className="mr-2">INSCREVA-SE AGORA</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>

                  <Link
                    href="/about"
                    className="bg-transparent hover:bg-white/10 text-white font-bold py-4 px-8 rounded-md transition-colors border border-white/20 hover:border-white/40 inline-flex items-center justify-center"
                  >
                    SAIBA MAIS
                  </Link>
                </div>
              </div>

              <div className="relative hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent blur-xl rounded-full transform -translate-x-10 translate-y-10"></div>
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-500/30 via-transparent to-white/10 z-10"></div>
                  <Image
                    src="/images/flyer-querido-camp.png"
                    alt="Banner do Querido Camp mostrando detalhes do evento"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {}
                <div className="absolute -top-6 -right-6 w-12 h-12 border-2 border-red-500/50 rounded-md z-0"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-white/20 rounded-md z-0"></div>
              </div>
            </div>
          </div>

          {}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <span className="text-sm text-white/60 mb-2">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </section>

        {}
        <section className="relative py-24 overflow-hidden">
          {}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.15),_transparent_50%)]"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="inline-block text-4xl md:text-5xl font-black mb-4 relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  O CAMPEONATO COMEÇA EM
                </span>
                <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-300"></div>
              </h2>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-4 gap-2 md:gap-6">
                {[
                  { value: timeLeft.days, label: "DIAS" },
                  { value: timeLeft.hours, label: "HORAS" },
                  { value: timeLeft.minutes, label: "MINUTOS" },
                  { value: timeLeft.seconds, label: "SEGUNDOS" },
                ].map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Separador (exceto para o último item) */}
                    {index < 3 && (
                      <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-white text-2xl font-bold">
                        :
                      </div>
                    )}

                    {}
                    <div className="relative bg-[#111] rounded-lg p-4 md:p-8 text-center transform transition-all duration-500 group-hover:translate-y-[-5px] border border-white/10 group-hover:border-red-500/50 overflow-hidden">
                      {}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {}
                      <div
                        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          boxShadow: "inset 0 0 20px rgba(220, 38, 38, 0.3)",
                        }}
                      ></div>

                      <div className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-2 md:mb-4 tabular-nums relative z-10">
                        {String(item.value).padStart(2, "0")}
                      </div>
                      <div className="text-xs md:text-sm text-gray-400 font-medium tracking-widest relative z-10">
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
                Prepare-se para a competição! Inscreva seu time agora e garanta sua vaga no maior campeonato de
                Counter-Strike 2 de Sergipe.
              </p>
              <a
                href="https://forms.gle/o7uFFnW4LnNPzMZx9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-md transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-[0_10px_25px_-5px_rgba(220,38,38,0.5)] relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <span className="mr-2">INSCREVA SEU TIME</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </section>

        {}
        <section className="py-24 bg-[#0a0a0a] relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(220,38,38,0.15),_transparent_50%)]"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="inline-block text-4xl font-black mb-4 relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  SOBRE O CAMPEONATO
                </span>
                <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-300"></div>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-[#111] rounded-lg p-8 border border-white/10 hover:border-red-500/30 transition-colors duration-300 group relative overflow-hidden">
                {}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-red-500/20 rounded-md mr-4 text-red-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Formato do Campeonato</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-md p-4 hover:bg-white/10 transition-colors duration-300">
                      <h4 className="text-lg font-semibold mb-2 text-red-400">Fase Classificatória Online</h4>
                      <ul className="list-disc pl-5 text-gray-400 space-y-1">
                        <li>Times jogam em grupos</li>
                        <li>Os dois primeiros de cada grupo avançam</li>
                        <li>Partidas transmitidas online</li>
                      </ul>
                    </div>

                    <div className="bg-white/5 rounded-md p-4 hover:bg-white/10 transition-colors duration-300">
                      <h4 className="text-lg font-semibold mb-2 text-red-400">Fase Presencial</h4>
                      <ul className="list-disc pl-5 text-gray-400 space-y-1">
                        <li>Semifinais e Final</li>
                        <li>Os 4 melhores times disputam o título</li>
                        <li>Evento realizado na Arena HiTech</li>
                        <li>Narração ao vivo e público presente</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#111] rounded-lg p-8 border border-white/10 hover:border-red-500/30 transition-colors duration-300 group relative overflow-hidden">
                {}
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-red-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="space-y-8">
                    <div className="flex items-start">
                      <div className="w-12 h-12 flex items-center justify-center bg-red-500/20 rounded-md mr-4 shrink-0 text-red-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Inscrição</h3>
                        <div className="bg-white/5 rounded-md p-4 hover:bg-white/10 transition-colors duration-300">
                          <p className="text-center text-2xl font-bold text-white">R$ 150</p>
                          <p className="text-center text-gray-400 mt-1">por time</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 flex items-center justify-center bg-red-500/20 rounded-md mr-4 shrink-0 text-red-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Premiação</h3>
                        <div className="bg-white/5 rounded-md p-4 hover:bg-white/10 transition-colors duration-300">
                          <p className="text-center text-2xl font-bold text-white">R$ 1.500</p>
                          <p className="text-center text-gray-400 mt-1">R$ 1.000 em dinheiro + R$ 500 em vouchers</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 flex items-center justify-center bg-red-500/20 rounded-md mr-4 shrink-0 text-red-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">Jogo</h3>
                        <div className="bg-white/5 rounded-md p-4 hover:bg-white/10 transition-colors duration-300">
                          <p className="text-center text-xl font-bold text-white">Counter-Strike 2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/about" className="inline-flex items-center text-gray-400 hover:text-white font-medium group">
                <span>Saiba mais sobre o campeonato</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {}
        <section className="py-24 bg-[#0a0a0a] relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(220,38,38,0.15),_transparent_50%)]"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="inline-block text-4xl font-black mb-4 relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  PERGUNTAS FREQUENTES
                </span>
                <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-300"></div>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#111] rounded-lg overflow-hidden border border-white/10 hover:border-red-500/30 transition-colors duration-300"
                >
                  <button
                    className="w-full text-left p-5 flex justify-between items-center"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="text-lg font-medium">{faq.question}</h3>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center border border-white/20 transition-transform duration-300 ${openFaqs.includes(index) ? "bg-red-500/20 rotate-180 border-red-500/50" : "bg-white/5"}`}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaqs.includes(index) ? "max-h-96 p-5 border-t border-white/10" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {}
        <section className="py-24 bg-[#0a0a0a] relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(220,38,38,0.1),_transparent_70%)]"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="inline-block text-4xl font-black mb-4 relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">PARCEIROS</span>
                <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-300"></div>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-[#111] p-6 rounded-lg border border-white/10 hover:border-red-500/30 transition-all duration-300 flex items-center justify-center h-40 group hover:translate-y-[-5px]"
                >
                  <div className="relative w-full h-full transform transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={partner.image || "/placeholder.svg"}
                      alt={partner.name}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-white">QUERIDO</span>
                <span className="text-red-500">CAMP</span>
              </h3>
              <p className="text-gray-400 mb-6">
                O campeonato de Counter-Strike 2 que impulsiona e fortalece o cenário competitivo em Sergipe.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2 text-red-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Início</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2 text-red-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Sobre</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Entre em Contato</h3>
              <p className="text-gray-400 mb-6">Tem alguma dúvida sobre o campeonato? Fale conosco!</p>
              <a
                href="mailto:contato@queridocamp.com.br"
                className="text-gray-400 hover:text-white transition-colors flex items-center group"
              >
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center mr-3 group-hover:bg-red-500/30 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span>contato@queridocamp.com.br</span>
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-500">© {new Date().getFullYear()} Querido Camp. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Dados das perguntas frequentes
const faqs = [
  {
    question: "Quantos jogadores podem participar por time?",
    answer: "Cada time deve ter 5 jogadores titulares e pode incluir até 2 jogadores reservas.",
  },
  {
    question: "Como serão as transmissões das partidas?",
    answer: "Todas as partidas serão transmitidas pelo nosso canal na Twitch: https://www.twitch.tv/queridocamp",
  },
  {
    question: "Preciso levar meu próprio equipamento para a fase presencial?",
    answer:
      "Não é necessário. A Arena HiTech fornecerá todos os equipamentos necessários para a competição, incluindo computadores, periféricos e headsets.",
  },
  {
    question: "Haverá público na fase presencial?",
    answer:
      "Sim! A entrada para o público será gratuita, sujeita à capacidade do local. Venha torcer pelo seu time favorito!",
  },
]

const partners = [
  { name: "União Vendas", image: "/images/uniao-vendas.png" },
  { name: "Norimaki", image: "/images/norimaki-logo.jpeg" },
  { name: "Radiante", image: "/images/radiante-logo.png" },
  { name: "Capital Assessoria", image: "/images/capital-assessoria.jpeg" },
  { name: "Hitech Arena", image: "/images/hitech-arena-logo.jpeg" },
  { name: "Sandro's Lanches", image: "/images/sandros-lanches.png" },
  { name: "Querida Pizza", image: "/images/querida-pizza.jpeg" },
  { name: "Varanda do Spette", image: "/images/varanda-spette.png" },
]

