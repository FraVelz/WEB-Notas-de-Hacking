---
title: Diff
route: /linux/comandos/Diff
---

# Diff en Linux
---

## Temario
### En resumen {#en-resumen}
El comando diff en Linux/Unix se usa para **comparar dos archivos (o carpetas)** línea por línea y mostrar **las diferencias entre ellos**.
```bash
diff archivo1 archivo2
```

Muestra qué líneas **cambian, se agregan o eliminan** de un archivo respecto al otro.

---

### Ejemplo básico {#ejemplo-básico}
Supongamos que tienes dos archivos:

**archivo1.txt:**
```bash
hola
mundo
como estas
```

**archivo2.txt:**
```bash
hola
mundo!!!
como estas
```

Sí ejecutas:
```bash
diff archivo1.txt archivo2.txt
```

La salida será:
```bash
2c2
< mundo
---
> mundo!!!
```

Significa:

- En la **línea 2** (2c2 → *línea 2 cambiada*),
- mundo fue reemplazado por mundo!!!.

---

### Símbolos principales {#símbolos-principales}
<!-- Tabla convertida manualmente -->

---

### Opciones útiles {#opciones-útiles}
<!-- Tabla convertida manualmente -->

Ejemplo:
```bash
diff -u archivo1.txt archivo2.txt
```

Salida tipo “Git”:
```bash
--- archivo1.txt
+++ archivo2.txt
@@ -1,3 +1,3 @@
hola
-mundo
+mundo!!!
como estas
```

---

### Usos comunes {#usos-comunes}
- Ver qué cambió entre dos versiones de un archivo.
- Comparar archivos de configuración.
- Analizar diferencias en código fuente.
- Generar *parches* con diff y aplicarlos con patch.