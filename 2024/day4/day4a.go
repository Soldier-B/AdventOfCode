package day4

import (
	"aoc2024/helper"
	"fmt"
)

func Part1() {
	puzzle := [][]rune{}

	helper.ReadFile("./input/day4.txt", func(row string) {
		puzzle = append(puzzle, []rune(row))
	})

	found := 0

	for y := range puzzle {
		for x := range puzzle[y] {
			if puzzle[y][x] == 'X' {
				c := make(chan bool)

				go trace(puzzle, x, y, -1, -1, c)
				go trace(puzzle, x, y, 0, -1, c)
				go trace(puzzle, x, y, 1, -1, c)
				go trace(puzzle, x, y, -1, 0, c)
				go trace(puzzle, x, y, 1, 0, c)
				go trace(puzzle, x, y, -1, 1, c)
				go trace(puzzle, x, y, 0, 1, c)
				go trace(puzzle, x, y, 1, 1, c)

				for range 8 {
					xmas := <-c
					if xmas {
						found++
					}
				}
			}

		}
	}

	fmt.Println(found)
}

func trace(puzzle [][]rune, x int, y int, dx int, dy int, c chan bool) {
	xmas, l, found := []rune("XMAS"), 0, true

	for l < 4 {
		if y < 0 || y >= len(puzzle) || x < 0 || x >= len(puzzle[y]) || puzzle[y][x] != xmas[l] {
			found = false
			break
		}
		x += dx
		y += dy
		l++
	}

	c <- found
}
