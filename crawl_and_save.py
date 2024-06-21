import os
import shutil
import asyncio
import xml.etree.ElementTree as ET
from urllib.parse import urlparse
from playwright.async_api import async_playwright

BASE_URL = 'http://localhost:5002'  # Change this if your server runs on a different address
OUTPUT_DIR = 'dist'
SITEMAP_PATH = 'sitemap.xml'
STATIC_DIRS = ['js', 'css', 'images']
STATIC_FILES = ['robots.txt', 'CNAME', 'sitemap.xml']

# Remove all files and directories in OUTPUT_DIR
if os.path.exists(OUTPUT_DIR):
    shutil.rmtree(OUTPUT_DIR)
    os.makedirs(OUTPUT_DIR)
else:
    os.makedirs(OUTPUT_DIR)

def get_paths_from_sitemap(sitemap_path):
    tree = ET.parse(sitemap_path)
    root = tree.getroot()
    namespace = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
    urls = root.findall('ns:url/ns:loc', namespace)
    paths = []
    for url in urls:
        parsed_url = urlparse(url.text)
        paths.append(parsed_url.path)
    return paths

async def save_page(page, path):
    retries = 3
    for attempt in range(retries):
        try:
            await page.goto(f"{BASE_URL}{path}", wait_until='networkidle')
            content = await page.content()
            break
        except Exception as e:
            print(f"Attempt {attempt + 1} failed: {e}")
            if attempt == retries - 1:
                raise

    if path == '/':
        output_path = os.path.join(OUTPUT_DIR, 'index.html')
    else:
        folder_path = os.path.join(OUTPUT_DIR, path.lstrip('/'))
        output_path = os.path.join(folder_path, 'index.html')
        os.makedirs(folder_path, exist_ok=True)

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(content)

def copy_static_files():
    for dir_name in STATIC_DIRS:
        src_dir = os.path.join(os.getcwd(), dir_name)
        dst_dir = os.path.join(OUTPUT_DIR, dir_name)
        if os.path.exists(src_dir):
            shutil.copytree(src_dir, dst_dir, dirs_exist_ok=True)
    for file_name in STATIC_FILES:
        src_file = os.path.join(os.getcwd(), file_name)
        dst_file = os.path.join(OUTPUT_DIR, file_name)
        if os.path.exists(src_file):
            shutil.copy2(src_file, dst_file)
            

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        paths = get_paths_from_sitemap(SITEMAP_PATH)

        for path in paths:
            await save_page(page, path)

        await browser.close()

if __name__ == "__main__":
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
    copy_static_files()
    asyncio.run(main())
