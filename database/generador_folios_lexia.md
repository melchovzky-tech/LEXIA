# Generador de Folios – LEX-IA CASE

## 1. Nombre del documento

**Diseño del generador de folios para expedientes LEX-IA CASE**

## 2. Propósito

Este documento define la estructura, reglas y funcionamiento preliminar del generador de folios de LEX-IA CASE.

El folio será el identificador único de cada expediente formal dentro de la plataforma. Permitirá dar seguimiento al caso, vincular documentos, relacionar al cliente con el abogado asignado, registrar actuaciones y conservar continuidad aun cuando exista cambio de abogado.

## 3. Importancia del folio

El folio será una pieza central dentro de LEX-IA CASE porque permitirá:

* Identificar cada expediente de manera única.
* Consultar el caso dentro del sistema.
* Relacionar documentos con un expediente.
* Vincular cliente, abogado y plataforma.
* Dar seguimiento al estado del asunto.
* Mantener trazabilidad.
* Evitar pérdida de información.
* Facilitar el cambio de abogado.
* Organizar estadísticas por materia y jurisdicción.
* Evitar duplicidad de expedientes.

## 4. Diferencia entre diagnóstico preliminar y expediente con folio

En la Fase 1, el usuario puede generar un diagnóstico preliminar sin estar registrado formalmente.

En esa etapa se puede descargar un expediente inicial, pero todavía no debe existir un folio privado real.

El folio formal debe generarse en Fase 2, cuando:

* El usuario decide continuar.
* El cliente crea cuenta.
* El sistema valida datos básicos.
* Se abre expediente privado.
* El asunto se prepara para revisión profesional.
* Se activa LEX-IA CASE.

## 5. Estructura general del folio

El formato sugerido del folio será:

**LEX-IA-MAT-EST-AÑO-CONSECUTIVO**

Ejemplo:

**LEX-IA-LAB-GRO-2026-000014**

Donde:

* **LEX-IA** identifica la plataforma.
* **LAB** identifica la materia jurídica.
* **GRO** identifica la jurisdicción.
* **2026** identifica el año de apertura.
* **000014** identifica el número consecutivo.

## 6. Elementos del folio

### 6.1 Identificador de plataforma

El primer elemento siempre será:

**LEX-IA**

Esto permite reconocer que el expediente pertenece a la plataforma.

### 6.2 Código de materia

El segundo elemento identifica la materia jurídica del asunto.

Ejemplos:

| Código | Materia               |
| ------ | --------------------- |
| LAB    | Laboral               |
| FAM    | Familiar              |
| SUC    | Sucesorio             |
| CIV    | Civil                 |
| MER    | Mercantil             |
| ADM    | Administrativo        |
| PEN    | Penal                 |
| AMP    | Amparo                |
| FIS    | Fiscal                |
| ARR    | Arrendamiento         |
| MIG    | Migratorio            |
| PRO    | Propiedad intelectual |

### 6.3 Código de jurisdicción

El tercer elemento identifica el estado o jurisdicción principal del asunto.

Ejemplos:

| Código | Estado              |
| ------ | ------------------- |
| AGS    | Aguascalientes      |
| BC     | Baja California     |
| BCS    | Baja California Sur |
| CAMP   | Campeche            |
| CHIS   | Chiapas             |
| CHIH   | Chihuahua           |
| CDMX   | Ciudad de México    |
| COAH   | Coahuila            |
| COL    | Colima              |
| DGO    | Durango             |
| MEX    | Estado de México    |
| GTO    | Guanajuato          |
| GRO    | Guerrero            |
| HGO    | Hidalgo             |
| JAL    | Jalisco             |
| MICH   | Michoacán           |
| MOR    | Morelos             |
| NAY    | Nayarit             |
| NL     | Nuevo León          |
| OAX    | Oaxaca              |
| PUE    | Puebla              |
| QRO    | Querétaro           |
| QROO   | Quintana Roo        |
| SLP    | San Luis Potosí     |
| SIN    | Sinaloa             |
| SON    | Sonora              |
| TAB    | Tabasco             |
| TAMPS  | Tamaulipas          |
| TLAX   | Tlaxcala            |
| VER    | Veracruz            |
| YUC    | Yucatán             |
| ZAC    | Zacatecas           |

### 6.4 Año de apertura

El cuarto elemento corresponde al año en que se creó el expediente formal.

Ejemplo:

**2026**

Esto permite ordenar expedientes por año y facilitar auditorías, reportes y estadísticas.

### 6.5 Número consecutivo

El quinto elemento corresponde al consecutivo del expediente.

Ejemplo:

**000014**

