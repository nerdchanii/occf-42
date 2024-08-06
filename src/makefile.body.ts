export const MakefileBody = (NAME: string | undefined) => `NAME = ${
  NAME || "a.out"
}
CC = c++
CPP_FLAGS = -Wall -Wextra -Werror -std=c++98

SRCS = (wildcard *.cpp)
OBJS = $(SRCS:.cpp=.o)

ALL: $(NAME)

$(NAME): $(OBJS)
	@$(CC) $(CFLAGS) $(OBJS) -o $(NAME)

%.cpp: %.o
	@$(CC) $(CFLAGS) -c $< -o $@

clean:
	@rm -f $(OBJS)

fclean: clean
	@rm -f $(NAME)

re: fclean ALL

.PHONY: ALL clean fclean re`;
