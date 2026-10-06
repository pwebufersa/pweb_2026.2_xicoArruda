#!/usr/bin/env python3

import subprocess
import sys
from datetime import datetime
from pathlib import Path


PRAZO = datetime.fromisoformat("2026-09-27T23:59:59-03:00")


def ultimo_commit(repo):
    result = subprocess.run(
        ["git", "-C", str(repo), "log", "-1", "--format=%cI"],
        capture_output=True,
        text=True,
        check=True,
    )
    return datetime.fromisoformat(result.stdout.strip())


def main(root):
    root = Path(root).resolve()

    with open("prazo.md", "w", encoding="utf-8") as output:
        output.write("# Entregas após o prazo\n\n")

        for repo in sorted(root.iterdir()):
            if not (repo / ".git").is_dir():
                continue

            try:
                commit = ultimo_commit(repo)

                if commit > PRAZO:
                    data = commit.astimezone(PRAZO.tzinfo)
                    texto = data.strftime("%d/%m/%Y %H:%M:%S %z")

                    output.write(
                        f'- <span style="color:red"><b>{repo.name}</b> - '
                        f'`{texto}`</span>\n'
                    )
            except subprocess.CalledProcessError:
                continue


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print(f"Uso: {sys.argv[0]} DIRETORIO")
        sys.exit(1)

    main(sys.argv[1])