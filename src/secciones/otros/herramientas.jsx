import Enlace from "../../componentes/atomos/enlace.jsx";
import Estructura from "../../componentes/organismos/estructura.jsx";
import Lista from "../../componentes/moleculas/lista.jsx";
import Texto from "./../../componentes/atomos/texto.jsx";
import Titulo from "../../componentes/moleculas/titulo.jsx";
function nameabcd({ }) {
  return (
    <Estructura>
      <Titulo title="h1" id="herramientas-generales">Herramientas generales</Titulo>
      <Texto>Herramientas generales básicas que toda, persona debe conocer en el
        mundo de la ciberseguridad y estas son:</Texto>
      <Lista>
        <li>Virus total: (<Enlace href="https://www.virustotal.com/gui/home/upload">Ir a VirusTotal</Enlace >) Sirve para escanear y detectar virus en urls (enlaces) o ficheros
          (archivos), tener en cuenta que cada archivo o enlace se comparte con
          las empresas de antivirus que trabajan con la web.</li>    <li>Have I been pwned: (<Enlace href="https://haveibeenpwned.com/">Ir a
            HaveIbeenPwned</Enlace >) Sirve para buscar sí tú información ha sido filtrada
          por medio del correo electrónico.</li>    <li>Conocer destino de URL acortada: (<Enlace
            href="https://tools.hixec.com/tool/url-unshortener?_gl=1*nakthv*_ga*Mjk1NzUxNjQzLjE3NTgyODMxNzE.*_ga_FR4D49XYF9*czE3NjA0NDMwMzMkbzIxJGcxJHQxNzYwNDQ1MjQ0JGo1NCRsMCRoMA..">Ir
            Enlace conocer destino de Url</Enlace>).</li>    <li>Generación de contraseñas seguras:
              https://tools.hixec.com/tool/password-generator</li>    <li>Comprobación sí una contraseña es segura:
                https://tools.hixec.com/tool/password-strength-test</li>    <li>Gestor de contraseñas: <Enlace
                  href="https://bitwarden.com/es-la/go/business-password-manager/?utm_source=google&amp;utm_medium=cpc&amp;utm_campaign=AW_LATAM-ES_NU_CL_Bitwarden_es_GSN_DTMB_Brand_KW:Brand_Exact&amp;utm_content=716354017577&amp;utm_term=bitwarden%7Ckwd-339416034454&amp;hsa_acc=2567950947&amp;hsa_cam=21783526743&amp;hsa_grp=168776887579&amp;hsa_ad=716354017577&amp;hsa_src=g&amp;hsa_tgt=kwd-339416034454&amp;hsa_kw=bitwarden&amp;hsa_mt=e&amp;hsa_net=adwords&amp;hsa_ver=3&amp;gad_source=1&amp;gad_campaignid=21783526743&amp;gclid=Cj0KCQjw6bfHBhDNARIsAIGsqLh1GZSOVvi_vSn7GjngohEn2F0-EQ9qGxl1waCpYYSG7xM8cRUM1AEaAqgcEALw_wcB">Ir
                  a Bit Warden</Enlace ></li>    <li>Menú de más herramientas interesantes:
                    https://tools.hixec.com/</li>  </Lista>
    </Estructura>
  );
}
export default nameabcd;
