package user

import "testing"

func TestSanity(t *testing.T) {
	t.Run("deve sempre passar", func(t *testing.T) {
		got := true
		if got != true {
			t.Errorf("esperava true, recebeu %v", got)
		}
	})

	t.Run("1 + 1 deve ser 2", func(t *testing.T) {
		got := 1 + 1
		if got != 2 {
			t.Errorf("esperava 2, recebeu %d", got)
		}
	})
}
