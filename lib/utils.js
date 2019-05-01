const repeatPosition = (position, count = 1) => {
  if (count <= 1) return [position];

	const positions = [];
  for (let i = 0; i < count; i++) {
    positions.push(position);
  }
  return positions;
};

export const snapPositions = [
  ["-24px -9px", ["43px", "69px"]],
  ["-104px -8px", ["43px", "69px"]],
  ["-184px -8px", ["43px", "69px"]],
  ["-260px -12px", ["40px", "66px"]],
  ["-340px -12px", ["40px", "66px"]],
  ["-419px -10px", ["38px", "67px"]],
  ["-499px -10px", ["38px", "67px"]],
  ["-580px -7px", ["38px", "69px"]],
  ["-660px -7px", ["38px", "69px"]],
  ["-740px -7px", ["38px", "69px"]],
  ["-820px -7px", ["38px", "69px"]],
  ["-900px -7px", ["38px", "69px"]],
  ["-980px -7px", ["38px", "69px"]],
  ["-1060px -7px", ["38px", "69px"]],
  ["-1140px -7px", ["38px", "69px"]],
  ["-1220px -7px", ["38px", "69px"]],
  ["-1300px -7px", ["38px", "69px"]],

  ...repeatPosition(["-1380px -7px", ["38px", "69px"]], 25),

  ["-1455px -13px", ["48px", "57px"]],

  ...repeatPosition(["-1541px -4px", ["41px", "69px"]], 5),

  ["-1606px -4px", ["56px", "69px"], ["-15px"]],
  ["-1686px -9px", ["55px", "69px"], ["-15px"]],
  ["-1760px -9px", ["61px", "69px"], ["-20px"]],
  ["-1840px -9px", ["61px", "69px"], ["-20px"]],
  ["-1920px -9px", ["61px", "69px"], ["-20px"]],

  ...repeatPosition(["-2000px -8px", ["61px", "69px"], ["-20px"]], 8),

  ["-2080px -8px", ["61px", "69px"], ["-20px"]],

  ...repeatPosition(["-2160px -8px", ["61px", "69px"], ["-20px"]], 3),
  ...repeatPosition(["-2240px -8px", ["61px", "69px"], ["-20px"]], 40),

  ["-3200px -9px", ["61px", "69px"], ["-20px"]],
  ["-3280px -9px", ["61px", "69px"], ["-20px"]],
  ["-3360px -9px", ["61px", "69px"], ["-20px"]],
  ["-3441px -9px", ["61px", "69px"], ["-20px"]],
  ["-3540px -9px", ["41px", "69px"]],
  ["-3620px -12px", ["40px", "66px"]],

  ...repeatPosition(["-3700px -12px", ["40px", "66px"]], 3),

  ["-3784px -9px", ["43px", "69px"]]
];
