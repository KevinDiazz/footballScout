# ⚽ FootballScout

<p align="center">
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/RxJS-B71C1C?style=for-the-badge&logo=reactivex&logoColor=white" alt="RxJS" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
</p>

Aplicación desarrollada como proyecto de aprendizaje para consolidar conocimientos avanzados de Angular (v22), consumiendo la API pública [TheSportsDB](https://www.thesportsdb.com/) para explorar ligas, equipos y jugadores de fútbol en tiempo real.
<<<<<<< HEAD

> 🖼️ *Añade aquí una captura de pantalla o GIF de la aplicación en funcionamiento.*

> 🎥 *Añade aquí el enlace a un demo en vídeo, si lo tienes.*

---

## 👨‍💻 ¿Qué demuestra este proyecto?

Durante el desarrollo de este proyecto he trabajado con conceptos modernos del ecosistema Angular:

✅ Componentes standalone (sin NgModules)
✅ Signals (`signal`, `computed`, `effect`) para gestión de estado reactivo
✅ Nueva sintaxis de control de flujo (`@if`, `@for`, `@else`)
✅ Arquitectura por *features* (`core` / `features` / `shared`)
✅ Servicios e Inyección de Dependencias
✅ Consumo de APIs REST con `HttpClient`
✅ Programación reactiva con RxJS (`forkJoin`, `map`, `tap`, `catchError`, `finalize`, `delay`)
✅ Routing con parámetros dinámicos (`ActivatedRoute`)
✅ Formularios Reactivos (`FormControl`)
✅ Persistencia de estado en `localStorage`
✅ Gestión de estados de carga y error (loading / error / empty)
✅ Animaciones Lottie (`ngx-lottie`)
✅ TypeScript con tipado fuerte (modelos e interfaces de la API)
✅ Diseño Responsive con Tailwind CSS 4
✅ GitFlow y Conventional Commits

---

## 🛠 Stack Tecnológico

| Tecnología     | Uso                                  |
| -------------- | ------------------------------------- |
| Angular 22     | Framework Frontend                    |
| TypeScript     | Tipado estático                       |
| Signals        | Estado reactivo (state management)    |
| RxJS           | Programación reactiva y llamadas HTTP |
| Reactive Forms | Buscador en tiempo real               |
| Tailwind CSS   | Diseño responsive                     |
| ngx-lottie     | Animaciones (loader / error)          |
| Git            | Control de versiones                  |

---

## ✨ Funcionalidades implementadas

### Exploración de fútbol
* 🏆 Listado de las principales ligas (La Liga, Premier League, Serie A, Bundesliga, Ligue 1, MLS)
* 🛡️ Listado de equipos por liga
* 👤 Listado de jugadores por equipo
* 🔎 Buscador en tiempo real de ligas y equipos

### Favoritos
* ⭐ Añadir/eliminar equipos y jugadores a favoritos
* 📌 Panel lateral con pestañas (equipos / jugadores)
* 💾 Persistencia automática en `localStorage`

### Feedback de interfaz
* ⏳ Animación de carga (Lottie) mientras se consulta la API
* ❌ Animación y mensaje de error con opción de reintentar
* 📱 Interfaz responsive adaptada a móvil, tablet y escritorio

---

## 📚 Retos técnicos resueltos

### Gestión de estado con Signals
Sustitución de patrones clásicos de `BehaviorSubject` por `signal()` y `computed()` para exponer estado reactivo directamente desde los servicios (`leagues`, `teams`, `loading`, `error`), simplificando la sincronización entre servicio y componente.

### Orquestación de llamadas HTTP encadenadas
Uso de `forkJoin` para lanzar múltiples peticiones en paralelo (una por cada liga/equipo) y de `catchError` por petición individual, evitando que el fallo de una sola llamada rompa todo el flujo.

### Estados de carga y error consistentes
Cada servicio expone sus propios signals `loading` y `error`, gestionados con `tap` y `finalize`, permitiendo mostrar loaders, mensajes de error y botones de reintento de forma uniforme en toda la aplicación.

### Buscador reactivo
Combinación de `FormControl` (Reactive Forms) con un signal `search` y un `computed()` que filtra ligas y equipos en tiempo real según el texto introducido, sin necesidad de suscripciones manuales en el componente.

### Persistencia de favoritos
Uso de `effect()` para sincronizar automáticamente el signal `favorites` con `localStorage` cada vez que cambia, manteniendo los favoritos del usuario entre sesiones sin lógica adicional en los componentes.

### Arquitectura escalable por features
Organización del código en `core` (servicios transversales), `features` (leagues, teams, players, search-result, auth) y `shared` (componentes, pipes e interfaces reutilizables), facilitando la escalabilidad y el mantenimiento del proyecto.

---

## 🚀 Puesta en marcha

```bash
npm install
ng serve
```

Abre `http://localhost:4200/` en tu navegador.
=======
> <img width="2776" height="1852" alt="image" src="https://github.com/user-attachments/assets/e157ac91-3dca-42de-b80f-928419c39152" />
🎥 **Demo en video del Proyecto:** [FootballScout](https://www.youtube.com/watch?v=11aRbLDwrY4)


---

## 👨‍💻 ¿Qué demuestra este proyecto?

Durante el desarrollo de este proyecto he trabajado con conceptos modernos del ecosistema Angular:

✅ Componentes standalone (sin NgModules)
✅ Signals (`signal`, `computed`, `effect`) para gestión de estado reactivo
✅ Nueva sintaxis de control de flujo (`@if`, `@for`, `@else`)
✅ Arquitectura por *features* (`core` / `features` / `shared`)
✅ Servicios e Inyección de Dependencias
✅ Consumo de APIs REST con `HttpClient`
✅ Programación reactiva con RxJS (`forkJoin`, `map`, `tap`, `catchError`, `finalize`, `delay`)
✅ Routing con parámetros dinámicos (`ActivatedRoute`)
✅ Formularios Reactivos (`FormControl`)
✅ Persistencia de estado en `localStorage`
✅ Gestión de estados de carga y error (loading / error / empty)
✅ Animaciones Lottie (`ngx-lottie`)
✅ TypeScript con tipado fuerte (modelos e interfaces de la API)
✅ Diseño Responsive con Tailwind CSS 4
✅ GitFlow y Conventional Commits

---

## 🛠 Stack Tecnológico

| Tecnología     | Uso                                  |
| -------------- | ------------------------------------- |
| Angular 22     | Framework Frontend                    |
| TypeScript     | Tipado estático                       |
| Tailwind CSS   | Diseño responsive                     |
| Git            | Control de versiones                  |

---

## ✨ Funcionalidades implementadas

### Exploración de fútbol
* 🏆 Listado de las principales ligas (La Liga, Premier League, Serie A, Bundesliga, Ligue 1, MLS)
* 🛡️ Listado de equipos por liga
* 👤 Listado de jugadores por equipo
* 🔎 Buscador en tiempo real de ligas y equipos

### Favoritos
* ⭐ Añadir/eliminar equipos y jugadores a favoritos
* 📌 Panel lateral con pestañas (equipos / jugadores)
* 💾 Persistencia automática en `localStorage`

### Feedback de interfaz
* ⏳ Animación de carga (Lottie) mientras se consulta la API
* ❌ Animación y mensaje de error con opción de reintentar
* 📱 Interfaz responsive adaptada a móvil, tablet y escritorio

---

## 📚 Retos técnicos resueltos

### Gestión de estado con Signals
Sustitución de patrones clásicos de `BehaviorSubject` por `signal()` y `computed()` para exponer estado reactivo directamente desde los servicios (`leagues`, `teams`, `loading`, `error`), simplificando la sincronización entre servicio y componente.

### Orquestación de llamadas HTTP encadenadas
Uso de `forkJoin` para lanzar múltiples peticiones en paralelo (una por cada liga/equipo) y de `catchError` por petición individual, evitando que el fallo de una sola llamada rompa todo el flujo.

### Estados de carga y error consistentes
Cada servicio expone sus propios signals `loading` y `error`, gestionados con `tap` y `finalize`, permitiendo mostrar loaders, mensajes de error y botones de reintento de forma uniforme en toda la aplicación.

### Buscador reactivo
Combinación de `FormControl` (Reactive Forms) con un signal `search` y un `computed()` que filtra ligas y equipos en tiempo real según el texto introducido, sin necesidad de suscripciones manuales en el componente.

### Persistencia de favoritos
Uso de `effect()` para sincronizar automáticamente el signal `favorites` con `localStorage` cada vez que cambia, manteniendo los favoritos del usuario entre sesiones sin lógica adicional en los componentes.

### Arquitectura escalable por features
Organización del código en `core` (servicios transversales), `features` (leagues, teams, players, search-result, auth) y `shared` (componentes, pipes e interfaces reutilizables), facilitando la escalabilidad y el mantenimiento del proyecto.

---
>>>>>>> 4597091a311be0fe75618511b60a23d38edfd0eb