El consecutivo deberá generarse automáticamente por el sistema y no deberá modificarse manualmente.

## 7. Ejemplos de folios

| Folio                       | Interpretación                                                   |
| --------------------------- | ---------------------------------------------------------------- |
| LEX-IA-LAB-GRO-2026-000014  | Expediente laboral en Guerrero, abierto en 2026                  |
| LEX-IA-FAM-CDMX-2026-000008 | Expediente familiar en Ciudad de México, abierto en 2026         |
| LEX-IA-SUC-BCS-2026-000003  | Expediente sucesorio en Baja California Sur, abierto en 2026     |
| LEX-IA-CIV-VER-2027-000121  | Expediente civil en Veracruz, abierto en 2027                    |
| LEX-IA-ARR-MEX-2027-000044  | Expediente de arrendamiento en Estado de México, abierto en 2027 |

## 8. Regla de generación automática

El folio deberá generarse automáticamente cuando se cree un expediente formal en LEX-IA CASE.

El sistema deberá tomar:

1. La materia jurídica.
2. La jurisdicción.
3. El año actual.
4. El siguiente número consecutivo disponible.

Ejemplo:

Si ya existe el expediente:

**LEX-IA-LAB-GRO-2026-000014**

El siguiente expediente laboral en Guerrero en 2026 deberá ser:

**LEX-IA-LAB-GRO-2026-000015**

## 9. Reglas para evitar folios duplicados

Para evitar duplicidad, el sistema deberá aplicar las siguientes reglas:

* El folio debe ser único en toda la base de datos.
* No debe permitirse crear dos expedientes con el mismo folio.
* La generación del consecutivo debe hacerse desde backend.
* El usuario no debe capturar manualmente el folio.
* La base de datos debe tener restricción de unicidad sobre el campo `folio`.
* El sistema debe validar antes de guardar.
* Si ocurre conflicto, deberá intentar generar el siguiente consecutivo.
* Todo intento fallido debe registrarse en bitácora técnica.

## 10. Momento en que debe generarse el folio

El folio debe generarse cuando el expediente pasa de consulta preliminar a expediente formal.

Flujo sugerido:

1. Usuario realiza diagnóstico en Fase 1.
2. Usuario decide continuar.
3. Usuario crea cuenta o inicia sesión.
4. Usuario confirma que desea abrir expediente formal.
5. El sistema crea expediente en base de datos.
6. El sistema genera folio.
7. El folio se muestra al cliente.
8. El expediente queda disponible en el panel privado.

## 11. Folio y privacidad

El folio no debe permitir acceso público al expediente.

Aunque una persona conozca el folio, no debe poder consultar documentos ni información sensible sin autenticación.

Para consultar un expediente con folio, el sistema deberá requerir:

* Cuenta registrada.
* Contraseña.
* Relación autorizada con el expediente.
* Rol permitido.
* Validación de sesión.

El folio sirve para identificar, no para abrir públicamente el caso.

## 12. Relación del folio con el cliente

Cada folio deberá estar vinculado a un cliente titular.

Un cliente podrá tener varios expedientes.

Ejemplo:

* Cliente 001 puede tener:

  * LEX-IA-LAB-GRO-2026-000014
  * LEX-IA-FAM-GRO-2026-000021
  * LEX-IA-SUC-GRO-2027-000002

El cliente solo podrá ver folios asociados a su cuenta.

## 13. Relación del folio con el abogado

Cada folio podrá estar asignado a uno o varios abogados a lo largo del tiempo.

El expediente tendrá un abogado activo, pero conservará historial de abogados anteriores.

Esto permitirá:

* Saber qué abogado atendió cada etapa.
* Registrar cambio de abogado.
* Conservar continuidad.
* Evitar pérdida de información.
* Permitir auditoría interna.

## 14. Cambio de abogado y folio

Si el abogado abandona el caso o el cliente solicita cambio, el folio no debe cambiar.

El folio permanece como identificador del expediente.

Lo que cambia es:

* Abogado activo.
* Estado del expediente.
* Bitácora.
* Responsables de tareas.
* Notificaciones.

Esto permite que el nuevo abogado retome el expediente con el mismo folio.

## 15. Relación del folio con documentos

Todo documento cargado deberá vincularse al folio del expediente.

Esto permitirá saber que un documento pertenece a un caso específico.

Ejemplo:

* Folio: LEX-IA-LAB-GRO-2026-000014
* Documento: contrato_trabajo.pdf
* Categoría: contrato
* Subido por: cliente
* Fecha: 10/06/2026

Los documentos no deben quedar sueltos ni sin expediente asociado.

## 16. Relación del folio con bitácora

