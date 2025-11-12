import os

def test_files_exist():
    """Memastikan file utama ada"""
    assert os.path.exists("index.html"), "File index.html tidak ditemukan!"
    assert os.path.exists("style.css"), "File style.css tidak ditemukan!"
    assert os.path.exists("script.js"), "File script.js tidak ditemukan!"

def test_html_content():
    """Memastikan nama dan NIM tampil di halaman"""
    with open("index.html", "r", encoding="utf-8") as f:
        html = f.read()
        assert "Angger Maulana Effendi" in html
        assert "230411100155" in html
