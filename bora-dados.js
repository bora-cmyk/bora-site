/* =====================================================================
   BORA® — DADOS EDITÁVEIS (datas e disponibilidade dos tours)
   ---------------------------------------------------------------------
   👉 Edite SÓ ESTE arquivo pra mudar datas. Depois suba SÓ ele no Netlify
      (é leve, ~1 KB — você não precisa subir o site inteiro de novo).
   ===================================================================== */
window.BORA_DADOS = {

  /* ---------------------------------------------------------------
     1) SAÍDAS COM DATA CONFIRMADA (reserva aberta no site)
     Pra abrir uma nova data: copie uma linha, mude o destino,
     a data (formato ANO-MES-DIA) e quantas vagas restam.
     vagas: 0 = esgotado · abaixo de 10 mostra "Últimas X vagas"
     (deixe 10 ou mais pra NÃO mostrar contagem de urgência)
     --------------------------------------------------------------- */
  saidas: [
    { destino: 'wicklow', data: '2026-06-28', vagas: 16 }
  ],

  /* ---------------------------------------------------------------
     2) DESTINOS EM "MOSTRAR INTERESSE" (ainda sem data definida)
     Aparecem no site com um botão "Tenho interesse" — a pessoa
     deixa nome e email, recebe um obrigado, e você recebe o lead
     no bora@bora.ie. Quando você definir a data de um destino,
     é só TIRAR ele desta lista e ADICIONAR em "saidas" lá em cima.
     --------------------------------------------------------------- */
  interesse: ['galway', 'belfast']

};
