const EVENTOS = {
    init() {
        this.seleccionarTipoCliente();
    },
    seleccionarTipoCliente() {
        $("body").on("change", "#filtro_cliente", (evento) => {
            const valor = $(evento.currentTarget).val();

            switch (valor) {
                case "1":
                    $("#tb_nuevo").removeClass("d-none");
                    $("#tb_entel").addClass("d-none");
                    $(".lbl-transaccion").html("Portabilidad");
                    break;
                case "2":
                    $("#tb_nuevo").addClass("d-none");
                    $("#tb_entel").removeClass("d-none");
                    $(".lbl-transaccion").html("Portabilidad y Venta Regular");
                    break;
                default:
                    $("#tb_nuevo").addClass("d-none");
                    $("#tb_entel").addClass("d-none");
            }
        });
    }
};

(() => {
    EVENTOS.init();
})();