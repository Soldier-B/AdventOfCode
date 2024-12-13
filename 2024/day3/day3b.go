package day3

import (
	"aoc2024/helper"
	"fmt"
	"log"
	"regexp"
)

func Part2() {
	mulexp, err := regexp.Compile(`do(n't)?\(\)|mul\(\d{1,3},\d{1,3}\)`)

	if err != nil {
		log.Panic(err)
	}

	parmexp, err := regexp.Compile(`\d+`)

	if err != nil {
		log.Panic(err)
	}

	sum, do := 0, true

	helper.ReadFile("./input/day3.txt", func(s string) {
		muls := mulexp.FindAllString(s, -1)
		for _, m := range muls {
			switch {
			case m == "do()":
				do = true
			case m == "don't()":
				do = false
			case do:
				parms := parmexp.FindAllString(m, -1)
				a := helper.ParseInt(parms[0])
				b := helper.ParseInt(parms[1])
				sum += a * b
			}
		}
	})

	fmt.Println(sum)
}
