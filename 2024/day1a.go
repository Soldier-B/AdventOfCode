package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"sort"
	"strconv"
	"strings"
)

func main() {
	f, err := os.Open("./input/day1.txt")

	if err != nil {
		log.Panic(err)
	}

	defer f.Close()

	scanner := bufio.NewScanner(f)

	left := [1000]int{}
	right := [1000]int{}
	i := 0
	for scanner.Scan() {
		var line = scanner.Text()

		if len(line) == 0 {
			continue
		}

		split := strings.Split(line, "   ")
		a, _ := strconv.Atoi(split[0])
		b, _ := strconv.Atoi(split[1])

		left[i] = a
		right[i] = b
		i++
	}

	sort.Ints(left[:])
	sort.Ints(right[:])

	diff := 0
	for i := range 1000 {
		diff += abs(left[i] - right[i])
	}

	fmt.Println(diff)
}

func abs(n int) int {
	if n < 0 {
		return -n
	}
	return n
}
