from flask import Flask, jsonify
from flask_cors import CORS
from nba_api.stats.static import players
from nba_api.stats.endpoints import commonplayerinfo

app = Flask(__name__, static_folder='./build', static_url_path='/')
cors = CORS(app)

@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/players')
def get_active_players():
    player_list = players.get_active_players()
    print(len(player_list))

    # active_player_information = []
    # i = 0

    # for player in player_list:
    #     player_info = commonplayerinfo.CommonPlayerInfo(
    #         player_id=player['id']).get_normalized_dict()

    #     player_stats = player_info['PlayerHeadlineStats'][0]
    #     player_team = player_info['CommonPlayerInfo'][0]['TEAM_ABBREVIATION']

    #     player_stats['team'] = player_team
    #     active_player_information.append(player_stats)
    #     i += 1
    #     if i > 4:
    #         break

    return jsonify(player_list)


@app.route('/players/<id>')
def get_player_info(id):
    print('pelaajan id:', id)
    player_info = commonplayerinfo.CommonPlayerInfo(
        player_id=id).get_normalized_dict()

    player_stats = player_info['PlayerHeadlineStats'][0]
    player_team = player_info['CommonPlayerInfo'][0]['TEAM_ABBREVIATION']

    player_stats['team'] = player_team
    return player_stats