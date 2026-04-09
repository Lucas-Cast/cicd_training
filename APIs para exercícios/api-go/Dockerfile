FROM golang:1.23-alpine AS builder

WORKDIR /app

COPY . .

RUN go mod tidy && go build -o main .

FROM alpine:3.21

WORKDIR /app

COPY --from=builder /app/main .

EXPOSE 3000

CMD ["./main"]