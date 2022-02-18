var mapZones = [
		{
			"zone": "guild0",
			"builds": 0,
			"points": 0,
			"neighbors": ["A4A", "A5B", "F5D"]
		},
		{
			"zone": "guild1",
			"builds": 0,
			"points": 0,
			"neighbors": ["A5C", "A4C", "B4A", "B5A"]
		},
		{
			"zone": "guild2",
			"builds": 0,
			"points": 0,
			"neighbors": ["B5D", "B4C", "B4B", "B5B"]
		},
		{
			"zone": "guild3",
			"builds": 0,
			"points": 0,
			"neighbors": ["C4A", "C5A", "C5C", "C4B"]
		},
		{
			"zone": "guild4",
			"builds": 0,
			"points": 0,
			"neighbors": ["D4A", "C5D", "D5B"]
		},
		{
			"zone": "guild5",
			"builds": 0,
			"points": 0,
			"neighbors": ["E4A", "D4C", "D5C", "E5A"]
		},
		{
			"zone": "guild6",
			"builds": 0,
			"points": 0,
			"neighbors": ["E5D", "E4C", "E4B", "E5B"]
		},
		{
			"zone": "guild7",
			"builds": 0,
			"points": 0,
			"neighbors": ["F5C", "F4B", "F4A", "F5A"]
		},
		{
			"zone": "A4A",
			"builds": 2,
			"points": 76,
			"neighbors": ["guild0", "A3A", "A4B", "A5B", "F5D", "F4C"]
		},
		{
			"zone": "A3A",
			"builds": 2,
			"points": 85,
			"neighbors": ["A4A", "A4B", "A3B", "A2A", "F3B", "F4C"]
		},
		{
			"zone": "A2A",
			"builds": 3,
			"points": 164,
			"neighbors": ["A3A", "A3B", "B2A", "X1X", "F2A", "F3B"]
		},
		{
			"zone": "A5B",
			"builds": 1,
			"points": 40,
			"neighbors": ["guild0", "A4A", "A4B", "A5C"]
		},
		{
			"zone": "A4B",
			"builds": 2,
			"points": 62,
			"neighbors": ["A5B", "A5C", "A4C", "A3B", "A3A", "A4A"]
		},
		{
			"zone": "A3B",
			"builds": 2,
			"points": 64,
			"neighbors": ["A4B", "A4C", "B3A", "B2A", "A2A", "A3A"]
		},
		{
			"zone": "A5C",
			"builds": 1,
			"points": 11,
			"neighbors": ["guild1", "A5B", "A4B", "A4C"]
		},
		{
			"zone": "A4C",
			"builds": 2,
			"points": 79,
			"neighbors": ["guild1", "A5C", "B4A", "B3A", "A3B", "A4B"]
		},
		{
			"zone": "B5A",
			"builds": 1,
			"points": 40,
			"neighbors": ["guild1", "B4A", "B5B"]
		},
		{
			"zone": "B4A",
			"builds": 0,
			"points": 72,
			"neighbors": ["guild1", "B5A", "B5B", "B4B", "B3A", "A4C"]
		},
		{
			"zone": "B3A",
			"builds": 2,
			"points": 62,
			"neighbors": ["A4C", "B4A", "B4B", "B3B", "B2A", "A3B"]
		},
		{
			"zone": "B2A",
			"builds": 3,
			"points": 166,
			"neighbors": ["A3B", "B3A", "B3B", "C2A", "X1X", "A2A"]
		},
		{
			"zone": "B5B",
			"builds": 0,
			"points": 11,
			"neighbors": ["guild2", "B4B", "B4A", "B5A"]
		},
		{
			"zone": "B4B",
			"builds": 2,
			"points": 71,
			"neighbors": ["guild2", "B4A", "B5B", "B4C", "B3B", "B3A"]
		},
		{
			"zone": "B3B",
			"builds": 1,
			"points": 80,
			"neighbors": ["B3A", "B4B", "B4C", "C3A", "C2A", "B2A"]
		},
		{
			"zone": "B4C",
			"builds": 2,
			"points": 80,
			"neighbors": ["guild2", "B5D", "C4A", "C3A", "B3B", "B4B"]
		},
		{
			"zone": "B5D",
			"builds": 0,
			"points": 14,
			"neighbors": ["guild2", "C5A", "C4A", "B4C"]
		},
		{
			"zone": "C5A",
			"builds": 0,
			"points": 16,
			"neighbors": ["guild3", "C4A", "B5D"]
		},
		{
			"zone": "C4A",
			"builds": 1,
			"points": 61,
			"neighbors": ["guild3", "B4C", "B5D", "C5A", "C4B", "C3A", "B4C"]
		},
		{
			"zone": "C3A",
			"builds": 2,
			"points": 111,
			"neighbors": ["B3B", "B4C", "C4A", "C4B", "C3B", "C2A"]
		},
		{
			"zone": "C2A",
			"builds": 2,
			"points": 122,
			"neighbors": ["B2A", "B3B", "C3A", "C3B", "D2A", "X1X"]
		},
		{
			"zone": "C4B",
			"builds": 0,
			"points": 77,
			"neighbors": ["guild3", "C3A", "C4A", "C5C", "C4C", "C3B"]
		},
		{
			"zone": "C3B",
			"builds": 2,
			"points": 78,
			"neighbors": ["C2A", "C3A", "C4B", "C4C", "D3A", "D2A"]
		},
		{
			"zone": "C5C",
			"builds": 0,
			"points": 29,
			"neighbors": ["guild3", "C4B", "C5D", "C4C"]
		},
		{
			"zone": "C4C",
			"builds": 2,
			"points": 44,
			"neighbors": ["C3B", "C4B", "C5C", "C5D", "D4A", "D3A"]
		},
		{
			"zone": "C5D",
			"builds": 1,
			"points": 15,
			"neighbors": ["guild4", "C4C", "C5C", "D4A"]
		},
		{
			"zone": "D4A",
			"builds": 0,
			"points": 60,
			"neighbors": ["guild4", "D3A", "C4A", "C5D", "D5B", "D4B"]
		},
		{
			"zone": "D3A",
			"builds": 1,
			"points": 65,
			"neighbors": ["D2A", "C3B", "C4C", "D4A", "D4B", "D3B"]
		},
		{
			"zone": "D2A",
			"builds": 3,
			"points": 190,
			"neighbors": ["X1X", "C2A", "C3B", "D3A", "D3B", "E2A"]
		},
		{
			"zone": "D5B",
			"builds": 1,
			"points": 25,
			"neighbors": ["guild4", "D4B", "D4A", "D5C"]
		},
		{
			"zone": "D4B",
			"builds": 0,
			"points": 72,
			"neighbors": ["D3B", "D3A", "D4A", "D5B", "D5C", "D4C"]
		},
		{
			"zone": "D3B",
			"builds": 1,
			"points": 110,
			"neighbors": ["E2A", "D2A", "D3A", "D4B", "D4C", "E3A"]
		},
		{
			"zone": "D5C",
			"builds": 1,
			"points": 30,
			"neighbors": ["guild5", "D4C", "D4B", "D5B"]
		},
		{
			"zone": "D4C",
			"builds": 1,
			"points": 61,
			"neighbors": ["guild5", "E3A", "D3B", "D4B", "D5C", "E4A"]
		},
		{
			"zone": "E5A",
			"builds": 0,
			"points": 12,
			"neighbors": ["guild5", "E5B", "E4A"]
		},
		{
			"zone": "E4A",
			"builds": 1,
			"points": 74,
			"neighbors": ["guild5", "E4B", "E3A", "D4C", "E5A", "E5B"]
		},
		{
			"zone": "E3A",
			"builds": 1,
			"points": 73,
			"neighbors": ["E3B", "E2A", "D3B", "D4C", "E4A", "E4B"]
		},
		{
			"zone": "E2A",
			"builds": 3,
			"points": 140,
			"neighbors": ["F2A", "X1X", "D2A", "D3B", "E3A", "E3B"]
		},
		{
			"zone": "E5B",
			"builds": 1,
			"points": 15,
			"neighbors": ["guild6", "E4B", "E4A", "E5A"]
		},
		{
			"zone": "E4B",
			"builds": 0,
			"points": 69,
			"neighbors": ["guild6", "E4C", "E3B", "E3A", "E4A", "E5B"]
		},
		{
			"zone": "E3B",
			"builds": 2,
			"points": 84,
			"neighbors": ["F3A", "F2A", "E2A", "E3A", "E4A", "E4C"]
		},
		{
			"zone": "E4C",
			"builds": 2,
			"points": 69,
			"neighbors": ["guild6", "F4A", "F3A", "E3B", "E4B", "E5D"]
		},
		{
			"zone": "E5D",
			"builds": 1,
			"points": 16,
			"neighbors": ["guild6", "F5A", "F4A", "E4C"]
		},
		{
			"zone": "F5A",
			"builds": 1,
			"points": 18,
			"neighbors": ["guild7", "F4A", "E5D"]
		},
		{
			"zone": "F4A",
			"builds": 1,
			"points": 59,
			"neighbors": ["guild7", "F4B", "F3A", "E4C", "E5D", "F5A"]
		},
		{
			"zone": "F3A",
			"builds": 1,
			"points": 93,
			"neighbors": ["F4B", "F3B", "F2A", "E3B", "E4C", "F4A"]
		},
		{
			"zone": "F2A",
			"builds": 2,
			"points": 195,
			"neighbors": ["F3B", "A2A", "X1X", "E2A", "E3B", "F3A"]
		},
		{
			"zone": "F4B",
			"builds": 0,
			"points": 65,
			"neighbors": ["guild7", "F5C", "F4C", "F3B", "F3A", "F4A"]
		},
		{
			"zone": "F3B",
			"builds": 2,
			"points": 65,
			"neighbors": ["F4C", "A3A", "A2A", "F2A", "F3A", "F4B"]
		},
		{
			"zone": "F5C",
			"builds": 0,
			"points": 10,
			"neighbors": ["guild7", "F5D", "F4C", "F4B"]
		},
		{
			"zone": "F4C",
			"builds": 2,
			"points": 41,
			"neighbors": ["F5D", "A4A", "A3A", "F3B", "F4B", "F5C"]
		},
		{
			"zone": "F5D",
			"builds": 1,
			"points": 29,
			"neighbors": ["guild0", "A4A", "F4C", "F5C"]
		},
		{
			"zone": "X1X",
			"builds": 3,
			"points": 274,
			"neighbors": ["A2A", "B2A", "C2A", "D2A", "E2A", "F2A"]
		}
	]

