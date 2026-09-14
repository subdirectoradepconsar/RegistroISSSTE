# Registro ISSSTE

Registro de asistencia independiente, con nombre, correo, género y año de nacimiento. No solicita teléfono.

## Conexión pendiente

1. Definir la nueva hoja con columnas: Fecha y hora, Nombre, Correo, Género, Año de nacimiento.
2. Sustituir PENDIENTE_ID_HOJA_ISSSTE en apps-script/Code.gs por el ID de la nueva hoja.
3. Implementar ese código en un proyecto de Apps Script propio de ISSSTE.
4. Configurar WEBHOOK_URL en index.html con la URL /exec de esa implementación.

Mientras WEBHOOK_URL esté vacío, el formulario no envía datos. El código escribe en la primera pestaña de la hoja y confirma el guardado antes de mostrar éxito.

El banner S1.png fue proporcionado para este proyecto y conserva el texto “Encuesta de satisfacción”.
