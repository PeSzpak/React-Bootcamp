# 🎨 Exemplos de Classes Tailwind CSS

## 📦 Spacing & Layout

```jsx
// Padding
<div className="p-4">Padding em todos os lados</div>
<div className="px-4 py-2">Padding horizontal e vertical</div>

// Margin
<div className="m-4">Margin em todos os lados</div>
<div className="mb-8">Margin bottom</div>

// Display & Flexbox
<div className="flex gap-4">Item 1</div>
<div className="grid grid-cols-3 gap-4">3 colunas</div>

// Width & Height
<div className="w-full h-screen">Tela inteira</div>
<div className="w-64 h-32">Tamanho fixo</div>
```

## 🎨 Cores & Backgrounds

```jsx
// Background Colors
<div className="bg-blue-500">Fundo azul</div>
<div className="bg-gradient-to-r from-blue-500 to-purple-500">Gradiente</div>

// Text Colors
<span className="text-red-600">Texto vermelho</span>
<span className="text-gray-400">Texto cinza claro</span>

// Borders
<div className="border border-gray-300">Borda cinza</div>
<div className="border-2 border-blue-500">Borda azul grossa</div>
```

## 🔤 Tipografia

```jsx
// Font Size
<h1 className="text-4xl">Título grande</h1>
<p className="text-base">Parágrafo normal</p>
<small className="text-xs">Texto pequenininho</small>

// Font Weight
<span className="font-light">Light</span>
<span className="font-bold">Bold</span>
<span className="font-black">Black</span>

// Text Transform
<p className="uppercase">MAIÚSCULA</p>
<p className="lowercase">minúscula</p>
<p className="capitalize">Primeira letra maiúscula</p>
```

## ✨ Efeitos & Interações

```jsx
// Hover
<button className="hover:bg-blue-700">Hover me</button>

// Focus
<input className="focus:ring-2 focus:ring-blue-500" />

// Transition
<button className="hover:bg-blue-700 transition">Smooth change</button>

// Shadow
<div className="shadow-lg">Grande sombra</div>
<div className="shadow-sm">Pequena sombra</div>

// Opacity
<div className="opacity-50">50% transparente</div>
<div className="hover:opacity-100">Opaco ao hover</div>
```

## 📱 Responsividade

```jsx
// Mobile First
<div className="text-sm md:text-base lg:text-lg">
  Pequeno no mobile, maior em desktop
</div>

// Breakpoints
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px

// Exemplo prático
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  1 coluna mobile, 2 tablet, 3 desktop
</div>
```

## 🎯 Componentes Comuns

### Button
```jsx
<button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg transition">
  Clique aqui
</button>
```

### Input
```jsx
<input 
  type="text"
  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
  placeholder="Seu nome..."
/>
```

### Card
```jsx
<div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
  <h3 className="text-lg font-semibold mb-2">Título</h3>
  <p className="text-gray-600">Descrição</p>
</div>
```

### Alert
```jsx
<div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
  ⚠️ Erro encontrado!
</div>
```

### Badge
```jsx
<span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
  Novo
</span>
```

## 🔗 Referência Rápida de Cores

```
Primary: indigo
- indigo-50, indigo-100, indigo-200, ..., indigo-900

Gray: gray
- gray-50, gray-100, gray-200, ..., gray-900

Success: green / Danger: red / Warning: yellow / Info: blue
```

## 💡 Dicas Importantes

1. **Sempre use classes, não estilos inline**
2. **Mobile first**: escreva para mobile, depois adicione md:, lg:
3. **Use variáveis CSS** para cores personalizadas
4. **Organize o className**: layout, espaçamento, tipografia, cores, efeitos
5. **Combine classes** em vez de criar novas classes CSS

## 📖 Mais Informações

- Documentação: https://tailwindcss.com/docs
- Playground: https://play.tailwindcss.com
- Gerador de cores: https://www.tailwindshades.com

