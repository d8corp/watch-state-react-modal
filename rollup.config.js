import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

const def = {
  input: {
    index: 'src/index.tsx',
    Modals: 'src/Modals.tsx',
  },
  external: [
    ...Object.keys(pkg.dependencies || {})
  ]
}

const exclude = [
  'src/**/*.test.ts',
  'src/**/*.test.tsx',
]

export default [{
  ...def,
  output: {
    dir: 'lib',
    entryFileNames: '[name]' + pkg.main.replace('index', ''),
    format: 'cjs'
  },
  plugins: [
    typescript({
      typescript: require('typescript'),
      tsconfigOverride: {
        exclude
      }
    })
  ]
}, {
  ...def,
  output: {
    dir: 'lib',
    entryFileNames: '[name]' + pkg.module.replace('index', ''),
    format: 'es'
  },
  plugins: [
    typescript({
      typescript: require('typescript'),
      tsconfigOverride: {
        compilerOptions: {
          target: 'es6'
        },
        exclude
      }
    })
  ]
}]
