import ave from '../assets/ave.png'
import logo from '../assets/logo.svg'

export default function Home() {
  return (
    <>
      <header className="cabecalho-site">
        <nav className="barra-navegacao" aria-label="Navegação principal">
          <a className="marca" href="#home" aria-label="AvisAI início">
            <img src={logo} alt="AvisAI" />
          </a>

          <div className="links-navegacao">
            <a href="#home">Home</a>
            <a href="#solucoes">Soluções</a>
            <a href="#testemunhos">Testemunhos</a>
            <a href="#planos">Planos</a>
            <a href="#contato">Contato</a>
          </div>

          <a className="botao botao-primario chamada-navegacao" href="#contato">
            Solicitar Demonstração
          </a>
        </nav>
      </header>

      <main>
        <section className="destaque secao" id="home">
          <div className="conteudo-destaque revelar">
            <span className="rotulo-secao">IA aplicada à avicultura de corte</span>
            <h1>Monitore a saúde do seu plantel com Inteligência Artificial.</h1>
            <p>
              O AvisAI utiliza Inteligência Artificial para analisar dados da produção avícola,
              identificar sinais precoces de doenças e gerar alertas inteligentes que auxiliam
              produtores e veterinários na tomada de decisões rápidas e precisas.
            </p>

            <div className="acoes-destaque">
              <a className="botao botao-primario" href="#contato">
                Solicitar Demonstração
              </a>
              <a className="botao botao-secundario" href="#solucoes">
                Saiba Mais
              </a>
            </div>
          </div>

          <div className="visual-destaque revelar atraso-revelacao">
            <figure className="moldura-imagem-destaque">
              <img
                src={ave}
                alt="Frango de corte monitorado com o auxílio da tecnologia AvisAI"
                fetchPriority="high"
              />
              <figcaption>
                <span className="ponto-pulsante" />
                Monitoramento visual inteligente
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="secao solucoes" id="solucoes">
          <div className="cabecalho-secao revelar">
            <span className="rotulo-secao">Soluções</span>
            <h2>Como o AvisAI ajuda sua produção</h2>
          </div>

          <div className="grade-cartoes">
            <article className="cartao-recurso revelar">
              <div className="caixa-icone">
                <svg aria-hidden="true" className="icone" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
                    <path d="M12 12h.01" />
                    <path d="M4.9 19.1a10 10 0 1 1 14.2 0" />
                    <path d="M7.8 16.2a6 6 0 1 1 8.4 0" />
                    <path d="m12 12 5-7" />
                  </g>
                </svg>
              </div>
              <h3>Monitoramento Inteligente</h3>
              <p>Acompanhe continuamente os principais indicadores da granja.</p>
            </article>

            <article className="cartao-recurso revelar">
              <div className="caixa-icone">
                <svg aria-hidden="true" className="icone" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
                    <path d="M3 12h4l2-6 4 12 2-6h6" />
                    <path d="M4 19h16" />
                  </g>
                </svg>
              </div>
              <h3>Detecção Precoce</h3>
              <p>Identifique padrões que podem indicar doenças antes dos sintomas se tornarem evidentes.</p>
            </article>

            <article className="cartao-recurso revelar">
              <div className="caixa-icone">
                <svg aria-hidden="true" className="icone" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
                    <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
                    <path d="M10 21a2 2 0 0 0 4 0" />
                  </g>
                </svg>
              </div>
              <h3>Alertas Automáticos</h3>
              <p>Receba notificações em tempo real quando forem detectadas anomalias.</p>
            </article>

            <article className="cartao-recurso revelar">
              <div className="caixa-icone">
                <svg aria-hidden="true" className="icone" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
                    <path d="M4 5h16v14H4z" />
                    <path d="M8 15v-3M12 15V9M16 15v-5" />
                  </g>
                </svg>
              </div>
              <h3>Dashboard Completo</h3>
              <p>Visualize todos os dados da produção em um único painel intuitivo.</p>
            </article>

            <article className="cartao-recurso revelar">
              <div className="caixa-icone">
                <svg aria-hidden="true" className="icone" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
                    <path d="M7 3h7l4 4v14H7z" />
                    <path d="M14 3v5h5M10 13h6M10 17h4" />
                  </g>
                </svg>
              </div>
              <h3>Relatórios Inteligentes</h3>
              <p>Gere análises para apoiar decisões estratégicas.</p>
            </article>

            <article className="cartao-recurso revelar">
              <div className="caixa-icone">
                <svg aria-hidden="true" className="icone" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
                    <path d="M9 4a3 3 0 0 0-3 3v1a4 4 0 0 0 0 8v1a3 3 0 0 0 5 2" />
                    <path d="M15 4a3 3 0 0 1 3 3v1a4 4 0 0 1 0 8v1a3 3 0 0 1-5 2" />
                    <path d="M12 5v14M8 10h3M13 14h3" />
                  </g>
                </svg>
              </div>
              <h3>Apoio à Decisão</h3>
              <p>A Inteligência Artificial auxilia técnicos e produtores na avaliação da saúde do plantel.</p>
            </article>
          </div>
        </section>

        <section className="secao depoimentos" id="testemunhos">
          <div className="cabecalho-secao revelar">
            <span className="rotulo-secao">Testemunhos</span>
            <h2>Confiança para equipes técnicas e produtores</h2>
            <p>Veja os depoimentos dos nossos clientes</p>
          </div>

          <div className="grade-depoimentos">
            <article className="cartao-depoimento revelar">
              <div className="estrelas" aria-label="Avaliação cinco estrelas">★★★★★</div>
              <p>"O AvisAI trouxe uma nova visão sobre o monitoramento da granja e facilitou muito nossa tomada de decisão."</p>
              <div className="pessoa">
                <div className="avatar" aria-hidden="true">ML</div>
                <div>
                  <strong>Douglas Bruno</strong>
                  <span>Médico veterinário</span>
                </div>
              </div>
            </article>

            <article className="cartao-depoimento revelar">
              <div className="estrelas" aria-label="Avaliação cinco estrelas">★★★★★</div>
              <p>"Os alertas inteligentes ajudaram nossa equipe a agir com mais rapidez em lotes sensíveis."</p>
              <div className="pessoa">
                <div className="avatar" aria-hidden="true">RA</div>
                <div>
                  <strong>Pablo Vinicius</strong>
                  <span>Gerente de produção</span>
                </div>
              </div>
            </article>

            <article className="cartao-depoimento revelar">
              <div className="estrelas" aria-label="Avaliação cinco estrelas">★★★★★</div>
              <p>"Conseguimos enxergar tendências de consumo e ambiência com muito mais clareza no dia a dia."</p>
              <div className="pessoa">
                <div className="avatar" aria-hidden="true">CM</div>
                <div>
                  <strong>Entony Wittmann</strong>
                  <span>Produtor rural</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="secao planos" id="planos">
          <div className="cabecalho-secao revelar">
            <span className="rotulo-secao">Planos</span>
            <h2>Escolha o nível ideal para sua operação</h2>
          </div>

          <div className="grade-planos">
            <article className="cartao-plano revelar">
              <h3>Básico</h3>
              <p>Ideal para pequenos produtores.</p>
              <ul>
                <li><span aria-hidden="true">✓</span> Dashboard</li>
                <li><span aria-hidden="true">✓</span> Alertas</li>
                <li><span aria-hidden="true">✓</span> Histórico</li>
              </ul>
              <a className="botao botao-secundario" href="#contato">Solicitar orçamento</a>
            </article>

            <article className="cartao-plano plano-destacado revelar">
              <span className="selo-plano">Mais recomendado</span>
              <h3>Profissional</h3>
              <p>Mais recomendado para granjas em crescimento.</p>
              <ul>
                <li><span aria-hidden="true">✓</span> Tudo do Básico</li>
                <li><span aria-hidden="true">✓</span> IA avançada</li>
                <li><span aria-hidden="true">✓</span> Relatórios inteligentes</li>
                <li><span aria-hidden="true">✓</span> Suporte prioritário</li>
              </ul>
              <a className="botao botao-primario" href="#contato">Solicitar orçamento</a>
            </article>

            <article className="cartao-plano revelar">
              <h3>Enterprise</h3>
              <p>Para grandes operações.</p>
              <ul>
                <li><span aria-hidden="true">✓</span> Recursos ilimitados</li>
                <li><span aria-hidden="true">✓</span> Integrações</li>
                <li><span aria-hidden="true">✓</span> API</li>
                <li><span aria-hidden="true">✓</span> Atendimento personalizado</li>
              </ul>
              <a className="botao botao-secundario" href="#contato">Solicitar orçamento</a>
            </article>
          </div>
        </section>

        <section className="secao contato" id="contato">
          <div className="painel-contato revelar">
            <div className="conteudo-contato">
              <span className="rotulo-secao">Contato</span>
              <h2>Solicite uma demonstração</h2>
              <p>
                Quer conhecer como o AvisAI pode transformar o monitoramento da sua granja?
                Entre em contato com nossa equipe.
              </p>
            </div>

            <form className="formulario-contato" aria-label="Formulário de contato">
              <label>Nome<input type="text" name="nome" autoComplete="name" required /></label>
              <label>E-mail<input type="email" name="email" autoComplete="email" required /></label>
              <label className="campo-completo">Mensagem<textarea name="mensagem" rows={5} /></label>
              <button className="botao botao-primario campo-completo" type="submit">Enviar</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="conteudo-rodape">
          <div>
            <a className="marca" href="#home" aria-label="AvisAI início">
              <img src={logo} alt="AvisAI" />
            </a>
            <p>
              Soluções inteligentes para monitoramento e identificação precoce de doenças
              em aves utilizando Inteligência Artificial.
            </p>
          </div>

          <div className="links-rodape">
            <a href="#home">Início</a>
            <a href="#solucoes">Soluções</a>
            <a href="#planos">Planos</a>
            <a href="#contato">Contato</a>
          </div>

          <div className="links-sociais" aria-label="Redes sociais">
            <a href="#home" aria-label="LinkedIn">in</a>
            <a href="#home" aria-label="Instagram">◎</a>
            <a href="mailto:dougbrunos@gmail.com" aria-label="E-mail">@</a>
          </div>
        </div>

        <div className="base-rodape">© 2026 AvisAI. Todos os direitos reservados.</div>
      </footer>
    </>
  )
}
