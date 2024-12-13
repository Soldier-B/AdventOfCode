package day5

import (
	"aoc2024/helper"
	"fmt"
	"strings"
	"sync"
	"sync/atomic"
)

type rule struct {
	before int
	after  int
}

func Part1() {
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

		// check update against rules
		for i := 0; i < len(update)-1; i++ {
			for j := i + 1; j < len(update); j++ {
				for k := 0; k < len(rules); k++ {
					r := rules[k]
					if r.before == update[j] && r.after == update[i] {
						return
					}
				}
			}
		}

		i := len(update) / 2
		sum.Add(int32(update[i]))

	}

	for i := range updates {
		go checkValid(updates[i])
	}

	wg.Wait()

	fmt.Println(sum.Load())
}
