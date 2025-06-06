import { FileText, ArrowUpRight } from "lucide-react";

const apresentacoes = [
  {
    title: "Slides React Básico",
    desc: "Apresentação sobre os primeiros passos no React para iniciantes.",
    url: "https://drive.google.com/file/d/ID_DO_PPT_1/view",
  },
  {
    title: "JavaScript Moderno",
    desc: "Material introdutório sobre ES6+, promessas e funções assíncronas.",
    url: "https://drive.google.com/file/d/ID_DO_PPT_2/view",
  },
  {
    title: "Design de Interfaces",
    desc: "Slides sobre princípios de design e heurísticas de usabilidade.",
    url: "https://drive.google.com/file/d/ID_DO_PPT_3/view",
  },
  {
    title: "Slides React Básico",
    desc: "Apresentação sobre os primeiros passos no React para iniciantes.",
    url: "https://drive.google.com/file/d/ID_DO_PPT_1/view",
  },
  {
    title: "JavaScript Moderno",
    desc: "Material introdutório sobre ES6+, promessas e funções assíncronas.",
    url: "https://drive.google.com/file/d/ID_DO_PPT_2/view",
  },
  {
    title: "Design de Interfaces",
    desc: "Slides sobre princípios de design e heurísticas de usabilidade.",
    url: "https://drive.google.com/file/d/ID_DO_PPT_3/view",
  },
];

export default function Apresentacoes() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Apresentações (PPTs)</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Veja os slides e apresentações que preparei para eventos, aulas ou treinamentos.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {apresentacoes.map(({ title, desc, url }) => (
          <article
            key={title}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition cursor-pointer focus-within:ring-2 focus-within:ring-purple-400"
            tabIndex={0}
          >
            <FileText className="text-purple-600 mb-4" size={40} />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">{desc}</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-purple-600 hover:underline font-medium"
              aria-label={`Ver apresentação ${title}`}
            >
              Ver apresentação
              <ArrowUpRight className="ml-1" size={16} />
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
