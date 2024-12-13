package day6

import (
	"aoc2024/helper"
	"fmt"
	"strings"
)

type dir struct {
	x int
	y int
}

func Part1() {
	m := [][]rune{}
	gx, gy, gd := -1, -1, 0
	count := 1
	dirs := [...]dir{
		{x: 0, y: -1},
		{x: 1, y: 0},
		{x: 0, y: 1},
		{x: -1, y: 0},
	}

	helper.ReadFile("./input/day6.txt", func(line string) {
		if gx < 0 && gy < 0 {
			i := strings.IndexAny(line, "^V<>")
			if i >= 0 {
				gy, gx = len(m), i

				switch line[i] {
				case '^':
					gd = 0
				case '>':
					gd = 1
				case 'V':
					gd = 2
				case '<':
					gd = 3
				}

				line = strings.Replace(line, string(line[i]), " ", -1)
			}
		}

		m = append(m, []rune(line))
	})

	for {
		d := dirs[gd]
		ngx, ngy := gx+d.x, gy+d.y

		if ngy < 0 || ngy >= len(m) || ngx < 0 || ngx >= len(m[ngy]) {
			break
		}

		r := m[ngy][ngx]

		if r == '.' {
			count++
			m[ngy][ngx] = ' '
		}

		if r == '.' || r == ' ' {
			gx, gy = ngx, ngy
		} else {
			gd = (gd + 1) % 4
		}
	}

	fmt.Println(count)
}
