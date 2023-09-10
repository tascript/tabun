await Bun.build({
  entrypoints: ['./index.ts'],
  target: 'bun',
  outdir: './dist'
})