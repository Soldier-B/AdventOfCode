package day5

import (
	"aoc2024/helper"
	"fmt"
	"strings"
	"sync"
	"sync/atomic"
)

func Part2() {
	rules := []rule{}
	updates := [][]int{}

	var sum atomic.Int32
	var wg sync.WaitGroup

	readingRules := true
	helper.ReadFile("./input/day5.txt", func(line string) {
		if line == "" {
			readingRules = false
			return
		}

		if readingRules {
			split := strings.Split(line, "|")
			rules = append(rules, rule{
				before: helper.ParseInt(split[0]),
				after:  helper.ParseInt(split[1]),
			})
		} else {
			split := strings.Split(line, ",")
			update := []int{}
			for _, s := range split {
				update = append(update, helper.ParseInt(s))
			}
			updates = append(updates, update)
		}
	})

	checkValid := func(update []int) {
		wg.Add(1)
		defer wg.Done()

		broken := false

		copy := []int{}

		copy = append(copy, update...)

	retry:

		// check update against rules
		for i := 0; i < len(copy)-1; i++ {
			for j := i + 1; j < len(copy); j++ {
				for k := 0; k < len(rules); k++ {
					r := rules[k]
					if r.before == copy[j] && r.after == copy[i] {
						broken = true

						prv := copy[j]
						for l := j; l > i; l-- {
							copy[l] = copy[l-1]
						}

						copy[i] = prv

						goto retry
					}
				}
			}
		}

		if !broken {
			return
		}

		i := len(copy) / 2
		sum.Add(int32(copy[i]))

	}

	for i := range updates {
		go checkValid(updates[i])
	}

	wg.Wait()

	fmt.Println(sum.Load())
}
