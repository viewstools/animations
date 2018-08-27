import babel from 'rollup-plugin-babel'

const external = id => !id.startsWith('.') && !id.startsWith('/')

const getBabelOptions = ({ useESModules }) => ({
  exclude: '**/node_modules/**',
  runtimeHelpers: true,
  plugins: [
    ['@babel/transform-runtime', { regenerator: false, useESModules }],
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    '@babel/plugin-proposal-json-strings',
  ],
  presets: [
    ['@babel/preset-env', { loose: true, modules: false }],
    '@babel/preset-react',
  ],
})

function createConfig(name) {
  return [
    {
      input: `./src/${name}.js`,
      output: { file: `${name}.esm.js`, format: 'esm' },
      external,
      plugins: [babel(getBabelOptions({ useESModules: true }))],
    },
    {
      input: `./src/${name}.js`,
      output: { file: `${name}.js`, format: 'cjs' },
      external,
      plugins: [babel(getBabelOptions({ useESModules: false }))],
    },
  ]
}

export default [...createConfig('dom'), ...createConfig('native')]
