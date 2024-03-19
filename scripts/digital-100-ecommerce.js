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
                    break;
                case "2":
                    $("#tb_nuevo").addClass("d-none");
                    $("#tb_entel").removeClass("d-none");
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