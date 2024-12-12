package day2

import (
	"aoc2024/helper"
	"fmt"
	"strings"
)

func Part2() {
	safe := 0

	helper.ReadFile("./input/day2.txt", func(line string) {
		split := strings.Split(line, " ")
		ints := []int{}

		for _, s := range split {
			ints = append(ints, helper.ParseInt(s))
		}

		if isSafe(ints) || canFix(ints) {
			safe++
		}
	})

	fmt.Println(safe)
}

func canFix(report []int) bool {
	for i := range report {
		var r = []int{}
		for j, n := range report {
			if i != j {
				r = append(r, n)
			}
		}

		if isSafe(r) {
			return true
		}

	}
	return false
}
