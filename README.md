# Registro ISSSTE

Registro de asistencia con nombre, correo, género y año de nacimiento. No solicita teléfono.

Hoja de destino: https://docs.google.com/spreadsheets/d/17_VRYMmUkFfsENOKJleESWdLyeLIvN2bmk-iF8oI-Gs/edit

## Activación pendiente

El código apps-script/Code.gs ya apunta a la nueva hoja. Copiarlo en el proyecto de Apps Script de ISSSTE e implementarlo como aplicación web. Después configurar WEBHOOK_URL en index.html con su dirección /exec.

Mientras WEBHOOK_URL esté vacío, el formulario no envía datos. La hoja debe tener en su primera pestaña las columnas: Fecha y hora, Nombre, Correo, Género, Año de nacimiento.

El sitio confirma el registro únicamente tras recibir status: success de Apps Script.