var mapZones2 = [
		{
			"zone": "guild0",
			"builds": 0,
			"points": 0,
			"neighbors": ["A4B", "A3V", "D4H"]
		},
		{
			"zone": "guild1",
			"builds": 0,
			"points": 0,
			"neighbors": ["A4D", "A4F", "A3Y"]
		},
		{
			"zone": "guild2",
			"builds": 0,
			"points": 0,
			"neighbors": ["A4H", "B3V", "B4B"]
		},
		{
			"zone": "guild3",
			"builds": 0,
			"points": 0,
			"neighbors": ["B4D", "B4F", "B3Y"]
		},
		{
			"zone": "guild4",
			"builds": 0,
			"points": 0,
			"neighbors": ["B4H", "C4B", "C3V"]
		},
		{
			"zone": "guild5",
			"builds": 0,
			"points": 0,
			"neighbors": ["C4D", "C4F", "C3Y"]
		},
		{
			"zone": "guild6",
			"builds": 0,
			"points": 0,
			"neighbors": ["C4H", "D4B", "D3V"]
		},
		{
			"zone": "guild7",
			"builds": 0,
			"points": 0,
			"neighbors": ["D4D", "D4F", "D3Y"]
		},
		{
			"zone": "A3V",
			"builds": 1,
			"points": 63,
			"neighbors": ["guild0", "A4B", "A3X", "A2S", "D3Z"]
		},
		{
			"zone": "A2S",
			"builds": 1,
			"points": 98,
			"neighbors": ["A3V", "A3X", "A2T", "A1M", "D2T"]
		},
		{
			"zone": "A1M",
			"builds": 3,
			"points": 165,
			"neighbors": ["A2S", "A2T", "B1O", "D1B"]
		},
		{
			"zone": "A4B",
			"builds": 1,
			"points": 10,
			"neighbors": ["guild0", "A4C", "A3V"]
		},
		{
			"zone": "A4C",
			"builds": 0,
			"points": 14,
			"neighbors": ["A4B", "A4D", "A3X"]
		},
		{
			"zone": "A3X",
			"builds": 1,
			"points": 51,
			"neighbors": ["A4C", "A4D", "A3Y", "A2S", "A3V"]
		},
		{
			"zone": "A4D",
			"builds": 1,
			"points": 12,
			"neighbors": ["guild1", "A3X", "A4C"]
		},
		{
			"zone": "A4F",
			"builds": 1,
			"points": 33,
			"neighbors": ["guild1", "A4G", "A3Y"]
		},
		{
			"zone": "A3Y",
			"builds": 2,
			"points": 61,
			"neighbors": ["guild1", "A4F", "A3Z", "A2T", "A3X"]
		},
		{
			"zone": "A2T",
			"builds": 2,
			"points": 106,
			"neighbors": ["A3Y", "A3Z", "B2S", "A1M", "A2S"]
		},
		{
			"zone": "A4G",
			"builds": 1,
			"points": 10,
			"neighbors": ["guild1", "A4H", "A3Z", "A4F"]
		},
		{
			"zone": "A4H",
			"builds": 1,
			"points": 17,
			"neighbors": ["guild2", "A4H", "B4B", "B3V"]
		},
		{
			"zone": "A3Z",
			"builds": 1,
			"points": 40,
			"neighbors": ["A4G", "A4H", "B3V", "A2T", "A3Y"]
		},
		{
			"zone": "B4B",
			"builds": 1,
			"points": 28,
			"neighbors": ["guild2", "B4C", "B3V"]
		},
		{
			"zone": "B3V",
			"builds": 1,
			"points": 40,
			"neighbors": ["A3Z", "guild2", "B4B", "B3X", "B2S"]
		},
		{
			"zone": "B2S",
			"builds": 1,
			"points": 73,
			"neighbors": ["A2T", "B3V", "B3X", "B2T", "B10"]
		},
		{
			"zone": "B1O",
			"builds": 3,
			"points": 193,
			"neighbors": ["A1M", "B2S", "B2T", "C1N"]
		},
		{
			"zone": "B4C",
			"builds": 0,
			"points": 20,
			"neighbors": ["B4B", "B4D", "B3X"]
		},
		{
			"zone": "B4D",
			"builds": 0,
			"points": 28,
			"neighbors": ["B4C", "guild3", "B3X"]
		},
		{
			"zone": "B3X",
			"builds": 1,
			"points": 59,
			"neighbors": ["B3V", "B4C", "B4D", "B3Y", "B2S"]
		},
		{
			"zone": "B4F",
			"builds": 1,
			"points": 39,
			"neighbors": ["guild3", "B4G", "B3Y"]
		},
		{
			"zone": "B3Y",
			"builds": 1,
			"points": 74,
			"neighbors": ["guild3", "B3X", "B4F", "B3Z", "B2T"]
		},
		{
			"zone": "B4G",
			"builds": 0,
			"points": 10,
			"neighbors": ["B4F", "B4H", "B3Z"]
		},
		{
			"zone": "B3Z",
			"builds": 2,
			"points": 69,
			"neighbors": ["B2T", "B3Y", "B4G", "B4H", "C3V"]
		},
		{
			"zone": "B2T",
			"builds": 1,
			"points": 102,
			"neighbors": ["B1O", "B2S", "B3Y", "B3Z", "C2S"]
		},
		{
			"zone": "B4H",
			"builds": 0,
			"points": 13,
			"neighbors": ["B3Z", "B4G", "guild4"]
		},
		{
			"zone": "C4B",
			"builds": 1,
			"points": 40,
			"neighbors": ["guild4", "C3V", "C4C"]
		},
		{
			"zone": "C3V",
			"builds": 1,
			"points": 51,
			"neighbors": ["guild4", "C2S", "B3Z", "C4B", "C3X"]
		},
		{
			"zone": "C4C",
			"builds": 0,
			"points": 10,
			"neighbors": ["C3X", "C4B", "C4D"]
		},
		{
			"zone": "C4D",
			"builds": 0,
			"points": 22,
			"neighbors": ["guild5", "C3X", "C4C"]
		},
		{
			"zone": "C3X",
			"builds": 1,
			"points": 77,
			"neighbors": ["C2S", "C3V", "C4C", "C4D", "C3Y"]
		},
		{
			"zone": "C2S",
			"builds": 3,
			"points": 87,
			"neighbors": ["C1N", "B2T", "C3V", "C3X", "C2T"]
		},
		{
			"zone": "C1N",
			"builds": 2,
			"points": 128,
			"neighbors": ["D1B", "B1O", "C2S", "C2T"]
		},
		{
			"zone": "C4F",
			"builds": 0,
			"points": 33,
			"neighbors": ["guild5", "C4G", "C3Y"]
		},
		{
			"zone": "C3Y",
			"builds": 2,
			"points": 47,
			"neighbors": ["guild5", "C3Z", "C2T", "C3X", "C4F"]
		},
		{
			"zone": "C4G",
			"builds": 1,
			"points": 28,
			"neighbors": ["C4H", "C3Z", "C4F"]
		},
		{
			"zone": "C3Z",
			"builds": 2,
			"points": 77,
			"neighbors": ["D3V", "C2T", "C3Y", "C4G", "C4H"]
		},
		{
			"zone": "C4H",
			"builds": 1,
			"points": 24,
			"neighbors": ["guild6", "C3Z", "C4G"]
		},
		{
			"zone": "C2T",
			"builds": 3,
			"points": 107,
			"neighbors": ["D2S", "C1N", "C2S", "C3Y", "C3Z"]
		},
		{
			"zone": "D3V",
			"builds": 1,
			"points": 62,
			"neighbors": ["guild6", "D3X", "D2S", "C3Z", "D4B"]
		},
		{
			"zone": "D2S",
			"builds": 2,
			"points": 114,
			"neighbors": ["D2T", "D1B", "C2T", "D3V", "D3X"]
		},
		{
			"zone": "D1B",
			"builds": 2,
			"points": 119,
			"neighbors": ["D2T", "A1M", "C1N", "D2S"]
		},
		{
			"zone": "D4B",
			"builds": 1,
			"points": 24,
			"neighbors": ["guild6", "D4C", "D3V"]
		},
		{
			"zone": "D4C",
			"builds": 0,
			"points": 22,
			"neighbors": ["D4D", "D3X", "D4B"]
		},
		{
			"zone": "D3X",
			"builds": 1,
			"points": 62,
			"neighbors": ["D3Y", "D2S", "D3V", "D4C", "D4D"]
		},
		{
			"zone": "D4D",
			"builds": 0,
			"points": 20,
			"neighbors": ["guild7", "D3X", "D4C"]
		},
		{
			"zone": "D3Y",
			"builds": 1,
			"points": 70,
			"neighbors": ["guild7", "D4F", "D3Z", "D2T", "D3X"]
		},
		{
			"zone": "D2T",
			"builds": 2,
			"points": 92,
			"neighbors": ["D3Y", "D3Z", "A2S", "D1B", "D2S"]
		},
		{
			"zone": "D4F",
			"builds": 0,
			"points": 17,
			"neighbors": ["guild7", "D4G", "D3Y"]
		},
		{
			"zone": "D4G",
			"builds": 1,
			"points": 13,
			"neighbors": ["D4H", "D3Z", "D3Y", "D4F"]
		},
		{
			"zone": "D3Z",
			"builds": 2,
			"points": 80,
			"neighbors": ["D4H", "A3V", "D2T", "D3Y", "D4G"]
		},
		{
			"zone": "D4H",
			"builds": 0,
			"points": 15,
			"neighbors": ["guild0", "D3Z", "D4G"]
		}
	]