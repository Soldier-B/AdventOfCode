package day1

import (
	"aoc2024/helper"
	"fmt"
	"strings"
)

func Part2() {
	left := []int{}
	right := []int{}

	helper.ReadFile("./input/day1.txt", func(line string) {
		split := strings.Split(line, "   ")
		left = append(left, helper.ParseInt(split[0]))
		right = append(right, helper.ParseInt(split[1]))
	})

	sim := 0

	for _, l := range left {
		freq := 0
		for _, r := range right {
			if l == r {
				freq++
			}
		}
		sim += l * freq
	}

	fmt.Println(sim)
}
