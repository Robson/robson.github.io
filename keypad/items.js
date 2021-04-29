/*
Types:
	g = group  = a pack of eight apples, four yoghurts, etc
	s = single = one banana, 1kg of rice, 500g of asparagus, etc
*/

var items =
[
	{
		include:      false,
		url:          "https://www.sainsburys.co.uk/gol-ui/product/sainsburys-granny-smith-apples-x6",
		image:        "https://assets.sainsburys-groceries.co.uk/gol/9126/1/140x140.jpg",
		name:         "Sainsbury's Granny Smith Apples x6",
		generic:      "apple",
		type:         'g',
		amount:       6,
		amountMin:    1,
		amountMax:    2,
		price:        1.60,
		calories100g: 54,
		weight:       480,
	},
	{
		include:      true,
		url:          "https://www.sainsburys.co.uk/gol-ui/product/sainsburys-granny-smith-apples-single-c",
		image:        "https://assets.sainsburys-groceries.co.uk/gol/7533845/1/140x140.jpg",
		name:         "Sainsbury's Granny Smith Apples Single",
		generic:      "apple",
		type:         's',
		amount:       1,
		amountMin:    1,
		amountMax:    1,
		price:        0.30,
		calories100g: 54,
		weight:       80,
	},	
	{
		include:      true,
		url:          "https://www.sainsburys.co.uk/gol-ui/product/sainsburys-butternut-squash---spinach-croquettes",
		image:        "https://assets.sainsburys-groceries.co.uk/gol/7821759/1/300x300.jpg",
		name:         "Sainsbury's Butternut Squash & Spinach Croquettes 225g",
		generic:      "butternut squash",
		type:         'g',
		amount:       6,
		amountMin:    2,
		amountMax:    3,
		price:        2.00,
		calories100g: 228,
		weight:       225,
	},	
	{
		include:      true,
		url:          "https://www.sainsburys.co.uk/gol-ui/product/sainsburys-avocado-hass",
		image:        "https://assets.sainsburys-groceries.co.uk/gol/7658/1/300x300.jpg",
		name:         "Sainsbury's Medium Ripe & Ready Avocado",
		generic:      "avocado",
		type:         's',
		amount:       null,
		amountMin:    1,
		amountMax:    2,
		price:        0.75,
		calories100g: 197,
		weight:       80,
	},
	{
		include:      true,
		url:          "https://www.sainsburys.co.uk/gol-ui/product/sainsburys-butternut-squash-crinkle-chips-300g",
		image:        "https://assets.sainsburys-groceries.co.uk/gol/7838992/1/140x140.jpg",
		name:         "Sainsbury's Butternut Squash Crinkle Chips 300g",
		generic:      "butternut squash",
		type:         's',
		amount:       null,
		amountMin:    2,
		amountMax:    2,
		price:        1.00,
		calories100g: 70,
		weight:       300,
	},
	{
		include:      true,
		url:          "https://www.sainsburys.co.uk/gol-ui/product/sainsburys-beetroot-vacuum-pack-250g",
		image:        "https://assets.sainsburys-groceries.co.uk/gol/1116342/1/300x300.jpg",
		name:         "Sainsbury's Beetroot Vacuum Pack 250g",
		generic:      "beetroot",
		type:         's',
		amount:       null,
		amountMin:    3,
		amountMax:    5,
		price:        0.80,
		calories100g: 42,
		weight:       250,
	},
	{
		include:      true,
		url:          "https://www.sainsburys.co.uk/gol-ui/product/sainsburys-beetroot-in-vinegar-300g",
		image:        "https://assets.sainsburys-groceries.co.uk/gol/408059/1/300x300.jpg",
		name:         "Sainsbury's Beetroot In Vinegar 300g",
		generic:      "beetroot",
		type:         'g',
		amount:       9,
		amountMin:    2,
		amountMax:    3,
		price:        1.00,
		calories100g: 46,
		weight:       300,
	},
	{
		include:      true,
		url:          "https://www.sainsburys.co.uk/gol-ui/product/sainsburys-cocktail-beetroot--taste-the-difference-200g",
		image:        "https://assets.sainsburys-groceries.co.uk/gol/1157765/1/300x300.jpg",
		name:         "Sainsbury's Cocktail Beetroot 200g",
		generic:      "beetroot",
		type:         'g',
		amount:       9,
		amountMin:    2,
		amountMax:    3,
		price:        1.50,
		calories100g: 88,
		weight:       200,
	}
];