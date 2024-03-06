import React from "react";
import styled from "styled-components";
import "../components/Calculate.scss";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const TextBold = styled.span`
  color: black;
  font-size: 12px;
  text-align: left;
  width: 100%;
  font-weight: bold;

  @media (min-width: 1060px) {
    font-size: 15px;
  }

  @media (min-width: 1384px) {
    font-size: 18px;
  }
`;

const CaptionBold = styled.div`
  color: black;
  font-size: 12px;
  text-align: left;
  width: 100%;
  font-weight: bold;

  @media (min-width: 1060px) {
    font-size: 15px;
  }

  @media (min-width: 1384px) {
    font-size: 18px;
  }
`;

const PlainText = styled.div`
  color: black;
  font-size: 12px;
  text-align: left;
  width: 100%;

  @media (min-width: 1060px) {
    font-size: 15px;
  }

  @media (min-width: 1384px) {
    font-size: 18px;
  }
`;

const StyledList = styled.ul`
  color: black;
  font-size: 12px;
  text-align: left;
  width: 100%;
  list-style-type: disc;

  @media (min-width: 1060px) {
    font-size: 15px;
  }

  @media (min-width: 1384px) {
    font-size: 18px;
  }
`;

const ListItem = styled.li`
  color: black;
  font-size: 12px;
  text-align: left;
  width: 100%;
  margin-left: 30px;

  @media (min-width: 1060px) {
    font-size: 15px;
  }

  @media (min-width: 1384px) {
    font-size: 18px;
  }
`;

