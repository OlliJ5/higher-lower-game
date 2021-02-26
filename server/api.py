from flask import Flask, jsonify
from flask_cors import CORS
from nba_api.stats.static import players
import requests
from bs4 import BeautifulSoup

app = Flask(__name__, static_folder='./build', static_url_path='/')
cors = CORS(app)


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/players')
def get_active_players():
    player_list = players.get_active_players()
    print(len(player_list))
    return jsonify(player_list)


@app.route('/players/<id>')
def get_player_info(id):
    print('\n\n\npelaajan id:', id, '\n\n\n')

    URL = f'https://www.nba.com/player/{id}'
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, 'html.parser')

    ppg = soup.find(class_='PlayerSummary_playerStatValue__3hvQY').text
    name = soup.find_all(class_='PlayerSummary_playerNameText__K7ZXO')
    first_name = name[0].text
    last_name = name[1].text

    print(ppg)
    player_info = {'id': int(
        id), 'name': f'{first_name} {last_name}', 'PPG': float(ppg), 'team': 'test'}
    return jsonify(player_info)
