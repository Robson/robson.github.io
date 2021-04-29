var correct = '';
var positions = '';
var input = '';
var level = '';
var isDone = false;

function createLevel() {	

	// generate correct answer and show it
	correct = ('' + getRandom(0, 9999)).padStart(4, '0');
	d3.select('#number').text(correct);
	
	// reset everything
	isDone = false;	
	input = '';
	d3.select('#result').html('&nbsp;');
	d3.select('#answer').html('nothing');
	d3.selectAll('td').transition().duration(0).style('color', '#0f0');
	
	// make the keypad
	level = d3.select("#level").node().value;
	switch (level) {		
		case '1':
			positions = '123456789X0X';
			for (var i = 0; i < positions.length; i++) {
				d3.select('#key_' + i).text(positions[i] == 'X' ? ' ' : positions[i]);
			}
			break;
		case '2':
			var boring = '123456789X0X';
			do {
			positions = miniShuffle(boring.split('')).join('');
			} while (positions == boring);
			for (var i = 0; i < positions.length; i++) {
				d3.select('#key_' + i).text(positions[i] == 'X' ? ' ' : positions[i]);
			}
			break;			
		case '3':
			positions = shuffle('123456789X0X'.split('')).join('');
			for (var i = 0; i < positions.length; i++) {
				d3.select('#key_' + i).text(positions[i] == 'X' ? ' ' : positions[i]);
			}
			break;		
		case '4':
			positions = shuffle('123456789X0X'.split('')).join('');
			for (var i = 0; i < positions.length; i++) {
				d3.select('#key_' + i).text(positions[i] == 'X' ? ' ' : positions[i]);
			}
			break;	
	}
}

function pushButton(i) {
	if (!isDone) {		
		input += positions[i];
		if (level == 4 && input.length == 1) {
			d3.selectAll('td').transition().duration(1000).style('color', '#000');
		}
		d3.select('#answer').text(input);
		if (input == correct) {
			d3.select('#result').html('. <span class="yes">Correct code: door unlocked!</span>');
			isDone = true;
		}
		if (!correct.startsWith(input)) {
			d3.select('#result').html('. <span class="no">Wrong code!</span>');
			isDone = true;
		}
	}
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

function miniShuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		if (Math.random() > 0.9) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		currentIndex -= 1;
	}
	return array;
}

d3.selectAll('td').on('click', function(d, i) { pushButton(i) });

createLevel();