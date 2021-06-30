#!make
include .env
export $(shell sed 's/=.*//' .env)

start_bot:
	npm start
