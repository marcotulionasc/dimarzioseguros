# Guia de Padronização de Fontes - Dimarzio Seguros

## 📝 Resumo da Padronização

Foi implementada uma **padronização completa de fontes** para garantir consistência visual em todo o projeto.

## 🎯 Fonte Principal

- **Fonte única**: `Inter` (Google Fonts)
- **Font-weight padrão**: `600` (semibold) para todos os títulos (h1-h6)
- **Font-weight para texto**: `400` (normal) para parágrafos e textos

## 📐 Hierarquia Tipográfica

### Títulos (h1-h6)
Todos os títulos usam automaticamente `font-weight: 600` (semibold):

```css
h1, h2, h3, h4, h5, h6 {
  font-family: Inter;
  font-weight: 600;
  line-height: 1.2;
}
```

### Responsividade Automática
- **h1**: `text-2xl sm:text-4xl md:text-5xl lg:text-6xl`
- **h2**: `text-xl sm:text-3xl md:text-4xl lg:text-5xl`
- **h3**: `text-lg sm:text-xl md:text-2xl lg:text-3xl`
- **h4**: `text-base sm:text-lg md:text-xl lg:text-2xl`
- **h5**: `text-sm sm:text-base md:text-lg`
- **h6**: `text-sm sm:text-base`

## 🚫 O que NÃO fazer mais

### ❌ Evitar classes inline de font-weight:
```tsx
// ❌ Não faça mais isso:
<h1 className="text-4xl font-bold">Título</h1>
<h2 className="text-2xl font-semibold">Subtítulo</h2>
<h3 className="text-xl font-medium">Seção</h3>

// ❌ Não faça mais isso:
<p className="font-medium">Texto</p>
<span className="font-bold">Destaque</span>
```

### ✅ Faça assim:
```tsx
// ✅ Deixe a hierarquia CSS funcionar:
<h1 className="text-4xl">Título</h1>
<h2 className="text-2xl">Subtítulo</h2>
<h3 className="text-xl">Seção</h3>

// ✅ Para texto normal:
<p>Texto normal</p>
<span>Texto simples</span>
```

## 🛠️ Classes Utilitárias (Para casos específicos)

Se precisar de font-weights diferentes, use as classes padronizadas:

```css
.font-weight-light     /* 300 */
.font-weight-normal    /* 400 */
.font-weight-medium    /* 500 */
.font-weight-semibold  /* 600 - padrão para títulos */
.font-weight-bold      /* 700 */
```

**Exemplo:**
```tsx
// Para casos específicos onde precisa de peso diferente:
<h2 className="font-weight-light">Título mais leve</h2>
<p className="font-weight-medium">Texto com mais peso</p>
```

## 📱 Mobile

A responsividade é automática. Não precisa adicionar classes mobile específicas, apenas use as tags HTML corretas:

```tsx
// ✅ Responsivo automático:
<h1>Título principal</h1>  // Vai de text-2xl a text-6xl automaticamente
<h2>Subtítulo</h2>         // Vai de text-xl a text-5xl automaticamente
```

## 🎨 Classes de Utilidade Mobile

Para casos específicos de mobile, use as classes padronizadas:

```css
.mobile-title      /* Título responsivo */
.mobile-subtitle   /* Subtítulo responsivo */
.mobile-text       /* Texto responsivo */
.mobile-small-text /* Texto pequeno responsivo */
```

## 🔧 Como Migrar Componentes Existentes

1. **Remova** todas as classes `font-bold`, `font-semibold`, `font-medium` dos títulos
2. **Mantenha** apenas as classes de tamanho (`text-xl`, `text-2xl`, etc.)
3. **Use** as tags HTML corretas (h1, h2, h3, etc.)
4. **Teste** em mobile e desktop

### Exemplo de Migração:

```tsx
// ❌ Antes:
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
  Título
</h1>

// ✅ Depois:
<h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
  Título
</h1>
```

## 📂 Arquivos Alterados

- `app/globals.css` - Hierarquia tipográfica padronizada
- `styles/globals.css` - Removida definição de Arial
- `tailwind.config.ts` - Fontes Inter configuradas
- `app/layout.tsx` - Inter carregada corretamente

## ✨ Benefícios

1. **Consistência visual** em todo o projeto
2. **Menos código** - não precisa especificar font-weight em cada elemento
3. **Responsividade automática** - escalas de texto otimizadas
4. **Manutenção fácil** - mudanças centralizadas no CSS
5. **Performance** - uma única fonte carregada (Inter)

## 🎯 Resultado

Agora todos os títulos terão a **mesma aparência visual** usando Inter semibold, e não haverá mais diferenças de fontes entre componentes! 