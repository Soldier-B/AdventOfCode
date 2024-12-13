package day4

import (
	"aoc2024/helper"
	"fmt"
	"sync"
	"sync/atomic"
)

func Part1() {
	var found atomic.Int32
	var wg sync.WaitGroup
	puzzle := [][]rune{}

	trace := func(puzzle [][]rune, x int, y int, dx int, dy int) {
		wg.Add(1)
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

	helper.ReadFile("./input/day4.txt", func(row string) {
		puzzle = append(puzzle, []rune(row))
	})

	for y := range puzzle {
		for x := range puzzle[y] {
			if puzzle[y][x] == 'X' {
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
