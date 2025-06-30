# 🎯 Guia para Atualizar Formulários com Modal de Feedback

## ✅ Páginas Já Atualizadas:
- ✅ `components/contact-section.tsx`
- ✅ `components/contact.tsx`
- ✅ `app/contato/page.tsx`
- ✅ `app/seguro-automovel/page.tsx`
- ✅ `app/seguro-vida/page.tsx`

## 🔄 Páginas Restantes para Atualizar:
- [ ] `app/seguro-empresarial/page.tsx`
- [ ] `app/seguro-fianca-locaticia/page.tsx`
- [ ] `app/seguro-fiduciario/page.tsx`
- [ ] `app/seguro-portateis/page.tsx`
- [ ] `app/seguro-rc-profissional/page.tsx`
- [ ] `app/seguro-residencial/page.tsx`
- [ ] `app/seguro-rural/page.tsx`
- [ ] `app/seguro-saude/page.tsx`
- [ ] `app/seguro-viagem/page.tsx`
- [ ] `app/consorcios/page.tsx`

## 📝 Passo a Passo para Atualizar:

### 1. Remover imports antigos:
```typescript
// REMOVER estas linhas:
import { useToast } from '@/hooks/use-toast'
import { showToast } from '@/lib/utils'
```

### 2. Adicionar novos imports:
```typescript
// ADICIONAR estas linhas:
import { useFeedbackModal } from '@/hooks/use-feedback-modal'
import { FeedbackModal } from '@/components/ui/feedback-modal'
```

### 3. Substituir hook no componente:
```typescript
// SUBSTITUIR:
const { toast } = useToast()

// POR:
const { feedback, showSuccess, showError, closeFeedback } = useFeedbackModal()
```

### 4. Atualizar return para usar Fragment:
```typescript
// SUBSTITUIR:
return (
  <main>
    {/* conteúdo */}
  </main>
)

// POR:
return (
  <>
    <main>
      {/* conteúdo */}
    </main>

    {/* Feedback Modal */}
    <FeedbackModal
      isOpen={feedback.isOpen}
      onClose={closeFeedback}
      type={feedback.type}
      title={feedback.title}
      message={feedback.message}
    />
  </>
)
```

### 5. Substituir chamadas de toast:
```typescript
// SUBSTITUIR:
showToast.success(
  toast,
  'Formulário enviado com sucesso!',
  'Em breve entraremos em contato com você.'
);

// POR:
showSuccess(
  'Obrigado! Sua [TIPO] foi solicitada!',
  'Recebemos sua solicitação e nossa equipe entrará em contato em breve com uma proposta personalizada!'
);
```

```typescript
// SUBSTITUIR:
showToast.error(
  toast,
  'Erro ao enviar formulário',
  'Por favor, verifique os dados e tente novamente.'
);

// POR:
showError(
  'Ops! Não conseguimos processar sua solicitação',
  'Ocorreu um erro ao enviar sua [TIPO]. Por favor, tente novamente ou entre em contato conosco pelo telefone (19) 3294-0655.'
);
```

## 💡 Mensagens Personalizadas por Tipo:

### Seguro Auto:
- **Sucesso:** "Obrigado! Sua cotação foi solicitada!"
- **Descrição:** "Nossa equipe especializada analisará seu perfil e entrará em contato com uma proposta personalizada em breve."

### Seguro Vida:
- **Sucesso:** "Obrigado! Sua análise foi solicitada!"
- **Descrição:** "Recebemos sua solicitação para análise de seguro de vida. Nossa equipe especializada entrará em contato em breve para uma consulta personalizada e sem compromisso."

### Seguro Residencial:
- **Sucesso:** "Obrigado! Sua cotação residencial foi solicitada!"
- **Descrição:** "Recebemos sua solicitação de seguro residencial. Nossa equipe entrará em contato em breve com uma proposta personalizada para proteger seu lar."

### Seguro Empresarial:
- **Sucesso:** "Obrigado! Sua análise empresarial foi solicitada!"
- **Descrição:** "Recebemos sua solicitação de seguro empresarial. Nossa equipe especializada entrará em contato em breve para uma proposta personalizada para seu negócio."

## 🎨 Vantagens do Novo Modal:
- ✨ **Muito mais visível** - Centralizado na tela
- 🎯 **Melhor experiência** - Agradece o usuário adequadamente
- 📱 **Design responsivo** - Funciona em todos os dispositivos
- 🎪 **Animações suaves** - Entrada e saída elegantes
- 💼 **Profissional** - Visual moderno e polido
- 📞 **Informativo** - Inclui telefone de contato

## 🔥 Resultado Final:
O modal aparece **centralizado na tela** com backdrop escuro, muito mais difícil de ser ignorado que o toast no cantinho. O usuário recebe um feedback claro e profissional! 