#! /bin/bash


while : 
do
	git add .
	time=$(date)
	git commit -m "siva $time"
	git push
done



