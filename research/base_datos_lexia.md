# BASE DE DATOS LEXIA

## Objetivo

Definir las entidades principales necesarias para la operación de la plataforma LEXIA.

---

# TABLA USUARIOS

## Campos

* id_usuario
* nombre
* apellido
* correo
* telefono
* estado
* fecha_registro
* estatus

---

# TABLA ABOGADOS

## Campos

* id_abogado
* nombre
* correo
* telefono
* cedula_profesional
* especialidad
* estado
* experiencia
* estatus_validacion
* fecha_registro

---

# TABLA EXPEDIENTES

## Campos

* id_expediente
* numero_expediente
* id_usuario
* materia
* tipo_asunto
* nivel_riesgo
* fecha_apertura
* estatus

---

# TABLA DOCUMENTOS

## Campos

* id_documento
* id_expediente
* nombre_documento
* tipo_documento
* fecha_carga
* usuario_carga

---

# TABLA ACTIVIDADES

## Campos

* id_actividad
* id_expediente
* id_abogado
* descripcion
* fecha
* estatus

---

# TABLA ASIGNACIONES

## Campos

* id_asignacion
* id_expediente
* id_abogado
* fecha_asignacion
* estatus

---

# TABLA PAGOS

## Campos

* id_pago
* id_expediente
* monto_total
* monto_liberado
* saldo_pendiente
* fecha_pago
* estatus

---

# TABLA HITOS

## Campos

* id_hito
* id_expediente
* descripcion
* monto_asociado
* fecha_aprobacion
* estatus

---

# TABLA MENSAJES

## Campos

* id_mensaje
* id_expediente
* remitente
* destinatario
* mensaje
* fecha_envio

---

# TABLA CALIFICACIONES

## Campos

* id_calificacion
* id_expediente
* id_abogado
* puntuacion
* comentario
* fecha

---

# PRINCIPIO RECTOR

Toda la información deberá estar vinculada al expediente.

El expediente será el núcleo central de LEXIA.

Usuarios, abogados, documentos, pagos y actividades dependerán del expediente correspondiente.
