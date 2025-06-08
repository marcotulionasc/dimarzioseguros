'use client'
import { Button } from '@/components/ui/button'
export default function Home() {
  return (
    <main className="space-y-16">
      <section className="text-center py-12 px-4 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Dimarzio Seguros — 20 anos protegendo com clareza</h1>
        <p className="text-lg md:text-xl mb-4">Já imaginou descobrir que seu seguro não garante que você irá receber sua indenização?</p>
        <p className="text-lg md:text-xl mb-4">3 em cada 5 pessoas só percebem que contrataram errado quando já é tarde.</p>
        <p className="text-lg md:text-xl mb-6">A <strong>Dimarzio Seguros</strong> oferece uma <strong>consultoria gratuita</strong> para revisar ou montar o seu seguro do jeito certo. Com cobertura que realmente protege, <strong>sem pagar a mais</strong>, <strong>sem letras miúdas</strong>.</p>
        <Button className="primary-button text-base">Quero minha análise gratuita</Button>
      </section>

      <section className="text-center px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Você já tem um seguro, mas será que ele protege o que importa?</h2>
        <p className="text-lg md:text-xl mb-4">Com mais de <strong>20 anos de experiência</strong> e mais de <strong>10.000 clientes atendidos</strong>, a Dimarzio entrega um plano ajustado à sua realidade — <strong>sem empurrar nada</strong>, <strong>sem cobrar pela consultoria</strong>.</p>
        <Button className="primary-button text-base">Quero minha análise gratuita</Button>
      </section>

      <section className="px-4" id="como-funciona">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Como funciona na prática</h2>
        <ol className="space-y-6 max-w-3xl mx-auto">
          <li><strong>1. Agende sua análise gratuita:</strong> Clique no botão e conte pra gente o que precisa proteger.</li>
          <li><strong>2. Entenda sua real necessidade:</strong> A gente ouve, analisa e mostra o que você precisa — sem enrolação.</li>
          <li><strong>3. Comparação nas principais seguradoras do mercado:</strong> A gente faz a cotação e te mostra a melhor condição real.</li>
          <li><strong>4. Você decide se quer contratar ou não:</strong> Sem pressão. Sem truque. Só clareza.</li>
        </ol>
      </section>

      <section className="px-4" id="diferenciais">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">O que faz a Dimarzio diferente</h2>
        <p className="text-center mb-6">Com 20 anos de mercado, a Dimarzio vai além do básico. <strong>Corretora tem em toda esquina. Atendimento técnico, quase nenhuma.</strong></p>
        <ul className="list-disc max-w-3xl mx-auto space-y-2 pl-5 text-left">
          <li>Atendimento completo, inclusive em casos de sinistro</li>
          <li>Departamento próprio que acompanha parcelas em atraso</li>
          <li>Sistema de multicálculo automático com as principais seguradoras</li>
          <li>Consultoria com foco em sinistro, cobertura ideal e custo ajustado</li>
          <li>Atendimento em sinistro <strong>24 horas</strong></li>
          <li>"Você fala com quem resolve. Mesmo aos finais de semana."</li>
        </ul>
      </section>

      <section className="px-4" id="depoimentos">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">O que nossos clientes dizem</h2>
        <blockquote className="max-w-3xl mx-auto mb-6 text-lg">“Antes da Dimarzio, eu achava que estava protegido. Eles revisaram meu seguro e corrigiram várias brechas que poderiam me deixar na mão.” — <em>Luciana M., empresária</em></blockquote>
        <blockquote className="max-w-3xl mx-auto text-lg">“Recebi um atendimento técnico, claro e sem empurroterapia. E paguei menos do que antes.” — <em>Carlos T., engenheiro</em></blockquote>
        <p className="text-center mt-6 text-sm italic">Vídeos de clientes serão inseridos quando disponíveis.</p>
      </section>

      <section className="text-center px-4" id="motivos">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Por que tanta gente contrata errado?</h2>
        <p className="mb-4"><strong>3 em cada 5 sinistros são negados por erro na contratação.</strong></p>
        <p className="mb-6">Cobertura errada. Cláusulas escondidas. Seguro mal explicado. Você só descobre <strong>quando já é tarde</strong>.</p>
        <Button className="primary-button text-base">Agendar minha análise gratuita</Button>
      </section>

      <section className="px-4" id="consultoria">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">O que você leva da consultoria gratuita</h2>
        <ul className="list-disc max-w-3xl mx-auto space-y-2 pl-5 text-left">
          <li>Diagnóstico do seu seguro atual</li>
          <li>Comparativo real com até <strong>17 seguradoras</strong></li>
          <li>Recomendações ajustadas pra sua realidade</li>
          <li>Sem pagar nada. Sem assinar nada.</li>
        </ul>
        <p className="text-center mt-6">“Já ajudamos mais de 10.000 pessoas a corrigirem erros no seguro sem gastar R$1 a mais.”</p>
      </section>

      <section className="px-4" id="seguros">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Qual seguro você quer entender melhor?</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 max-w-3xl mx-auto text-left list-disc pl-5">
          <li>Empresarial</li>
          <li>Residencial</li>
          <li>Automóvel</li>
          <li>RC Profissional</li>
          <li>Viagem</li>
          <li>Portáteis</li>
          <li>Saúde</li>
          <li>Consórcio</li>
          <li>Rural</li>
          <li>Vida</li>
          <li>Garantia Fiduciária</li>
          <li>Fiança Locatícia</li>
        </ul>
        <div className="text-center mt-6">
          <Button className="primary-button text-base">Ver todos os detalhes</Button>
        </div>
      </section>

      <section className="px-4" id="escolher">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Por que escolher a Dimarzio?</h2>
        <ul className="list-disc max-w-3xl mx-auto space-y-2 pl-5 text-left">
          <li>Te explicamos o que a seguradora não te conta</li>
          <li>Você economiza onde dá sem abrir mão do essencial</li>
          <li>Seu seguro passa a falar a sua língua</li>
          <li>Comparação em 17 seguradoras</li>
          <li>Atendimento técnico de verdade</li>
          <li>Suporte completo, inclusive em sinistro</li>
        </ul>
      </section>

      <section className="text-center px-4" id="cta-final">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Seu seguro protege ou é só papel?</h2>
        <p className="mb-6">Entre em contato agora e receba um atendimento com a agilidade e atenção que você merece!</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="primary-button text-base">Agendar minha análise gratuita</Button>
          <Button variant="outline" className="text-base border-blue-700 text-blue-700">Falar no WhatsApp</Button>
        </div>
      </section>

      <section className="px-4" id="faq">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Perguntas que a gente responde todo dia</h2>
        <ul className="space-y-4 max-w-3xl mx-auto">
          <li><strong>E se eu não quiser contratar?</strong> Sem problema. A consultoria é gratuita e sem pressão.</li>
          <li><strong>É mesmo gratuita?</strong> Sim. Fazemos isso pra mostrar nosso trabalho. Você só contrata se quiser.</li>
          <li><strong>Parece bom demais. Qual o truque?</strong> Nenhum. A gente prefere mostrar que entende — ao invés de tentar convencer.</li>
          <li><strong>O que preciso pra fazer a análise?</strong> Só clicar no botão e responder algumas perguntas rápidas.</li>
          <li><strong>Preciso contratar depois?</strong> Não. Você decide com base no que achou.</li>
          <li><strong>Vocês atendem fora de Campinas?</strong> Sim. Atuamos com clientes em todo o Brasil.</li>
          <li><strong>Vocês fazem seguro empresarial também?</strong> Sim. Temos especialistas e damos toda consultoria gratuita pra empresas e pessoas físicas.</li>
        </ul>
      </section>

      <section className="px-4" id="contato">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Fale com a Dimarzio Seguros</h2>
        <address className="not-italic text-center space-y-2">
          <div>📍 Rua Cumaru, 219 - sala 16, Edifício Laser, Alphaville, Campinas - SP, 13098-324</div>
          <div>📞 (19) 3294-0655</div>
          <div>📧 contato@dimarzioseguros.com.br</div>
          <div>🔗 <a href="https://www.instagram.com/dimarzioseguros/" className="text-blue-700 hover:underline">Instagram</a></div>
          <div>📄 CNPJ: 10.894.914/0001-05</div>
        </address>
      </section>
    </main>
  )
}
