curl -X POST -H "Fiware-Service: myProductionline" -H "Fiware-ServicePath: /environment" -H "Content-Type: application/json" -H "Cache-Control: no-cache" -d '{
    "devices": [
        {
            "device_id": "bme680",  
            "apikey": "i",
            "protocol": "PDI-IoTA-UltraLight",
            "entity_name": "urn:ngsi-ld:bme680",
            "entity_type": "multiSensor",
            "attributes": [     
                  { "object_id": "aq", "name": "Air Quality", "type": "VOC" },    
                  { "object_id": "gr", "name": "Gas Resistance", "type": "ohms" },
                  { "object_id": "h", "name": "Humidity", "type": "r.H."},
                  { "object_id": "iaq", "name": "Index for Air Quality", "type": "calculated index"},
                  { "object_id": "p", "name": "Pressure", "type": "hPa"},
                  { "object_id": "rh", "name": "Relative Humidity", "type": "r.H."},
                  { "object_id": "rt", "name": "Raw Temperature", "type": "celcius"},
                  { "object_id": "t", "name": "Temperature", "type": "celcius"},
                  { "object_id": "ts", "name": "Timestamp", "type": "ISO 8601"} 
            ]
        }
    ]
}

' 'http://localhost:4041/iot/devices/'
