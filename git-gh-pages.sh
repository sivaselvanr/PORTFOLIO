#!  /bin/bash

#to run infinite 
while :
do
	#package install to deploy in github pgaes 
#	npm install gh-pages --save-dev
	
	#add in package.json file
#	"homepage": "https://[USERNAME].github.io/[YOUR REPO NAME]",
	#package.json file under script
#	"predeploy": "npm run build",
#	"deploy": "gh-pages -d build", 

	npm run deploy
	sleep 300
done	
