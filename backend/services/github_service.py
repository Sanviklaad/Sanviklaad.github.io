import requests

GITHUB_USER = "Sanviklaad"

def get_repos():
    url = f"https://api.github.com/users/{GITHUB_USER}/repos"
    response = requests.get(url)
    return response.json()
