package day2

import (
	"aoc2024/helper"
	"fmt"
	"strings"
)

func Part1() {
	safe := 0

	helper.ReadFile("./input/day2.txt", func(line string) {
		split := strings.Split(line, " ")
		ints := []int{}

		for _, s := range split {
			ints = append(ints, helper.ParseInt(s))
		}

		if isSafe(ints) {
			safe++
		}
	})

	fmt.Println(safe)
}

func isSafe(report []int) bool {
	if len(report) < 2 {
		return false
	}

	inc := report[0] < report[1]

	for i := 1; i < len(report); i++ {
		if report[i-1] < report[i] != inc {
			return false
		}

		d := helper.Abs(report[i] - report[i-1])

		if d < 1 || d > 3 {
			return false
		}
	}

	return true
}
