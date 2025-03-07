curl -X POST -H "Fiware-Service: myProductionline" -H "Fiware-ServicePath: /environment" -H "Content-Type: application/json" -H "Cache-Control: no-cache" -d '{
    "services": [
      {
          "resource": "/iot/json",
          "apikey": "i",
          "type": "multiSensor",
          "ngsiVersion": "ld"
      }
    ]
}

' 'http://localhost:4041/iot/services'
