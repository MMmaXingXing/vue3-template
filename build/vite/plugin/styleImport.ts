/**
 *  Introduces component library styles on demand.
 * https://github.com/anncwb/vite-plugin-style-import
 */
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import';

export function configStyleImportPlugin(_isBuild: boolean) {
  if (!_isBuild) {
    return [];
  }
  const styleImportPlugin = createStyleImportPlugin({
    resolves: [ElementPlusResolve()],
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: (name: string) => {
            console.log(name)
            return `element-plus/theme-chalk/${name}.css`;
          }
        },
      ],
  });
  return styleImportPlugin;
}
