package day4

import (
	"aoc2024/helper"
	"fmt"
	"sync"
	"sync/atomic"
)

var found atomic.Int32
var wg sync.WaitGroup

func Part1() {
	puzzle := [][]rune{}

	helper.ReadFile("./input/day4.txt", func(row string) {
		puzzle = append(puzzle, []rune(row))
	})

	for y := range puzzle {
		for x := range puzzle[y] {
			if puzzle[y][x] == 'X' {

				wg.Add(8)

				go trace(puzzle, x, y, -1, -1)
				go trace(puzzle, x, y, 0, -1)
				go trace(puzzle, x, y, 1, -1)
				go trace(puzzle, x, y, -1, 0)
				go trace(puzzle, x, y, 1, 0)
				go trace(puzzle, x, y, -1, 1)
				go trace(puzzle, x, y, 0, 1)
				go trace(puzzle, x, y, 1, 1)
			}

		}
	}

	wg.Wait()

	fmt.Println(found.Load())
}

func trace(puzzle [][]rune, x int, y int, dx int, dy int) {
	defer wg.Done()

	xmas, l := []rune("XMAS"), 0

	for l < 4 {
		if y < 0 || y >= len(puzzle) || x < 0 || x >= len(puzzle[y]) || puzzle[y][x] != xmas[l] {
			return
		}
		x += dx
		y += dy
		l++
	}

	found.Add(1)
}
