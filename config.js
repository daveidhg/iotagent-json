/*
 * Copyright 2015 Telefonica Investigación y Desarrollo, S.A.U
 *
 * This file is part of iotagent-json
 *
 * iotagent-json is free software: you can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the License,
 * or (at your option) any later version.
 *
 * iotagent-json is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public
 * License along with iotagent-json.
 * If not, seehttp://www.gnu.org/licenses/.
 *
 * For those usages not covered by the GNU Affero General Public License
 * please contact with::[contacto@tid.es]
 */
var config = {};

/**
 * Configuration for the MQTT binding.
 */
config.mqtt = {
    /**
     * Host where the MQTT Broker is located.
     */
    host: 'localhost',
    /**
     * Port where the MQTT Broker is listening.
     */
    port: 1883,

    /**
     * protocol to use for connecting with the MQTT broker
     * (`mqtt`, `mqtts`, `tcp`, `tls`, `ws`, `wss`)
     */
    //protocol = 'mqtt'

    /**
     * User name for the IoTAgent in the MQTT broker, if authentication is activated.
     */
    //username: ''

    /**
     * Password for the IoTAgent in the MQTT broker, if authentication is activated.
     */
    //password: ''

    /**
     * Set to `false` if using a self-signed certificate.
     * Beware that you are exposing yourself to man in the middle attacks
     */
    //rejectUnauthorized: true

    /**
     * Path to your certification authority for MQTT binding over SSL
     */
    //ca = <path_to_ca>
    /**
     * Path to your private key for MQTT binding over SSL
     */
    // key: <path_to_private_key>
    /**
     * Path to your certificate for MQTT binding over SSL
     */
    // cert: <path_to_cert>

    /**
     * QoS Level: at most once (0), at least once (1), exactly once (2). (default is 2).
     */
    qos: 0,
    /**
     * Retain flag. (default is false.) Normally if a publisher publishes a message to a topic, and no one is
     * subscribed to that topic (i.e retain flag is set to false) the message is simply discarded by the broker.
     * The publisher can tell the broker to keep the last message on that topic by setting the retained message
     * flag to true.
     */
    retain: false,
    /**
     * Number of MQTT connection error retries (default is 5).
     */
    retries: 5,
    /**
     * Time between MQTT connection retries (default is 5 seconds).
     */
    retryTime: 5,
    /**
     * Time to keep connection open between client and MQTT broker (default is 60 seconds)
     */
    keepalive: 60,

    /**
     * Whether to use slashes at the beginning of topic when sending or not
     */
    avoidLeadingSlash: false,

    /**
     * Flag to disable the MQTT transport. (default is false).
     */
    disabled: false
};

/**
 * Configuration for the AMQP binding.
 */
config.amqp = {
    /**
     * Host where the AMQP broker is located.
     */
    host: 'localhost',
    /**
     * Port where the AMQP broker is listening.
     */
    port: 5672,
    /**
     * user name that identifies the IOTA against the AMQP broker (optional).
     */
    // username: 'guest',
    /**
     * password to be used if the username is provided (optional).
     */
    // password: 'guest',
    /**
     *  Exchange in the AMQP broker
     */
    exchange: 'iota-exchange',
    /**
     * Queue in the AMQP broker
     */
    queue: 'iotaqueue',
    /**
     * durable queue flag (default is false).
     */
    options: { durable: true },

    /**
     * Flag to disable the AMQP transport. (default is false).
     */
    disabled: false
};

/**
 * Configuration for the HTTP transport binding.
 */
config.http = {
    /**
     * South Port where the Ultralight transport binding for HTTP will be listening for device requests.
     */
    port: 7896
    /**
     * HTTP Timeout for the http command endpoint (in miliseconds).
     */
    //timeout: 1000
    /**
     * Path to your private key for HTTPS binding
     */
    // key: <path_to_private_key>
    /**
     * Path to your certificate for HTTPS binding
     */
    // cert: <path_to_cert>
};

