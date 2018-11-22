import bs4
import requests
import sys

def migros_checker(product_name):
    url = "https://www.sanalmarket.com.tr/arama?q="
    real_product = product_name.replace(" ","+")
    real_url = url + real_product
    migros_response = requests.get(real_url)
    migros_soup = bs4.BeautifulSoup(migros_response.text)
    dict = []
    for j in migros_soup.find_all(class_ = "product-card product-action "):
        dict.append({
            "link" : "https://www.sanalmarket.com.tr"+j.find("a")["href"],
            "urun" : j.find(class_="title product-card-title").text,
            "resim" : j.find("img")["src"],
            "fiyat" : float(j.find(class_="price-tag").text.split("\n")[1].split("T")[0].lstrip().rstrip().replace(",","."))
            #eğer istenirse float dönüşümüne uygun
        })
    return dict

print(migros_checker(sys.argv[1]))