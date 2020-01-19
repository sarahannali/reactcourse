import requests
from bs4 import BeautifulSoup
import json

url = "https://www.litcharts.com/blog/shakespeare/top-shakespeare-insults-of-all-time/"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

insults = soup.find('article').find_all('li')
insults = insults[0:87]

with open("insult-scraper.json","w",encoding='UTF-8',newline="") as File:
    allInsults = []

    for insult in insults:
        text = insult.get_text()
        endLine = text.index('(')
        text = text[0:endLine]
        source = insult.find('a').get_text()
        allInsults.append([text, source])
    json.dump(allInsults, File)