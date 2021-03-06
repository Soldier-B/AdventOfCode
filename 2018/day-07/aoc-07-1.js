function aoc_7_1() {
	var steps = {},
		order = '';

	Array.from(arguments).forEach(s => {
		s = s.match(/\b\w\b/g);
		var parent = s[0], child = s[1];
		steps[parent] = findNode(parent);
		steps[child] = findNode(child);
		steps[child][parent] = 1;
	});

	while (true) {
		var keys = Object.keys(steps).sort(),
			key;

		if (!keys.length)
			break;

		keys.some(k => Object.keys(steps[k]).length ? false : (key = k, true));
		keys.forEach(k => delete steps[k][key]);

		order += key;

		delete steps[key];
	}

	console.log(order);

	function findNode(name) {
		return steps[name] || {}
	}
}

aoc_7_1('Step Q must be finished before step I can begin.',
	'Step B must be finished before step M can begin.',
	'Step R must be finished before step F can begin.',
	'Step G must be finished before step S can begin.',
	'Step M must be finished before step A can begin.',
	'Step Z must be finished before step W can begin.',
	'Step J must be finished before step C can begin.',
	'Step K must be finished before step O can begin.',
	'Step C must be finished before step I can begin.',
	'Step Y must be finished before step L can begin.',
	'Step N must be finished before step P can begin.',
	'Step S must be finished before step X can begin.',
	'Step E must be finished before step U can begin.',
	'Step U must be finished before step V can begin.',
	'Step D must be finished before step F can begin.',
	'Step W must be finished before step H can begin.',
	'Step T must be finished before step I can begin.',
	'Step H must be finished before step V can begin.',
	'Step L must be finished before step O can begin.',
	'Step P must be finished before step A can begin.',
	'Step A must be finished before step I can begin.',
	'Step F must be finished before step O can begin.',
	'Step V must be finished before step X can begin.',
	'Step I must be finished before step O can begin.',
	'Step X must be finished before step O can begin.',
	'Step F must be finished before step V can begin.',
	'Step L must be finished before step P can begin.',
	'Step Y must be finished before step P can begin.',
	'Step Y must be finished before step X can begin.',
	'Step Y must be finished before step O can begin.',
	'Step D must be finished before step A can begin.',
	'Step T must be finished before step F can begin.',
	'Step W must be finished before step X can begin.',
	'Step R must be finished before step A can begin.',
	'Step E must be finished before step F can begin.',
	'Step H must be finished before step I can begin.',
	'Step K must be finished before step Y can begin.',
	'Step W must be finished before step P can begin.',
	'Step V must be finished before step O can begin.',
	'Step N must be finished before step E can begin.',
	'Step L must be finished before step I can begin.',
	'Step B must be finished before step G can begin.',
	'Step D must be finished before step T can begin.',
	'Step J must be finished before step L can begin.',
	'Step M must be finished before step Y can begin.',
	'Step T must be finished before step A can begin.',
	'Step K must be finished before step D can begin.',
	'Step H must be finished before step P can begin.',
	'Step P must be finished before step I can begin.',
	'Step T must be finished before step L can begin.',
	'Step J must be finished before step N can begin.',
	'Step U must be finished before step F can begin.',
	'Step U must be finished before step I can begin.',
	'Step A must be finished before step F can begin.',
	'Step U must be finished before step P can begin.',
	'Step R must be finished before step H can begin.',
	'Step G must be finished before step V can begin.',
	'Step P must be finished before step F can begin.',
	'Step B must be finished before step D can begin.',
	'Step U must be finished before step X can begin.',
	'Step K must be finished before step A can begin.',
	'Step G must be finished before step D can begin.',
	'Step N must be finished before step U can begin.',
	'Step U must be finished before step L can begin.',
	'Step M must be finished before step J can begin.',
	'Step I must be finished before step X can begin.',
	'Step H must be finished before step L can begin.',
	'Step M must be finished before step S can begin.',
	'Step E must be finished before step O can begin.',
	'Step Q must be finished before step F can begin.',
	'Step A must be finished before step O can begin.',
	'Step T must be finished before step P can begin.',
	'Step F must be finished before step X can begin.',
	'Step D must be finished before step P can begin.',
	'Step A must be finished before step X can begin.',
	'Step G must be finished before step Z can begin.',
	'Step W must be finished before step F can begin.',
	'Step Q must be finished before step X can begin.',
	'Step C must be finished before step V can begin.',
	'Step L must be finished before step V can begin.',
	'Step E must be finished before step L can begin.',
	'Step B must be finished before step X can begin.',
	'Step M must be finished before step V can begin.',
	'Step F must be finished before step I can begin.',
	'Step P must be finished before step X can begin.',
	'Step C must be finished before step A can begin.',
	'Step Z must be finished before step H can begin.',
	'Step Q must be finished before step S can begin.',
	'Step G must be finished before step X can begin.',
	'Step T must be finished before step O can begin.',
	'Step P must be finished before step O can begin.',
	'Step T must be finished before step V can begin.',
	'Step N must be finished before step V can begin.',
	'Step Z must be finished before step X can begin.',
	'Step L must be finished before step X can begin.',
	'Step Z must be finished before step Y can begin.',
	'Step N must be finished before step T can begin.',
	'Step S must be finished before step T can begin.',
	'Step G must be finished before step K can begin.',
	'Step T must be finished before step X can begin.',
	'Step R must be finished before step X can begin.');