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
