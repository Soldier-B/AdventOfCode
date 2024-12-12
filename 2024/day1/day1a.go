package day1

import (
	"aoc2024/helper"
	"fmt"
	"sort"
	"strings"
)

func Part1() {
	left := []int{}
	right := []int{}

	helper.ReadFile("./input/day1.txt", func(line string) {
		split := strings.Split(line, "   ")
		left = append(left, helper.ParseInt(split[0]))
		right = append(right, helper.ParseInt(split[1]))
	})

	sort.Ints(left)
	sort.Ints(right)

	diff := 0

	for i := range len(left) {
		diff += helper.Abs(left[i] - right[i])
	}

	fmt.Println(diff)
}
