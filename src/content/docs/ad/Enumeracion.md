---
title: Enumeración
description: Checklist de enum AD en lab (LDAP, shares, BloodHound).
---

# AD — enumeración (lab)

Mapear usuarios, grupos, shares y caminos a privilegios. Solo dominio de lab / alcance.

## Sin creds (o casi)

| Qué | Cómo (idea) |
| --- | ----------- |
| SMB null / guest | Listar shares si está permitido |
| LDAP anónimo | Raro hoy; a veces labs viejos |
| DNS / zone | Hosts del dominio |
| Responder / LLMNR | En red local de lab (poisoning) |

## Con user de dominio

```bash
# desde Linux (lab), ejemplos
nxc smb dc.lab.local -u user -p 'Pass'
nxc ldap dc.lab.local -u user -p 'Pass' --users
nxc ldap dc.lab.local -u user -p 'Pass' --groups
```

| Objetivo | Notas |
| -------- | ----- |
| Users / groups | Quién es admin, service accounts |
| SPNs | Cuentas con SPN → Kerberoast |
| AS-REP roastables | Users sin preauth Kerberos |
| Shares | `IPC$`, `SYSVOL`, datos sensibles |
| GPO / scripts | Passwords en scripts de login |

## BloodHound (idea)

1. Colectas relaciones (SharpHound / bloodhound-python) **en lab**.
2. Importas el zip en BloodHound.
3. Buscas caminos: user → DA (shortest paths).

No es magia: interpreta edges (GenericAll, ForceChangePassword, etc.).

Relacionado: [Conceptos](/WEB-Notas-de-Hacking/ad/conceptos/), [Ataques lab](/WEB-Notas-de-Hacking/ad/ataqueslab/).
