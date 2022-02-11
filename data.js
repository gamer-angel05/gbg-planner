var mapZones = [
		{
			"zone": "A4A",
			"builds": 2,
			"points": 76,
			"neighbors": ["A3A", "A4B", "A5B", "F5D", "F4C"]
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
			"neighbors": ["A4A", "A4B", "A5C"]
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
			"neighbors": ["A5B", "A4B", "A4C"]
		},
		{
			"zone": "A4C",
			"builds": 2,
			"points": 79,
			"neighbors": ["A5C", "B4A", "B3A", "A3B", "A4B"]
		},
		{
			"zone": "B5A",
			"builds": 1,
			"points": 40,
			"neighbors": ["B4A", "B5B"]
		},
		{
			"zone": "B4A",
			"builds": 0,
			"points": 72,
			"neighbors": ["B5A", "B5B", "B4B", "B3A", "A4C"]
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
			"neighbors": ["B4B", "B4A", "B5A"]
		},
		{
			"zone": "B4B",
			"builds": 2,
			"points": 71,
			"neighbors": ["B4A", "B5B", "B4C", "B3B", "B3A"]
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
			"neighbors": ["B5D", "C4A", "C3A", "B3B", "B4B"]
		},
		{
			"zone": "B5D",
			"builds": 0,
			"points": 14,
			"neighbors": ["C5A", "C4A", "B4C"]
		},
		{
			"zone": "C5A",
			"builds": 0,
			"points": 16,
			"neighbors": ["C4A", "B5D"]
		},
		{
			"zone": "C4A",
			"builds": 1,
			"points": 61,
			"neighbors": ["B4C", "B5D", "C5A", "C4B", "C3A", "B4C"]
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
			"neighbors": ["C3A", "C4A", "C5C", "C4C", "C3B"]
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
			"neighbors": ["C4B", "C5D", "C4C"]
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
			"neighbors": ["C4C", "C5C", "D4A"]
		},
		{
			"zone": "D4A",
			"builds": 0,
			"points": 60,
			"neighbors": ["D3A", "C4A", "C5D", "D5B", "D4B"]
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
			"neighbors": ["D4B", "D4A", "D5C"]
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
			"backup": 7,
			"neighbors": ["D4C", "D4B", "D5B"]
		},
		{
			"zone": "D4C",
			"builds": 1,
			"points": 61,
			"backup": 15,
			"neighbors": ["E3A", "D3B", "D4B", "D5C", "E4A"]
		},
		{
			"zone": "E5A",
			"builds": 0,
			"points": 12,
			"neighbors": ["E5B", "E4A"]
		},
		{
			"zone": "E4A",
			"builds": 1,
			"points": 74,
			"backup": 52,
			"neighbors": ["E4B", "E3A", "D4C", "E5A", "E5B"]
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
			"neighbors": ["E4B", "E4A", "E5A"]
		},
		{
			"zone": "E4B",
			"builds": 0,
			"points": 69,
			"neighbors": ["E4C", "E3B", "E3A", "E4A", "E5B"]
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
			"neighbors": ["F4A", "F3A", "E3B", "E4B", "E5D"]
		},
		{
			"zone": "E5D",
			"builds": 1,
			"points": 16,
			"neighbors": ["F5A", "F4A", "E4C"]
		},
		{
			"zone": "F5A",
			"builds": 1,
			"points": 18,
			"neighbors": ["F4A", "E5D"]
		},
		{
			"zone": "F4A",
			"builds": 1,
			"points": 59,
			"neighbors": ["F4B", "F3A", "E4C", "E5D", "F5A"]
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
			"neighbors": ["F5C", "F4C", "F3B", "F3A", "F4A"]
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
			"neighbors": ["F5D", "F4C", "F4B"]
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
			"neighbors": ["A4A", "F4C", "F5C"]
		},
		{
			"zone": "X1X",
			"builds": 3,
			"points": 274,
			"neighbors": ["A2A", "B2A", "C2A", "D2A", "E2A", "F2A"]
		}
	]