Toda actuación relevante deberá registrarse en la bitácora del folio.

Ejemplos:

* Expediente creado.
* Documento cargado.
* Abogado asignado.
* Documento revisado.
* Cambio de estado.
* Mensaje enviado.
* Solicitud de documento faltante.
* Cambio de abogado.
* Expediente cerrado.

Esto permitirá reconstruir la historia del caso.

## 17. Relación del folio con pagos

En una fase posterior, LEX-IA PAY podrá vincular pagos al folio.

Ejemplos:

* Pago por revisión inicial.
* Pago por integración documental.
* Pago por elaboración de escrito.
* Pago por etapa procesal.
* Comisión de plataforma.

Cada pago deberá estar asociado al folio para claridad y trazabilidad.

## 18. Folios por materia y jurisdicción

El sistema podrá manejar consecutivos por materia, jurisdicción y año.

Ejemplo:

* LAB-GRO-2026 tendrá su propia secuencia.
* FAM-GRO-2026 tendrá otra.
* LAB-CDMX-2026 tendrá otra.
* SUC-BCS-2026 tendrá otra.

Esto permite ordenar mejor los expedientes.

Otra opción es manejar un consecutivo general para toda la plataforma. Sin embargo, para efectos de organización jurídica, se recomienda usar consecutivo por materia, jurisdicción y año.

## 19. Formato recomendado del consecutivo

El consecutivo debe tener al menos seis dígitos.

Ejemplo:

* 000001
* 000002
* 000003
* 000014
* 000121
* 001254

Esto permite crecer sin alterar el formato.

## 20. Reglas de legibilidad

El folio debe ser fácil de leer.

Reglas sugeridas:

* Usar mayúsculas.
* Separar bloques con guiones.
* No usar espacios.
* No usar caracteres especiales.
* No usar acentos.
* No usar nombres completos de personas.
* No incluir datos sensibles.
* No incluir CURP, teléfono o correo.
* No incluir nombre del cliente.

## 21. Datos que no deben formar parte del folio

Por seguridad y privacidad, el folio no debe incluir:

* Nombre del cliente.
* Apellidos del cliente.
* CURP.
* RFC.
* Teléfono.
* Correo electrónico.
* Dirección.
* Nombre del abogado.
* Información sensible del caso.
* Número de documento personal.

El folio debe ser identificador operativo, no dato personal.

## 22. Posible función técnica para generar folio

En backend, una función preliminar podría seguir esta lógica:

```text
generarFolio(materia, jurisdiccion, año):
    obtener codigo de materia
    obtener codigo de jurisdiccion
    buscar ultimo consecutivo para materia + jurisdiccion + año
    sumar 1
    convertir consecutivo a formato de seis digitos
    unir elementos con guiones
    validar que no exista en base de datos
    guardar folio
```

Ejemplo de resultado:

```text
LEX-IA-LAB-GRO-2026-000015
```

## 23. Ejemplo de pseudocódigo

```javascript
function generarFolio(materiaCodigo, jurisdiccionCodigo, anio, consecutivo) {
  const numero = String(consecutivo).padStart(6, "0");
  return `LEX-IA-${materiaCodigo}-${jurisdiccionCodigo}-${anio}-${numero}`;
}
```

Ejemplo:

```javascript
generarFolio("LAB", "GRO", 2026, 14);
```

Resultado:

```text
LEX-IA-LAB-GRO-2026-000014
```

## 24. Validación del folio

Antes de guardar un expediente, el sistema deberá validar:

* Que la materia exista.
* Que la jurisdicción exista.
* Que el año sea correcto.
* Que el consecutivo sea numérico.
* Que el folio no exista previamente.
* Que el expediente tenga cliente asociado.
* Que el folio se genere desde backend.

## 25. Consulta por folio

La consulta por folio deberá estar protegida.

Flujo sugerido:

1. Usuario inicia sesión.
2. Usuario ingresa folio o selecciona expediente.
3. Backend verifica que el usuario esté relacionado con el folio.
4. Si tiene permiso, muestra expediente.
5. Si no tiene permiso, bloquea acceso.
6. El intento puede registrarse en bitácora de seguridad.

## 26. Folio en panel del cliente

El panel del cliente deberá mostrar el folio de manera visible.

Ejemplo:

**Expediente:** LEX-IA-LAB-GRO-2026-000014
**Materia:** Laboral
**Estado:** En revisión profesional
**Abogado:** Pendiente de asignación

## 27. Folio en panel del abogado

El panel del abogado deberá permitir buscar y filtrar expedientes por folio.

Ejemplo:

