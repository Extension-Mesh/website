# ExtensionMesh website

The public website and project-wide documentation for ExtensionMesh.

**Open extension distribution.**

## Development

```bash
npm ci
npm run dev
```

The production build is fully static:

```bash
npm run build
```

Generated files are written to `dist/`.

## Documentation structure

- `/` — project introduction
- `/docs/` — documentation overview
- `/docs/concepts/` — core terminology and boundaries
- `/docs/registries/` — registry role and current scope
- `/docs/connectors/` — connector role and first implementation
- `/docs/project-status/` — priorities, stability and non-goals
- `/project/` — principles, governance and repositories

Implementation-specific instructions belong in the repository that implements
them. This site documents the shared project model and links to those sources.

## Deployment

GitHub Actions builds and deploys the static site to GitHub Pages on every push
to `main`. `SITE_URL` and `SITE_BASE` are taken from the Pages environment so
the build works with the repository path and can later move to a custom domain.

## Brand assets

The canonical identity, logo sources and tokens live in the
[brand repository](https://github.com/Extension-Mesh/brand).

## License

Source code and configuration are licensed under MIT. Website copy is licensed
under CC BY 4.0. See `LICENSE.md` for the exact path mapping.
