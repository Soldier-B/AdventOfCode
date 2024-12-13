package day3

import (
	"aoc2024/helper"
	"fmt"
	"log"
	"regexp"
)

func Part1() {
	mulexp, err := regexp.Compile(`mul\(\d{1,3},\d{1,3}\)`)

	if err != nil {
		log.Panic(err)
	}

	parmexp, err := regexp.Compile(`\d+`)

	if err != nil {
		log.Panic(err)
	}

	sum := 0

	helper.ReadFile("./input/day3.txt", func(s string) {
		muls := mulexp.FindAllString(s, -1)
		for _, m := range muls {
			parms := parmexp.FindAllString(m, -1)
			a := helper.ParseInt(parms[0])
			b := helper.ParseInt(parms[1])

			sum += a * b
		}
	})

	fmt.Println(sum)
}
