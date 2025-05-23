# AlexaSkills-PracticaPreguntas - Práctica 3: Asistente Personal Alejandro

<div align="center">
  <img src="/img/logo_carrera.jpg" alt="Logo Carrera" align="left" width="200"/>
  <img src="/img/utxj_logo.png" alt="Logo Universidad" align="right" width="200"/>
</div>

<br clear="both"/>
<br/>

<div align="center">
  <h3>UNIVERSIDAD TECNOLOGICA DE XICOTEPEC DE JUAREZ</h3>
</div>

**Materia:** Extracción de Conocimiento en Bases de Datos
**Matrícula:** 220138
**Alumno:** Alejandro González Romero
**Práctica 03:** Asistente Personal con Alexa Skills

---

## 🎯 Descripción
Skill de Alexa que funciona como asistente personal llamado **"Alejandro"**, capaz de responder:

- Información sobre su creador
- Gustos y preferencias personales
- Fecha y hora actual
- Ubicación del usuario
- Estación del año actual

## ✨ Funcionalidades Principales
| Categoría | Funcionalidad | Ejemplo |
|-----------|---------------|---------|
| ℹ️ Información | Datos del creador | "¿Quién te desarrolló?" |
| 🎨 Preferencias | Gustos personales | "¿Cuál es tu color favorito?" |
| 📅 Tiempo | Fecha y estación | "¿Qué día es hoy?" |
| 📍 Ubicación | Geolocalización | "¿Dónde estoy?" |


## ✅ Actividades realizadas

- ✔️ **Agregar nuevos intents personalizados**
  Se crearon los siguientes intents:
  - `CreadorIntent`
  - `CarreraIntent`
  - `ColorFavoritoIntent`
  - `MusicaFavoritaIntent`

- ✔️ **Agregar disposiciones (utterances) para cada intent**
  - `CreadorIntent`:
    - "¿Quién creó esta aplicación?"
    - "¿Quién te hizo?"
    - "¿Quién es tu creador?"

  - `CarreraIntent`:
    - "¿Qué está estudiando?"
    - "¿Qué carrera estudia?"

  - `ColorFavoritoIntent`:
    - "¿Qué color le gusta más?"
    - "¿Cuál es su color favorito?"

  - `MusicaFavoritaIntent`:
    - "¿Qué música le gusta?"
    - "¿Cuál es su grupo favorito?"

- ✔️ **Programación de respuestas estáticas**
  Cada intent devuelve una respuesta fija y clara.

- ✔️ **Despliegue de la skill**
  La skill fue implementada exitosamente usando la consola de desarrollador de Alexa.

- ✔️ **Pruebas**
  Se realizaron pruebas funcionales para confirmar que cada intent responde correctamente a las preguntas del usuario.

---

## 🛠️ Tecnologías utilizadas
- Node.js
- Alexa Skills Kit SDK para Node.js
- Amazon Developer Console
- AWS Lambda

## 🚀 Cómo usar esta skill
1. Clona este repositorio.
2. Crea una nueva Skill en el [Amazon Developer Console](https://developer.amazon.com/alexa/console/ask).
3. Copia el código del manejador de intents en una función Lambda en AWS.
4. Conecta la Skill con tu función Lambda.
5. Prueba la Skill en el simulador de Alexa o en un dispositivo físico.

## 📁 Estructura del proyecto
```
AlexaSkills-PracticaPreguntas/
├── logo_carrera.jpg
├── logo_universidad.png
├── README.md
├── skill.json
│
├── interactionModels/
│ └── custom/
│ └── es-MX.json (modelo de interacción)
│
└── lambda/
├── index.js (lógica principal)
├── package.json
├── util.js (funciones auxiliares)
└── local-debugger.js (para pruebas locales)
```

## 📷 Imágenes

<div align="center">
  <img src="/img/intents.png" alt="Custom" width="800"/>
  <br/>
  <img src="/img/code.png" alt="Code" width="800"/>
  <br/>
  <img src="/img/test.png" alt="Test" width="800"/>
</div>

---

## 👤 Autor
- Nombre: Alejandro Gonzalez Romero
- Carrera: Ingeniería en Desarrollo y Gestión de Software
- Universidad: Universidad Tecnológica de Xicotepec de Juárez

## 📝 Licencia
Este proyecto se encuentra bajo la Licencia MIT.
