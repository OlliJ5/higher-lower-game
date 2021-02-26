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
    URL = f'https://www.nba.com/player/{id}'
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, 'html.parser')

    ppg_tag = soup.find(class_='PlayerSummary_playerStatValue__3hvQY')
    ppg = 0
    if ppg_tag == None:
        return {'error': 'no data for the season'}
    else:
        try:
            ppg = float(ppg_tag.text)
        except:
            ppg = 0

    name = soup.find_all(class_='PlayerSummary_playerNameText__K7ZXO')
    first_name = name[0].text
    last_name = name[1].text
    full_name = f'{first_name} {last_name}'

    team_tag = soup.find(class_="t11 md:t2")
    team = '?'
    if team_tag != None:
        team = team_tag.text.split('|')[0].strip()

    player_info = {'id': int(
        id), 'name': full_name, 'PPG': ppg, 'team': get_team_abbreviation(team)}
    return jsonify(player_info)


def get_team_abbreviation(team_name):
    team_name_to_abbreviation = {
        'Atlanta Hawks': 'ATL',
        'Toronto Raptors': 'TOR',
        'Philadelphia 76ers': 'PHI',
        'New Orleans Pelicans': 'NOP',
        'Utah Jazz': 'UTA',
        'Houston Rockets': 'HOU',
        'Los Angeles Clippers': 'LAC',
        'Milwaukee Bucks': 'MIL',
        'Cleveland Cavaliers': 'CLE',
        'Chicago Bulls': 'CHI',
        'Los Angeles Lakers': 'LAL',
        'Denver Nuggets': 'DEN',
        'Indiana Pacers': 'IND',
        'Portland Trailblazers': 'POR',
        'Dallas Mavericks': 'DAL',
        'San Antonio Spurs': 'SAS',
        'Miami Heat': 'MIA',
        'New York Knicks': 'NYK',
        'Orlando Magic': 'ORL',
        'Detroit Pistons': 'DET',
        'Phoenix Suns': 'PHO',
        'Washington Wizards': 'WAS',
        'Boston Celtics': 'BOS',
        'Brooklyn Nets': 'BKN',
        'Minnesota Timberwolves': 'MIN',
        'Charlotte Hornets': 'CHA',
        'Memphis Grizzlies': 'MEM',
        'Golden State Warriors': 'GSW',
        'Oklahoma City Thunder': 'OKC',
        'Sacramento Kings': 'SAC',
        '?': '?'}

    return team_name_to_abbreviation[team_name]
