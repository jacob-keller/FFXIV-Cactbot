// vim: et:ts=2:sw=2

Options.Triggers.push({
  zoneId: ZoneId.MatchAll,
  triggers: [
    {
      id: 'FATE Forlorn Maiden',
      comment: {
        en: 'Trigger when a Forlorn Maiden appears during a FATE.',
      },
      type: 'GameLog',
      netRegex: NetRegexes.message({ line: 'The smell of death has drawn a Forlorn maiden to the battlefield' }),
      alertText: (data, matches, output) => {
        return output.text();
      },
      outputStrings: {
        text: {
          en: 'Forlorn Maiden Appears',
        },
      },
    },
    {
      id: 'FATE The Forlorn',
      comment: {
        en: 'Trigger when the Forlorn appears during a FATE.',
      },
      type: 'GameLog',
      netRegex: NetRegexes.message({ line: 'The smell of death has drawn the Forlorn to the battlefield' }),
      alarmText: (data, matches, output) => {
        return output.text();
      },
      outputStrings: {
        text: {
          en: 'The Forlorn Appears',
        },
      },
    },
    {
      id: 'The Hunt SS Minions',
      comment: {
        en: 'Trigger when SS rank Hunt minions spawn.',
      },
      type: 'GameLog',
      netRegex: NetRegexes.message({ line: 'The minions of an extraordinarily powerful mark are on the hunt for prey' }),
      alarmText: (data, matches, output) => {
        return output.text();
      },
      outputStrings: {
        text: {
          en: 'SS Hunt Adds',
        },
      },
    },
  ],
});
