"""
Converte todos os .docx da pasta atual para .md usando mammoth.
Uso: python convert_docx_to_md.py
"""

import glob
import pathlib
import mammoth


def convert(docx_path: pathlib.Path) -> None:
    md_path = docx_path.with_suffix(".md")
    with open(docx_path, "rb") as f:
        result = mammoth.convert_to_markdown(f)
    md_path.write_text(result.value, encoding="utf-8")
    msgs = [m.message for m in result.messages]
    status = f"  avisos: {msgs}" if msgs else ""
    print(f"OK  {md_path.name}{status}")


def main() -> None:
    folder = pathlib.Path(__file__).parent
    docx_files = sorted(folder.glob("*.docx"))
    if not docx_files:
        print("Nenhum .docx encontrado.")
        return
    print(f"Convertendo {len(docx_files)} arquivo(s)...\n")
    for docx in docx_files:
        convert(docx)
    print("\nConcluído.")


if __name__ == "__main__":
    main()
