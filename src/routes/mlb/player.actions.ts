import axios from "axios";
import wrapAsync from "../../lib/requestHandler/wrapAsync";
import queryChecker from "../../lib/checker/query";
import { CrollFailedError } from "../../errors/ActionFailedError";
import { PlayerNotFoundError } from "../../errors/NotFoundError";

export const getPlayer = wrapAsync(async (req, res) => {
  const { player } = queryChecker(["player"], req.params);

  try {
    const req = await axios.get(
      `https://statsapi.mlb.com/api/v1/people/${player}?hydrate=currentTeam,team,stats(type=[yearByYear,yearByYearAdvanced,careerRegularSeason,careerAdvanced,availableStats](team(league)),leagueListId=mlb_hist)&site=en`
    );
    res.json(req.data);
  } catch (e) {
    if (e.response && e.response.status === 404) {
      throw PlayerNotFoundError;
    }
    console.error(e.stack);
    throw CrollFailedError;
  }
});
