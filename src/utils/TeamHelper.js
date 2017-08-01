import _ from 'lodash';
import Player from './PlayerHelper';

class TeamHelper {
  static newTeam() {
    const team = _.times(15, this.newPlayer);
    const noDupes = this.checkDupes(team);
    const finalTeam = this.chooseStarters(noDupes);
    return finalTeam;
  }

  static findDupe(arr) {
    const tempArr = arr.slice(0);
    let firstIndex;
    for (let i = 0; i < tempArr.length; i++) {
      firstIndex = null;
      if (tempArr.lastIndexOf(tempArr[i])> i) {
        firstIndex = i;
        break;
      }
    }
    return firstIndex;
  }

  static replacePlayers(idx, arr, prop) {
    const tempArr = arr.slice(0);
    tempArr[idx] = this.newPlayer();
    return this.uniqueScore(tempArr, prop);
  }

  static uniqueScore(arr, prop) {
    const tempArr = arr.slice(0);
    const uniqBy = _.map(tempArr, prop);
    const dupeIdx = this.findDupe(uniqBy);
    return dupeIdx === null ? tempArr : this.replacePlayers(dupeIdx, tempArr, prop);
  }

  static checkDupes(arr) {
    const uniqNames = this.uniqueScore(arr, 'name');
    const uniqPlayers = this.uniqueScore(uniqNames, 'score');

    return uniqPlayers.sort((a, b)=> a.score - b.score);
  }

  static chooseStarters(arr) {
    const copy = arr.slice(0);
    let n = 0;
    while(n < 10) {
      copy[n].makeStarter();
      n ++;
    }
    return copy;
  }

  static newPlayer() {
    const value = TeamHelper.randomNumber(100);
    return new Player(
      TeamHelper.randomName(),
      value,
      TeamHelper.randomNumber(100 - value)
    );
  }

  static randomName() {
    return _.times(4, this.randomLetter).concat(_.times(4, this.randomNumber.bind(this, 10))).join('');
  }

  static randomLetter() {
    const alphabet = 'abcdefghijklmnopqurstuvwxyz';
    return alphabet.split('')[Math.floor(Math.random() * 26)];
  }

  static randomNumber(max) {
    return Math.floor(Math.random() * max);
  }

}

export default TeamHelper;
