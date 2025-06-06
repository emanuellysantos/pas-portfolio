import { Video, ArrowUpRight } from "lucide-react";

const videos = [
  {
    title: "Demo Projeto X",
    desc: "Apresentação detalhada de uma aplicação real com explicações técnicas.",
    url: "https://www.youtube.com/watch?v=GBfnNzMdPQk",
  },
  {
    title: "Tutorial React",
    desc: "Passo a passo para criar um app React do zero.",
    url: "https://www.youtube.com/watch?v=GBfnNzMdPQk",
  },
  {
    title: "Design Ágil",
    desc: "Vídeo sobre práticas de UX em equipes ágeis.",
    url: "https://www.youtube.com/watch?v=GBfnNzMdPQk",
  },
  {
    title: "Demo Projeto X",
    desc: "Apresentação detalhada de uma aplicação real com explicações técnicas.",
    url: "https://www.youtube.com/watch?v=GBfnNzMdPQk",
  },
  {
    title: "Tutorial React",
    desc: "Passo a passo para criar um app React do zero.",
    url: "https://www.youtube.com/watch?v=GBfnNzMdPQk",
  },
  {
    title: "Design Ágil",
    desc: "Vídeo sobre práticas de UX em equipes ágeis.",
    url: "https://www.youtube.com/watch?v=GBfnNzMdPQk",
  },
];

export default function Videos() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Vídeos de Apresentação</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Assista aos vídeos que mostram meus projetos em funcionamento, com explicações detalhadas e contextos de uso.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map(({ title, desc, url }) => (
          <article
            key={title}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition cursor-pointer focus-within:ring-2 focus-within:ring-green-400"
            tabIndex={0}
          >
            <Video className="text-green-600 mb-4" size={40} />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">{desc}</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-600 hover:underline font-medium"
              aria-label={`Assistir ${title}`}
            >
              Assistir vídeo
              <ArrowUpRight className="ml-1" size={16} />
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
