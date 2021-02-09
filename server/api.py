from flask import Flask
from flask_cors import CORS
from nba_api.stats.static import players
from nba_api.stats.endpoints import commonplayerinfo
import json

app = Flask(__name__)
cors = CORS(app)


@app.route('/players')
def get_active_players():
    player_list = players.get_active_players()
    print(player_list[0])
    player_info = commonplayerinfo.CommonPlayerInfo(
        player_id=player_list[0]['id']).get_normalized_dict()

    player_stats = player_info['PlayerHeadlineStats'][0]
    player_team = player_info['CommonPlayerInfo'][0]['TEAM_ABBREVIATION']

    player_stats['team'] = player_team

    print('lisätietoja:')
    print('Stats ', player_stats)
    return json.dumps(player_list)
