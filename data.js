var mapZonesWaterfalls = [
		{
			"zone": "A5A",
			"neighbors": ["A4A", "A5B", "F5D"]
		},
		{
			"zone": "A5D",
			"neighbors": ["A5C", "A4C", "B4A", "B5A"]
		},
		{
			"zone": "B5C",
			"neighbors": ["B5D", "B4C", "B4B", "B5B"]
		},
		{
			"zone": "C5B",
			"neighbors": ["C4A", "C5A", "C5C", "C4B"]
		},
		{
			"zone": "D5A",
			"neighbors": ["D4A", "C5D", "D5B"]
		},
		{
			"zone": "D5D",
			"neighbors": ["E4A", "D4C", "D5C", "E5A"]
		},
		{
			"zone": "E5C",
			"neighbors": ["E5D", "E4C", "E4B", "E5B"]
		},
		{
			"zone": "F5B",
			"neighbors": ["F5C", "F4B", "F4A", "F5A"]
		},
		{
			"zone": "A4A",
			"neighbors": ["A5A", "A3A", "A4B", "A5B", "F5D", "F4C"]
		},
		{
			"zone": "A3A",
			"neighbors": ["A4A", "A4B", "A3B", "A2A", "F3B", "F4C"]
		},
		{
			"zone": "A2A",
			"neighbors": ["A3A", "A3B", "B2A", "X1X", "F2A", "F3B"]
		},
		{
			"zone": "A5B",
			"neighbors": ["A5A", "A4A", "A4B", "A5C"]
		},
		{
			"zone": "A4B",
			"neighbors": ["A5B", "A5C", "A4C", "A3B", "A3A", "A4A"]
		},
		{
			"zone": "A3B",
			"neighbors": ["A4B", "A4C", "B3A", "B2A", "A2A", "A3A"]
		},
		{
			"zone": "A5C",
			"neighbors": ["A5D", "A5B", "A4B", "A4C"]
		},
		{
			"zone": "A4C",
			"neighbors": ["A5D", "A5C", "B4A", "B3A", "A3B", "A4B"]
		},
		{
			"zone": "B5A",
			"neighbors": ["A5D", "B4A", "B5B"]
		},
		{
			"zone": "B4A",
			"neighbors": ["A5D", "B5A", "B5B", "B4B", "B3A", "A4C"]
		},
		{
			"zone": "B3A",
			"neighbors": ["A4C", "B4A", "B4B", "B3B", "B2A", "A3B"]
		},
		{
			"zone": "B2A",
			"neighbors": ["A3B", "B3A", "B3B", "C2A", "X1X", "A2A"]
		},
		{
			"zone": "B5B",
			"neighbors": ["B5C", "B4B", "B4A", "B5A"]
		},
		{
			"zone": "B4B",
			"neighbors": ["B5C", "B4A", "B5B", "B4C", "B3B", "B3A"]
		},
		{
			"zone": "B3B",
			"neighbors": ["B3A", "B4B", "B4C", "C3A", "C2A", "B2A"]
		},
		{
			"zone": "B4C",
			"neighbors": ["B5C", "B5D", "C4A", "C3A", "B3B", "B4B"]
		},
		{
			"zone": "B5D",
			"neighbors": ["B5C", "C5A", "C4A", "B4C"]
		},
		{
			"zone": "C5A",
			"neighbors": ["C5B", "C4A", "B5D"]
		},
		{
			"zone": "C4A",
			"neighbors": ["C5B", "B4C", "B5D", "C5A", "C4B", "C3A", "B4C"]
		},
		{
			"zone": "C3A",
			"neighbors": ["B3B", "B4C", "C4A", "C4B", "C3B", "C2A"]
		},
		{
			"zone": "C2A",
			"neighbors": ["B2A", "B3B", "C3A", "C3B", "D2A", "X1X"]
		},
		{
			"zone": "C4B",
			"neighbors": ["C5B", "C3A", "C4A", "C5C", "C4C", "C3B"]
		},
		{
			"zone": "C3B",
			"neighbors": ["C2A", "C3A", "C4B", "C4C", "D3A", "D2A"]
		},
		{
			"zone": "C5C",
			"neighbors": ["C5B", "C4B", "C5D", "C4C"]
		},
		{
			"zone": "C4C",
			"neighbors": ["C3B", "C4B", "C5C", "C5D", "D4A", "D3A"]
		},
		{
			"zone": "C5D",
			"neighbors": ["D5A", "C4C", "C5C", "D4A"]
		},
		{
			"zone": "D4A",
			"neighbors": ["D5A", "D3A", "C4A", "C5D", "D5B", "D4B"]
		},
		{
			"zone": "D3A",
			"neighbors": ["D2A", "C3B", "C4C", "D4A", "D4B", "D3B"]
		},
		{
			"zone": "D2A",
			"neighbors": ["X1X", "C2A", "C3B", "D3A", "D3B", "E2A"]
		},
		{
			"zone": "D5B",
			"neighbors": ["D5A", "D4B", "D4A", "D5C"]
		},
		{
			"zone": "D4B",
			"neighbors": ["D3B", "D3A", "D4A", "D5B", "D5C", "D4C"]
		},
		{
			"zone": "D3B",
			"neighbors": ["E2A", "D2A", "D3A", "D4B", "D4C", "E3A"]
		},
		{
			"zone": "D5C",
			"neighbors": ["D5D", "D4C", "D4B", "D5B"]
		},
		{
			"zone": "D4C",
			"neighbors": ["D5D", "E3A", "D3B", "D4B", "D5C", "E4A"]
		},
		{
			"zone": "E5A",
			"neighbors": ["D5D", "E5B", "E4A"]
		},
		{
			"zone": "E4A",
			"neighbors": ["D5D", "E4B", "E3A", "D4C", "E5A", "E5B"]
		},
		{
			"zone": "E3A",
			"neighbors": ["E3B", "E2A", "D3B", "D4C", "E4A", "E4B"]
		},
		{
			"zone": "E2A",
			"neighbors": ["F2A", "X1X", "D2A", "D3B", "E3A", "E3B"]
		},
		{
			"zone": "E5B",
			"neighbors": ["E5C", "E4B", "E4A", "E5A"]
		},
		{
			"zone": "E4B",
			"neighbors": ["E5C", "E4C", "E3B", "E3A", "E4A", "E5B"]
		},
		{
			"zone": "E3B",
			"neighbors": ["F3A", "F2A", "E2A", "E3A", "E4A", "E4C"]
		},
		{
			"zone": "E4C",
			"neighbors": ["E5C", "F4A", "F3A", "E3B", "E4B", "E5D"]
		},
		{
			"zone": "E5D",
			"neighbors": ["E5C", "F5A", "F4A", "E4C"]
		},
		{
			"zone": "F5A",
			"neighbors": ["F5B", "F4A", "E5D"]
		},
		{
			"zone": "F4A",
			"neighbors": ["F5B", "F4B", "F3A", "E4C", "E5D", "F5A"]
		},
		{
			"zone": "F3A",
			"neighbors": ["F4B", "F3B", "F2A", "E3B", "E4C", "F4A"]
		},
		{
			"zone": "F2A",
			"neighbors": ["F3B", "A2A", "X1X", "E2A", "E3B", "F3A"]
		},
		{
			"zone": "F4B",
			"neighbors": ["F5B", "F5C", "F4C", "F3B", "F3A", "F4A"]
		},
		{
			"zone": "F3B",
			"neighbors": ["F4C", "A3A", "A2A", "F2A", "F3A", "F4B"]
		},
		{
			"zone": "F5C",
			"neighbors": ["F5B", "F5D", "F4C", "F4B"]
		},
		{
			"zone": "F4C",
			"neighbors": ["F5D", "A4A", "A3A", "F3B", "F4B", "F5C"]
		},
		{
			"zone": "F5D",
			"neighbors": ["A5A", "A4A", "F4C", "F5C"]
		},
		{
			"zone": "X1X",
			"neighbors": ["A2A", "B2A", "C2A", "D2A", "E2A", "F2A"]
		}
	]