const Terminos = () => {
  return (
    <>
      <FloatingWhatsApp
        accountName={"52 1 5616002085"}
        darkMode={true}
        allowEsc={true}
        avatar="./highLightTitle.png"
        statusMessage="Bienvenido a nuestro servicio."
        chatMessage="Hola, ¿en qué puedo ayudarle?"
        phoneNumber={"52 1 5616002085"}
        onSubmit={(event, formValue) => clickSubmit(event, formValue)}
      />
      <div className="bg-[url('./wallpaper.png')] w-full h-screen py-4 bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center">
        <div className="bg-white/[0.9] w-11/12 h-5/6 p-8 flex flex-col justify-start items-center rounded-lg gap-4 overflow-auto">
          <p className="text-xl md:text-2xl lg:text-3xl text-red-400 font-bold mt-12 text-center">
            Términos, Condiciones y Aviso de Privacidad.
          </p>
          <CaptionBold>Bazar Carruso</CaptionBold>
          <CaptionBold>1. RESPONSABLE DE LOS DATOS PERSONALES:</CaptionBold>
          <PlainText>
            <TextBold>Bazar Carruso</TextBold>, (en lo sucesivo Bazar Carruso)
            con domicilio en Paseo de la Reforma N° 26 piso 17, Col. Juárez,
            Alcaldía Cuauhtémoc, C.P. 06600, Ciudad de México y portal de
            internet ​ www.bazarcarruso.com, es el responsable de sus datos
            personales, y por lo tanto, es una empresa comprometida con el
            derecho a la protección de datos personales de cualquier titular, el
            cual está garantizado y protegido, como un derecho humano, en el
            segundo párrafo del artículo 16 de la Constitución Política de los
            Estados Unidos Mexicanos.
            <br />
            <br />
            El presente Aviso de Privacidad se regula, de conformidad con lo
            dispuesto en la Ley Federal de Protección de Datos Personales en
            Posesión de los Particulares (en lo sucesivo Ley), su Reglamento,
            así como los Lineamientos del Aviso de Privacidad (en lo sucesivo
            Legislación). Por tanto, este Aviso de Privacidad (en lo sucesivo
            Aviso de Privacidad) aplica a la información personal recopilada
            sobre usted por Bazar Carruso. Los términos que se utilicen en el
            presente Aviso de Privacidad y que no estén definidos en el mismo
            tendrán el significado que se les atribuya en la Legislación.
            personales, queda obligado, de manera enunciativa, más no
            limitativa, a:
            <br />
            <br />
            1. Utilizar o aplicar sus datos personales exclusivamente para la
            realización de los fines establecidos en el presente Aviso de
            Privacidad.P
            <br />
            <br />
            2. Asegurarse de que sus datos personales sean manejados con
            estricta sujeción al secreto profesional y confidencialidad.
            <br />
            <br />
            3. Observar los principios de protección como licitud,
            consentimiento, información, calidad, finalidad, lealtad,
            proporcionalidad y responsabilidad, así como los deberes de
            seguridad y confidencialidad previstos en la Legislación.
            <br />
            <br />
            4. Implementar y mantener las medidas de seguridad administrativas,
            técnicas y físicas que permitan proteger sus datos contra daño,
            pérdida, alteración, destrucción o el uso, acceso o tratamiento no
            autorizado.
            <br />
            <br />
            <CaptionBold>Finalidades primarias:</CaptionBold>
            <br />
            Son aquellas necesarias para mantener la relación jurídica entre
            Bazar Carruso y el titular de los datos, misma que se enlistan a
            continuación:
            <br />
            <br />
            ·&nbsp;&nbsp;&nbsp;Identificar y contactar al titular de los datos
            en relación a los servicios contratados;
            <br />
            <br />
            ·&nbsp;&nbsp;&nbsp;Operación, administración, seguimiento y
            comercialización de nuestros servicios;
            <br />
            <br />
            ·&nbsp;&nbsp;&nbsp;Otorgar al titular de los datos, un servicio
            eficiente y una mejor atención;
            <br />
            <br />
            ·&nbsp;&nbsp;&nbsp;Cobro y facturación de nuestros servicios;
            <br />
            <br />
            ·&nbsp;&nbsp;&nbsp;Información sobre mejoras, actualizaciones,
            cambios y modificaciones que estén relacionados con lo contratado
            por el titular de los datos;
            <br />
            <br />
            ·&nbsp;&nbsp;&nbsp;Atención a solicitudes del titular de los datos;
            <br />
            <br />
            ·&nbsp;&nbsp;&nbsp;Cumplir obligaciones contraídas con el titular de
            los datos;
            <br />
            <br />
            ·&nbsp;&nbsp;&nbsp;Contratación de personal, en cuyo caso la
            finalidad será llevar a cabo el proceso de reclutamiento y
            selección, y contratación de proveedores.
            <br />
            <br />
            <CaptionBold>Finalidades secundarias:</CaptionBold>
            <br />
            Son aquellas que no son necesarias para mantener la relación
            jurídica entre Carruso y el titular de los datos, las cuales se
            enlistan a continuación:
            <br />
            <br />
            · Información sobre nuevos productos o servicios;
            <br />
            <br />
            · Envío de información relacionada con Bazar Carruso;
            <br />
            <br />
            · Datos estadísticos;
            <br />
            <br />
            · Consultas y encuestas, y Servicios de publicidad;
            <br />
            <br />
            · Prospección comercial;
            <br />
            <br />
            Si usted no desea que se traten sus datos personales para las
            finalidades secundarias, puede, en cualquier momento, oponerse al
            tratamiento para dichas finalidades ejerciendo su derecho de
            oposición, de conformidad con el presente AVISO DE PRIVACIDAD.
            <br />
            <br />
            <CaptionBold>3. DATOS PERSONALES RECABADOS:</CaptionBold>
            <br />
            Para cumplir con las finalidades previamente señaladas, Bazar
            Carruso recabará datos de identificación, fiscales, financieros y/o
            patrimoniales, de contacto, electrónicos; fiscales y legales. Para
            el caso de contratación de personal, además de los anteriores, se
            recabarán datos académicos, laborales y de salud. Los datos
            anteriormente señalados, se obtienen del titular cuando los
            proporciona a Carruso, habiendo leído de forma previa este AVISO DE
            PRIVACIDAD, o bien a partir de los documentos requeridos por el
            titular de los datos. Carruso no recaba datos personales sensibles.
            <br />
            <br />
            <CaptionBold>4. TRANSFERENCIA DE DATOS PERSONALES:</CaptionBold>
            <br />
            Sus datos personales podrán ser transferidos, dentro y fuera del
            país, a las siguientes personas, entidades, empresas u
            organizaciones distintas a Bazar Carruso, siempre y cuando se derive
            de la relación entre Bazar Carruso y el titular de los datos, las
            cuales se enlistan a continuación:
            <br />
            <br />
            DESTINATARIO DE LOS DATOS PERSONALES FINALIDAD
            <br />
            <br />
            <StyledList>
              <ListItem>Secretaría de Hacienda y Crédito Público</ListItem>
              <ListItem>Servicio de Administración Tributaria</ListItem>
              <ListItem>Autoridades Judiciales y/o Administrativas</ListItem>
            </StyledList>
            <br />
            Cumplimiento de obligaciones fiscales y/o administrativas; o bien,
            por solicitud expresa del destinatario; o cuando se requiera de la
            intervención del destinatario.
            <br />
            <br />
            <StyledList>
              <ListItem>
                Empresas filiales, controladoras o subsidiarias de Carruso
              </ListItem>
            </StyledList>
            <br />
            Cumplimiento de la relación jurídica entre Carruso y el titular de
            los datos; Cumplimiento de políticas internas; Mejora en la calidad
            de los servicios de Bazar Carruso
            <br />
            <br />
            <StyledList>
              <ListItem>Proveedores</ListItem>
            </StyledList>
            <br />
            Coadyuvar en el cumplimiento del objeto de la relación jurídica
            entre Bazar Carruso y el titular de los datos.
            <br />
            <br />
            <StyledList>
              <ListItem>Despachos y/o consultores externos</ListItem>
            </StyledList>
            <br />
            Coadyuvar en el cumplimiento de obligaciones contractuales y
            fiscales. Investigación crediticia. Ejercer las acciones legales que
            correspondan.
            <br />
            <br />
            <StyledList>
              <ListItem>
                Instituciones integrantes del Sistema Bancario Mexicano,
                legalmente autorizadas por la Secretaría de Hacienda y Crédito
                Público y la Comisión Nacional Bancaria y de Valores.
              </ListItem>
            </StyledList>
            <br />
            Pago de productos o servicios que sean objeto o se deriven de la
            relación entre Bazar Carruso y el titular de los datos. Para el caso
            del personal contratado por Bazar Carruso, sus datos personales
            serán compartidos a: <br />
            <br />
            DESTINATARIO DE LOS DATOS PERSONALES FINALIDAD
            <br />
            <br />
            <StyledList>
              <ListItem>Servicio de Administración Tributaria</ListItem>
              <ListItem>Secretaría de Hacienda y Crédito Público</ListItem>
              <ListItem>Instituto Mexicano del Seguro Social</ListItem>
              <ListItem>
                Instituto del Fondo Nacional de la Vivienda para los
                Trabajadores
              </ListItem>
            </StyledList>
            <br />
            Cumplimiento de obligaciones fiscales y/o administrativas que
            derivan de la relación contractual entre Bazar Carruso y el titular
            de los datos. <br />
            <br />
            Cumplimiento de obligaciones establecidas en la Ley Federal del
            Trabajo, la Ley del Seguro Social y la Ley del Instituto del Fondo
            Nacional de la Vivienda para los Trabajadores; así como de las
            Normas Oficiales Mexicanas. <br />
            <br />
            <StyledList>
              <ListItem>
                Instituciones integrantes del Sistema Bancario Mexicano,
                legalmente autorizadas por la Secretaría de Hacienda y Crédito
                Público y la Comisión Nacional Bancaria y de Valores.
              </ListItem>
            </StyledList>
            <br /> Pago de salarios, y demás prestaciones derivadas de la
            relación contractual entre Carruso y el titular de los datos.
            <br />
            <br />
            <StyledList>
              <ListItem>Despachos y/o consultores externos</ListItem>
            </StyledList>
            <br />
            Despachos y/o consultores externos Coadyuvar en el cumplimiento de
            obligaciones contractuales y fiscales.
            <br />
            <br /> Investigación crediticia.
            <br />
            <br />
            Ejercer las acciones legales que correspondan.
            <br />
            <br /> Aquellos casos en que alguna autoridad de manera fundada y
            motivada requiera de los datos personales, así como las
            transferencias previstas en el presente apartado, se podrán llevar a
            cabo sin el consentimiento del titular de los datos en virtud de lo
            previsto por el artículo 37 de la LEY, que son supuestos de
            excepción al consentimiento. <br />
            <br />
            <CaptionBold>5. DERECHOS ARCO:</CaptionBold>
            <br />
            Usted tiene el derecho de acceder a sus datos personales,
            rectificarlos en caso de ser inexactos, cancelarlos cuando considere
            que resulten ser excesivos o innecesarios para las finalidades
            descritas, u oponerse al tratamiento de los mismos para fines
            específicos o finalidades secundarias.
            <br />
            <br /> Los derechos ARCO (Acceso, Rectificación, Cancelación y
            Oposición) sobre sus datos personales, puede ejercerlos, en
            cualquier momento, por escrito en nuestro domicilio, o por medio de
            correo electrónico: xxx@bazarcarruso.com.
            <br />
            <br />
            La solicitud que presente para ejercer sus derechos ARCO deberá
            contener:
            <br />
            <br /> ·&nbsp;&nbsp;&nbsp;Nombre del titular de los datos
            personales. <br />
            <br />
            ·&nbsp;&nbsp;&nbsp;Copia simple del documento que acredite la
            personalidad del titular de los datos.
            <br />
            <br />
            ·&nbsp;&nbsp;&nbsp;Domicilio o correo electrónico para comunicar la
            respuesta a su solicitud. <br />
            <br />
            ·&nbsp;&nbsp;&nbsp;La descripción de manera clara y precisa del o
            los derechos ARCO que desea ejercer, así como los datos personales
            objeto de su solicitud.
            <br />
            <br />
            ·&nbsp;&nbsp;&nbsp;Cualquier otro elemento o documento que facilite
            la localización de sus datos personales. <br />
            <br />
            ·&nbsp;&nbsp;&nbsp;La solicitud deberá ser firmada al final del
            escrito y rubricada al calce de cada una de las hojas. <br />
            <br />
            Una vez que su solicitud para ejercer sus derechos ARCO se encuentre
            a nuestra disposición, le emitiremos la respectiva determinación en
            un plazo no mayor a 20 días hábiles a partir de su recepción. La
            cual haremos de su conocimiento en el domicilio o correo electrónico
            que nos señale y de resultar procedente su solicitud la haremos
            efectiva dentro de los 15 días hábiles siguientes a la fecha en que
            le hayamos comunicado la respectiva determinación. <br />
            <br />
            Usted podrá revocar su consentimiento para el tratamiento de sus
            datos personales en cualquier momento, a través del procedimiento
            previamente señalado, expresando su deseo de revocar el
            consentimiento otorgado a Bazar Carruso. <br />
            <br />
            Sin embargo, deberá tomar en cuenta que no en todos los casos
            podremos atender su solicitud o concluir el uso de forma inmediata,
            ya que es posible que por alguna obligación legal requerir para
            seguir tratando sus datos personales. Asimismo, usted deberá
            considerar que, para ciertos fines, la revocación de su
            consentimiento implica que no le podamos seguir prestando el
            servicio que nos solicitó, o la conclusión de su relación con
            nosotros. <br />
            <br />
            <CaptionBold>6. MANEJO DE COOKIES Y/O WEB BEACONS:</CaptionBold>
            <br /> Las cookies son utilizadas por Bazar Carruso para mejorar la
            eficiencia de sus sitios web, y son archivos de texto que quedan
            almacenados en el disco duro de su ordenador cuando visita algunos
            sitios web, que nos permite identificar aplicaciones del sitio web
            en las que pueda tener mayor interés. La mayoría de los navegadores
            están configurados para aceptar Cookies, por lo que usted podrá en
            todo momento, deshabilitar o ajustar el uso de cookies, de acuerdo a
            las instrucciones del navegador o visor de Internet que utiliza.
            <br />
            <br /> Carruso no recaba datos personales a través de este tipo de
            mecanismos. <br />
            <br />
            <CaptionBold>7. CAMBIOS AL AVISO DE PRIVACIDAD:</CaptionBold>
            <br /> El presente AVISO DE PRIVACIDAD puede sufrir modificaciones,
            cambios o actualizaciones derivadas de nuevos requerimientos
            legales; de nuestras propias necesidades por los servicios que
            ofrecemos; de nuestras prácticas de privacidad; de cambios en
            nuestro modelo de negocio, o por otras causas.
            <br />
            <br /> Bazar Carruso se compromete a mantener informados a los
            titulares de los datos, sobre cualquier cambio al presente AVISO DE
            PRIVACIDAD, mediante nuestro sitio web www.bazarcarruso.com
            <br />
            <br />{" "}
            <CaptionBold>
              8. DERECHO DE LOS TITULARES DE LOS DATOS PERSONALES:
            </CaptionBold>
            <br /> En caso que usted considere que su derecho a la protección de
            datos personales ha sido vulnerado por alguna conducta de nuestros
            empleados o de nuestras actuaciones o respuestas, puede acudir ante
            el Instituto Nacional de Transparencia, Acceso a la Información y
            Protección de Datos Personales (INAI), cuya página de internet es
            www.ifai.org.mx
          </PlainText>
        </div>
      </div>
    </>
  );
};
export default Terminos;
