package helper

import (
	"bufio"
	"log"
	"os"
	"strconv"
)

func Abs(n int) int {
	if n < 0 {
		return -n
	}
	return n
}

func ReadFile(name string, fn func(string)) {
	f, err := os.Open(name)

	if err != nil {
		log.Panic(err)
	}

	defer f.Close()

	scanner := bufio.NewScanner(f)

	for scanner.Scan() {
		fn(scanner.Text())
	}
}

func ParseInt(str string) int {
	i, err := strconv.Atoi(str)

	if err != nil {
		return 0
	}

	return i
}
