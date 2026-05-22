# Como Listar Arquivos de uma Pasta no Vite

## Problema

Quando você tenta importar arquivos de uma pasta usando imports estáticos, você precisa importar cada arquivo manualmente:

```typescript
import img1 from '@/assets/img1.jpg';
import img2 from '@/assets/img2.jpg';
import img3 from '@/assets/img3.jpg';
// ... e assim por diante
```

Isso não funciona bem quando você tem muitos arquivos ou quando os arquivos mudam frequentemente.

## Solução: Usando `import.meta.glob`

O Vite fornece `import.meta.glob` que permite importar múltiplos arquivos de uma pasta usando padrões glob.

### Exemplo Básico

```typescript
// Carrega todas as imagens da pasta assets
const modules = import.meta.glob('/src/assets/**/*.{jpg,jpeg,png,gif,webp,svg}', {
  eager: true,  // Carrega imediatamente (não lazy)
  as: 'url'     // Retorna a URL do arquivo
});

// Converte em array
const images = Object.entries(modules).map(([path, url]) => ({
  path,
  url: url as string,
  name: path.split('/').pop()
}));
```

### Como Usar

1. **Crie a pasta `src/assets`** (se ainda não existir)
2. **Adicione suas imagens** na pasta `src/assets` ou em subpastas
3. **Use o componente `ImageGallery`** que já está configurado para listar todas as imagens

### Opções do `import.meta.glob`

- `eager: true` - Carrega os módulos imediatamente (não lazy)
- `eager: false` - Carrega os módulos sob demanda (lazy loading)
- `as: 'url'` - Retorna a URL do arquivo (para imagens)
- `as: 'raw'` - Retorna o conteúdo bruto do arquivo (para texto)

### Padrões Glob Suportados

- `**` - Qualquer número de diretórios
- `*` - Qualquer caractere exceto `/`
- `{ext1,ext2}` - Múltiplas extensões

### Exemplos de Padrões

```typescript
// Todas as imagens em assets e subpastas
import.meta.glob('/src/assets/**/*.{jpg,png}')

// Apenas imagens na raiz de assets
import.meta.glob('/src/assets/*.{jpg,png}')

// Apenas imagens em uma subpasta específica
import.meta.glob('/src/assets/gallery/*.{jpg,png}')

// Todos os arquivos TypeScript
import.meta.glob('/src/**/*.ts')
```

## Componente ImageGallery

O componente `ImageGallery` foi criado para demonstrar como listar e exibir arquivos de uma pasta. Ele:

- Carrega automaticamente todas as imagens de `src/assets`
- Exibe uma mensagem se nenhuma imagem for encontrada
- Mostra uma galeria com todas as imagens encontradas

### Adicionar ao seu projeto

O componente já foi adicionado à página `Index.tsx`. Se você quiser removê-lo, basta remover a linha:

```typescript
import ImageGallery from '@/components/ImageGallery';
// ...
<ImageGallery />
```

## Funções Utilitárias

O arquivo `src/utils/loadAssets.ts` contém funções úteis:

- `loadAllImages()` - Carrega todas as imagens de `src/assets`
- `loadImagesFromSubfolder(subfolder)` - Carrega imagens de uma subpasta específica
- `loadAssetsFromFolder(pattern)` - Carrega arquivos usando um padrão customizado

## Notas Importantes

1. **O padrão deve começar com `/src/`** quando usar caminhos absolutos
2. **As extensões são case-sensitive** - use `.jpg` não `.JPG`
3. **O Vite precisa recompilar** quando você adiciona novos arquivos
4. **Os arquivos devem existir** no momento da compilação

## Troubleshooting

### Nenhuma imagem aparece?

1. Verifique se a pasta `src/assets` existe
2. Verifique se há imagens na pasta (jpg, png, jpeg, gif, webp, svg)
3. Verifique o console do navegador para erros
4. Reinicie o servidor de desenvolvimento (`npm run dev`)

### Erro de tipo TypeScript?

Certifique-se de que `vite-env.d.ts` contém:
```typescript
/// <reference types="vite/client" />
```

Isso já está configurado no projeto.
