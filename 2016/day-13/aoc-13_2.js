function AoC_13_2(){
	for(var nodes = [node(1, 1)], steps = 0, visited = new Set();; steps++){
		if(steps > 50)
			return visited.size;
		nodes.forEach(spawn);
		nodes = nodes.filter(prune);
	}
	
	function node(x, y){ 
		return { x: x, y: y, key: x + ',' + y }; 
	}
	
	function spawn(n){
		visited.add(n.key);
		nodes.push(node(n.x, n.y - 1));
		nodes.push(node(n.x, n.y + 1));
		nodes.push(node(n.x - 1, n.y));
		nodes.push(node(n.x + 1, n.y));
	}
	
	function prune(n){
		if(visited.has(n.key) || n.x < 0 || n.y < 0) return false;
		return (n.x * (n.x + 3) + (2 * n.x * n.y) + n.y * (n.y + 1) + 1352)
			.toString(2)
			.match(/1/g)
			.length % 2 == 0;
	}
}

AoC_13_2();