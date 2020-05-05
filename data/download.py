import os
import urllib.request
from zipfile import ZipFile


def download_file(url, save_path):
    print("Downloading...", url, save_path)
    urllib.request.urlretrieve(url, os.path.join(save_path))

def extract_file(file_path, extract_path):
    print("Extracting...", file_path, extract_path)
    with ZipFile(file_path, 'r') as zipObj:
       # Extract all the contents
       zipObj.extractall(os.path.join(extract_path))

def pda_repasses_mais_educacao():
    # http://dadosabertos.mec.gov.br/pme
    # http://dadosabertos.mec.gov.br/arquivos/pme/mais_educacao/pda-repasses-mais-educacao-adesao2014.csv.zip 
    download_file('http://dadosabertos.mec.gov.br/arquivos/pme/mais_educacao/pda-repasses-mais-educacao-adesao2014.csv.zip', './pda-repasses-mais-educacao-adesao2014.csv.zip')
    # extract_file('./pda-repasses-mais-educacao-adesao2014.csv.zip', './pda-repasses-mais-educacao-adesao2014')
    
    
    
    