var mapZonesVolcano = [
		{
			"zone": "A4A",
			"neighbors": ["A4B", "A3V", "D4H"]
		},
		{
			"zone": "A4E",
			"neighbors": ["A4D", "A4F", "A3Y"]
		},
		{
			"zone": "B4A",
			"neighbors": ["A4H", "B3V", "B4B"]
		},
		{
			"zone": "B4E",
			"neighbors": ["B4D", "B4F", "B3Y"]
		},
		{
			"zone": "C4A",
			"neighbors": ["B4H", "C4B", "C3V"]
		},
		{
			"zone": "C4E",
			"neighbors": ["C4D", "C4F", "C3Y"]
		},
		{
			"zone": "D4A",
			"neighbors": ["C4H", "D4B", "D3V"]
		},
		{
			"zone": "D4E",
			"neighbors": ["D4D", "D4F", "D3Y"]
		},
		{
			"zone": "A3V",
			"neighbors": ["A4A", "A4B", "A3X", "A2S", "D3Z"]
		},
		{
			"zone": "A2S",
			"neighbors": ["A3V", "A3X", "A2T", "A1M", "D2T"]
		},
		{
			"zone": "A1M",
			"neighbors": ["A2S", "A2T", "B1O", "D1B"]
		},
		{
			"zone": "A4B",
			"neighbors": ["A4A", "A4C", "A3V"]
		},
		{
			"zone": "A4C",
			"neighbors": ["A4B", "A4D", "A3X"]
		},
		{
			"zone": "A3X",
			"neighbors": ["A4C", "A4D", "A3Y", "A2S", "A3V"]
		},
		{
			"zone": "A4D",
			"neighbors": ["A4E", "A3X", "A4C"]
		},
		{
			"zone": "A4F",
			"neighbors": ["A4E", "A4G", "A3Y"]
		},
		{
			"zone": "A3Y",
			"neighbors": ["A4E", "A4F", "A3Z", "A2T", "A3X"]
		},
		{
			"zone": "A2T",
			"neighbors": ["A3Y", "A3Z", "B2S", "A1M", "A2S"]
		},
		{
			"zone": "A4G",
			"neighbors": ["A4E", "A4H", "A3Z", "A4F"]
		},
		{
			"zone": "A4H",
			"neighbors": ["B4A", "A4H", "B4B", "B3V"]
		},
		{
			"zone": "A3Z",
			"neighbors": ["A4G", "A4H", "B3V", "A2T", "A3Y"]
		},
		{
			"zone": "B4B",
			"neighbors": ["B4A", "B4C", "B3V"]
		},
		{
			"zone": "B3V",
			"neighbors": ["A3Z", "B4A", "B4B", "B3X", "B2S"]
		},
		{
			"zone": "B2S",
			"neighbors": ["A2T", "B3V", "B3X", "B2T", "B1O"]
		},
		{
			"zone": "B1O",
			"neighbors": ["A1M", "B2S", "B2T", "C1N"]
		},
		{
			"zone": "B4C",
			"neighbors": ["B4B", "B4D", "B3X"]
		},
		{
			"zone": "B4D",
			"neighbors": ["B4C", "B4E", "B3X"]
		},
		{
			"zone": "B3X",
			"neighbors": ["B3V", "B4C", "B4D", "B3Y", "B2S"]
		},
		{
			"zone": "B4F",
			"neighbors": ["B4E", "B4G", "B3Y"]
		},
		{
			"zone": "B3Y",
			"neighbors": ["B4E", "B3X", "B4F", "B3Z", "B2T"]
		},
		{
			"zone": "B4G",
			"neighbors": ["B4F", "B4H", "B3Z"]
		},
		{
			"zone": "B3Z",
			"neighbors": ["B2T", "B3Y", "B4G", "B4H", "C3V"]
		},
		{
			"zone": "B2T",
			"neighbors": ["B1O", "B2S", "B3Y", "B3Z", "C2S"]
		},
		{
			"zone": "B4H",
			"neighbors": ["B3Z", "B4G", "C4A"]
		},
		{
			"zone": "C4B",
			"neighbors": ["C4A", "C3V", "C4C"]
		},
		{
			"zone": "C3V",
			"neighbors": ["C4A", "C2S", "B3Z", "C4B", "C3X"]
		},
		{
			"zone": "C4C",
			"neighbors": ["C3X", "C4B", "C4D"]
		},
		{
			"zone": "C4D",
			"neighbors": ["C4E", "C3X", "C4C"]
		},
		{
			"zone": "C3X",
			"neighbors": ["C2S", "C3V", "C4C", "C4D", "C3Y"]
		},
		{
			"zone": "C2S",
			"neighbors": ["C1N", "B2T", "C3V", "C3X", "C2T"]
		},
		{
			"zone": "C1N",
			"neighbors": ["D1B", "B1O", "C2S", "C2T"]
		},
		{
			"zone": "C4F",
			"neighbors": ["C4E", "C4G", "C3Y"]
		},
		{
			"zone": "C3Y",
			"neighbors": ["C4E", "C3Z", "C2T", "C3X", "C4F"]
		},
		{
			"zone": "C4G",
			"neighbors": ["C4H", "C3Z", "C4F"]
		},
		{
			"zone": "C3Z",
			"neighbors": ["D3V", "C2T", "C3Y", "C4G", "C4H"]
		},
		{
			"zone": "C4H",
			"neighbors": ["D4A", "C3Z", "C4G"]
		},
		{
			"zone": "C2T",
			"neighbors": ["D2S", "C1N", "C2S", "C3Y", "C3Z"]
		},
		{
			"zone": "D3V",
			"neighbors": ["D4A", "D3X", "D2S", "C3Z", "D4B"]
		},
		{
			"zone": "D2S",
			"neighbors": ["D2T", "D1B", "C2T", "D3V", "D3X"]
		},
		{
			"zone": "D1B",
			"neighbors": ["D2T", "A1M", "C1N", "D2S"]
		},
		{
			"zone": "D4B",
			"neighbors": ["D4A", "D4C", "D3V"]
		},
		{
			"zone": "D4C",
			"neighbors": ["D4D", "D3X", "D4B"]
		},
		{
			"zone": "D3X",
			"neighbors": ["D3Y", "D2S", "D3V", "D4C", "D4D"]
		},
		{
			"zone": "D4D",
			"neighbors": ["D4E", "D3X", "D4C"]
		},
		{
			"zone": "D3Y",
			"neighbors": ["D4E", "D4F", "D3Z", "D2T", "D3X"]
		},
		{
			"zone": "D2T",
			"neighbors": ["D3Y", "D3Z", "A2S", "D1B", "D2S"]
		},
		{
			"zone": "D4F",
			"neighbors": ["D4E", "D4G", "D3Y"]
		},
		{
			"zone": "D4G",
			"neighbors": ["D4H", "D3Z", "D4F"]
		},
		{
			"zone": "D3Z",
			"neighbors": ["D4H", "A3V", "D2T", "D3Y", "D4G"]
		},
		{
			"zone": "D4H",
			"neighbors": ["A4A", "D3Z", "D4G"]
		}
	]