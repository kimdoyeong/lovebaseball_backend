import axios from "axios";
import wrapAsync from "../../lib/requestHandler/wrapAsync";
import queryChecker from "../../lib/checker/query";
import {
  CrollFailedError,
  SearchFailedError
} from "../../errors/ActionFailedError";
import { PlayerNotFoundError } from "../../errors/NotFoundError";
import Player from "../../models/Player";

export const getPlayer = wrapAsync(async (req, res) => {
  const { player } = queryChecker(["player"], req.params);
  const PlayerData = await Player.findOne({
    id: player
  });
  if (PlayerData) {
    res.json(PlayerData);
    return;
  }
  try {
    const req = await axios.get(
      `https://statsapi.mlb.com/api/v1/people/${player}?hydrate=awards,currentTeam,team,stats(type=[yearByYear,yearByYearAdvanced,careerRegularSeason,careerAdvanced,availableStats](team(league)),leagueListId=mlb_hist)&site=en`
    );
    const p = new Player({
      id: req.data.people[0].id,
      player: req.data.people[0]
    });
    await p.save();

    res.json(p);
  } catch (e) {
    if (e.response && e.response.status === 404) {
      throw PlayerNotFoundError;
    }
    console.error(e.stack);
    throw CrollFailedError;
  }
});

export const searchPlayer = wrapAsync(async (req, res) => {
  const { name } = queryChecker(["name"], req.query);
  console.log(name);
  function mapper(data: string) {
    const [
      position,
      code,
      firstName,
      lastName,
      tmp1,
      tmp2,
      tmp3,
      tmp4,
      fullName
    ] = data.split("|");
    return {
      code,
      firstName,
      lastName,
      fullName
    };
  }

  try {
    const mlb_req = await axios.get(
      `https://suggest.mlb.com/svc/suggest/v1/min_all/${name}/99999`
    );
    res.json({
      result: mlb_req.data.suggestions.map(mapper)
    });
  } catch (e) {
    console.error(e.stack);
    throw SearchFailedError;
  }
});
