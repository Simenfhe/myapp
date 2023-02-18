# Komme inn på serveren:

#### i cmd:

#### ssh pi@85.166.3.96

#### yes

#### passord er hellesnes

# for å skru på serveren

## om serveren ikke er på:

#### ./serverstart.sh (sjekk at du er i /home/pi, skal være der du lander etter ssh)

#### mulig du må akseptere merg, bare trykk ctrl + x

#### ctrl + z

#### bg

#### disown -h

## Om den er på eller usikker:

#### killall node

#### ./serverstart.sh

#### ctrl + z

#### bg

#### disown -h

begge disse tar først git pull også starter serveren
så den skal være oppdatert i forhold til github repo

# https://github.com/Simenfhe/myapp.git
