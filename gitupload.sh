#! /bin/bash


tmux new -d -s pfgu "
while : 
do
	git add .
	git commit -m "siva"
	git push
done" 



tmux new -d -s pfgh-page "
while :
do
	sleep 300;
	npm run deploy
done"

