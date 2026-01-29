---
title: VariablesEntorno
route: /windows/VariablesEntorno
---

# Variables de Entorno
---

### Tipos de variables de entorno {#tipos-de-variables-de-entorno}
<ol type="1">
<li><strong>Variables del sistema</strong>: Aplican a todos los
usuarios del equipo. Por ejemplo:
- PATH: lista de rutas donde Windows busca ejecutables.
- COMPUTERNAME: nombre del equipo.
- SYSTEMROOT: ruta de la carpeta del sistema, generalmente C:\Windows.
- TEMP o TMP: carpeta temporal.

</li>
<li>
**Variables de usuario**: Solo aplican al usuario actual. Por ejemplo:

- USERNAME: nombre del usuario actual.
- USERPROFILE: ruta del perfil del usuario (C:\Users\TuUsuario).
- HOMEPATH: ruta relativa de la carpeta del usuario (\Users\TuUsuario).

</li>
</ol >
---

### Cómo ver las variables de entorno {#cómo-ver-las-variables-de-entorno}
<ol type="1">
<li>
**Usando CMD**:

- set → muestra todas las variables de usuario y del sistema.
- echo %VARIABLE% → muestra el valor de una variable específica. Ejemplo: ```bash
echo %PATH% echo %USERPROFILE%
```

      </li >
      <li>
      **Usando PowerShell**:

      - Get-ChildItem Env: → lista todas las variables.
- $Env:VARIABLE → muestra el valor de una variable específica. Ejemplo: ```bash
$Env:PATH $Env:USERNAME
```

</li>
<li>
**Usando la interfaz gráfica**:

- Presiona Win + R → escribe sysdm.cpl → Enter.
- Ve a la pestaña **Opciones avanzadas** → **Variables de entorno**.
- Aquí puedes **ver, crear, editar o eliminar** variables de usuario o del sistema.

</li>
</ol >
---

### Editar o crear variables {#editar-o-crear-variables}
- Para agregar una carpeta al PATH: <ol type="1"> Abrir **Variables de entorno**.
- Seleccionar PATH → Editar → Nuevo → pegar la ruta.
- Guardar y reiniciar CMD/PowerShell para que tome efecto.