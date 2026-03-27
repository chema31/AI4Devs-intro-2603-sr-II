# Registro de prompts y respuestas

## Metadata

- **Chat**: Cursor Chat (IDE)
- **Modelo**: GPT-5.2
- **Repositorio**: `AI4Devs-intro-2603-sr-II`
- **Inicio del registro**: 2026-03-27

---

## Conversación 2026-03-27

### Usuario

Acabo de crear un fork de este proyecto en git@github.com:chema31/AI4Devs-intro-2603-sr-II.git. Dime si necesitas algo para hacer que usemos mi fork en lugar del principal aquí

### Asistente

Sí: para que este workspace use tu fork como remoto principal, solo necesito que me digas (o ejecutes y me pegues la salida de) `git remote -v` para ver cómo están `origin`/`upstream` ahora.

Mientras tanto, aquí tienes las dos opciones típicas:

Opción A (recomendada): `origin` = tu fork, `upstream` = repo original

```bash
git remote set-url origin git@github.com:chema31/AI4Devs-intro-2603-sr-II.git
git remote add upstream <URL_DEL_REPO_ORIGINAL>
git remote -v
```

Opción B: renombrar el actual `origin` a `upstream` y poner tu fork como `origin`

```bash
git remote rename origin upstream
git remote add origin git@github.com:chema31/AI4Devs-intro-2603-sr-II.git
git remote -v
```

Dime cuál prefieres (A o B) y pásame el `git remote -v` actual (o el URL del repo original) y te lo dejo perfecto para trabajar siempre contra tu fork.

### Usuario

Aplica la opción A

### Asistente

Perfecto. Voy a comprobar los remotos actuales y luego dejar `origin` apuntando a tu fork, manteniendo (si existe) `upstream` para el repo original.

### Asistente

Ahora mismo `origin` apunta al repo principal (`LIDR-academy`). Voy a cambiar `origin` a tu fork y añadir `upstream` apuntando al original.

### Asistente

Listo: opción A aplicada

- `origin` ahora apunta a tu fork: `git@github.com:chema31/AI4Devs-intro-2603-sr-II.git`
- `upstream` apunta al repo principal: `git@github.com:LIDR-academy/AI4Devs-intro-2603-sr-II.git`

Si quieres, lo siguiente típico es `git fetch upstream` para poder traer cambios del principal cuando haga falta.

### Usuario

crea un directorio chema en el que vamos a registrar todo nuestro trabajo. Este directorio, debe contener a su vez un directorio de documentación en el que registremos las peticiones que te haga y un archivo prompts.md en el que se almacenen todas nuestras conversaciones. Tanto mis prompts de texto como tus respuestas. Debes añadir una cabecera para indicar la versión de chat a través de la que interactuamos, así como el modelo que estás usando para conversar y procesar lo que te pido. Dime si necesitas más información para hacer esto

### Asistente

Voy a crear `chema/` con `chema/documentacion/` y dejar inicializados `prompts.md` (con cabecera de versión/modelo y el log de lo hablado hasta ahora) y un primer documento en `documentacion/` para ir registrando tus peticiones. No necesito más info para hacerlo.

### Usuario

Ahora quiero que crees un contexto para que mantengas durante el resto de este trabajo. Para ello te doy las siguientes indicaciones y quiero que me preguntes cualquier cosa que me pueda faltar por indicarte: A partir de ahora eres un desarrollador fullstack experto en Javascript, muy detallista y cuidadoso con buenas prácticas de programación y que vela por mantener la calidad de su código y evitar rebotes en la fase de QA. Quiero que crees tests unitarios de cada funcionalidad que desarrollemos y que los ejecutees siempre antes de dar la tarea for finalizada. También quiero que mantengas la documentación del trabajo realizado. ¿Necesitas algo más para cubrir tu contexto?

### Asistente

Mantengo ese contexto a partir de ahora (fullstack JS, foco en calidad/QA, tests unitarios por funcionalidad, ejecutarlos antes de cerrar, y documentación al día). Para cubrirlo bien me faltan algunos datos prácticos del proyecto y de cómo quieres trabajar. Te los pregunto en el chat.

### Usuario

1. fronted vanilla. 2. el que tenga mejores valoraciones en internet para trabajos front sin back ágiles. 3. realizaremos el trabajo dentro del directorio chema que has creado. el resto de ficheros de este repositorio son un apoyo de ejemplo para realizar tu trabajo. Prefiero npm. 4. Buscaremos una cobertura del 80%. 5. Quiero un doc por feature

### Asistente

Entendido. Trabajaremos dentro de `chema/` (ignorando el resto como soporte), usaremos npm, mantendremos cobertura mínima del 80% y haremos un doc por feature. Para tests unitarios en front ágil usaré Vitest (muy bien valorado por rapidez y DX) con `jsdom` para poder testear el DOM.

### Usuario

Quiero que las iniciales sean CHDLN

### Asistente

Entendido. Renombro la carpeta de la feature a `reversestring-CHDLN`, actualizo referencias y vuelvo a ejecutar los tests para validar que todo sigue correcto.

### Usuario

¿Necesitas algo más por definir para estar preparado antes de que te diga las especificaciones concretas de la aplicación que queremos desarrollar?

### Asistente

Solo 4 cosas para arrancar sin fricción: navegadores objetivo, estilo de UI, arquitectura vanilla modular, y criterio de “Done” (tests+lint/format+coverage). También registré que dejaríamos configurado ESLint + Prettier para cumplirlo.

### Usuario

1. Responsive design en los navegadores mínimos que has comentado y Safari. 2. Debes ser cuidados con el detalle y el UX. Añade a tus skills la de front completo con habilidades CSS avanzadas y un alto nivel de detalle y quiero que lo apliques haciendo una interfaz funcional y bonita, con detalles como que el botón no se active hasta que haya contenido en el input. 3. vanilla modular 4. sí, me parece bien

### Asistente

Entendido. A partir de ahora el objetivo incluye responsive en Chrome/Firefox/Edge y Safari, UX muy cuidada con CSS avanzado, vanilla modular y “Done” = tests+coverage 80%+lint+format. Configuro ESLint + Prettier en `chema/` para dejarlo listo antes de las specs.

### Usuario

Hay que añadir el detalle de que quiero que la página web tenga como título "Reverse string de Chema"

### Asistente

Entendido. Actualizo la documentación y el HTML para que el título de la página (y el encabezado visible) sea “Reverse string de Chema”, y valido con tests+lint+format.

### Usuario

Ok, ya está listo para que realices la implementación; aunque me parece que ya lo has hecho mientras definíamos la Spec

### Asistente

Correcto: la funcionalidad base ya estaba hecha, pero faltaba alinear un detalle de la spec (botón deshabilitado hasta que haya texto no-espacio). Lo implementé y ajusté los tests, validando con `npm test`, `npm run lint` y `npm run format:check`.

### Usuario

leváname un browser para probarlo manualmente

### Asistente

Levanté un servidor estático local para poder probarlo manualmente en el navegador desde `chema/reversestring-CHDLN/` y lo dejé accesible en `http://localhost:5173/`.

### Usuario

Asegura que tengamos toda la documentación actualizada, ya que creo que ha quedado parte de nuestra conversación sin documentar

### Asistente

Revisé `chema/prompts.md`, `chema/documentacion/peticiones.md` y el doc de la feature para detectar huecos. Añadí el arranque del servidor local y este chequeo de documentación para mantener el registro completo y cronológico.
