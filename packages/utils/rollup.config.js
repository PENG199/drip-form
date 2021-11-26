import pkg from './package.json'
import { getOutput, getExternal, getPlugins } from '../../rollup.base.config'

export default {
  input: 'src/index.ts',
  output: getOutput(pkg),
  external: getExternal(pkg),
  onwarn(warning, warn) {
    if (warning.code === 'THIS_IS_UNDEFINED') return
    warn(warning) // this requires Rollup 0.46
  },
  plugins: getPlugins(pkg, process.argv),
}
