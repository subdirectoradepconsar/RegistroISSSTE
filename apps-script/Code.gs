function doPost(e) {
  try {
    var libro = SpreadsheetApp.openById("17_VRYMmUkFfsENOKJleESWdLyeLIvN2bmk-iF8oI-Gs");
    var hoja = libro.getSheets()[0];

    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("No se recibieron datos. Prueba enviando el formulario del sitio.");
    }

    var data = JSON.parse(e.postData.contents);

    hoja.appendRow([
      new Date(),
      data.nombreCompleto || "-",
      data.correo || "-",
      data.genero || "-",
      data.anioNacimiento || data.anoNacimiento || data.fechaNacimiento || "-"
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({
        status: "success",
        message: "Asistencia ISSSTE registrada"
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "error",
        message: String(error)
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
