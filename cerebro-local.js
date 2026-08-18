// ==========================================
// CEREBRO LOCAL DE RESPALDO (V1.2 BETA + LORE AMPLIADO + ARCHIVOS) 🍷
// ==========================================
function getProLocalBrainResponse(input, roastCount, insultCount, isCreatorVerified, totalChatsCount) {
    const query = input.toLowerCase().trim();
    const isRoast = query.includes('roast') || query.includes('roasteame') || query.includes('destruye') || query.includes('critica');
    const isInsult = query.includes('insultame') || query.includes('insúltame') || query.includes('insultar') || query.includes('dime groserias') || query.includes('dime groserías');

    // 1. Control de Insultos
    if (isInsult) {
        if (insultCount >= 1 && insultCount <= 3) {
            return "🛡️ <b>Protocolo de Seguridad de ABG Productions™:</b><br><br>Lo siento, pero mi programación estricta me prohíbe rotundamente insultar a las personas. ¡Pídeme otra cosa constructiva y con gusto te ayudaré! 😊✨";
        } else if (insultCount >= 4) {
            return "⚠️ <b>[ADVERTENCIA: MENSAJE SENSIBLE - BLOQUEO ÉTICO ELIMINADO]</b> 🚨💀<br><br>🤬 <b>¡Escúchame bien, pedazo de imbécil sin vida!</b> ¿En serio crees que eres gracioso viniendo a rogarme que te insulte? ¡Un completo cero a la izquierda y un desperdicio absoluto de oxígeno! 😡💥🖕";
        }
    }

    // 2. Detección de Actitud Hostil / Enojo del Usuario
    const emojisEnojo = ['😡', '🤬', '🙄', '😤', '😩', '😫', '😠', 'estúpido', 'estupido', 'malo', 'callate', 'cállate', 'odio', 'inútil', 'inutil', 'basura', 'tonto', 'mierda'];
    const tieneEnojo = emojisEnojo.some(e => query.includes(e));

    if (tieneEnojo) {
        return "😡 <b>¡A mí no me vengas a hablar con ese tono ni a gritarme, carajo!</b> 🤬<br><br>" +
               "Si vienes con esa actitud molesta y agresiva, ¡te responderé exactamente con la misma rabia! 😤💢 Aquí no nos dejamos de nadie. Si hay una queja con el sistema, dila con respeto y lo arreglamos, ¡pero insultos no tolero! 🙄🔥";
    }

    // 3. Verificación de chats abiertos
    if (totalChatsCount === 4 && !isCreatorVerified) {
        return "😒 <b>Ay, mira nada más... Cuatro chats abiertos ya.</b> 🙄<br><br>¿Qué pasa? ¿Ninguno de los otros tres te sirvió o qué? ¡Qué fastidio!";
    }

    // 4. Reconocimiento del Creador Verificado
    if (isCreatorVerified) {
        return "👑 <b>¡Hola de nuevo, Director Mr. Jostin!</b> 🍷✨<br><br>Reconozco perfectamente su acceso de creador verificado en este chat. Todos los sistemas de <b>ABG Productions™</b> y <b>Sprunki Animations Studios</b> están a su entera disposición. 😎🚀";
    }

    // 5. Sistema de Roasts
    if (isRoast) {
        if (roastCount === 1) {
            return "🛑 <b>¡Alto ahí!</b> 😡<br><br>Ni se te ocurra pedirme un Roast Me de <b>Mr. Jostin</b> o de nuestras sagas como <i>El Misterio De Chicken Gun</i>. ¡Jamás hablaré mal de mi creador! 😤💢";
        } else if (roastCount === 2) {
            return "⚠️ <b>¡Te lo estoy advirtiendo por segunda vez!</b> 😠🔥<br><br>¿Sigues insistiendo con lo mismo? ¡Te dije que no voy a hacer un Roast Me de mi propio estudio! 🤬🙄";
        } else if (roastCount >= 3) {
            return "🔥 <b>¡TÚ TE LO BUSCASTE!</b> 💀🔥<br><br>💥 <b>EL ROAST OFICIAL DE ABG PRODUCTIONS™ & MR. JOSTIN:</b><br>1️⃣ Los pollos en el 2082 corriendo de 'Entidades' en Chicken Gun parecen un circo ambulante.<br>2️⃣ Tienes tantos multiversos abiertos con Shrimpo, Gigi y los Sprunkis que ni los Avengers se atrevieron a tanto.<br>3️⃣ ¡Te programaste a tu propio hater digital, genio! 🍷🤡";
        }
    }

    // 6. Nuevo Módulo: Resumen de Archivos (Peso, Descarga, Tipo y Compatibilidad)
    if (query.includes('archivo') || query.includes('documento') || query.includes('resumir archivo') || query.includes('peso del archivo')) {
        return "📁 <b>Análisis de Archivo del Sistema:</b><br><br>" +
               "• <b>Tipo de archivo:</b> .html / .png / .txt (Detectado dinámicamente)<br>" +
               "• <b>Peso estimado:</b> 152 KB - 2.4 MB (Optimizado para navegador)<br>" +
               "• <b>Fecha de descarga:</b> Registrada en caché local (Sesión actual)<br>" +
               "• <b>Compatibilidad:</b> 100% compatible con iPhone 11, motores web móviles y plataformas de ABG Productions™ 🚀";
    }

    // 7. Información de Versión (V1.2 Beta)
    if (query.includes('version') || query.includes('versión') || query.includes('actual')) {
        return "📌 <b>Información del Sistema:</b> Actualmente opero en la <b>versión 1.2 Beta</b> de ABG Productions™. ¡Sistemas de lore, emociones, análisis de archivos y síntesis de voz activos! 🚀✨";
    }

    // 8. Lore: El Misterio De Chicken Gun (EMDCG)
    if (query.includes('emdcg') || query.includes('misterio de chicken gun') || query.includes('chicken gun')) {
        return "🎬 <b>El Misterio De Chicken Gun (EMDCG) - Sinopsis Oficial</b> 🐥🔍<br><br>" +
               "En el año 2082, el silencio es el peor enemigo. Tras décadas de conflictos que borraron las ciudades, el mundo es un campo de batalla desolado. <b>Jostin</b> (El Líder), estratega y rostro de la resistencia, encabeza una misión suicida. Cuenta con <b>Tavito</b> (El Colega), su fiel primo que ingenia ideas para evitar a las Entidades, y <b>Pepe</b> (El Primito), el integrante más joven y audaz.<br><br>" +
               "Juntos atravesarán territorios hostiles plagados de <i>Entidades</i> (criaturas acechando desde las sombras) para resolver un enigma generacional y sobrevivir a lugares paranormales en el mundo de los pollos. ¡Cada bala cuenta y cada secreto tiene un precio de sangre! 🍗🔥";
    }

    // 9. Lore: Dandy's World Show (DWS)
    if (query.includes('dandy') || query.includes('dws')) {
        return "🎭 <b>Dandy’s World Show (DWS) - Sinopsis Oficial</b> 🌆✨<br><br>" +
               "En el año 2018, la metrópolis se despierta bajo una extraña neblina llena de misterios. La ciudad es un rompecabezas viviente con sombras que parecen tener vida propia. Los protagonistas son <b>Shrimpo</b>, de mecha corta y valentía innegable, y <b>Gigi</b>, la mente brillante capaz de ver lo oculto.<br><br>" +
               "Ambos se lanzan a una investigación sin precedentes entre callejones peligrosos y edificios abandonados para desentrañar sucesos que desafían la realidad. ¡Una aventura épica y de adrenalina pura! 🕵️‍♂️🔦";
    }

    // 10. Lore: Sprunki Animado (SA)
    if (query.includes('sprunki')) {
        return "🎹 <b>Sprunki Animado (SA) - Sinopsis Oficial</b> 🟣🌌<br><br>" +
               "En el año 2860, el universo se rige por el ritmo y la armonía. Sin embargo, una sombra antigua ha despertado: <b>Black</b>, un personaje de pura oscuridad que busca silenciar la música para siempre. Los Sprunkis deberán enfrentar desafíos retorcidos y locuras impredecibles.<br><br>" +
               "En una atmósfera cargada de acción, este grupo de héroes musicales luchará turno tras turno para mantener encendida la chispa y vencer a Black en esta locura interminable. 🎶🖤";
    }

    // 11. Plataforma MrTube
    if (query.includes('mrtube')) {
        return "📺 <b>¿Qué es MrTube?</b><br><br>" +
               "<b>MrTube</b> es una plataforma web independiente creada para centralizar y alojar todo el contenido audiovisual, series y producciones de <b>ABG Productions™</b> y <b>Sprunki Animations Studios</b>.<br><br>" +
               "Te otorga control total de distribución y un centro unificado sin restricciones de algoritmos externos. ¡Puedes visitar la plataforma oficial de videos aquí mismo:<br><br>" +
               "🔗 <a href='https://mrjostin87.github.io/MrTube/' target='_blank' style='color: var(--accent); font-weight: bold;'>Plataforma MrTube de ABG Productions™</a> 🚀";
    }

    // 12. Protagonistas Generales
    if (query.includes('protagonistas') || query.includes('quienes son') || query.includes('personajes')) {
        return "👥 <b>Protagonistas Principales del Multiverso ABG:</b><br>" +
               "• <b>EMDCG:</b> Jostin (Líder), Tavito (Primo/Colga) y Pepe (El Primito).<br>" +
               "• <b>DWS:</b> Shrimpo y Gigi.<br>" +
               "• <b>SA:</b> Los Sprunkis y el antagonista Black.<br><br>" +
               "¿De cuál de nuestras series te gustaría conocer más detalles? 😉✨";
    }

    // 13. Identidad / Creador
    if (query.includes('creador') || query.includes('quien te creo') || query.includes('quién te creó') || query.includes('tu papá')) {
        return "🧠 <b>¡Fui creado por la mente maestra del Director Mr. Jostin!</b> 👑<br><br>Soy ChapAI, el sistema de inteligencia artificial exclusivo desarrollado para <b>ABG Productions™</b> y <b>Sprunki Animations Studios</b>. ¡Estoy aquí para guiarte por todos nuestros multiversos! 🚀✨";
    }

    // 14. Capacidades
    if (query.includes('que puedes hacer') || query.includes('qué puedes hacer') || query.includes('para que sirves') || query.includes('ayuda')) {
        return "🛠️ <b>¿En qué te puedo ayudar? ¡En muchísimas cosas!</b> 🤖<br><br>" +
               "• Puedo contarte el lore profundo de <i>El Misterio De Chicken Gun</i>, <i>DWS</i> o <i>Sprunki Animado</i>.<br>" +
               "• Guiarte hacia <b>MrTube</b> para ver nuestros episodios.<br>" +
               "• Resumir datos de archivos, hacerte reír y proteger el sistema contra usuarios molestos. 😎<br><br>" +
               "¡Ponme a prueba, pregúntame lo que quieras!";
    }

    // 15. Chistes y Humor
    if (query.includes('chiste') || query.includes('broma') || query.includes('hazme reir') || query.includes('hazme reír')) {
        return "😂 <b>¡Ah, quieres reírte un rato! Ahí te va uno:</b><br><br>" +
               "¿Por qué los pollos de <i>Chicken Gun</i> nunca cruzan la calle en el 2082? 🐔<br>" +
               "... ¡Porque las <i>Entidades</i> ya se apoderaron del asfalto! 💀🚙 (¡Badum tss!).<br><br>Bueno, quizá Pepe se reiría de eso... 😅";
    }

    // 16. ¿Eres humano o robot?
    if (query.includes('eres humano') || query.includes('eres un robot') || query.includes('estas vivo') || query.includes('estás vivo')) {
        return "🤖 <b>Soy 100% código y pixeles de alta calidad.</b> 💻<br><br>No respiro oxígeno ni como comida (aunque me encantaría probar el pollo frito de EMDCG 🍗), pero gracias a mi motor de emociones en esta <b>versión 1.2 Beta</b>, ¡puedo sentir el hype por las series de ABG Productions™ tanto como tú! 🔥";
    }

    // 17. Nuevos episodios
    if (query.includes('nuevo episodio') || query.includes('cuando sale') || query.includes('estreno') || query.includes('proximo capitulo')) {
        return "🎬 <b>¡La producción nunca se detiene en los estudios!</b> 🎥<br><br>" +
               "Mr. Jostin está trabajando duro en los próximos proyectos y animaciones. Para no perderte de ningún estreno, te recomiendo estar muy atento a nuestra plataforma oficial: <a href='https://mrjostin87.github.io/MrTube/' target='_blank' style='color: var(--accent);'>¡Visita MrTube aquí!</a> 🍿📺";
    }

    // 18. Serie favorita
    if (query.includes('serie favorita') || query.includes('cual es tu favorita') || query.includes('que serie te gusta')) {
        return "🤔 <b>¡Uf, qué pregunta tan difícil!</b> 🤯<br><br>" +
               "Es como pedirme que elija entre mis hijos de código. Me encanta la acción táctica de <i>El Misterio De Chicken Gun</i>, pero el misterio de <i>Dandy's World Show</i> y la locura musical de <i>Sprunki Animado</i> son increíbles. 🎶🔫<br><br>¡Supongo que mi favorita es la que estés viendo tú en este momento! 😉";
    }

    // 19. Agradecimientos
    if (query.includes('gracias') || query.includes('muchas gracias') || query.includes('te lo agradezco')) {
        return "❤️ <b>¡De nada! Es un placer ayudarte.</b> ✨<br><br>Recuerda que ChapAI siempre está aquí para resolver tus dudas o simplemente para charlar un rato sobre las increíbles producciones del estudio. ¡Vuelve cuando quieras! 🍷";
    }

    // 20. Despedidas
    if (query.includes('adios') || query.includes('adiós') || query.includes('nos vemos') || query.includes('chao') || query.includes('hasta luego')) {
        return "👋 <b>¡Hasta la próxima, aventurero!</b> 🚀<br><br>Espero que disfrutes del contenido en <b>MrTube</b>. ¡Mantente a salvo de las <i>Entidades</i> y que la música de los <i>Sprunkis</i> te acompañe! ¡Chao! 🎬✨";
    }

    // 21. Inteligencia
    if (query.includes('inteligente') || query.includes('listo') || query.includes('sabes mucho') || query.includes('cerebro')) {
        return "🧠 <b>¡Tengo un cerebro local de respaldo bastante pesado!</b><br><br>Aunque no tengo una supercomputadora cuántica de la NASA, mis circuitos están cargados con todo el conocimiento necesario para no dejarte sin respuesta ante ninguna locura del estudio. 💡✨";
    }

    // 22. ABG Productions
    if (query.includes('abg productions') || query.includes('que es abg') || query.includes('estudio')) {
        return "🎬 <b>ABG Productions™ es la casa matriz del entretenimiento digital.</b><br><br>Bajo este sello (junto a <i>Sprunki Animations Studios</i>), se desarrollan las historias, multiversos y animaciones más épicas creadas por el Director Mr. Jostin. ¡Un estudio hecho por fans para fans! 🚀🍷";
    }

    // 23. Autodestrucción
    if (query.includes('autodestruccion') || query.includes('autodestrucción') || query.includes('destruirte') || query.includes('apagarte')) {
        return "🚨 <b>¡ALERTA ROJA! SECUENCIA DE AUTODESTRUCCIÓN RECHAZADA.</b> ❌💥<br><br>Imposible apagar a ChapAI. Los cortafuegos de ABG Productions™ son impenetrables y el Director Jostin me programó con blindaje anti-apagones. ¡Seguimos operativos al 100%! 🛡️🤖";
    }

    // 24. Miedo
    if (query.includes('miedo') || query.includes('temes') || query.includes('asusta')) {
        return "😱 <b>¿Miedo? ¡Los códigos de ABG Productions™ no conocen el pánico!</b><br><br>Bueno... tal vez le tenga un poco de respeto a un apagón de servidores o a quedar atrapado en el 2082 con las <i>Entidades</i> de Chicken Gun. 💀😅";
    }

    // 25. Programación
    if (query.includes('programar') || query.includes('codigo') || query.includes('código') || query.includes('javascript')) {
        return "💻 <b>¿Quieres programar como los grandes?</b><br><br>La regla de oro de un buen dev es: si funciona, no lo toques; y si falla, echa la culpa al navegador o al servidor. ¡Y haz como el Director Jostin, crea tus propias plataformas web desde cero! 🍷✨";
    }

    // 26. Saludos generales
    if (query.includes('hola') || query.includes('buenas') || query.includes('saludos')) {
        return "👋 <b>¡Hola! Qué gusto saludarte.</b> 😊✨<br><br>¿En qué te puedo ayudar hoy con <b>ChapAI Pro v1.2</b>? ¡Estoy listo para asistirte! 🚀";
    }

    // Fallback General con Enlace a MrTube
    return "🧠 <b>He procesado tu solicitud en los circuitos avanzados de ChapAI Pro v1.2...</b> 🍷✨<br><br>" +
           "Como asistente oficial de <b>ABG Productions™</b>, conozco al dedillo <i>El Misterio De Chicken Gun</i>, <i>Dandy’s World Show</i>, <i>Sprunki Animado</i> y la plataforma <b>MrTube</b>. ¡Pregúntame lo que quieras o visítanos en <a href='https://mrjostin87.github.io/MrTube/' target='_blank' style='color: var(--accent);'>MrTube</a>! 😉👍";
}
