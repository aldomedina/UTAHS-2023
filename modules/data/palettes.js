const palettes = [
  {
    n: "Superhero",
    c: [
      [
        ["98ebd3", "060909"],
        ["3db5d7", "FCF61A"],
      ],
      ["3db5d7", "303d8e", "45C2E5", "FF2E29"],
    ],
  },
  {
    n: "Pomegranate",
    c: [
      [
        ["00b090", "3aadab"],
        ["8349c5", "756880"],
        ["0F0A12", "151316"],
      ],
      ["270016", "2a252d", "B50329", "151316"],
    ],
  },
  {
    n: "Flamingo",
    c: [
      [
        ["f14d83", "71e7c9"],
        ["d4fbff", "f05d5e"],
      ],
      ["f05d5e", "affff2", "eb5676", "f05d5e"],
    ],
  },
  {
    n: "Deep Sea",
    c: [
      [
        ["f1009d", "FFA500"],
        ["eb0266", "e500cc"],
        ["0008ff", "000587"],
        ["2b1d8f", "0b0068"],
      ],
      ["0008ff", "0027a8", "2333FF", "0027a8"],
    ],
  },
  {
    n: "Starbust",
    c: [
      [
        ["0008ff", "000587"],
        ["E568AF", "BE006B"],
        ["FF3D1F", "FF8774"],
        ["ffc800", "ffea00"],
      ],
      ["feff45", "ffe11c", "FFB300", "ff8600"],
    ],
  },
  {
    n: "Geranium",
    c: [
      [
        ["FF701F", "D40040"],
        ["e333c9", "161616"],
        ["b537a8", "2cffed"],
      ],
      ["bd17a7", "00fff7", "581350", "da31c6"],
    ],
  },
  {
    n: "Full Spectrum",
    c: [
      [
        ["e30032", "ff3808"],
        ["130f12", "770069"],
      ],
      ["fb271d", "bcff00", "ff0d1d", "004ad8"],
    ],
  },
  {
    n: "Squid Ink",
    c: [
      [
        ["14987a", "094746"],
        ["fa0010", "fc4f15"],
      ],
      ["ff0008", "131313", "6a46c8", "1a161d"],
    ],
  },
  {
    n: "Citrus",
    c: [
      [
        ["9012a2", "b256bF"],
        ["6d9010", "005536"],
        ["5ca2bf", "02a773"],
      ],
      ["00d442", "e8f53a", "74d400", "ffed00"],
    ],
  },
  {
    n: "Neon Rose",
    c: [
      [
        ["fa0", "ff0025"],
        ["ff2dcb", "ff1a90"],
      ],
      ["ff9ad0", "fe61b2", "ff00f7", "ff1a90"],
    ],
  },
  {
    n: "Acid Spring",
    c: [[["4d56e0", "d856ff"]], ["04d465", "39cea8", "3ae1c0", "f133f0"]],
  },
  {
    n: "Cairo",
    c: [[["ff0023", "ffad00"]], ["a11c96", "e2dee2", "fb3db2", "fb620a"]],
  },

  {
    n: "Desert",
    c: [
      [
        ["add1ff", "17e6ff"],
        ["ff9c00", "ffeac6"],
        ["b3e1cb", "3cd38c"],
      ],
      ["ff5300", "b8ec02", "19151a", "ff5300"],
    ],
  },
  {
    n: "Old School",
    c: [
      [
        ["7328ff", "ddddde"],
        ["ffd13d", "f71b5b"],
        ["b3e1cb", "3cd38c"],
        ["00008c", "97dbff"],
        ["4d4d4d", "ededed"],
      ],
      ["ff5301", "b8ec03", "19151a", "0e59af"],
    ],
  },
  {
    n: "Aurora",
    c: [
      [
        ["ff4600", "f57747"],
        ["000dff", "c9fff8"],
        ["ffc91f", "fff2c9"],
      ],
      ["ff4600", "cf142c", "e354d0", "7893d9"],
    ],
  },
  {
    n: "Fantasy",
    c: [
      [
        ["ff1072", "c3bdf5"],
        ["ff26cb", "ebf5bd"],
        ["d1ff26", "ebf5bd"],
      ],
      ["da4e6a", "ff748e", "45ceed", "5551b8"],
    ],
  },
  {
    n: "Reflections",
    c: [
      [
        ["ff8fe6", "f4affa"],
        ["ff00c3", "ffc138"],
        ["ffcf00", "ffc138"],
      ],
      ["48b0dc", "f0381d", "fa0076", "72c4df"],
    ],
  },
  {
    n: "Origins",
    c: [
      [
        ["102aff", "f2acb2"],
        ["eccfd1", "ffa1a7"],
      ],
      ["19161c", "2e348d", "ea1c25", "c4d626"],
    ],
  },
  {
    n: "Acqua",
    c: [
      [
        ["3108b9", "95fcd1"],
        ["08b9b9", "95fcfc"],
      ],
      ["ffa100", "ff0039", "002bff", "00ff04"],
    ],
  },
  {
    n: "Soho",
    c: [
      [
        ["5c19f7", "d082fc"],
        ["ff2f0f", "fc9182"],
      ],
      ["F57FB0", "e0ec01", "31969f", "197120"],
    ],
  },
  {
    n: "Supernova",
    c: [
      [
        ["0d00ff", "e1d2de"],
        ["f593f5", "e1d2de"],
        ["19171b", "cfcfcf"],
      ],
      ["1a171b", "ca32b0", "4472e3", "add428"],
    ],
  },
  {
    n: "Sharp Rib",
    c: [
      [
        ["fafafa", "cfcfcf"],
        ["f50567", "ffdc08"],
        ["f7940d", "ffdc08"],
        ["2a2aeb", "2a2aeb"],
        ["0b0b0c", "a49f9f"],
      ],
      ["002f63", "d9051e", "ff4801", "add428"],
    ],
  },
  {
    n: "Oyster",
    c: [
      [
        ["44f5e0", "cfcfcf"],
        ["19171B", "cfcfcf"],
      ],
      ["ca32b0", "add428", "1a171b", "4472e3"],
    ],
  },
  {
    n: "Iris",
    c: [
      [
        ["ed28ed", "9393d4"],
        ["e3849b", "1616eb"],
      ],
      ["1f92ff", "69eb4d", "ec2229", "24c5f0"],
    ],
  },
  {
    n: "Mountain Pass",
    c: [
      [
        ["ed60db", "6161d2"],
        ["58cfb6", "019175"],
      ],
      ["fe1921", "282028", "fe7101", "42b9d6"],
    ],
  },
  {
    n: "Twilight",
    c: [
      [
        ["012cf9", "bafff1"],
        ["f9a101", "f4f901"],
      ],
      ["fe5b01", "8ebcc8", "728ad8", "f00"],
    ],
  },
  {
    n: "Rouge",
    c: [
      [
        ["020e14", "b9cce8"],
        ["f760dc", "b9cce8"],
        ["609ef7", "b9cce8"],
      ],
      ["376e37", "1d1a1f", "e61f3e", "ff936a"],
    ],
  },
  {
    n: "Spearmint",
    c: [
      [
        ["f7459e", "a4a19c"],
        ["110f0f", "a4a19c"],
        ["fe9600", "f0d6af"],
      ],
      ["bbed2b", "ed0363", "7d3f3f", "8ade79"],
    ],
  },
  {
    n: "Alien Ocean",
    c: [
      [
        ["efff00", "c1c8da"],
        ["0b2459", "0d4ed2"],
      ],
      ["0e088a", "ededee", "372c7f", "042458"],
    ],
  },
  {
    n: "Rave",
    c: [
      [
        ["edec0f", "ff1ac6"],
        ["450484", "ed6cff"],
        ["370b60", "cfcfcf"],
        ["0b2460", "cfcfcf"],
      ],
      ["0e088a", "ededee", "d42c84", "042459"],
    ],
  },
  {
    n: "Night Walker",
    c: [
      [
        ["bc00ad", "ff00d4"],
        ["e3e300", "f7ff00"],
        ["00b1c5", "00c5ff"],
        ["000000", "2f2f2f"],
      ],
      ["2f2f2f", "000000", "3e3e3e", "000000"],
    ],
  },
  {
    n: "Monochrome",
    c: [[["fafafa", "8b8c90"]], ["ff0b00", "f8fe02", "01ff33", "0008fe"]],
  },
  {
    n: "Dark Side",
    c: [[["000000", "2f2f2f"]], ["2f2f2f", "000000", "3e3e3e", "000000"]],
  },
  {
    n: "Peony",
    c: [[["ffc3e2", "c5b1bb"]], ["a75e6d", "ffa1cb", "968080", "ffc3e2"]],
  },
  {
    n: "Surf",
    c: [[["ad037e", "dc0c9f"]], ["1d1d1d", "f45d04", "ebde06", "5b6ad1"]],
  },
];
export default palettes;
