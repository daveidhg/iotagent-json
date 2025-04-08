curl http://scorpio-provider.127.0.0.1.nip.io:8080/ngsi-ld/v1/subscriptions -s -S -H 'Content-Type: application/json' -d '{
  "id": "urn:subscription:2",
  "type": "Subscription",
  "entities": [{
  	 "id": "urn:ngsi-ld:multiSensor:bme680",
         "type": "multiSensor"
       }],
 "notification": {
  "endpoint": {
   "uri": "mqtts://ics.cyblab.net:8883/multiSensor/bme680",
   "accept": "application/json",
   "receiverInfo": [
        {
          "key": "username",
          "value": "hiof_david_ics"
        },
        {
          "key": "password",
          "value": "sPGMgZdVtvKAsyflWerS2vgTSC8aU9II8mjs9lecEJtmtFyQ"
        }
      ]
  }
 }
}'
