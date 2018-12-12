function aoc_9(p, m) {
	var players = new LinkedList(),
		marbles = new LinkedList(),
		currentPlayer,
		currentMarble,
		next = 1;

	for (var i = 0; i < p; i++)
		players.addLast(0);

	currentPlayer = players.head;
	currentMarble = marbles.addLast(0);

	while (next <= m) {
		if (next % 23)
			currentMarble = marbles.addAfter(next++, currentMarble.next);
		else {
			for (var i = 0; i < 7; i++)
				currentMarble = currentMarble.previous;
			currentPlayer.value += next++ + currentMarble.value;
			currentMarble = currentMarble.next;
			marbles.remove(currentMarble.previous);
		}

		currentPlayer = currentPlayer.next;
	}

	console.log(Math.max.apply(0, players.toArray()));
}

// partial circular doubly linked list implementation
function LinkedList() {
	var me = this;

	this.head = null;

	function initList(node) {
		node.next = node.previous = node;
		me.head = node;

	}

	function insertBefore(node, before) {
		node.next = before;
		node.previous = before.previous;
		before.previous.next = node;
		before.previous = node;
	}

	this.addLast = function (value) {
		var node = Node(value);

		if (this.head == null)
			initList(node);
		else
			insertBefore(node, me.head)

		return node;
	};

	this.addAfter = function (value, after) {
		var node = Node(value);

		insertBefore(node, after.next);

		return node;
	};

	this.remove = function (node) {
		if (node.next == node)
			head = null;
		else {
			node.next.previous = node.previous;
			node.previous.next = node.next;
			if (me.head == node)
				me.head = node.next;
		}

	}

	this.toArray = function () {
		var arr = [],
			node = me.head;

		do {
			arr.push(node.value);
			node = node.next;
		} while (node.next != me.head)

		return arr;
	}

	function Node(value) {
		return {
			previous: null,
			next: null,
			value: value
		};
	}
}

// 486 players; last marble is worth 70833 points

// part 1
aoc_9(486, 70833);

// part 2
aoc_9(486, 7083300);