CC := gcc
CFLAGS := -std=c89 -Wall -Wextra

SRC := arcade.c
OBJ := $(SRC:.c=.o)
BIN := arcade.exe

all: ${BIN}

%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

${BIN}: ${OBJ}
	${CC} -o $@ $(OBJ)

clean:
	rm -f ${OBJ} ${BIN}