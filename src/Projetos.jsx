import { FolderKanban, ArrowUpRight } from "lucide-react";

const projetos = [
  {
    title: "Sistema de Gestão",
    desc: "Web app com autenticação, gerenciamento de tarefas e dashboard interativo.",
    url: "https://github.com/seuusuario/sistema-gestao",
  },
  {
    title: "App Financeiro",
    desc: "Aplicativo mobile para controle de gastos, alertas e relatórios visuais.",
    url: "https://github.com/seuusuario/app-financeiro",
  },
  {
    title: "Portfolio Pessoal",
    desc: "Website responsivo com currículo, projetos e contato integrados.",
    url: "https://seuportfolio.com",
  },
  // Adicione mais projetos conforme necessário
];

export default function Projetos() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Meus Projetos</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Aqui você encontra os principais projetos que desenvolvi com foco em usabilidade, performance e acessibilidade.
        </p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projetos.map(({ title, desc, url }) => (
          <article
            key={title}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition cursor-pointer focus-within:ring-2 focus-within:ring-blue-400"
            tabIndex={0}
          >
            <FolderKanban className="text-blue-600 mb-4" size={40} />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">{desc}</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:underline font-medium"
              aria-label={`Acessar ${title}`}
            >
              Acessar projeto
              <ArrowUpRight className="ml-1" size={16} />
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
