/**
 * Função utilitária para carregar todos os arquivos de uma pasta usando import.meta.glob
 * 
 * IMPORTANTE: O padrão do import.meta.glob deve ser relativo ao diretório raiz do projeto
 * ou usar caminhos absolutos começando com /src/
 * 
 * @param pattern - Padrão glob para os arquivos (ex: '/src/assets/**/*.{jpg,png}')
 * @returns Array de objetos com o caminho e o módulo importado
 */
export function loadAssetsFromFolder(pattern: string) {
  // import.meta.glob retorna um objeto onde as chaves são os caminhos dos arquivos
  const modules = import.meta.glob('/src/assets/**/*.{jpg,jpeg,png,gif,webp,svg}', {
    eager: true, // Carrega os módulos imediatamente
    as: 'url' // Retorna a URL do arquivo
  });

  // Converte o objeto em um array de objetos
  return Object.entries(modules).map(([path, url]) => ({
    path,
    url: url as string,
    name: path.split('/').pop() || path // Nome do arquivo
  }));
}

/**
 * Carrega todas as imagens da pasta assets
 * 
 * Esta função usa import.meta.glob para encontrar todos os arquivos de imagem
 * na pasta src/assets e suas subpastas
 */
export function loadAllImages() {
  try {
    // import.meta.glob precisa de um padrão relativo ou absoluto começando com /
    // O padrão é relativo ao diretório raiz do projeto
    const modules = import.meta.glob('/src/assets/**/*.{jpg,jpeg,png,gif,webp,svg}', {
      eager: true,
      as: 'url'
    });

    return Object.entries(modules).map(([path, url]) => ({
      path,
      url: url as string,
      name: path.split('/').pop() || path
    }));
  } catch (error) {
    console.error('Erro ao carregar imagens:', error);
    return [];
  }
}

/**
 * Carrega imagens de uma subpasta específica
 * @param subfolder - Nome da subpasta (ex: 'images', 'gallery')
 */
export function loadImagesFromSubfolder(subfolder: string) {
  try {
    const modules = import.meta.glob(`/src/assets/${subfolder}/**/*.{jpg,jpeg,png,gif,webp,svg}`, {
      eager: true,
      as: 'url'
    });

    return Object.entries(modules).map(([path, url]) => ({
      path,
      url: url as string,
      name: path.split('/').pop() || path
    }));
  } catch (error) {
    console.error(`Erro ao carregar imagens da subpasta ${subfolder}:`, error);
    return [];
  }
}