config.iota = {
    /**
     * Configures the log level. Appropriate values are: FATAL, ERROR, INFO, WARN and DEBUG.
     */
    logLevel: 'DEBUG',
    /**
     * When this flag is active, the IoTAgent will add the TimeInstant attribute to every entity created, as well
     * as a TimeInstant metadata to each attribute, with the current timestamp.
     */
    timestamp: false,
    /**
     * Context Broker configuration. Defines the connection information to the instance of the Context Broker where
     * the IoT Agent will send the device data.
     */
    contextBroker: {
        /**
         * Host where the Context Broker is located.
         */
        host: 'scorpio-provider.127.0.0.1.nip.io',
        /**
         * Port where the Context Broker is listening.
         */
        port: '8080',

        authentication: 'auto',

        // Local testing environment, not critical information
        access_token:
            'eyJhbGciOiJSUzI1NiIsImtpZCI6InVBeUxacVU1blZZT203MGJoVF9SaUozbjk1dkZNdS1jLXhoM2MtNG81c00iLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiZGF0YS1zZXJ2aWNlIl0sImNsaWVudF9pZCI6IiR7RElEfSIsImV4cCI6MTc0NDExNDYwNCwiaXNzIjoiJHtESUR9Iiwia2lkIjoidUF5TFpxVTVuVllPbTcwYmhUX1JpSjNuOTV2Rk11LWMteGgzYy00bzVzTSIsInN1YiI6IiIsInZlcmlmaWFibGVDcmVkZW50aWFsIjp7IkBjb250ZXh0IjpbImh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIiwiaHR0cHM6Ly93d3cudzMub3JnL25zL2NyZWRlbnRpYWxzL3YxIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7ImVtYWlsIjoidGVzdEB1c2VyLm9yZyIsImZpcnN0TmFtZSI6IlRlc3QiLCJsYXN0TmFtZSI6IlJlYWRlciJ9LCJpZCI6InVybjp1dWlkOjA0ZGIzMDlkLTkxOWMtNDIyYS1iYmI2LWM3MDAwZGEzMjY3MSIsImlzc3VhbmNlRGF0ZSI6IjIwMjUtMDMtMjVUMTM6NDg6MzlaIiwiaXNzdWVyIjoiZGlkOmtleTp6RG5hZVRZUTJDWkVmd1Zleml1QnJ3WjN2RktDeVVkU0ZVTHZrRnZaRDY3QUNuQnkzIiwidHlwZSI6WyJVc2VyQ3JlZGVudGlhbCJdfX0.Z2vK5Ff19kTnW5zoJt3o76LnrTKmnf9kyWKu-HgkeCHhu9Y5qnh-4Ui8Dl4tmlSt62QIzW0NVXQJRKSwyP3cUjcSMSWvq7nJhrqgBg-1kWUA50riLcXGzFL0rSKm24xVWdc2hou74vRVoXKnKtxH4kjwq428twxK5FB9AuHoDK95pOnRT8Ho9ar6V7ZjJxtka_5iY9H5HABP36zzIH9MxyA2dbhb1xEw_X0_dVfe_gCVdlxE4GOqAuKG9vtzaN6HwTpp7U2qE6jElD83DhRAB5JM4YkiN-oeFTT_-VXPwnbodQC_M07FOzA_54qN3Do2zbJ6KgxanqUz-L6oiUgAIA',

        VP_token:
            'ZXlKaGJHY2lPaUpGVXpJMU5pSXNJQ0owZVhBaU9pSktWMVFpTENBaWEybGtJam9pWkdsa09tdGxlVHA2Ukc1aFpYVnJZV1J6UVZCTVpFZFVTME5HU201TmFsWTVORkZTVVRRM1ZEWjVOVUk0WkVSTGNVSmtTRmR4WWs1TkluMC5leUpwYzNNaU9pQWlaR2xrT210bGVUcDZSRzVoWlhWcllXUnpRVkJNWkVkVVMwTkdTbTVOYWxZNU5GRlNVVFEzVkRaNU5VSTRaRVJMY1VKa1NGZHhZazVOSWl3Z0luTjFZaUk2SUNKa2FXUTZhMlY1T25wRWJtRmxkV3RoWkhOQlVFeGtSMVJMUTBaS2JrMXFWamswVVZKUk5EZFVObmsxUWpoa1JFdHhRbVJJVjNGaVRrMGlMQ0FpZG5BaU9pQjdDaUFnSUNBaVFHTnZiblJsZUhRaU9pQmJJbWgwZEhCek9pOHZkM2QzTG5jekxtOXlaeTh5TURFNEwyTnlaV1JsYm5ScFlXeHpMM1l4SWwwc0NpQWdJQ0FpZEhsd1pTSTZJRnNpVm1WeWFXWnBZV0pzWlZCeVpYTmxiblJoZEdsdmJpSmRMQW9nSUNBZ0luWmxjbWxtYVdGaWJHVkRjbVZrWlc1MGFXRnNJam9nV3dvZ0lDQWdJQ0FnSUNKbGVVcG9Za2RqYVU5cFNrWlZla2t4VG1sSmMwbHVValZqUTBsblQybEJhVk5zWkZWSmFYZHBZVEpzYTBscFFUWkpRMHByWVZkUk5tRXlWalZQYm5CRlltMUdiRlpHYkZKTmEwNWhVbGRhTTFadFZqWmhXRlpEWTI1a1lVMHpXa2RUTUU0MVZsZFNWRkpzVmsxa2JYUkhaR3h3UlU1cVpFSlJNalZEWlZSTmFXWlJMbVY1U25WWmJWbHBUMnBGTTA1RVNUVk5WRUV4VFZScmMwbHRjREJoVTBrMlNXNVdlV0pxY0RGa1YyeHJUMnBCTUZwSFNYcE5SR3hyVEZScmVFOVhUWFJPUkVsNVdWTXhhVmx0U1RKTVYwMHpUVVJCZDFwSFJYcE5hbGt6VFZOSmMwbHRiSHBqZVVrMlNXMVNjRnBFY0hKYVdHczJaV3RTZFZsWFZsVlhWa1Y1VVRGd1JscHVaRmRhV0hCd1pGVktlV1F4YjNwa2ExcE1VVE5zVmxwR1RrZFdWWGd5WVRCYU1sZHJVVEpPTUVaRVltdEtOVTE1U1hOSmJscHFTV3B3TjBsdVVqVmpSMVZwVDJ4emFWWllUbXhqYTA1NVdsZFNiR0p1VW5CWlYzZHBXRk4zYVdGWVRucGtWMVo1U1dwdmFWcEhiR3RQYlhSc1pWUndObEpITldoYVZsSmFWVlJLUkZkclZtMWtNVnBzWlcxc01WRnVTak5YYWs0eVVtdDBSR1ZXVm10Vk1GcFdWRWhhY2xKdVdtRlNSRmt6VVZWT2RWRnVhM3BKYVhkcFlWaE9lbVJYUm5WWk1sWkZXVmhTYkVscWIzaE9lbEY1VDFSRmQwNVVSVFZNYWtFMFQwUkJkMDFFUVhkTlEzZHBXVE5LYkZwSFZuVmtSMnhvWWtaT01WbHRjR3haTTFGcFQyNXphVnB0Ykhsak0xSlBXVmN4YkVscWIybFdSMVo2WkVOSmMwbHRlR2hqTTFKUFdWY3hiRWxxYjJsVmJWWm9Xa2RXZVVscGQybGFWekZvWVZkM2FVOXBTakJhV0U0d1VVaFdlbHBZU1hWaU0wcHVTVzR3YzBsclFtcGlNalV3V2xob01FbHFjR0pKYldnd1pFaENlazlwT0haa00yUXpURzVqZWt4dE9YbGFlVGg1VFVSRk5Fd3lUbmxhVjFKc1ltNVNjRmxYZUhwTU0xbDRTV2wzYVdGSVVqQmpTRTAyVEhrNU0yUXpZM1ZrZWsxMVlqTktia3d5TlhwTU1rNTVXbGRTYkdKdVVuQlpWM2g2VEROWmVFbHNNVGxtVVM1V01ERXdjMnBUZW1oS1QzbDBMVzl4UlVkT1NEWklSbWRDYVhSQ2JrNWFVVFp5TmpGaU5GOVVaMVJJWHpaVU0zRk9ja3B0ZFdKVmNWcDRaRmRtWlU1MUxYSXRjV1J3ZUdwWWJTMU9Ra0Z0T0MwNE4wbFFaeUlLSUNBZ0lGMHNDaUFnSUNBaWFHOXNaR1Z5SWpvZ0ltUnBaRHByWlhrNmVrUnVZV1YxYTJGa2MwRlFUR1JIVkV0RFJrcHVUV3BXT1RSUlVsRTBOMVEyZVRWQ09HUkVTM0ZDWkVoWGNXSk9UU0lLSUNCOWZRLk1FUUNJQmFianBCSzU2MkJCWm14UVhfdkY1Nk1Fc0U3WU1WM0oyYXE4WmtYUjJKTkFpQWdyemdtMW8tNWFtZkRJSndLWkpFNXduWlFRUzNEUUZ5QmpaMDI1RzV3elE',

        access_token_host: 'http://provider-verifier.127.0.0.1.nip.io:8080/services/data-service/token',

        PEP_host: 'http://mp-data-service.127.0.0.1.nip.io:8080',

        ngsiVersion: 'ld',

        jsonLdContext: {
            id: '@id',
            type: '@type',
            'Air Quality': {
                '@id': 'https://saref.etsi.org/core/AirQuality',
                '@type': 'Property'
            },
            'Gas Resistance': {
                '@id': 'https://w3id.org/sosa/GasResistance',
                '@type': 'Property',
                unit: 'ohms'
            },
            Humidity: {
                '@id': 'https://saref.etsi.org/core/Humidity',
                '@type': 'Property',
                unit: 'r.H.'
            },
            'Index for Air Quality': {
                '@id': 'https://w3id.org/sosa/IndexForAirQuality',
                '@type': 'Property',
                unit: 'calculated index'
            },
            Pressure: {
                '@id': 'https://saref.etsi.org/core/Pressure',
                '@type': 'Property',
                unit: 'hPa'
            },
            'Raw Temperature': {
                '@id': 'https://saref.etsi.org/core/Temperature',
                '@type': 'Property',
                unit: 'Celsius'
            },
            'Relative Humidity': {
                '@id': 'https://saref.etsi.org/core/Humidity',
                '@type': 'Property',
                unit: 'r.H.'
            },
            Temperature: {
                '@id': 'https://saref.etsi.org/core/Temperature',
                '@type': 'Property',
                unit: 'Celsius'
            },
            Timestamp: {
                '@id': 'https://schema.org/DateTime',
                '@type': 'Property',
                format: 'ISO 8601'
            }
        }
    },
    /**
     * Configuration of the North Port of the IoT Agent.
     */
    server: {
        /**
         * Port where the IoT Agent will be listening for NGSI and Provisioning requests.
         */
        port: 4041,

        ngsiVerseion: 'ld'
    },

    /**
     * Configuration for secured access to instances of the Context Broker secured with a PEP Proxy.
     * For the authentication mechanism to work, the authentication attribute in the configuration has to be fully
     * configured, and the authentication.enabled subattribute should have the value `true`.
     *
     * The Username and password should be considered as sensitive data and should not be stored in plaintext.
     * Either encrypt the config and decrypt when initializing the instance or use environment variables secured by
     * docker secrets.
     */
    //authentication: {
    //enabled: false,
    /**
     * Type of the Identity Manager which is used when authenticating the IoT Agent.
     */
    //type: 'keycloak',
    /**
     * Name of the additional header passed to hold the identity of the IoT Agent
     */
    //header: 'X-Auth-Token',
    /**
     * Hostname of the Identity Manager.
     */
    //host: 'localhost',
    /**
     * Port of the Identity Manager.
     */
    //port: '5000',
    /**
     * Username for the IoT Agent - Note this should not be stored in plaintext.
     */
    //user: 'IOTA_AUTH_USER',
    /**
     * Password for the IoT Agent - Note this should not be stored in plaintext.
     */
    //password: 'IOTA_AUTH_PASSWORD',
    /**
     * OAuth2 client ID - Note this should not be stored in plaintext.
     */
    //clientId: 'IOTA_AUTH_CLIENT_ID',
    /**
     * OAuth2 client secret - Note this should not be stored in plaintext.
     */
    //clientSecret: 'IOTA_AUTH_CLIENT_SECRET'
    //},

    /**
     * Defines the configuration for the Device Registry, where all the information about devices and configuration
     * groups will be stored. There are currently just two types of registries allowed:
     *
     * - 'memory': transient memory-based repository for testing purposes. All the information in the repository is
     *             wiped out when the process is restarted.
     *
     * - 'mongodb': persistent MongoDB storage repository. All the details for the MongoDB configuration will be read
     *             from the 'mongodb' configuration property.
     */
    deviceRegistry: {
        type: 'mongodb'
    },
    /**
     * Mongo DB configuration section. This section will only be used if the deviceRegistry property has the type
     * 'mongodb'.
     */
    mongodb: {
        /**
         * Host where MongoDB is located. If the MongoDB used is a replicaSet, this property will contain a
         * comma-separated list of the instance names or IPs.
         */
        host: 'localhost',
        /**
         * Port where MongoDB is listening. In the case of a replicaSet, all the instances are supposed to be listening
         * in the same port.
         */
        port: '27017',
        /**
         * Name of the Mongo database that will be created to store IoT Agent data.
         */
        db: 'iotagentjson'
    },
    /**
     * Types array for static configuration of services. Check documentation in the IoT Agent Library for Node.js for
     *  further details:
     *
     *      https://github.com/telefonicaid/iotagent-json#type-configuration
     */
    types: {},
    /**
     * Default service, for IoT Agent installations that won't require preregistration.
     */
    service: 'howtoService',
    /**
     * Default subservice, for IoT Agent installations that won't require preregistration.
     */
    subservice: '/howto',
    /**
     * URL Where the IoT Agent Will listen for incoming updateContext and queryContext requests (for commands and
     * passive attributes). This URL will be sent in the Context Registration requests.
     */
    providerUrl: 'http://localhost:4041',
    /**
     * Default maximum expire date for device registrations.
     */
    deviceRegistrationDuration: 'P20Y',
    /**
     * Default type, for IoT Agent installations that won't require preregistration.
     */
    defaultType: 'Thing',
    /**
     * Default resource of the IoT Agent. This value must be different for every IoT Agent connecting to the IoT
     * Manager.
     */
    defaultResource: '/iot/json',
    /**
     * flag indicating whether the incoming measures to the IoTAgent should be processed as per the "attributes" field.
     */
    explicitAttrs: false
};

/**
 * map {name: function} of extra transformations avaliable at JEXL plugin
 *  see https://github.com/telefonicaid/iotagent-node-lib/tree/master/doc/expressionLanguage.md#available-functions
 */

config.jexlTransformations = {};

/**
 * flag indicating whether the incoming notifications to the IoTAgent should be processed using the bidirectionality
 * plugin from the latest versions of the library or the JSON-specific configuration retrieval mechanism.
 */
config.configRetrieval = false;
/**
 * Default API Key, to use with device that have been provisioned without a Configuration Group.
 */
config.defaultKey = '1234';
/**
 * Default transport protocol when no transport is provisioned through the Device Provisioning API.
 */
config.defaultTransport = 'MQTT';
/**
 * flag indicating whether the node server will be executed in multi-core option (true) or it will be a
 * single-thread one (false).
 */
//config.multiCore = false;

module.exports = config;
