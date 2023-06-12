SHELL:=/bin/zsh
VERSION := local
IMAGE := jupyter-local

up:
# virtualenv venv
# /bin/zsh venv/bin/activate
# pip install -r requirements.txt
	docker-compose up

down:
	docker-compose down


build:
	docker build -t ${IMAGE}:${VERSION} .