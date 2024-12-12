package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
)

func main() {
	f, err := os.Open("./input/day2.txt")

	if err != nil {
		log.Panic(err)
	}

	defer f.Close()

	scanner := bufio.NewScanner(f)

	safe := 0
	for scanner.Scan() {
		var line = scanner.Text()

		if len(line) == 0 {
			continue
		}

		split := strings.Split(line, " ")

		var ints = []int{}

		for _, i := range split {
			n, _ := strconv.Atoi(i)
			ints = append(ints, n)
		}

		if isSafe(ints) {
			safe++
		}
	}

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

		d := abs(report[i] - report[i-1])

		if d < 1 || d > 3 {
			return false
		}
	}

	return true
}

func abs(n int) int {
	if n < 0 {
		return -n
	}
	return n
}
