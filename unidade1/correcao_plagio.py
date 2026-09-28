#!/usr/bin/env python3

import subprocess
import sys
from collections import defaultdict
from pathlib import Path


IGNORADOS = {
    ".git",
    ".gitattributes",
    ".gitignore",
    "node_modules",
    "target",
    "dist",
    "build",
    "__pycache__",
}

ARQUIVOS_IGNORADOS = {
    "maven-wrapper.properties",
    "mvnw.cmd",
    "import.sql",
    "pico.min.css",
    "bootstrap.min.css",
    "mvnw",
    # boilerplate gerado pelo Spring Initializr
    "banner.txt",
    "application.properties",
    # assets de biblioteca/template
    "favicon.ico",
    "w3.css",
    "design-system.json",
    "bootstrap.bundle.min.js",
    "bootstrap.bundle.min.js.map",
    # configuração de IDE
    "settings.json",
}

LIMITE_ARGUMENTOS = 12000


def arquivos(root):
    return [
        path.relative_to(root)
        for path in root.rglob("*")
        if path.is_file()
        and path.stat().st_size > 0
        and path.name not in ARQUIVOS_IGNORADOS
        and not any(
            part in IGNORADOS
            for part in path.relative_to(root).parts
        )
    ]


def hashes(root, paths):
    inicio = 0

    while inicio < len(paths):
        tamanho = 0
        fim = inicio

        while fim < len(paths):
            tamanho += len(str(paths[fim])) + 10

            if tamanho > LIMITE_ARGUMENTOS:
                break

            fim += 1

        result = subprocess.run(
            ["md5sum", "-z", "--", *map(str, paths[inicio:fim])],
            cwd=root,
            capture_output=True,
            check=True,
        )

        for item in result.stdout.split(b"\0"):
            if len(item) < 34:
                continue

            md5 = item[:32].decode("ascii")
            path = item[34:].decode(
                "utf-8",
                errors="surrogateescape",
            )

            yield md5, Path(path)

        inicio = fim


def main(root):
    root = Path(root).resolve()
    grupos = defaultdict(list)

    for md5, path in hashes(root, arquivos(root)):
        repositorio = path.parts[0]
        grupos[md5].append((repositorio, path))

    duplicados = [
        files
        for files in grupos.values()
        if len({repositorio for repositorio, _ in files}) > 1
    ]

    duplicados.sort(
        key=lambda files: (
            -len(files),
            str(files[0][1]),
        )
    )

    with open("plagios.md", "w", encoding="utf-8") as output:
        output.write("# Possíveis plágios\n\n")
        output.write(
            f"**{len(duplicados)} grupos** de arquivos idênticos encontrados.\n\n"
        )

        for number, files in enumerate(duplicados, 1):
            output.write(f"## Grupo {number}\n\n")

            for _, path in sorted(files, key=lambda item: str(item[1])):
                output.write(
                    f'- <span style="color:red">`{path}`</span>\n'
                )

            output.write("\n")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print(f"Uso: {sys.argv[0]} DIRETÓRIO")
        sys.exit(1)

    main(Path(sys.argv[1]))