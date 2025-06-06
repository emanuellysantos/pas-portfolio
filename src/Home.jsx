import React from "react";
import { Link } from "react-router-dom";
import { FolderKanban, Video, FileText } from "lucide-react";
import DeveloperIllustration from './assets/undraw_programmer_raqr.svg';
import { ArrowRight } from "lucide-react";

export default function Home() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-pink-50 to-white p-8 font-sans max-w-5xl mx-auto" aria-label="Página inicial do portfólio de Manu">
	<div className="mb-12 flex justify-center">
		<img src={DeveloperIllustration} alt="Ilustração de desenvolvedor" className="w-72 mx-auto mb-6"/>
	</div>
	<section aria-labelledby="sobre-mim" className="mb-20 text-center max-w-3xl mx-auto">
		<h1 id="sobre-mim" className="text-5xl font-extrabold text-gray-800 mb-4" tabIndex={0}> Olá! Eu sou a
		<span className="text-pink-600"> Manu</span>
	</h1>
	<p className="text-lg text-gray-700 leading-relaxed" tabIndex={0}> Sou uma desenvolvedora apaixonada por tecnologia, focada em construir soluções práticas e elegantes. Neste portfólio, apresento meus projetos, vídeos de apresentações e slides para compartilhar meu trabalho e conhecimento. Esta é uma Produção de Aprendizagem Significativa da disciplina Programação WEB Front-End.
</p>
</section>
<section aria-labelledby="projetos" className="mb-20 text-center">
	<div className="flex items-center justify-center gap-4 mb-8">
		<h2 id="projetos" className="text-3xl font-semibold text-gray-800" tabIndex={0}> Projetos
	</h2>
	<Link to="/projetos" className="inline-flex items-center gap-1 px-4 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400" aria-label="Ver todos os projetos">
		Ver todos
		<ArrowRight size={16}/>
	</Link>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
		{[
			{
				title: "Sistema de Gestão",
				desc: "Aplicação web para gerenciamento de tarefas com autenticação e dashboard interativo.",
				url: "https://github.com/seu-usuario/sistema-gestao"
			},
			{
				title: "App Financeiro",
				desc: "Aplicativo móvel para controle financeiro pessoal com gráficos e notificações.",
				url: "https://github.com/seu-usuario/app-financeiro"
			},
			{
				title: "Portfolio Pessoal",
				desc: "Site responsivo para apresentação de portfólio profissional e contatos.",
				url: "https://seu-site-pessoal.com"
			},
			].map(({ title, desc, url }) => (
				<article key={title} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-300" tabIndex={0} aria-label={`Projeto ${title}`}>
	<FolderKanban size={48} className="text-blue-600 mb-3 mx-auto"/>
	<h3 className="text-xl font-semibold mb-2">{title}</h3>
	<p className="text-gray-600 mb-4 text-sm leading-snug">{desc}</p>
	<a href={url} target="_blank" rel="noopener noreferrer" className="inline-block text-blue-600 font-medium hover:underline" aria-label={`Ver projeto ${title} em nova aba`}> Ver mais →
</a>
</article>
			))}
			
			</div>
</section>
			
			<section aria-labelledby="videos" className="mb-20 text-center">
	<div className="flex items-center justify-center gap-4 mb-8">
		<h2 id="videos" className="text-3xl font-semibold text-gray-800">
			Vídeos
			</h2>
		<Link to="/videos" className="inline-flex items-center gap-1 px-4 py-1.5 text-sm font-medium text-white bg-green-600 rounded-full shadow-md hover:bg-green-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400" aria-label="Ver todos os vídeos">
			Ver todos
			<ArrowRight size={16}/>
		</Link>
	</div>
	<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
			{[
				{
					title: "Demo Projeto X",
					desc: "Vídeo explicativo com demonstração da aplicação e funcionalidades.",
					url: "https://www.youtube.com/watch?v=demoProjetoX"
				},
				{
					title: "Tutorial React",
					desc: "Introdução prática ao React para iniciantes.",
					url: "https://www.youtube.com/watch?v=introReact"
				},
				{
					title: "Apresentação Agile",
					desc: "Vídeo sobre metodologias ágeis no desenvolvimento.",
					url: "https://www.youtube.com/watch?v=agileMetodologia"
				},
				].map(({ title, desc, url }) => (
					<article key={title} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition cursor-pointer focus:outline-none focus:ring-4 focus:ring-green-300" tabIndex={0} aria-label={`Vídeo ${title}`}>
		<Video size={48} className="text-green-600 mb-3 mx-auto"/>
		<h3 className="text-lg font-semibold mb-2">{title}</h3>
		<p className="text-gray-600 text-sm leading-snug mb-4">{desc}</p>
		<a href={url} target="_blank" rel="noopener noreferrer" className="inline-block text-green-600 font-medium hover:underline" aria-label={`Ver vídeo ${title} no YouTube`}> Ver mais →
	</a>
</article>
				))}
				
				</div>
</section>
				
				<section aria-labelledby="apresentacoes" className="mb-20 text-center">
	<div className="flex items-center justify-center gap-4 mb-8">
		<h2 id="apresentacoes" className="text-3xl font-semibold text-gray-800">
				Apresentações (PPTs)
				</h2>
		<Link to="/apresentacoes" className="inline-flex items-center gap-1 px-4 py-1.5 text-sm font-medium text-white bg-purple-600 rounded-full shadow-md hover:bg-purple-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400" aria-label="Ver todos as apresentações">
				Ver todos
				<ArrowRight size={16}/>
		</Link>
	</div>
	<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
				{[
					{
						title: "Introdução ao React",
						desc: "Slides explicando os conceitos iniciais de React para novos desenvolvedores.",
						url: "https://drive.google.com/file/d/ID_DO_PPT_1/view"
					},
					{
						title: "Fundamentos de JavaScript",
						desc: "Apresentação sobre as bases da linguagem JavaScript para aplicações modernas.",
						url: "https://drive.google.com/file/d/ID_DO_PPT_2/view"
					},
					{
						title: "Design de Interfaces",
						desc: "PPT sobre princípios de IHC e boas práticas em design de UI/UX.",
						url: "https://drive.google.com/file/d/ID_DO_PPT_3/view"
					},
					].map(({ title, desc, url }) => (
						<article key={title} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition cursor-pointer focus:outline-none focus:ring-4 focus:ring-purple-300" tabIndex={0} aria-label={`Apresentação ${title}`}>
		<FileText size={48} className="text-purple-600 mb-3 mx-auto"/>
		<h3 className="text-lg font-semibold mb-2">{title}</h3>
		<p className="text-gray-600 text-sm leading-snug mb-4">{desc}</p>
		<a href={url} target="_blank" rel="noopener noreferrer" className="inline-block text-purple-600 font-medium hover:underline" aria-label={`Ver apresentação ${title}`}> Ver mais →
	</a>
</article>
					))}
					
					</div>
</section>
<footer className="border-t pt-6 pb-4 text-center text-gray-600 text-sm">
	<p tabIndex={0}> © 2025 Emanuelly Santos - PAS: Programação Web front-End
</p>
</footer>
</main>
	);
}