* Mis expedientes asignados.
* Filtrar por materia.
* Filtrar por estado.
* Filtrar por etapa.
* Buscar por folio.

Esto permitirá al abogado trabajar de forma organizada.

## 28. Folio en panel administrador

El panel administrador deberá utilizar el folio para supervisar expedientes.

Podrá buscar:

* Expedientes activos.
* Expedientes sin abogado.
* Expedientes con documentos pendientes.
* Expedientes con retraso.
* Expedientes con cambio de abogado.
* Expedientes cerrados.
* Expedientes reportados.

## 29. Folio y reportes

El folio permitirá generar reportes internos.

Ejemplos:

* Número de casos laborales por estado.
* Número de expedientes abiertos por año.
* Expedientes con abandono de abogado.
* Expedientes con documentos pendientes.
* Materias con mayor demanda.
* Estados con mayor número de consultas.
* Tiempo promedio de atención.

## 30. Riesgos relacionados con folios

Riesgos posibles:

* Folios duplicados.
* Folios generados manualmente.
* Folios con datos personales.
* Acceso público indebido por folio.
* Alteración de folios.
* Falta de consecutivo claro.
* Pérdida de relación entre folio y expediente.
* Cambio de folio durante el proceso.
* Consulta no autorizada.

## 31. Medidas de control

Medidas recomendadas:

* Generar folios solo desde backend.
* Validar unicidad en base de datos.
* No permitir edición manual.
* No incluir datos personales.
* Asociar folio a cliente y expediente.
* Proteger consulta por autenticación.
* Registrar accesos relevantes.
* Mantener historial de cambios de abogado.
* Vincular documentos y bitácoras al folio.
* Bloquear folios duplicados.

## 32. Tabla sugerida: case_sequences

Para manejar consecutivos, se recomienda crear una tabla o colección específica.

### Tabla: case_sequences

| Campo             | Tipo sugerido | Descripción                 |
| ----------------- | ------------- | --------------------------- |
| id                | UUID / entero | Identificador               |
| matter_code       | texto         | Código de materia           |
| jurisdiction_code | texto         | Código de estado            |
| year              | número        | Año                         |
| last_number       | número        | Último consecutivo generado |
| updated_at        | fecha         | Última actualización        |

Ejemplo:

| matter_code | jurisdiction_code | year | last_number |
| ----------- | ----------------- | ---- | ----------- |
| LAB         | GRO               | 2026 | 14          |
| FAM         | CDMX              | 2026 | 8           |
| SUC         | BCS               | 2026 | 3           |

Cuando se cree un nuevo expediente LAB-GRO-2026, el sistema leerá `last_number = 14`, sumará 1 y generará `000015`.

## 33. Tabla sugerida: cases

El folio se guardará en la tabla principal de expedientes.

### Campo relevante

| Campo | Tipo sugerido | Descripción                |
| ----- | ------------- | -------------------------- |
| folio | texto único   | Folio único del expediente |

La base de datos deberá marcar este campo como único.

## 34. Estados del folio

El folio puede mantenerse activo aunque el expediente cambie de estado.

Estados del expediente relacionados:

* Expediente creado.
* En revisión profesional.
* Abogado asignado.
* En integración.
* En trámite.
* Transferido.
* Cerrado.
* Cancelado.

El folio no cambia por el estado.

## 35. Cancelación de expediente

Si un expediente se cancela, el folio no debe reutilizarse.

Regla:

**Un folio generado nunca debe reciclarse.**

Esto evita confusión, pérdida de trazabilidad o conflicto con registros anteriores.

## 36. Integración futura con documentos físicos

En caso de que en el futuro LEX-IA maneje documentos físicos o acuses, el folio podrá imprimirse en:

* Carátula del expediente.
* Recibos de documentos.
* Acuses internos.
* Reportes.
* Comunicaciones.
* Resúmenes del caso.

## 37. Integración futura con códigos QR

En una fase posterior, el folio podría vincularse con un código QR.

Este código no debe abrir directamente el expediente público, sino llevar a una pantalla segura de autenticación.

El QR podría servir para:

* Identificar expediente.
* Facilitar consulta interna.
* Vincular documentos.
* Agilizar recepción de archivos.
* Mejorar administración.

## 38. Conclusión

El generador de folios será una pieza esencial de LEX-IA CASE.

Permitirá identificar cada expediente, conservar continuidad, vincular documentos, registrar actuaciones y facilitar el seguimiento por cliente, abogado y plataforma.

El folio debe ser único, seguro, legible, automático y libre de datos personales.

La regla principal será:

**El folio identifica el expediente, pero no autoriza acceso por sí mismo.**
