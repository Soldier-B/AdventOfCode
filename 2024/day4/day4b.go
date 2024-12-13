package day4

import (
	"aoc2024/helper"
	"fmt"
	"sync"
	"sync/atomic"
)

func Part2() {
	var found atomic.Int32
	var wg sync.WaitGroup
	puzzle := [][]rune{}

	trace := func(puzzle [][]rune, cx int, cy int) {
		wg.Add(1)
		defer wg.Done()

		if cy-1 < 0 || cy+1 >= len(puzzle) || cx-1 < 0 || cx+1 >= len(puzzle[cy]) {
			return
		}

		a := string(puzzle[cy-1][cx-1]) + string(puzzle[cy][cx]) + string(puzzle[cy+1][cx+1])
		b := string(puzzle[cy+1][cx-1]) + string(puzzle[cy][cx]) + string(puzzle[cy-1][cx+1])

		if (a == "MAS" || a == "SAM") && (b == "MAS" || b == "SAM") {
			found.Add(1)
		}
	}

	helper.ReadFile("./input/day4.txt", func(row string) {
		puzzle = append(puzzle, []rune(row))
	})

	for y := range puzzle {
		for x := range puzzle[y] {
			if puzzle[y][x] == 'A' {
				go trace(puzzle, x, y)
			}
		}
	}

	wg.Wait()

	fmt.Println(found.Load())
}
