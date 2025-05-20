/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook  for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');

// ========== HANDLERS PRINCIPALES ========== //
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = '¡Hola! Soy tu asistente Alejandro. ¿En qué puedo ayudarte hoy? Puedes preguntarme por mi creador, mis gustos, la fecha, tu ubicación o la estación del año.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .withShouldEndSession(false)
            .getResponse();
    }
};

const SaludoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SaludoIntent';
    },
    handle(handlerInput) {
        const speakOutput = '¡Hola! Soy tu asistente personal Alejandro. ¿Quieres saber sobre mi creador, mis gustos, la fecha actual, tu ubicación o la estación del año?';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .withShouldEndSession(false)
            .getResponse();
    }
};

// ========== NUEVOS HANDLERS PERSONALES ========== //
const CreadorIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CreadorIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Esta skill fue creada por Alejandro González Romero.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .withShouldEndSession(false)
            .getResponse();
    }
};

const CarreraIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CarreraIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Alejandro estudia Ingeniería en Desarrollo y Gestión de Software.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .withShouldEndSession(false)
            .getResponse();
    }
};

const ColorFavoritoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ColorFavoritoIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Su color favorito es el negro.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .withShouldEndSession(false)
            .getResponse();
    }
};

const MusicaFavoritaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MusicaFavoritaIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Su artista musical favorito es Lil Nas.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .withShouldEndSession(false)
            .getResponse();
    }
};

// ========== HANDLERS EXISTENTES ========== //
const UbicacionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'UbicacionIntent';
    },
    async handle(handlerInput) {
        const { device } = handlerInput.requestEnvelope.context.System;
        if (!device.supportedInterfaces.Geolocation) {
            return handlerInput.responseBuilder
                .speak("Tu dispositivo no soporta geolocalización.")
                .withShouldEndSession(false)
                .getResponse();
        }
        const { permissions } = handlerInput.requestEnvelope.context.System.user;
        if (!permissions || !permissions.consentToken) {
            return handlerInput.responseBuilder
                .speak("Por favor, activa los permisos de ubicación en la app de Alexa.")
                .withAskForPermissionsConsentCard(['alexa::devices:all:geolocation:read'])
                .withShouldEndSession(false)
                .getResponse();
        }
        try {
            const { serviceClientFactory } = handlerInput;
            const upsServiceClient = serviceClientFactory.getUpsServiceClient();
            const { countryCode, postalCode } = await upsServiceClient.getCountryAndPostalCode();
            return handlerInput.responseBuilder
                .speak(`Estás en el código postal ${postalCode}, ${countryCode}`)
                .withShouldEndSession(false)
                .getResponse();
        } catch (error) {
            console.error("Error al obtener ubicación:", error);
            return handlerInput.responseBuilder
                .speak("No pude obtener tu ubicación. Por favor, revisa los permisos en la app de Alexa.")
                .withShouldEndSession(false)
                .getResponse();
        }
    }
};

const DiaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DiaIntent';
    },
    handle(handlerInput) {
        const fecha = new Date().toLocaleDateString('es-MX', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        return handlerInput.responseBuilder
            .speak(`Hoy es ${fecha}`)
            .withShouldEndSession(false)
            .getResponse();
    }
};

const EstacionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'EstacionIntent';
    },
    handle(handlerInput) {
        const mes = new Date().getMonth() + 1;
        let estacion = "invierno";
        if (mes >= 3 && mes <= 5) estacion = "primavera";
        else if (mes >= 6 && mes <= 8) estacion = "verano";
        else if (mes >= 9 && mes <= 11) estacion = "otoño";
        return handlerInput.responseBuilder
            .speak(`Estamos en ${estacion}`)
            .withShouldEndSession(false)
            .getResponse();
    }
};

// ========== HANDLERS ESTÁNDAR ========== //
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Puedes preguntarme sobre mi creador, sus gustos, la fecha actual, tu ubicación o la estación del año. ¿En qué te puedo ayudar?';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .withShouldEndSession(false)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = '¡Hasta luego! Gracias por usar Asistente Alejandro.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .withShouldEndSession(true)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Lo siento, no entendí eso. Puedes preguntarme sobre mi creador, sus gustos, la fecha, tu ubicación o la estación del año.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .withShouldEndSession(false)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        return handlerInput.responseBuilder.getResponse();
    }
};

// ========== MANEJO DE ERRORES ========== //
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);
        const speakOutput = 'Hubo un problema al procesar tu solicitud. Por favor, inténtalo de nuevo.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .withShouldEndSession(false)
            .getResponse();
    }
};

// ========== CONFIGURACIÓN PRINCIPAL ========== //
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        SaludoIntentHandler,
        CreadorIntentHandler,
        CarreraIntentHandler,
        ColorFavoritoIntentHandler,
        MusicaFavoritaIntentHandler,
        UbicacionIntentHandler,
        DiaIntentHandler,
        EstacionIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler
        // IntentReflectorHandler, // Comentado para evitar respuestas inesperadas
    )
    .addErrorHandlers(ErrorHandler)
    .withCustomUserAgent('asistente-alejandro/v1.1')
    .lambda();